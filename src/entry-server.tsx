import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";
export { getPageSeo, getStructuredData, pageRoutes } from "./data/seo";
export { siteConfig } from "./data/siteConfig";

export function render(path: string, search = "") {
  return renderToString(<Router ssrPath={path} ssrSearch={search}><App /></Router>);
}
