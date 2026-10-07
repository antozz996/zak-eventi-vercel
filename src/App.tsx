import { Route, Switch } from "wouter";
import { Layout } from "./components/Layout";
import { ContactPage } from "./pages/ContactPage";
import { EventsPage } from "./pages/EventsPage";
import { ComunioniPage, DiciottesimiPage } from "./pages/EventLandingPages";
import { CompleanniPage, FestePrivatePage, LaureePage } from "./pages/AdditionalEventLandingPages";
import { GalleryPage } from "./pages/GalleryPage";
import { HomePage } from "./pages/HomePage";
import { LegalPage } from "./pages/LegalPage";
import { LocationPage } from "./pages/LocationPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ServicesPage } from "./pages/ServicesPage";
import { DiciottesimoGuidePage, GuidesPage } from "./pages/GuidePages";

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/location" component={LocationPage} />
        <Route path="/eventi" component={EventsPage} />
        <Route path="/diciottesimi" component={DiciottesimiPage} />
        <Route path="/comunioni" component={ComunioniPage} />
        <Route path="/compleanni" component={CompleanniPage} />
        <Route path="/feste-private" component={FestePrivatePage} />
        <Route path="/lauree" component={LaureePage} />
        <Route path="/servizi" component={ServicesPage} />
        <Route path="/guide" component={GuidesPage} />
        <Route path="/guide/come-scegliere-sala-diciottesimo-napoli" component={DiciottesimoGuidePage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/contatti" component={ContactPage} />
        <Route path="/privacy-policy"><LegalPage type="privacy" /></Route>
        <Route path="/cookie-policy"><LegalPage type="cookie" /></Route>
        <Route><NotFoundPage /></Route>
      </Switch>
    </Layout>
  );
}
