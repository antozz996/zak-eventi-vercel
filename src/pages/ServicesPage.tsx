import { Check } from "lucide-react";
import { Link } from "../lib/router";
import { EventPhoto } from "../components/EventPhoto";
import { FinalCTA } from "../components/FinalCTA";
import { SectionHeading } from "../components/SectionHeading";
import { Seo } from "../components/Seo";
import { pageMeta, serviceJourney } from "../data/siteConfig";

const eventLinks = [
  { label: "Diciottesimi", href: "/diciottesimi" },
  { label: "Compleanni", href: "/compleanni" },
  { label: "Comunioni", href: "/comunioni" },
  { label: "Battesimi", href: "/battesimi" },
  { label: "Lauree", href: "/lauree" },
  { label: "Feste private", href: "/feste-private" },
];

export function ServicesPage() {
  return (
    <>
      <Seo {...pageMeta.servizi} path="/servizi" />
      <section className="page-hero page-hero--services">
        <div className="container">
          <p className="eyebrow">Organizzazione eventi ad Arzano</p>
          <h1>Dall'idea alla festa: un percorso per costruire il tuo evento a ZAK.</h1>
          <p>
            A ZAK la location è sempre riservata al singolo evento. Menu personalizzabili, servizi professionali,
            intrattenimento, allestimenti e torta vengono definiti attraverso una consulenza dettagliata.
          </p>
          <div className="inline-links">
            <Link to="/contatti">Raccontaci il tuo evento</Link>
            <Link to="/location">Scopri la location</Link>
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <SectionHeading
            eyebrow="Dal progetto alla festa"
            title="Otto passaggi. Una sola esperienza."
            description="Non un elenco di extra da aggiungere a caso: un percorso in cui ogni scelta deve avere senso rispetto alla festa."
          />
          <ol className="service-journey">
            {serviceJourney.map((step, index) => (
              <li key={step.title}>
                <span>0{index + 1}</span>
                <div>
                  <h2>{step.title}</h2>
                  <p>{step.text}</p>
                  {index === 2 && <EventPhoto src="/images/events/xtgb5080.webp" alt="Arco di palloncini e torta personalizzata durante un evento ZAK" aspect="landscape" />}
                  {index === 7 && <EventPhoto src="/images/events/xtgb3531.webp" alt="Torta a tre piani durante un diciottesimo a ZAK Eventi" aspect="portrait" />}
                </div>
                <Check aria-hidden="true" />
              </li>
            ))}
          </ol>
          <aside className="confirmation-note">
            <strong>In cosa consistono inclusioni ed extra?</strong>
            <p>
              Nei pacchetti per diciottesimi indicati dalla proprietà sono compresi DJ, speaker, fotografo,
              allestimenti e una proposta food &amp; beverage con torta. Cocktail e bartender, performer e ballerini
              sono extra a pagamento. Per compleanni, cerimonie e altre formule le voci esatte vengono
              confermate nel preventivo: nessun servizio viene dato per incluso senza accordo.
            </p>
          </aside>
        </div>
      </section>

      <section className="section section--stone">
        <div className="container legal-page__content">
          <p className="eyebrow">Food, beverage e ospitalità</p>
          <h2>Una proposta curata e adattabile al ricevimento.</h2>
          <p>Il team propone menu personalizzabili, buffet o servizio al tavolo, con possibilità di servizio all’inglese. Sono disponibili menu bambini e opzioni per esigenze alimentari da definire in anticipo con lo staff. Le bevande e la torta fanno parte delle formule indicate dalla proprietà, mentre i cocktail sono extra.</p>
          <p>Per ricevere una proposta adatta alla festa sono importanti data, numero di invitati, tipologia di evento e stile del servizio. Puoi iniziare da un sopralluogo gratuito.</p>
          <Link className="button button--dark" to="/contatti">Richiedi un sopralluogo gratuito</Link>
        </div>
      </section>

      <section className="section section--midnight">
        <div className="container">
          <SectionHeading
            eyebrow="Parti dal tuo evento"
            title="La stessa organizzazione cambia in base all'occasione."
            description="Entra direttamente nella pagina più vicina a ciò che stai organizzando."
            light
          />
          <div className="button-group">
            {eventLinks.map((item) => (
              <Link className="button button--ghost" to={item.href} key={item.href}>{item.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container legal-page__content">
          <p className="eyebrow">Domande frequenti</p>
          <h2>Servizi e organizzazione a ZAK Eventi</h2>

          <h3>I servizi elencati sono sempre inclusi?</h3>
          <p>La sala in esclusiva è la modalità operativa dichiarata da ZAK. I pacchetti per diciottesimi indicati dalla proprietà comprendono DJ, speaker, fotografo e allestimenti; per ogni altra formula inclusioni ed extra vengono specificati nel preventivo.</p>

          <h3>Posso partire da un'idea senza avere già deciso la formula?</h3>
          <p>Sì. Il primo passaggio serve proprio a capire occasione, invitati, atmosfera e priorità prima di definire la proposta.</p>

          <h3>Posso personalizzare allestimento e momenti della festa?</h3>
          <p>La personalizzazione viene valutata durante l'appuntamento e costruita in relazione all'evento e ai servizi disponibili.</p>

          <h3>La visita alla location è gratuita?</h3>
          <p>Sì, puoi richiedere un sopralluogo gratuito e valutare gli spazi insieme al team.</p>

          <h3>Come richiedo una proposta?</h3>
          <p>Puoi usare la pagina contatti o WhatsApp indicando tipo di evento, data indicativa e numero di invitati.</p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
