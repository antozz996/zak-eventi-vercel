import { ArrowUpRight } from "lucide-react";
import { trackMetaContact } from "../lib/metaPixel";
import { Link } from "../lib/router";
import { EventPhoto } from "../components/EventPhoto";
import { FinalCTA } from "../components/FinalCTA";
import { Seo } from "../components/Seo";
import { pageMeta } from "../data/siteConfig";
import { getEventWhatsAppMessage, getWhatsAppLink } from "../utils/whatsapp";

type LandingConfig = {
  meta: { title: string; description: string };
  path: string;
  eyebrow: string;
  h1: string;
  intro: string;
  eventName: string;
  galleryFilter: string;
  image: string;
  imageAlt: string;
  image2: string;
  imageAlt2: string;
  sectionTitle: string;
  sectionText: string;
  steps: Array<{ title: string; text: string }>;
  secondTitle: string;
  secondText: string;
  faqTitle: string;
  faqs: Array<{ q: string; a: string }>;
};

function LandingActions({ eventName, galleryFilter }: { eventName: string; galleryFilter: string }) {
  const whatsapp = getWhatsAppLink(getEventWhatsAppMessage(eventName));
  return (
    <div className="inline-links">
      {whatsapp ? (
        <a href={whatsapp} onClick={() => trackMetaContact("whatsapp")} target="_blank" rel="noreferrer">
          Chiedi disponibilità <ArrowUpRight aria-hidden="true" size={17} />
        </a>
      ) : (
        <Link to="/contatti">Chiedi disponibilità</Link>
      )}
      <Link to={`/gallery?filtro=${galleryFilter}`}>Guarda le foto reali</Link>
    </div>
  );
}

function EventSeoLanding(config: LandingConfig) {
  return (
    <>
      <Seo {...config.meta} path={config.path} />

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{config.eyebrow}</p>
          <h1>{config.h1}</h1>
          <p>{config.intro}</p>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <article className="event-detail">
            <EventPhoto src={config.image} alt={config.imageAlt} aspect="landscape" />
            <div className="event-detail__content">
              <span className="event-detail__number">01</span>
              <h2>{config.sectionTitle}</h2>
              <p>{config.sectionText}</p>
              <LandingActions eventName={config.eventName} galleryFilter={config.galleryFilter} />
            </div>
          </article>

          <ol className="service-journey">
            {config.steps.map((step, index) => (
              <li key={step.title}>
                <span>0{index + 1}</span>
                <div>
                  <h2>{step.title}</h2>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <aside className="confirmation-note">
            <strong>Una proposta costruita sull'evento</strong>
            <p>
              Servizi, formula e disponibilità vengono confermati durante l'appuntamento. Il sito non presenta
              come inclusi elementi che devono essere concordati con il team ZAK.
            </p>
          </aside>
        </div>
      </section>

      <section className="section section--midnight">
        <div className="container">
          <article className="event-detail event-detail--reverse">
            <EventPhoto src={config.image2} alt={config.imageAlt2} aspect="landscape" />
            <div className="event-detail__content">
              <span className="event-detail__number">02</span>
              <h2>{config.secondTitle}</h2>
              <p>{config.secondText}</p>
              <div className="inline-links">
                <Link to={`/gallery?filtro=${config.galleryFilter}`}>Esplora la gallery</Link>
                <Link to="/location">Scopri la location</Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container legal-page__content">
          <p className="eyebrow">Domande frequenti</p>
          <h2>{config.faqTitle}</h2>
          {config.faqs.map((faq) => (
            <div key={faq.q}>
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
          <LandingActions eventName={config.eventName} galleryFilter={config.galleryFilter} />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

export function CompleanniPage() {
  return EventSeoLanding({
    meta: pageMeta.compleanni,
    path: "/compleanni",
    eyebrow: "Compleanni ad Arzano",
    h1: "Festeggia il tuo compleanno a ZAK: una sala in esclusiva ad Arzano.",
    intro:
      "Dal trentesimo al cinquantesimo, fino ai traguardi più importanti: ZAK Eventi ad Arzano ospita compleanni di diverse età. Puoi scegliere una cena o un party più dinamico, anche senza cena completa, sempre con la sala riservata al tuo evento.",
    eventName: "un compleanno",
    galleryFilter: "Emozioni",
    image: "/images/events/xtgb3320.webp",
    imageAlt: "Festeggiata in abito rosso accanto alla torta durante un compleanno a ZAK Eventi",
    image2: "/images/events/xtgb9908.webp",
    imageAlt2: "Brindisi di gruppo durante una festa reale a ZAK Eventi",
    sectionTitle: "Compleanni per adulti, party e ricevimenti: scegli il ritmo della tua festa.",
    sectionText:
      "Festeggia i tuoi 30, 40, 50, 60 anni e anche gli altri traguardi. La location lavora in esclusiva; menu personalizzabili, buffet, servizio al tavolo, musica e allestimento si definiscono in consulenza. Cocktail e bartender sono opzioni aggiuntive a pagamento.",
    steps: [
      { title: "Scegliamo insieme la formula", text: "Partiamo da età, data e invitati: cena completa, buffet o party senza cena, in base alle tue preferenze." },
      { title: "Una sala in esclusiva", text: "L’evento ha gli spazi riservati; disposizione, terrazza e allestimento vengono valutati in base alla formula." },
      { title: "Curiamo ogni momento", text: "Accoglienza, cucina, musica, brindisi e torta vengono pianificati con attenzione ai dettagli." },
      { title: "Confermiamo la proposta", text: "Disponibilità e servizi vengono verificati direttamente con il team ZAK." },
    ],
    secondTitle: "Guarda feste vere prima di immaginare la tua.",
    secondText:
      "La gallery raccoglie immagini reali di compleanni e feste vissute a ZAK, utili per capire atmosfera, allestimenti e ritmo degli spazi.",
    faqTitle: "Compleanno a ZAK Eventi",
    faqs: [
      { q: "Dove si trova ZAK Eventi?", a: "In Via Napoli 270, 80022 Arzano (NA), nell'area nord di Napoli." },
      { q: "Organizzate compleanni di 30, 40, 50 anni e oltre?", a: "Sì. ZAK ospita compleanni per adulti di molte età, compresi 30°, 40°, 50°, 60° e altri traguardi." },
      { q: "La sala è in esclusiva?", a: "Sì, ZAK lavora esclusivamente con eventi a uso riservato della location. La configurazione dipende dal ricevimento." },
      { q: "Posso festeggiare senza una cena completa?", a: "Sì, sono possibili formule più orientate al party, con musica e food & beverage concordati con il team." },
      { q: "Posso aggiungere cocktail o bartender?", a: "Sì. Cocktail e bartender sono opzioni extra a pagamento, da definire nel preventivo." },
      { q: "Il sopralluogo è gratuito?", a: "Sì, puoi richiedere una visita gratuita per vedere gli spazi e discutere l’evento." },
      { q: "Come verifico data e disponibilità?", a: "Scrivi su WhatsApp indicando data, numero indicativo di invitati ed età o tipo di compleanno." },
    ],
  });
}

export function FestePrivatePage() {
  return EventSeoLanding({
    meta: pageMeta["feste-private"],
    path: "/feste-private",
    eyebrow: "Feste private ad Arzano",
    h1: "Una location per feste private ad Arzano, da trasformare intorno alla tua idea.",
    intro:
      "ZAK Eventi ospita occasioni private da costruire su misura. La formula viene definita in base alla tipologia di festa, agli invitati e al tipo di esperienza che vuoi creare.",
    eventName: "una festa privata",
    galleryFilter: "Emozioni",
    image: "/images/events/xtgb2648.webp",
    imageAlt: "Ospiti in cerchio durante una festa privata nella sala ZAK Eventi",
    image2: "/images/events/xtgb2618.webp",
    imageAlt2: "Gruppo di ospiti durante una festa reale nella sala ZAK Eventi",
    sectionTitle: "Non tutte le feste entrano in una categoria.",
    sectionText:
      "Anniversari, ricorrenze e occasioni personali possono richiedere un'impostazione diversa. ZAK parte dall'idea e costruisce una proposta coerente con il tipo di serata.",
    steps: [
      { title: "Raccontaci cosa vuoi festeggiare", text: "Occasione, invitati, data e atmosfera sono il punto di partenza." },
      { title: "Scegliamo l'impostazione", text: "La sala viene organizzata in relazione alla formula concordata e al tipo di festa." },
      { title: "Costruiamo il ritmo", text: "Musica, convivialità e momenti speciali vengono coordinati in base all'evento." },
      { title: "Confermiamo ciò che serve", text: "La proposta finale viene definita durante l'appuntamento, senza pacchetti standard imposti." },
    ],
    secondTitle: "Una sala, atmosfere diverse.",
    secondText:
      "Le fotografie del sito mostrano configurazioni e momenti realmente vissuti a ZAK. Sono il modo più concreto per capire come lo spazio può cambiare tra una festa e l'altra.",
    faqTitle: "Festa privata a ZAK Eventi",
    faqs: [
      { q: "Quali feste private posso proporre?", a: "Puoi raccontare l'occasione al team ZAK: la fattibilità e la formula vengono verificate durante l'appuntamento." },
      { q: "La location è ad Arzano?", a: "Sì, ZAK Eventi si trova in Via Napoli 270, Arzano (NA)." },
      { q: "Posso chiedere una proposta personalizzata?", a: "Sì. La proposta viene costruita sull'evento e confermata in base a disponibilità e servizi scelti." },
    ],
  });
}

export function LaureePage() {
  return EventSeoLanding({
    meta: pageMeta.lauree,
    path: "/lauree",
    eyebrow: "Feste di laurea ad Arzano",
    h1: "Festeggia la laurea in una location dove cena, brindisi e festa possono stare nella stessa esperienza.",
    intro:
      "ZAK Eventi, in Via Napoli 270 ad Arzano, ha già ospitato feste di laurea. La proposta viene costruita intorno al laureato, agli invitati e al tipo di serata desiderata.",
    eventName: "una festa di laurea",
    galleryFilter: "Emozioni",
    image: "/images/events/xtgb9908.webp",
    imageAlt: "Brindisi di gruppo durante una festa reale a ZAK Eventi",
    image2: "/images/events/xtgb6517.webp",
    imageAlt2: "Sala ZAK Eventi allestita e pronta ad accogliere gli ospiti",
    sectionTitle: "Dal brindisi alla festa, senza cambiare atmosfera.",
    sectionText:
      "La laurea può essere impostata come cena, ricevimento o festa più dinamica. Durante l'appuntamento si definiscono formula, spazi, allestimento e gli altri servizi da valutare.",
    steps: [
      { title: "Partiamo dal tipo di serata", text: "Cena, festa, numero di invitati e stile desiderato definiscono la direzione." },
      { title: "Adattiamo la sala", text: "La disposizione degli spazi viene costruita in relazione alla formula concordata." },
      { title: "Diamo spazio ai momenti importanti", text: "Brindisi, torta, musica e foto possono essere inseriti nella regia dell'evento." },
      { title: "Verifichiamo disponibilità e servizi", text: "Ogni elemento viene confermato direttamente con il team prima della prenotazione." },
    ],
    secondTitle: "Una vera esperienza di laurea è già stata raccontata dai clienti.",
    secondText:
      "Le recensioni pubbliche riportano anche feste di laurea organizzate a ZAK. Sul sito preferiamo però mostrare soltanto fotografie di cui conosciamo con certezza il contesto, senza attribuire a una laurea immagini generiche.",
    faqTitle: "Festa di laurea a ZAK Eventi",
    faqs: [
      { q: "ZAK ha già ospitato feste di laurea?", a: "Sì. Recensioni pubbliche di clienti descrivono feste di laurea svolte nella location." },
      { q: "Posso organizzare cena e festa nello stesso evento?", a: "La formula desiderata può essere proposta al team e viene confermata durante l'appuntamento in base a disponibilità e servizi." },
      { q: "Come posso chiedere un preventivo?", a: "Scrivi su WhatsApp indicando data, numero indicativo di invitati e come immagini la serata." },
    ],
  });
}


export function BattesimiPage() {
  return EventSeoLanding({
    meta: pageMeta.battesimi,
    path: "/battesimi",
    eyebrow: "Battesimi ad Arzano",
    h1: "Una sala per il battesimo ad Arzano, pensata per accogliere famiglia e persone care.",
    intro:
      "ZAK Eventi è in Via Napoli 270 ad Arzano e riserva la location a ogni evento. I battesimi possono svolgersi a pranzo o a cena, con menu bambini personalizzabili e animazione su richiesta.",
    eventName: "un battesimo",
    galleryFilter: "Cerimonie",
    image: "/images/events/xtgb6585.webp",
    imageAlt: "Famiglia durante una cerimonia con torta e allestimento a ZAK Eventi",
    image2: "/images/events/xtgb5080.webp",
    imageAlt2: "Allestimento reale per una cerimonia a ZAK Eventi con palloncini e torta",
    sectionTitle: "Una giornata di famiglia, con una formula da costruire insieme.",
    sectionText:
      "Pranzo, cena o altra impostazione vengono valutati durante l'appuntamento. Spazi, allestimento, food & beverage e servizi vengono definiti in funzione dell'occasione e delle esigenze della famiglia.",
    steps: [
      { title: "Partiamo da data e invitati", text: "Numero indicativo di persone, orario e stile desiderato sono il punto di partenza." },
      { title: "Definiamo la formula", text: "La proposta viene costruita in relazione al tipo di ricevimento che la famiglia vuole vivere." },
      { title: "Progettiamo atmosfera e momenti", text: "Allestimento, convivialità e torta vengono inseriti in una sequenza coerente." },
      { title: "Confermiamo servizi e disponibilità", text: "Ogni voce viene definita direttamente con ZAK prima della prenotazione." },
    ],
    secondTitle: "Cerimonie reali, non immagini di repertorio.",
    secondText:
      "Per raccontare battesimi e cerimonie utilizziamo fotografie reali della location e di eventi svolti a ZAK. Quando il contesto specifico della foto non è certo, evitiamo di attribuirla a un battesimo particolare.",
    faqTitle: "Battesimo a ZAK Eventi",
    faqs: [
      { q: "Dove si trova ZAK Eventi?", a: "In Via Napoli 270, 80022 Arzano (NA), nell'area nord di Napoli." },
      { q: "Si può organizzare un battesimo a pranzo o a cena?", a: "La formula e l'orario desiderati vengono valutati durante l'appuntamento e confermati in base alla disponibilità." },
      { q: "È possibile personalizzare l'allestimento?", a: "Sì, l’allestimento viene concordato con il team in relazione alla proposta e ai servizi disponibili." },
      { q: "È disponibile un menu bambini?", a: "Sì, sono disponibili menu bambini personalizzabili. È possibile concordare anche l’animazione." },
      { q: "La sala è in esclusiva?", a: "Sì, ZAK riserva la location al singolo evento. L’eventuale uso per tutta la giornata richiede un accordo specifico." },
      { q: "Come richiedo disponibilità?", a: "Scrivi su WhatsApp indicando data indicativa, numero di invitati e come immagini il ricevimento." },
    ],
  });
}
