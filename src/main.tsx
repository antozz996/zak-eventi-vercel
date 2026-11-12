import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { Router } from "wouter";
import App from "./App";
import { findRoute, preloadRoute } from "./routes";
import "./styles/fonts.css";
import "./styles/global.css";
import "./styles/meta-consent.css";

const root = document.getElementById("root")!;
const app = <StrictMode><Router ssrPath={window.location.pathname} ssrSearch=""><App /></Router></StrictMode>;

const start = () => {
  if (root.hasChildNodes()) hydrateRoot(root, app);
  else createRoot(root).render(app);
};

// La pagina corrente va caricata prima dell'idratazione, così il markup
// prerenderizzato resta al suo posto senza passare dal fallback.
preloadRoute(window.location.pathname).then(start, start);

// Le altre pagine si scaricano quando l'utente mostra interesse per un link interno.
const warmUp = (event: Event) => {
  const anchor = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href^="/"]') : null;
  if (!anchor) return;
  const route = findRoute(new URL(anchor.href).pathname);
  if (route) void route.preload();
};
document.addEventListener("pointerover", warmUp, { passive: true });
document.addEventListener("touchstart", warmUp, { passive: true });
document.addEventListener("focusin", warmUp);
