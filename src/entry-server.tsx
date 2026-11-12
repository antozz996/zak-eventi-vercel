import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";
import { preloadAllRoutes } from "./routes";
export { getPageImage, getPageSeo, getPageSocialImage, getStructuredData, pageRoutes, socialImageSize } from "./data/seo";
export { siteConfig } from "./data/siteConfig";
export { getRouteFile } from "./routes";

// renderToString è sincrono: tutte le pagine devono essere già in memoria.
await preloadAllRoutes();

export function render(path: string, search = "") {
  return renderToString(<Router ssrPath={path} ssrSearch={search}><App /></Router>);
}
