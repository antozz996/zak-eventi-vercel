import { pageMeta, siteConfig } from "./siteConfig";

export const pageRoutes = ["/", "/location", "/eventi", "/diciottesimi", "/comunioni", "/compleanni", "/feste-private", "/lauree", "/servizi", "/gallery", "/contatti", "/privacy-policy", "/cookie-policy"];

export function getPageSeo(path: string) {
  const normalized = path.replace(/\/$/, "") || "/";
  const key = normalized === "/" ? "home" : normalized.slice(1);
  if (key in pageMeta) return { ...pageMeta[key as keyof typeof pageMeta], noIndex: false };
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
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` },
      { "@type": "ListItem", position: 2, name: title.split(" | ")[0], item: url },
    ],
  }];

  return { "@context": "https://schema.org", "@graph": [organization, venue, website, webpage, ...breadcrumbs] };
}
