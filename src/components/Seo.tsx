import { useEffect } from "react";
import { siteConfig } from "../data/siteConfig";
import { getPageImage, getStructuredData } from "../data/seo";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

function upsertMeta(selector: string, attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

export function Seo({ title, description, path, noIndex = false }: SeoProps) {
  useEffect(() => {
    const canonicalUrl = siteConfig.siteUrl ? `${siteConfig.siteUrl}${path}` : "";
    const socialImage = `${siteConfig.siteUrl}${getPageImage(path)}`;
    document.title = title;
    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[property="og:title"]', "property", "og:title", title);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:type"]', "property", "og:type", path.startsWith("/guide/") ? "article" : "website");
    upsertMeta('meta[property="og:locale"]', "property", "og:locale", siteConfig.locale);
    if (canonicalUrl) {
      upsertMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    }
    upsertMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    upsertMeta('meta[property="og:image"]', "property", "og:image", socialImage);
    upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", socialImage);
    upsertMeta('meta[name="robots"]', "name", "robots", noIndex ? "noindex, follow" : "index, follow, max-image-preview:large");
    let schema = document.head.querySelector<HTMLScriptElement>("#site-schema");
    if (!schema) {
      schema = document.createElement("script");
      schema.id = "site-schema";
      schema.type = "application/ld+json";
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify(getStructuredData(path, title));

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    if (canonicalUrl) canonical.href = canonicalUrl;
    else canonical.removeAttribute("href");
  }, [description, noIndex, path, title]);

  return null;
}
