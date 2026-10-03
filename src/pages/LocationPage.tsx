import { Link } from "../lib/router";
import { EditorialImageBlock } from "../components/EditorialImageBlock";
import { FinalCTA } from "../components/FinalCTA";
import { EventPhoto } from "../components/EventPhoto";
import { SectionHeading } from "../components/SectionHeading";
import { Seo } from "../components/Seo";
import { pageMeta } from "../data/siteConfig";

export function LocationPage() {
  return (
    <>
      <Seo {...pageMeta.location} path="/location" />
      <section className="page-hero page-hero--location">
        <div className="container">
          <p className="eyebrow">La location</p>
          <h1>Uno spazio, infinite atmosfere.</h1>
          <p>Una scena che cambia insieme alle persone, all’occasione e al modo in cui vuoi viverla.</p>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <EditorialImageBlock
            eyebrow="Dentro ZAK"
            title="La sala non è il punto di arrivo. È l’inizio della trasformazione."
            text="Gli ambienti diventano parte del racconto: accolgono, sorprendono e accompagnano ogni passaggio, dall’ingresso fino al momento finale."
            mediaLabel="Vista ampia della sala"
            image="/images/events/xtgb6517.webp"
            imageAlt="Sala ZAK apparecchiata con sedute blu e parete vegetale"
            aspect="landscape"
          />
        </div>
      </section>

      <section className="section section--midnight">
        <div className="container">
          <SectionHeading
            eyebrow="Gli ambienti"
            title="Spazio per vivere, non solo da osservare."
            description="La sala apparecchiata, l’ingresso e i momenti condivisi durante una festa."
            light
          />
          <div className="location-media-grid">
            <EventPhoto src="/images/events/xtgb2618.webp" alt="Ospiti in festa nella sala ZAK illuminata di rosso" aspect="landscape" />
            <EventPhoto src="/images/events/xtgb2834.webp" alt="Ingresso sul tappeto rosso con fontane luminose" aspect="portrait" />
            <EventPhoto src="/images/events/xtgb6513.webp" alt="Tavoli e sedute della sala ZAK" aspect="square" />
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <EditorialImageBlock
            eyebrow="Personalizzazione"
            title="Lo stesso spazio. Una sensazione ogni volta diversa."
            text="Palette, allestimenti, luci e disposizione vengono immaginati in relazione all’evento. Le possibilità effettive saranno confermate durante la visita."
            mediaLabel="Allestimento personalizzato"
            image="/images/events/xtgb5080.webp"
            imageAlt="Allestimento per comunione con palloncini e torta"
            aspect="landscape"
            reverse
          />
        </div>
      </section>

      <section className="section section--stone">
        <div className="container">
          <SectionHeading
            eyebrow="Atmosfere diverse"
            title="Un colore. Un modo diverso di festeggiare."
            description="Rosso e oro, oppure blu e argento: due allestimenti reali per occasioni diverse."
          />
          <div className="before-after" aria-label="Due allestimenti reali di ZAK">
            <div><EventPhoto src="/images/events/xtgb3320.webp" alt="Torta con rose e palloncini rossi" aspect="portrait" /><span>Rosso e oro</span></div>
            <div><EventPhoto src="/images/events/xtgb0819.webp" alt="Torta e palloncini blu e argento" aspect="portrait" /><span>Blu e argento</span></div>
          </div>
          <div className="centered-action">
            <Link className="button button--dark" to="/contatti">Prenota una visita</Link>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
