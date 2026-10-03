import { Link } from "../lib/router";
import { EditorialImageBlock } from "../components/EditorialImageBlock";
import { FinalCTA } from "../components/FinalCTA";
import { MediaPlaceholder } from "../components/MediaPlaceholder";
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
          />
        </div>
      </section>

      <section className="section section--midnight">
        <div className="container">
          <SectionHeading
            eyebrow="Gli ambienti"
            title="Spazio per vivere, non solo da osservare."
            description="Le immagini definitive dovranno mostrare la location durante eventi reali, mantenendo sempre al centro le persone."
            light
          />
          <div className="location-media-grid">
            <MediaPlaceholder label="Sala durante la festa" aspect="landscape" />
            <MediaPlaceholder label="Ingresso e accoglienza" aspect="portrait" />
            <MediaPlaceholder label="Dettagli della location" aspect="square" />
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
            reverse
          />
        </div>
      </section>

      <section className="section section--stone">
        <div className="container">
          <SectionHeading
            eyebrow="Trasformazione dello spazio"
            title="Prima dell’ingresso. Dopo la visione."
            description="Comparazione predisposta: sarà attivata quando saranno disponibili due fotografie originali con inquadratura coerente."
          />
          <div className="before-after" aria-label="Confronto visivo prima e dopo, in attesa di immagini">
            <div><MediaPlaceholder label="Prima — spazio neutro" aspect="landscape" /><span>Prima</span></div>
            <div><MediaPlaceholder label="Dopo — spazio allestito" aspect="landscape" /><span>Dopo</span></div>
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
