import { ExternalLink } from "lucide-react";
import { Link } from "../lib/router";
import { EditorialImageBlock } from "../components/EditorialImageBlock";
import { FinalCTA } from "../components/FinalCTA";
import { EventPhoto } from "../components/EventPhoto";
import { SectionHeading } from "../components/SectionHeading";
import { Seo } from "../components/Seo";
import { eventFaqs } from "../data/faqs";
import { pageMeta, siteConfig } from "../data/siteConfig";

const eventLinks = [
  { label: "Diciottesimi", href: "/diciottesimi" },
  { label: "Compleanni", href: "/compleanni" },
  { label: "Comunioni", href: "/comunioni" },
  { label: "Battesimi", href: "/battesimi" },
  { label: "Lauree", href: "/lauree" },
  { label: "Feste private", href: "/feste-private" },
];

export function LocationPage() {
  return (
    <>
      <Seo {...pageMeta.location} path="/location" />
      <section className="page-hero page-hero--location">
        <div className="container">
          <p className="eyebrow">Location per eventi ad Arzano</p>
          <h1>Una sala per feste ad Arzano che cambia atmosfera insieme al tuo evento.</h1>
          <p>
            ZAK Eventi si trova in Via Napoli 270, Arzano (NA), nell'area nord di Napoli. Lo spazio viene
            interpretato ogni volta in base all'occasione, alla disposizione concordata e all'atmosfera desiderata.
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
          <EditorialImageBlock
            eyebrow="Dentro ZAK"
            title="Una sala in esclusiva, per una festa davvero tua."
            text="ZAK riserva la location a un solo evento per volta. La sala interna e la terrazza esterna permettono di progettare convivialità, musica e momenti speciali in funzione della formula concordata."
            mediaLabel="Vista ampia della sala"
            image="/images/events/xtgb6517.webp"
            imageAlt="Sala ZAK Eventi ad Arzano apparecchiata con sedute blu e parete vegetale"
            aspect="landscape"
          />
        </div>
      </section>

      <section className="section section--stone">
        <div className="container legal-page__content">
          <p className="eyebrow">La location in sintesi</p>
          <h2>Spazi, capienza e servizi della location.</h2>
          <p>Accogliamo fino a {siteConfig.venue.maximumGuestsDeclared} ospiti. Il numero effettivo dipende dalla disposizione e dal tipo di ricevimento, che definiamo insieme.</p>
          <ul>
            <li>Location in esclusiva per il singolo evento</li>
            <li>Sala interna e terrazza esterna</li>
            <li>Parcheggio e area fumatori</li>
            <li>Climatizzazione, impianto audio e luci, possibilità di ballare</li>
            <li>Accessi senza barriere architettoniche: parlaci di eventuali esigenze specifiche di mobilità</li>
          </ul>
          <p>La location non dispone di piscina. La visita conoscitiva è gratuita e permette di verificare personalmente spazi, percorsi e configurazione dell’evento.</p>
          <Link className="button button--dark" to="/contatti">Chiedi disponibilità</Link>
        </div>
      </section>

      <section className="section section--midnight">
        <div className="container">
          <SectionHeading
            eyebrow="Gli ambienti"
            title="Spazio da vivere, non soltanto da osservare."
            description="Sala apparecchiata, ingresso scenografico e momenti condivisi durante feste realmente svolte a ZAK."
            light
          />
          <div className="location-media-grid">
            <EventPhoto src="/images/events/xtgb2618.webp" alt="Ospiti in festa nella sala ZAK Eventi illuminata di rosso" aspect="landscape" />
            <EventPhoto src="/images/events/xtgb2834.webp" alt="Ingresso sul tappeto rosso con fontane luminose a ZAK Eventi" aspect="portrait" />
            <EventPhoto src="/images/events/xtgb6513.webp" alt="Tavoli e sedute della sala ZAK Eventi ad Arzano" aspect="square" />
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <EditorialImageBlock
            eyebrow="Personalizzazione"
            title="Lo stesso spazio. Una sensazione ogni volta diversa."
            text="Palette, allestimenti, luci e disposizione vengono immaginati in relazione all'evento. Le possibilità effettive vengono confermate durante la visita, così ciò che vedi online resta coerente con ciò che può essere realizzato."
            mediaLabel="Allestimento personalizzato"
            image="/images/events/xtgb5080.webp"
            imageAlt="Allestimento reale per comunione a ZAK Eventi con palloncini e torta"
            aspect="landscape"
            reverse
          />
        </div>
      </section>

      <section className="section section--stone">
        <div className="container">
          <SectionHeading
            eyebrow="Per quale evento?"
            title="Una location, occasioni diverse."
            description="Esplora le pagine dedicate e guarda come cambia il percorso in base al tipo di festa."
          />
          <div className="button-group">
            {eventLinks.map((item) => (
              <Link className="button button--outline-dark" to={item.href} key={item.href}>{item.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <SectionHeading
            eyebrow="Atmosfere reali"
            title="Un colore. Un modo diverso di festeggiare."
            description="Rosso e oro, oppure blu e argento: due allestimenti fotografati durante occasioni diverse."
          />
          <div className="before-after" aria-label="Due allestimenti reali di ZAK">
            <div><EventPhoto src="/images/events/xtgb3320.webp" alt="Torta con rose e palloncini rossi a ZAK Eventi" aspect="portrait" /><span>Rosso e oro</span></div>
            <div><EventPhoto src="/images/events/xtgb0819.webp" alt="Torta e palloncini blu e argento a ZAK Eventi" aspect="portrait" /><span>Blu e argento</span></div>
          </div>
          <div className="centered-action">
            <Link className="button button--dark" to="/contatti">Chiedi disponibilità</Link>
          </div>
        </div>
      </section>

      <section className="section section--stone">
        <div className="container legal-page__content">
          <p className="eyebrow">Domande frequenti</p>
          <h2>Visitare la location ZAK Eventi</h2>
          {eventFaqs["/location"].map((faq) => (
            <div key={faq.q}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
