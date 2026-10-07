import { ArrowUpRight } from "lucide-react";
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
        <a href={whatsapp} target="_blank" rel="noreferrer">
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
          <h1>Una location per il tuo diciottesimo, tra ingresso, festa e momenti da ricordare.</h1>
          <p>
            ZAK Eventi è in Via Napoli 270 ad Arzano, a pochi chilometri da Napoli. La festa viene progettata
            intorno al festeggiato, all'atmosfera desiderata e ai momenti che devono restare.
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
                Ingresso, allestimento, disposizione degli spazi, musica, food &amp; beverage e momento della
                torta fanno parte di un'unica esperienza. Durante l'appuntamento definiamo insieme la direzione
                della festa e verifichiamo quali servizi inserire nella formula.
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
            <strong>Niente pacchetti inventati online</strong>
            <p>
              Il sito non presenta automaticamente servizi come inclusi: la proposta viene costruita e
              confermata durante l'appuntamento, in base alle esigenze dell'evento.
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
          <h1>Una sala per la comunione, pensata per stare insieme e vivere il momento.</h1>
          <p>
            A ZAK Eventi, in Via Napoli 270 ad Arzano, la comunione viene costruita partendo dalla famiglia,
            dall'atmosfera desiderata e dai dettagli da rendere protagonisti.
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
                Ogni comunione ha esigenze diverse. Durante l'appuntamento si definiscono insieme formula,
                disposizione degli spazi, allestimento, food &amp; beverage e gli altri servizi utili
                all'esperienza.
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
