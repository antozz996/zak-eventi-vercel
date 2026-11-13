import { lazy, type ComponentType } from "react";

/**
 * Ogni pagina vive in un chunk separato. Il prerender carica tutte le pagine
 * prima di renderizzare; il browser carica quella corrente prima dell'idratazione
 * e le altre quando servono (o al passaggio del puntatore su un link).
 */
function page(file: string, load: () => Promise<ComponentType>) {
  let Loaded: ComponentType | null = null;
  let pending: Promise<ComponentType> | null = null;
  const preload = () => (pending ??= load().then((component) => (Loaded = component)));
  const Lazy = lazy(() => preload().then((component) => ({ default: component })));

  function Page() {
    // Se il modulo è già in memoria si renderizza subito, senza passare da Suspense.
    return Loaded ? <Loaded /> : <Lazy />;
  }

  return { file, Page, preload };
}

const legalPage = (type: "privacy" | "cookie") => () =>
  import("./pages/LegalPage").then(({ LegalPage }) => {
    const Legal = () => <LegalPage type={type} />;
    return Legal;
  });

export const routes = [
  { path: "/", ...page("src/pages/HomePage.tsx", () => import("./pages/HomePage").then((m) => m.HomePage)) },
  { path: "/location", ...page("src/pages/LocationPage.tsx", () => import("./pages/LocationPage").then((m) => m.LocationPage)) },
  { path: "/eventi", ...page("src/pages/EventsPage.tsx", () => import("./pages/EventsPage").then((m) => m.EventsPage)) },
  { path: "/diciottesimi", ...page("src/pages/EventLandingPages.tsx", () => import("./pages/EventLandingPages").then((m) => m.DiciottesimiPage)) },
  { path: "/comunioni", ...page("src/pages/EventLandingPages.tsx", () => import("./pages/EventLandingPages").then((m) => m.ComunioniPage)) },
  { path: "/battesimi", ...page("src/pages/AdditionalEventLandingPages.tsx", () => import("./pages/AdditionalEventLandingPages").then((m) => m.BattesimiPage)) },
  { path: "/compleanni", ...page("src/pages/AdditionalEventLandingPages.tsx", () => import("./pages/AdditionalEventLandingPages").then((m) => m.CompleanniPage)) },
  { path: "/feste-private", ...page("src/pages/AdditionalEventLandingPages.tsx", () => import("./pages/AdditionalEventLandingPages").then((m) => m.FestePrivatePage)) },
  { path: "/lauree", ...page("src/pages/AdditionalEventLandingPages.tsx", () => import("./pages/AdditionalEventLandingPages").then((m) => m.LaureePage)) },
  { path: "/servizi", ...page("src/pages/ServicesPage.tsx", () => import("./pages/ServicesPage").then((m) => m.ServicesPage)) },
  { path: "/perche-scegliere-zak", ...page("src/pages/WhyZakPage.tsx", () => import("./pages/WhyZakPage").then((m) => m.WhyZakPage)) },
  { path: "/guide", ...page("src/pages/GuidePages.tsx", () => import("./pages/GuidePages").then((m) => m.GuidesPage)) },
  { path: "/guide/come-scegliere-sala-diciottesimo-napoli", ...page("src/pages/GuidePages.tsx", () => import("./pages/GuidePages").then((m) => m.DiciottesimoGuidePage)) },
  { path: "/guide/quanto-costa-diciottesimo-napoli", ...page("src/pages/GuidePages.tsx", () => import("./pages/GuidePages").then((m) => m.CostoDiciottesimoGuidePage)) },
  { path: "/guide/buffet-o-cena-servita-diciottesimo", ...page("src/pages/MoreGuidePages.tsx", () => import("./pages/MoreGuidePages").then((m) => m.BuffetVsCenaGuidePage)) },
  { path: "/guide/checklist-diciottesimo", ...page("src/pages/MoreGuidePages.tsx", () => import("./pages/MoreGuidePages").then((m) => m.ChecklistDiciottesimoGuidePage)) },
  { path: "/guide/come-organizzare-comunione-napoli", ...page("src/pages/MoreGuidePages.tsx", () => import("./pages/MoreGuidePages").then((m) => m.ComunioneGuidePage)) },
  { path: "/guide/quanto-prima-prenotare-sala-diciottesimo", ...page("src/pages/MoreGuidePages.tsx", () => import("./pages/MoreGuidePages").then((m) => m.PrenotazioneDiciottesimoGuidePage)) },
  { path: "/guide/allestimento-diciottesimo-napoli", ...page("src/pages/MoreGuidePages.tsx", () => import("./pages/MoreGuidePages").then((m) => m.AllestimentoDiciottesimoGuidePage)) },
  { path: "/gallery", ...page("src/pages/GalleryPage.tsx", () => import("./pages/GalleryPage").then((m) => m.GalleryPage)) },
  { path: "/contatti", ...page("src/pages/ContactPage.tsx", () => import("./pages/ContactPage").then((m) => m.ContactPage)) },
  { path: "/come-raggiungerci", ...page("src/pages/DirectionsPage.tsx", () => import("./pages/DirectionsPage").then((m) => m.DirectionsPage)) },
  { path: "/privacy-policy", ...page("src/pages/LegalPage.tsx", legalPage("privacy")) },
  { path: "/cookie-policy", ...page("src/pages/LegalPage.tsx", legalPage("cookie")) },
];

export const notFoundRoute = page("src/pages/NotFoundPage.tsx", () => import("./pages/NotFoundPage").then((m) => m.NotFoundPage));

const normalize = (pathname: string) => pathname.replace(/\/+$/, "") || "/";

export function findRoute(pathname: string) {
  const path = normalize(pathname);
  return routes.find((route) => route.path === path);
}

/** File sorgente della pagina: serve al prerender per il `modulepreload` del chunk giusto. */
export function getRouteFile(pathname: string) {
  return (findRoute(pathname) ?? notFoundRoute).file;
}

/** Carica la pagina da mostrare a questo indirizzo (la 404 se non esiste). */
export function preloadRoute(pathname: string) {
  return (findRoute(pathname) ?? notFoundRoute).preload();
}

export function preloadAllRoutes() {
  return Promise.all([...routes, notFoundRoute].map((route) => route.preload()));
}
