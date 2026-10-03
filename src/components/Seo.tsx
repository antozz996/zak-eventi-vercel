import { useEffect } from "react";
import { siteConfig } from "../data/siteConfig";

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
    document.title = title;
    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[property="og:title"]', "property", "og:title", title);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:type"]', "property", "og:type", "website");
    upsertMeta('meta[property="og:locale"]', "property", "og:locale", siteConfig.locale);
    if (canonicalUrl) {
      upsertMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    }
    upsertMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    upsertMeta('meta[name="robots"]', "name", "robots", noIndex ? "noindex, nofollow" : "index, follow");

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
