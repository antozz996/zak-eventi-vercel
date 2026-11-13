import { ExternalLink, MapPin } from "lucide-react";
import { FinalCTA } from "../components/FinalCTA";
import { Seo } from "../components/Seo";
import { directionsFrom, getDirectionsUrl } from "../data/directions";
import { eventFaqs } from "../data/faqs";
import { pageMeta, siteConfig } from "../data/siteConfig";
import { Link } from "../lib/router";

const path = "/come-raggiungerci";

export function DirectionsPage() {
  return (
    <>
      <Seo {...pageMeta.comeRaggiungerci} path={path} />
      <section className="page-hero page-hero--location">
        <div className="container">
          <p className="eyebrow">Arzano · Napoli Nord</p>
          <h1>Come raggiungere ZAK Eventi da Napoli Nord.</h1>
          <p>
            Siamo in Via Napoli 270 ad Arzano, al primo piano del centro commerciale, con parcheggio. Da
            Casavatore, Casoria e Frattamaggiore si arriva in pochi minuti di auto.
          </p>
          <div className="inline-links">
            <a href={siteConfig.contact.googleMapsUrl} target="_blank" rel="noreferrer">
              Apri su Google Maps <ExternalLink aria-hidden="true" size={17} />
            </a>
            <Link to="/contatti">Chiedi disponibilità</Link>
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <div className="directions-grid">
            {directionsFrom.map((item) => (
              <article className="directions-card" key={item.town}>
                <MapPin aria-hidden="true" />
                <h2>Da {item.town}</h2>
                <p className="directions-card__distance">{item.distance}</p>
                <p>{item.time}</p>
                <a className="text-link" href={getDirectionsUrl(item.origin)} target="_blank" rel="noreferrer">
                  Apri il percorso da {item.town} <ExternalLink aria-hidden="true" size={16} />
                </a>
              </article>
            ))}
          </div>
          <p className="directions-note">
            Distanze e tempi sono indicativi e variano con il traffico: il link apre Google Maps con il percorso
            aggiornato in tempo reale.
          </p>
        </div>
      </section>

      <section className="section section--stone">
        <div className="container legal-page__content">
          <p className="eyebrow">Domande frequenti</p>
          <h2>Arrivare a ZAK Eventi</h2>
          {eventFaqs[path].map((faq) => (
            <div key={faq.q}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
          <div className="inline-links">
            <Link to="/location">Scopri la location</Link>
            <Link to="/contatti">Orari e contatti</Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
