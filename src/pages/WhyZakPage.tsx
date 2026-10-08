import {
  BadgeCheck,
  Facebook,
  HeartHandshake,
  PartyPopper,
  Sparkles,
  UtensilsCrossed,
  UsersRound,
} from "lucide-react";
import { Link } from "../lib/router";
import { EventPhoto } from "../components/EventPhoto";
import { FinalCTA } from "../components/FinalCTA";
import { GoogleReviews } from "../components/GoogleReviews";
import { SectionHeading } from "../components/SectionHeading";
import { Seo } from "../components/Seo";
import { pageMeta, siteConfig } from "../data/siteConfig";

const themes = [
  {
    icon: HeartHandshake,
    title: "Accoglienza e disponibilità",
    text: "Nelle recensioni ricorrono spesso cordialità, gentilezza e disponibilità dello staff prima e durante la festa.",
  },
  {
    icon: BadgeCheck,
    title: "Organizzazione",
    text: "Più clienti raccontano eventi seguiti con attenzione, dalla preparazione fino ai momenti principali della serata.",
  },
  {
    icon: UtensilsCrossed,
    title: "Food e abbondanza",
    text: "Qualità del cibo, varietà e porzioni sono tra gli aspetti più citati nei feedback positivi.",
  },
  {
    icon: PartyPopper,
    title: "Atmosfera e divertimento",
    text: "Musica, animazione e ritmo della festa vengono spesso ricordati come parte decisiva dell'esperienza.",
  },
  {
    icon: Sparkles,
    title: "Location e allestimento",
    text: "Gli ospiti parlano frequentemente di una sala curata, atmosfera accogliente e allestimenti capaci di caratterizzare l'evento.",
  },
  {
    icon: UsersRound,
    title: "Essere seguiti",
    text: "Uno dei segnali più forti è la sensazione di non essere lasciati soli: diversi clienti raccontano di essere stati accompagnati nelle varie fasi dell'evento.",
  },
];


const facebookReviews = [
  {
    author: "Lucia Di Vaio",
    date: "27 lug",
    event: "Festa di compleanno",
    excerpt: "La location bellissima, cibo ottimo e freschissimo... staff, ragazzi meravigliosi che fanno il proprio lavoro con amore e dedizione.",
  },
  {
    author: "Giovanni Prisco",
    date: "21 giu",
    event: "30° compleanno",
    excerpt: "Qualità del cibo top, prodotti freschi fatti in giornata... pulizia del locale eccellente e staff sempre educato e disponibile.",
  },
  {
    author: "Rossana Tutini",
    date: "17 giu",
    event: "Diciottesimo",
    excerpt: "Un servizio impeccabile, uno staff meraviglioso, per non parlare del buffet stratosferico.",
  },
  {
    author: "Gigi Ilbullo",
    date: "1 giu",
    event: "Battesimo",
    excerpt: "Camerieri e staff impeccabili... accoglienza top e, per poi parlare del mangiare, direi speciale.",
  },
  {
    author: "Angela Ferriero",
    date: "20 mag",
    event: "Evento privato",
    excerpt: "Grande umanità e professionalità... si mangia benissimo, cibo ottimo tutto fresco, e anche il beverage tutto curato nei minimi particolari.",
  },
  {
    author: "Giuseppe Caiazza",
    date: "18 mag",
    event: "40° compleanno",
    excerpt: "Personale eccellente, ottimo cibo, tutto curato nei minimi dettagli tra cui DJ, fotografo e allestimento della sala.",
  },
  {
    author: "Martyna Gargiulo",
    date: "16 mag",
    event: "Matrimonio",
    excerpt: "Il cibo tutto buono, sala stupenda... Luca e Francesco educati ed accoglienti, hanno esaudito tutte le mie richieste.",
  },
  {
    author: "Marianna Palladino",
    date: "9 mar",
    event: "Diciottesimo",
    excerpt: "Una festa a sorpresa riuscitissima, cibo ottimo, personale professionale ed attento. Rapporto qualità prezzo super.",
  },
  {
    author: "Raffaele Panico",
    date: "8 dic 2025",
    event: "Evento con menu senza glutine",
    excerpt: "Sono celiaco: tutto il menù senza glutine dall'antipasto al dolce, veramente ottimo.",
  },
  {
    author: "Chiara De Fenza",
    date: "15 set 2025",
    event: "Diciottesimo",
    excerpt: "Allestimento ricco e personalizzato... cibo ottimo, tutto fresco e in grandi quantità. Personale, fotografo, DJ e speaker gentilissimi.",
  },
  {
    author: "Patrizia Manna",
    date: "16 dic 2025",
    event: "Battesimo",
    excerpt: "Organizzazione curata nei minimi dettagli... cibo ottimo e abbondante, staff gentile, disponibile e sempre attento.",
  },
  {
    author: "Antonio Romano",
    date: "13 dic 2025",
    event: "30° compleanno",
    excerpt: "Evento organizzato nei minimi dettagli... servizio e gestione impeccabili.",
  },
];

const proofPoints = [
  {
    eyebrow: "Diciottesimi",
    title: "Quando la festa supera le aspettative.",
    text: "Le recensioni dei diciottesimi citano con frequenza organizzazione, staff, cucina, DJ e animazione come elementi che lavorano insieme.",
    image: "/images/events/xtgb3357.webp",
    alt: "Ingresso durante un diciottesimo reale a ZAK Eventi",
    href: "/diciottesimi",
  },
  {
    eyebrow: "Lauree",
    title: "Quando sentirsi seguiti fa la differenza.",
    text: "Tra i feedback pubblici compare anche una festa di laurea descritta come seguita in tutte le fasi, con apprezzamenti per personale, menu e atmosfera.",
    image: "/images/events/xtgb9908.webp",
    alt: "Brindisi di gruppo durante una festa reale a ZAK Eventi",
    href: "/lauree",
  },
  {
    eyebrow: "Cerimonie e compleanni",
    title: "Quando cura e accoglienza diventano parte del ricordo.",
    text: "Nei feedback su compleanni e cerimonie tornano spesso gentilezza, servizio, allestimento e qualità del cibo.",
    image: "/images/events/xtgb6585.webp",
    alt: "Famiglia durante una cerimonia reale a ZAK Eventi",
    href: "/eventi",
  },
];

export function WhyZakPage() {
  return (
    <>
      <Seo {...pageMeta.percheZak} path="/perche-scegliere-zak" />

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Perché scegliere ZAK</p>
          <h1>Non vogliamo dirtelo soltanto noi. Partiamo da quello che raccontano gli ospiti.</h1>
          <p>
            Le recensioni aiutano a capire cosa resta davvero dopo una festa: organizzazione, accoglienza,
            qualità del food, atmosfera, allestimento e la sensazione di essere seguiti.
          </p>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <SectionHeading
            eyebrow="I temi che tornano"
            title="Se persone diverse raccontano le stesse cose, per noi è un segnale importante."
            description="Questi non sono slogan scelti dal marketing: sono i temi ricorrenti che emergono dalle recensioni Google e dalle raccomandazioni Facebook dei clienti."
          />
          <div className="trust-theme-grid">
            {themes.map(({ icon: Icon, title, text }) => (
              <article className="trust-theme-card" key={title}>
                <Icon aria-hidden="true" />
                <h2>{title}</h2>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--midnight">
        <div className="container">
          <SectionHeading
            eyebrow="Eventi diversi, segnali ricorrenti"
            title="La prova sociale ha più valore quando arriva da occasioni diverse."
            description="Diciottesimi, lauree, compleanni e cerimonie raccontano esperienze differenti ma con alcuni punti in comune."
            light
          />

          <div className="trust-proof-list">
            {proofPoints.map((item, index) => (
              <article className={`event-detail ${index % 2 ? "event-detail--reverse" : ""}`} key={item.title}>
                <EventPhoto src={item.image} alt={item.alt} aspect="landscape" />
                <div className="event-detail__content">
                  <p className="eyebrow">{item.eyebrow}</p>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                  <Link className="text-link" to={item.href}>Scopri questo tipo di evento</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <SectionHeading
            eyebrow="Google"
            title="Le recensioni Google, direttamente dal profilo ufficiale."
            description="Quando la Google Places API è configurata, questa sezione mostra rating e recensioni dal profilo Google Maps ufficiale di ZAK Eventi."
          />
          <GoogleReviews />
        </div>
      </section>

      <section className="section section--stone">
        <div className="container">
          <div className="facebook-proof facebook-proof--summary">
            <Facebook aria-hidden="true" />
            <div>
              <p className="eyebrow">Facebook · Raccomandazioni</p>
              <h2>100% valutazioni positive su 381 recensioni.</h2>
              <p>
                Dato verificato dagli screenshot della sezione Recensioni Facebook di ZAK Eventi ricevuti
                l'8 ottobre 2026. Non è un contatore live: verrà aggiornato quando avremo nuovamente accesso diretto alla pagina.
              </p>
              {siteConfig.social.facebook && (
                <a className="button button--outline-dark" href={siteConfig.social.facebook} target="_blank" rel="noreferrer">
                  Apri la pagina Facebook
                </a>
              )}
            </div>
          </div>

          <div className="facebook-review-grid">
            {facebookReviews.map((review) => (
              <article className="facebook-review-card" key={`${review.author}-${review.date}`}>
                <div className="facebook-review-card__source">
                  <Facebook aria-hidden="true" />
                  <span>Facebook</span>
                </div>
                <h3>{review.author}</h3>
                <p className="facebook-review-card__meta">{review.event} · {review.date}</p>
                <blockquote>“{review.excerpt}”</blockquote>
                <p className="facebook-review-card__recommendation">Consiglia ZAK Eventi</p>
              </article>
            ))}
          </div>

          <p className="google-reviews__disclosure">
            Estratti trascritti dalle raccomandazioni Facebook mostrate negli screenshot forniti. Testi abbreviati
            solo per lunghezza, senza modificarne il significato.
          </p>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container legal-page__content">
          <p className="eyebrow">Trasparenza</p>
          <h2>Le recensioni non vengono riscritte per farci sembrare perfetti.</h2>
          <p>
            Usiamo i feedback per capire quali aspetti i clienti apprezzano di più e quali aree meritano attenzione.
            Quando mostriamo un testo attribuito a Google o Facebook, la fonte deve essere verificabile.
          </p>

          <h3>Perché questa pagina esiste?</h3>
          <p>
            Per aiutarti a confrontare ZAK con altre location partendo non soltanto dalle fotografie, ma da ciò
            che raccontano persone che hanno già organizzato e vissuto un evento qui.
          </p>

          <div className="button-group">
            <Link className="button button--dark" to="/location">Vieni a vedere ZAK</Link>
            <Link className="button button--outline-dark" to="/contatti">Verifica la tua data</Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
