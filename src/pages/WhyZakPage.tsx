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
            description="Questi non sono slogan scelti dal marketing: sono i temi ricorrenti che emergono dai feedback pubblici dei clienti."
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
            title="Leggi direttamente le recensioni del profilo ufficiale."
            description="Quando la Google Places API è configurata, questa sezione mostra rating e recensioni dal profilo Google Maps ufficiale di ZAK Eventi."
          />
          <GoogleReviews />
        </div>
      </section>

      <section className="section section--stone">
        <div className="container">
          <div className="facebook-proof">
            <Facebook aria-hidden="true" />
            <div>
              <p className="eyebrow">Facebook</p>
              <h2>Le raccomandazioni Facebook entreranno nella stessa pagina.</h2>
              <p>
                Per rispettare la fonte, mostreremo solo recensioni e raccomandazioni recuperate dalla pagina
                Facebook ufficiale di ZAK. Non attribuiamo a Facebook testi provenienti da aggregatori.
              </p>
              {siteConfig.social.facebook ? (
                <a className="button button--outline-dark" href={siteConfig.social.facebook} target="_blank" rel="noreferrer">
                  Apri la pagina Facebook
                </a>
              ) : (
                <p className="form-caption">
                  Collegamento Facebook ufficiale da completare prima della pubblicazione delle relative recensioni.
                </p>
              )}
            </div>
          </div>
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
