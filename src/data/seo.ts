import { pageMeta, siteConfig } from "./siteConfig";

export const pageRoutes = ["/", "/location", "/eventi", "/diciottesimi", "/comunioni", "/battesimi", "/compleanni", "/feste-private", "/lauree", "/servizi", "/guide", "/guide/come-scegliere-sala-diciottesimo-napoli", "/guide/quanto-costa-diciottesimo-napoli", "/guide/buffet-o-cena-servita-diciottesimo", "/guide/checklist-diciottesimo", "/guide/come-organizzare-comunione-napoli", "/guide/quanto-prima-prenotare-sala-diciottesimo", "/guide/allestimento-diciottesimo-napoli", "/gallery", "/contatti", "/privacy-policy", "/cookie-policy"];

const routeMeta = {
  "/": pageMeta.home,
  "/location": pageMeta.location,
  "/eventi": pageMeta.eventi,
  "/diciottesimi": pageMeta.diciottesimi,
  "/comunioni": pageMeta.comunioni,
  "/battesimi": pageMeta.battesimi,
  "/compleanni": pageMeta.compleanni,
  "/feste-private": pageMeta["feste-private"],
  "/lauree": pageMeta.lauree,
  "/servizi": pageMeta.servizi,
  "/guide": pageMeta.guide,
  "/guide/come-scegliere-sala-diciottesimo-napoli": pageMeta.guideDiciottesimo,
  "/guide/quanto-costa-diciottesimo-napoli": pageMeta.guideCostoDiciottesimo,
  "/guide/buffet-o-cena-servita-diciottesimo": pageMeta.guideBuffetCena,
  "/guide/checklist-diciottesimo": pageMeta.guideChecklistDiciottesimo,
  "/guide/come-organizzare-comunione-napoli": pageMeta.guideComunione,
  "/guide/quanto-prima-prenotare-sala-diciottesimo": pageMeta.guidePrenotazioneDiciottesimo,
  "/guide/allestimento-diciottesimo-napoli": pageMeta.guideAllestimentoDiciottesimo,
  "/gallery": pageMeta.gallery,
  "/contatti": pageMeta.contatti,
} as const;

export function getPageSeo(path: string) {
  const normalized = path.replace(/\/$/, "") || "/";
  const meta = routeMeta[normalized as keyof typeof routeMeta];
  if (meta) return { ...meta, noIndex: false };
  const legal = normalized === "/privacy-policy" || normalized === "/cookie-policy";
  return {
    title: legal ? `${normalized === "/privacy-policy" ? "Privacy Policy" : "Cookie Policy"} | ZAK Eventi` : "Pagina non trovata | ZAK Eventi",
    description: legal ? "Informazioni sulla privacy e sull’utilizzo del sito ZAK Eventi." : "La pagina richiesta non è disponibile.",
    noIndex: true,
  };
}

export function getStructuredData(path: string, title: string) {
  const origin = siteConfig.siteUrl;
  const url = `${origin}${path}`;

  const organization = {
    "@type": "Organization",
    "@id": `${origin}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legal.companyName,
    url: origin,
    telephone: "+393533198020",
    vatID: `IT${siteConfig.legal.vatNumber}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Napoli 270",
      postalCode: "80022",
      addressLocality: "Arzano",
      addressRegion: "Campania",
      addressCountry: "IT",
    },
  };

  const venue = {
    "@type": ["LocalBusiness", "EventVenue"],
    "@id": `${origin}/#venue`,
    name: siteConfig.name,
    url: origin,
    telephone: "+393533198020",
    description: siteConfig.description,
    image: `${origin}${siteConfig.heroPoster}`,
    hasMap: siteConfig.contact.googleMapsUrl,
    sameAs: [siteConfig.contact.googleMapsUrl],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Napoli 270",
      postalCode: "80022",
      addressLocality: "Arzano",
      addressRegion: "Campania",
      addressCountry: "IT",
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${origin}/#website`,
    url: origin,
    name: siteConfig.name,
    inLanguage: "it-IT",
    publisher: { "@id": organization["@id"] },
  };

  const webpage = {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    inLanguage: "it-IT",
    isPartOf: { "@id": website["@id"] },
    about: { "@id": venue["@id"] },
  };

  const breadcrumbs = path === "/" ? [] : [{
    "@type": "BreadcrumbList",
    itemListElement: path.startsWith("/guide/")
      ? [
          { "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` },
          { "@type": "ListItem", position: 2, name: "Guide", item: `${origin}/guide` },
          { "@type": "ListItem", position: 3, name: title.split(" | ")[0], item: url },
        ]
      : [
          { "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` },
          { "@type": "ListItem", position: 2, name: title.split(" | ")[0], item: url },
        ],
  }];

  const article = path.startsWith("/guide/") ? [{
    "@type": "Article",
    "@id": `${url}#article`,
    headline: title.split(" | ")[0],
    mainEntityOfPage: { "@id": webpage["@id"] },
    author: { "@id": organization["@id"] },
    publisher: { "@id": organization["@id"] },
    datePublished: "2026-10-07",
    dateModified: "2026-10-07",
    image: `${origin}/images/events/xtgb3357.webp`,
    inLanguage: "it-IT",
  }] : [];

  return { "@context": "https://schema.org", "@graph": [organization, venue, website, webpage, ...article, ...breadcrumbs] };
}
