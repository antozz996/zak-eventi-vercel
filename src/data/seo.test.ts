import { describe, expect, it } from "vitest";
import { findRoute, getRouteFile, routes } from "../routes";
import { eventFaqs } from "./faqs";
import { getPageSeo, getPageSocialImage, getStructuredData, pageRoutes } from "./seo";
import { navigation, siteConfig } from "./siteConfig";

type SchemaNode = Record<string, unknown> & { "@type": string | string[] };

function graph(path: string) {
  return getStructuredData(path, getPageSeo(path).title)["@graph"] as SchemaNode[];
}

const hasType = (node: SchemaNode, type: string) => [node["@type"]].flat().includes(type);

describe("pagine e routing", () => {
  it("ogni pagina prerenderizzata ha una route, e viceversa", () => {
    expect(routes.map((route) => route.path).sort()).toEqual([...pageRoutes].sort());
  });

  it("ogni voce del menu porta a una pagina esistente", () => {
    for (const item of navigation) expect(findRoute(item.href), item.href).toBeDefined();
  });

  it("ignora lo slash finale e manda gli indirizzi sconosciuti alla 404", () => {
    expect(findRoute("/contatti/")?.path).toBe("/contatti");
    expect(findRoute("/non-esiste")).toBeUndefined();
    expect(getRouteFile("/non-esiste")).toBe("src/pages/NotFoundPage.tsx");
  });
});

describe("meta delle pagine", () => {
  it("titoli unici e descrizioni presenti", () => {
    const titles = pageRoutes.map((path) => getPageSeo(path).title);
    expect(new Set(titles).size).toBe(titles.length);
    for (const path of pageRoutes) expect(getPageSeo(path).description.length, path).toBeGreaterThan(20);
  });

  it("solo le pagine legali e la 404 sono escluse dall'indicizzazione", () => {
    const noIndex = pageRoutes.filter((path) => getPageSeo(path).noIndex);
    expect(noIndex.sort()).toEqual(["/cookie-policy", "/privacy-policy"]);
    expect(getPageSeo("/non-esiste").noIndex).toBe(true);
  });

  it("l'anteprima di condivisione è un JPG nella cartella dedicata", () => {
    for (const path of pageRoutes) expect(getPageSocialImage(path), path).toMatch(/^\/images\/og\/[a-z0-9-]+\.jpg$/);
  });
});

describe("dati strutturati", () => {
  it("la sede ha indirizzo, coordinate, orari e profili coerenti con siteConfig", () => {
    const venue = graph("/").find((node) => hasType(node, "LocalBusiness"));
    expect(venue).toBeDefined();
    expect(venue).toMatchObject({
      geo: { latitude: Number(siteConfig.contact.geo.latitude), longitude: Number(siteConfig.contact.geo.longitude) },
      address: { addressLocality: "Arzano", postalCode: "80022" },
    });
    expect(venue?.openingHoursSpecification).toHaveLength(siteConfig.contact.openingHoursSpecification.length);
    expect(venue?.sameAs).toEqual(expect.arrayContaining([siteConfig.social.instagram, siteConfig.social.facebook]));
  });

  it("non dichiara mai una valutazione aggregata auto-assegnata", () => {
    for (const path of pageRoutes) expect(JSON.stringify(graph(path)), path).not.toContain("aggregateRating");
  });

  it("FAQPage compare solo dove esistono domande, con lo stesso testo", () => {
    for (const path of pageRoutes) {
      const faqPage = graph(path).find((node) => hasType(node, "FAQPage"));
      const faqs = eventFaqs[path];
      if (!faqs) {
        expect(faqPage, path).toBeUndefined();
        continue;
      }
      const questions = (faqPage?.mainEntity as Array<{ name: string; acceptedAnswer: { text: string } }>).map((q) => ({ q: q.name, a: q.acceptedAnswer.text }));
      expect(questions, path).toEqual(faqs);
    }
  });

  it("le pagine interne hanno il breadcrumb, la home no", () => {
    expect(graph("/").some((node) => hasType(node, "BreadcrumbList"))).toBe(false);
    expect(graph("/guide/checklist-diciottesimo").some((node) => hasType(node, "BreadcrumbList"))).toBe(true);
  });
});
