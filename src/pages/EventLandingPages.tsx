import { ArrowUpRight } from "lucide-react";
import { trackMetaContact } from "../lib/metaPixel";
import { Link } from "../lib/router";
import { EventPhoto } from "../components/EventPhoto";
import { FinalCTA } from "../components/FinalCTA";
import { Seo } from "../components/Seo";
import { pageMeta } from "../data/siteConfig";
import { getEventWhatsAppMessage, getWhatsAppLink } from "../utils/whatsapp";

function ActionLinks({ eventName, galleryFilter }: { eventName: string; galleryFilter: string }) {
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

export function DiciottesimiPage() {
  return (
    <>
      <Seo {...pageMeta.diciottesimi} path="/diciottesimi" />

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Diciottesimi ad Arzano</p>
          <h1>Il tuo diciottesimo, con la sala tutta per te ad Arzano.</h1>
          <p>
            ZAK Eventi è in Via Napoli 270 ad Arzano, a pochi chilometri da Napoli. La festa viene progettata
            intorno al festeggiato, con uso esclusivo della sala, cucina curata, allestimenti e intrattenimento professionale.
          </p>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <article className="event-detail">
            <EventPhoto
              src="/images/events/xtgb3357.webp"
              alt="Ingresso di un diciottenne sul tappeto rosso tra fontane luminose e ospiti a ZAK Eventi"
              aspect="landscape"
            />
            <div className="event-detail__content">
              <span className="event-detail__number">01</span>
              <h2>Il diciottesimo comincia prima del primo brindisi.</h2>
              <p>
                Le formule per diciottesimi descritte dal team comprendono menu personalizzabili,
                buffet di dolci, torta e bevande, insieme a DJ, speaker, fotografo e allestimenti.
                Puoi scegliere tra servizio al tavolo e buffet; condizioni e inclusioni esatte sono confermate nel preventivo.
              </p>
              <ActionLinks eventName="un diciottesimo" galleryFilter="Diciottesimi" />
            </div>
          </article>

          <ol className="service-journey">
            <li>
              <span>01</span>
              <div>
                <h2>Partiamo dalla tua idea</h2>
                <p>Stile della festa, numero indicativo di invitati, data e atmosfera desiderata.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h2>Costruiamo l'ingresso e l'allestimento</h2>
                <p>Lo spazio e i momenti scenografici vengono progettati in relazione alla formula scelta.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h2>Definiamo il ritmo della serata</h2>
                <p>Musica, convivialità, brindisi e torta vengono coordinati perché la festa abbia un ritmo naturale.</p>
              </div>
            </li>
            <li>
              <span>04</span>
              <div>
                <h2>Verifichiamo tutto durante l'appuntamento</h2>
                <p>Servizi, disponibilità e formula finale vengono confermati direttamente con ZAK.</p>
              </div>
            </li>
          </ol>

          <aside className="confirmation-note">
            <strong>Inclusioni ed extra, senza sorprese</strong>
            <p>
              Nei pacchetti per diciottesimi descritti dalla proprietà sono previsti DJ, speaker,
              fotografo e allestimenti. Bartender, performer e ballerini sono extra a pagamento;
              l’eventuale ingresso scenografico riguarda il momento del festeggiato durante la serata,
              non l’ingresso esterno della struttura. Ogni dettaglio viene specificato in consulenza.
            </p>
          </aside>
        </div>
      </section>

      <section className="section section--midnight">
        <div className="container">
          <article className="event-detail event-detail--reverse">
            <EventPhoto
              src="/images/events/xtgb3531.webp"
              alt="Torta a tre piani per un diciottesimo organizzato a ZAK Eventi"
              aspect="portrait"
            />
            <div className="event-detail__content">
              <span className="event-detail__number">02</span>
              <h2>Una festa reale, non una pagina generica.</h2>
              <p>
                Le immagini presenti sul sito arrivano da eventi vissuti a ZAK: ingressi, allestimenti,
                brindisi, torta e sala in festa. Puoi usarle per capire l'atmosfera prima di prenotare una visita.
              </p>
              <div className="inline-links">
                <Link to="/gallery?filtro=Diciottesimi">Esplora i diciottesimi</Link>
                <Link to="/location">Scopri la location</Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container legal-page__content">
          <p className="eyebrow">Domande frequenti</p>
          <h2>Diciottesimo a ZAK Eventi</h2>
          <h3>Dove si trova ZAK Eventi?</h3>
          <p>In Via Napoli 270, 80022 Arzano (NA), nell'area nord di Napoli.</p>

          <h3>Posso personalizzare la festa?</h3>
          <p>
            Sì: il progetto parte dall'idea del festeggiato. Allestimento, servizi e formula vengono definiti
            durante l'appuntamento e confermati in base alla disponibilità.
          </p>

          <h3>Il diciottesimo è in esclusiva?</h3>
          <p>Sì, ZAK lavora solo con eventi che riservano la sala ai propri ospiti.</p>

          <h3>Quali servizi comprendono i pacchetti?</h3>
          <p>I pacchetti descritti dalla proprietà prevedono DJ, speaker, fotografo, allestimenti,
            proposta food &amp; beverage e torta. Le inclusioni esatte sono riepilogate nel preventivo.</p>

          <h3>Come posso sapere se la data è disponibile?</h3>
          <p>
            Puoi contattare ZAK tramite WhatsApp o dalla pagina contatti indicando data, numero indicativo di
            invitati e tipo di evento.
          </p>

          <ActionLinks eventName="un diciottesimo" galleryFilter="Diciottesimi" />
          <div className="centered-action">
            <Link className="button button--outline-dark" to="/guide/come-scegliere-sala-diciottesimo-napoli">Come scegliere la sala</Link>
            <Link className="button button--outline-dark" to="/guide/quanto-costa-diciottesimo-napoli">Quanto costa</Link>
            <Link className="button button--outline-dark" to="/guide/buffet-o-cena-servita-diciottesimo">Buffet o cena servita</Link>
            <Link className="button button--outline-dark" to="/guide/checklist-diciottesimo">Checklist 18 anni</Link>
            <Link className="button button--outline-dark" to="/guide/quanto-prima-prenotare-sala-diciottesimo">Quando prenotare</Link>
            <Link className="button button--outline-dark" to="/guide/allestimento-diciottesimo-napoli">Allestimento</Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

export function ComunioniPage() {
  return (
    <>
      <Seo {...pageMeta.comunioni} path="/comunioni" />

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Comunioni ad Arzano</p>
          <h1>Comunioni ad Arzano: una sala in esclusiva per tutta la famiglia.</h1>
          <p>
            A ZAK Eventi, in Via Napoli 270 ad Arzano, la comunione viene costruita partendo dalla famiglia,
            dall’atmosfera desiderata, con ricevimenti a pranzo o a cena, menu bambini personalizzabili e animazione su richiesta.
          </p>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <article className="event-detail">
            <EventPhoto
              src="/images/events/xtgb6585.webp"
              alt="Famiglia durante una comunione con torta e allestimento a ZAK Eventi"
              aspect="landscape"
            />
            <div className="event-detail__content">
              <span className="event-detail__number">01</span>
              <h2>Famiglia, accoglienza e un allestimento che racconta la giornata.</h2>
              <p>
                La sala viene riservata alla famiglia e ai suoi ospiti. Puoi concordare un ricevimento
                a pranzo o a cena, con menu bambini personalizzabili, animazione e allestimenti.
                L’eventuale esclusiva per tutta la giornata è possibile secondo disponibilità e accordi.
              </p>
              <ActionLinks eventName="una comunione" galleryFilter="Cerimonie" />
            </div>
          </article>

          <ol className="service-journey">
            <li>
              <span>01</span>
              <div>
                <h2>Conosciamo la famiglia e l'occasione</h2>
                <p>Partiamo da data, invitati e stile desiderato per capire come costruire la giornata.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h2>Progettiamo lo spazio</h2>
                <p>Allestimento e disposizione vengono pensati in relazione al tipo di ricevimento scelto.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h2>Coordiniamo i momenti principali</h2>
                <p>Accoglienza, convivialità e torta vengono inseriti in una sequenza coerente.</p>
              </div>
            </li>
            <li>
              <span>04</span>
              <div>
                <h2>Confermiamo servizi e formula</h2>
                <p>La proposta finale viene definita direttamente con ZAK durante l'appuntamento.</p>
              </div>
            </li>
          </ol>

          <aside className="confirmation-note">
            <strong>Proposta costruita sull'evento</strong>
            <p>
              Le possibilità effettive vengono verificate con il team. Il sito evita di dichiarare come
              automaticamente inclusi servizi che devono essere concordati nella proposta.
            </p>
          </aside>
        </div>
      </section>

      <section className="section section--midnight">
        <div className="container">
          <article className="event-detail event-detail--reverse">
            <EventPhoto
              src="/images/events/xtgb5080.webp"
              alt="Allestimento per una prima comunione a ZAK Eventi con palloncini, torta e decorazioni"
              aspect="landscape"
            />
            <div className="event-detail__content">
              <span className="event-detail__number">02</span>
              <h2>Guarda come ZAK cambia volto durante una cerimonia.</h2>
              <p>
                La gallery raccoglie immagini reali di comunioni e allestimenti: un riferimento concreto per
                immaginare colori, atmosfera e impostazione della propria giornata.
              </p>
              <div className="inline-links">
                <Link to="/gallery?filtro=Cerimonie">Guarda le cerimonie</Link>
                <Link to="/location">Scopri gli spazi</Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container legal-page__content">
          <p className="eyebrow">Domande frequenti</p>
          <h2>Comunione a ZAK Eventi</h2>
          <h3>Dove si trova la location?</h3>
          <p>ZAK Eventi si trova in Via Napoli 270, Arzano (NA), nell'area nord di Napoli.</p>

          <h3>La comunione può essere organizzata a pranzo o a cena?</h3>
          <p>Sì, ZAK organizza ricevimenti sia a pranzo sia a cena, secondo disponibilità.</p>

          <h3>Sono previsti menu bambini e animazione?</h3>
          <p>Sì, sono disponibili menu bambini personalizzabili e la possibilità di aggiungere animazione.</p>

          <h3>La comunione può essere personalizzata?</h3>
          <p>
            Sì. La direzione dell'allestimento e la formula vengono definite durante l'appuntamento in base
            alle esigenze della famiglia e alla disponibilità dei servizi.
          </p>

          <h3>Come richiedo informazioni?</h3>
          <p>
            Puoi scrivere su WhatsApp indicando data indicativa, numero di invitati e le prime esigenze della
            giornata oppure prenotare un contatto dalla pagina dedicata.
          </p>

          <ActionLinks eventName="una comunione" galleryFilter="Cerimonie" />
          <div className="centered-action">
            <Link className="button button--outline-dark" to="/guide/come-organizzare-comunione-napoli">
              Guida: come organizzare una comunione
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
