import { pageMeta, siteConfig } from "./siteConfig";

export const pageRoutes = ["/", "/location", "/eventi", "/diciottesimi", "/comunioni", "/battesimi", "/compleanni", "/feste-private", "/lauree", "/servizi", "/perche-scegliere-zak", "/guide", "/guide/come-scegliere-sala-diciottesimo-napoli", "/guide/quanto-costa-diciottesimo-napoli", "/guide/buffet-o-cena-servita-diciottesimo", "/guide/checklist-diciottesimo", "/guide/come-organizzare-comunione-napoli", "/guide/quanto-prima-prenotare-sala-diciottesimo", "/guide/allestimento-diciottesimo-napoli", "/gallery", "/contatti", "/privacy-policy", "/cookie-policy"];

const pageImages: Record<string, string> = {
  "/": "/images/events/ingresso-abito-blu.webp",
  "/location": "/images/events/xtgb6517.webp",
  "/eventi": "/images/events/xtgb2618.webp",
  "/diciottesimi": "/images/events/xtgb3357.webp",
  "/comunioni": "/images/events/xtgb6585.webp",
  "/battesimi": "/images/events/xtgb6585.webp",
  "/compleanni": "/images/events/xtgb3320.webp",
  "/feste-private": "/images/events/xtgb2648.webp",
  "/lauree": "/images/events/xtgb9908.webp",
  "/servizi": "/images/events/xtgb5080.webp",
  "/perche-scegliere-zak": "/images/events/xtgb2618.webp",
  "/guide": "/images/events/xtgb3357.webp",
  "/gallery": "/images/events/xtgb2618.webp",
  "/contatti": "/images/events/xtgb6517.webp",
};

const guideImages: Record<string, string> = {
  "/guide/come-scegliere-sala-diciottesimo-napoli": "/images/events/xtgb3357.webp",
  "/guide/quanto-costa-diciottesimo-napoli": "/images/events/xtgb3531.webp",
  "/guide/buffet-o-cena-servita-diciottesimo": "/images/events/xtgb6517.webp",
  "/guide/checklist-diciottesimo": "/images/events/xtgb1140.webp",
  "/guide/come-organizzare-comunione-napoli": "/images/events/xtgb5080.webp",
  "/guide/quanto-prima-prenotare-sala-diciottesimo": "/images/events/xtgb2834.webp",
  "/guide/allestimento-diciottesimo-napoli": "/images/events/xtgb3529.webp",
};

export function getPageImage(path: string) {
  return guideImages[path] ?? pageImages[path] ?? siteConfig.heroPoster;
}

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
  "/perche-scegliere-zak": pageMeta.percheZak,
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
    logo: { "@type": "ImageObject", url: `${origin}/logos/zak-logo-oro.png`, width: 900, height: 524 },
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
    logo: `${origin}/logos/zak-logo-oro.png`,
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
    dateModified: [
      "/guide/come-scegliere-sala-diciottesimo-napoli",
      "/guide/buffet-o-cena-servita-diciottesimo",
      "/guide/come-organizzare-comunione-napoli",
      "/guide/quanto-prima-prenotare-sala-diciottesimo",
    ].includes(path) ? "2026-10-08" : "2026-10-07",
    image: `${origin}${getPageImage(path)}`,
    articleSection: path.includes("comunione") ? "Comunioni" : "Diciottesimi",
    inLanguage: "it-IT",
  }] : [];

  // Servizi realmente offerti; non creiamo prezzi, Offer o eventi fittizi.
  const serviceNames: Record<string, string> = {
    "/compleanni": "Location in esclusiva per feste di compleanno",
    "/diciottesimi": "Organizzazione di diciottesimi in esclusiva",
    "/comunioni": "Ricevimenti per comunioni",
    "/battesimi": "Ricevimenti per battesimi",
    "/feste-private": "Location per feste private",
    "/lauree": "Location per feste di laurea",
  };
  const service = serviceNames[path] ? [{
    "@type": "Service",
    "@id": `${url}#service`,
    name: serviceNames[path],
    serviceType: serviceNames[path],
    provider: { "@id": venue["@id"] },
    areaServed: { "@type": "City", name: "Arzano" },
    url,
  }] : [];

  return { "@context": "https://schema.org", "@graph": [organization, venue, website, webpage, ...service, ...article, ...breadcrumbs] };
}
