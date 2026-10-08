import { ArrowRight } from "lucide-react";
import { Link } from "../lib/router";
import { EditorialImageBlock } from "../components/EditorialImageBlock";
import { EventCard } from "../components/EventCard";
import { ExperienceTimeline } from "../components/ExperienceTimeline";
import { FinalCTA } from "../components/FinalCTA";
import { GalleryGrid } from "../components/Gallery";
import { GoogleReviews } from "../components/GoogleReviews";
import { HeroVideo } from "../components/HeroVideo";
import { EventPhoto } from "../components/EventPhoto";
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
            title="La tua festa, la nostra cura. In esclusiva."
            text="A ZAK Eventi, ad Arzano, la location è riservata al tuo evento. Cucina curata, rapporto umano, allestimenti personalizzabili e professionisti della musica e della fotografia accompagnano ogni festa, dalla prima idea al momento della torta."
            mediaLabel="Momento vissuto a ZAK"
            image="/images/events/xtgb0046.webp"
            imageAlt="Abbraccio di gruppo durante una festa ZAK"
            aspect="landscape"
          >
            <Link className="text-link" to="/compleanni">Scopri i compleanni <ArrowRight aria-hidden="true" size={17} /></Link>
            <Link className="text-link" to="/location">Dentro la location <ArrowRight aria-hidden="true" size={17} /></Link>
          </EditorialImageBlock>
        </div>
      </section>

      <section className="section section--midnight">
        <div className="container">
          <SectionHeading
            eyebrow="Ogni occasione, una scena diversa"
            title="Il tuo momento. Con la sua atmosfera."
            description="Compleanni di tutte le età, diciottesimi e cerimonie: una location in esclusiva e una festa progettata intorno alle persone."
            light
          />
          <div className="event-grid">
            {[...eventTypes].sort((a, b) => Number(b.slug === "compleanni") - Number(a.slug === "compleanni")).map((event) => <EventCard event={event} key={event.slug} />)}
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
        <EventPhoto src="/images/events/xtgb3357.webp" alt="Ingresso sul tappeto rosso tra fontane luminose" aspect="hero" />
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
            description="Dalla cucina agli allestimenti e all’intrattenimento: servizi reali con inclusioni, personalizzazioni ed extra definiti nel preventivo."
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
            description="Ingressi, brindisi e abbracci vissuti durante le feste ZAK."
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
          <div className="centered-action">
            <Link className="button button--outline-dark" to="/perche-scegliere-zak">
              Perché scegliere ZAK
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
