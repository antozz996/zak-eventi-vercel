import { ArrowRight } from "lucide-react";
import { Link } from "../lib/router";
import { EditorialImageBlock } from "../components/EditorialImageBlock";
import { EventCard } from "../components/EventCard";
import { ExperienceTimeline } from "../components/ExperienceTimeline";
import { FinalCTA } from "../components/FinalCTA";
import { GalleryGrid } from "../components/Gallery";
import { GoogleReviews } from "../components/GoogleReviews";
import { HeroVideo } from "../components/HeroVideo";
import { MediaPlaceholder } from "../components/MediaPlaceholder";
import { SectionHeading } from "../components/SectionHeading";
import { Seo } from "../components/Seo";
import { ServiceCard } from "../components/ServiceCard";
import { eventTypes, pageMeta, services } from "../data/siteConfig";

export function HomePage() {
  return (
    <>
      <Seo {...pageMeta.home} path="/" />
      <HeroVideo />

      <section id="intro" className="section section--ivory">
        <div className="container">
          <EditorialImageBlock
            eyebrow="La nostra idea di festa"
            title="Non organizziamo semplicemente feste. Creiamo ricordi che entrano in scena."
            text="Dall’idea iniziale all’ultimo brindisi, ZAK costruisce ogni evento intorno alle persone, alle emozioni e ai dettagli che lo rendono unico."
            mediaLabel="Momento vissuto a ZAK"
          >
            <Link className="text-link" to="/location">
              Dentro la location <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </EditorialImageBlock>
        </div>
      </section>

      <section className="section section--midnight">
        <div className="container">
          <SectionHeading
            eyebrow="Ogni occasione, una scena diversa"
            title="Il tuo momento. Con la sua atmosfera."
            description="Dall’eleganza di una cerimonia all’energia di un diciottesimo: il progetto comincia sempre dalla persona."
            light
          />
          <div className="event-grid">
            {eventTypes.map((event) => <EventCard event={event} key={event.slug} />)}
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <SectionHeading
            eyebrow="L’esperienza ZAK"
            title="Dal primo incontro all’ultimo applauso."
            description="Una sequenza pensata per accompagnare l’evento dalla prima idea fino al momento che resta."
          />
          <ExperienceTimeline />
        </div>
      </section>

      <section className="signature-section">
        <MediaPlaceholder label="Ingresso sul tappeto rosso e fontane luminose" aspect="hero" />
        <div className="signature-section__overlay" />
        <div className="container signature-section__content">
          <p className="eyebrow">La firma ZAK</p>
          <h2>Il momento in cui tutti gli occhi sono su di te.</h2>
          <p>L’ingresso non è soltanto l’inizio della festa. È il momento in cui il tuo evento entra davvero in scena.</p>
          <Link className="button button--gold" to="/contatti">Immagina il tuo evento</Link>
        </div>
      </section>

      <section className="section section--stone">
        <div className="container">
          <SectionHeading
            eyebrow="Un progetto, diverse possibilità"
            title="Tutto ciò che può dare forma alla festa."
            description="Servizi disponibili in base alla formula scelta. La disponibilità effettiva viene definita durante l’appuntamento."
          />
          <div className="service-grid">
            {services.map((service) => <ServiceCard service={service} key={service.title} />)}
          </div>
          <div className="centered-action">
            <Link className="button button--outline-dark" to="/servizi">Scopri il percorso</Link>
          </div>
        </div>
      </section>

      <section className="section section--obsidian">
        <div className="container">
          <SectionHeading
            eyebrow="Momenti reali"
            title="Una festa si vede. Un’emozione si riconosce."
            description="La gallery è pronta per accogliere fotografie e brevi video originali degli eventi ZAK."
            light
          />
          <GalleryGrid limit={6} />
          <div className="centered-action">
            <Link className="button button--ghost" to="/gallery">Esplora la gallery</Link>
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <SectionHeading
            eyebrow="Esperienze raccontate"
            title="Le loro parole, dopo la festa."
            description="Valutazioni e recensioni collegate al profilo Google ufficiale di ZAK Eventi."
          />
          <GoogleReviews />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
