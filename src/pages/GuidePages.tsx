import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "../lib/router";
import { EventPhoto } from "../components/EventPhoto";
import { FinalCTA } from "../components/FinalCTA";
import { Seo } from "../components/Seo";
import { pageMeta } from "../data/siteConfig";

export function GuidesPage() {
  return (
    <>
      <Seo {...pageMeta.guide} path="/guide" />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Guide ZAK</p>
          <h1>Organizzare una festa con più consapevolezza.</h1>
          <p>
            Guide pratiche per capire cosa chiedere, cosa confrontare e quali decisioni prendere prima di
            scegliere una location o definire la formula del tuo evento.
          </p>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <article className="event-detail">
            <EventPhoto
              src="/images/events/xtgb3357.webp"
              alt="Ingresso durante un diciottesimo reale a ZAK Eventi"
              aspect="landscape"
            />
            <div className="event-detail__content">
              <span className="event-detail__number">01</span>
              <p className="eyebrow">Diciottesimi</p>
              <h2>Come scegliere una sala per un diciottesimo a Napoli</h2>
              <p>
                Una checklist concreta per confrontare location, formula, spazi, musica, food &amp; beverage,
                allestimento e costi senza fermarsi alla prima impressione.
              </p>
              <Link className="text-link" to="/guide/come-scegliere-sala-diciottesimo-napoli">
                Leggi la guida <ArrowRight aria-hidden="true" size={17} />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

export function DiciottesimoGuidePage() {
  return (
    <>
      <Seo {...pageMeta.guideDiciottesimo} path="/guide/come-scegliere-sala-diciottesimo-napoli" />

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Guida · Diciottesimo</p>
          <h1>Come scegliere una sala per un diciottesimo a Napoli: 10 cose da controllare prima di prenotare.</h1>
          <p>
            La location giusta non è semplicemente quella che appare più bella in foto. Deve funzionare per
            numero di invitati, tipo di festa, servizi, ritmo della serata e budget reale.
          </p>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container legal-page__content">
          <p className="eyebrow">Aggiornata il 7 ottobre 2026 · A cura di ZAK Eventi</p>
          <p>
            Quando confronti sale e location tra Napoli e provincia, chiedere un prezzo senza capire cosa
            comprende può portare a confronti sbagliati. Questa checklist serve a mettere sullo stesso piano
            proposte che spesso sembrano simili ma non lo sono.
          </p>

          <EventPhoto
            src="/images/events/xtgb6517.webp"
            alt="Sala ZAK Eventi ad Arzano apparecchiata prima dell'arrivo degli ospiti"
            aspect="landscape"
          />

          <h2>1. Parti dal numero realistico di invitati</h2>
          <p>
            Chiedi qual è la configurazione consigliata per il tuo numero di persone, non soltanto la capienza
            massima dichiarata. Una sala può contenere molti ospiti ma risultare troppo piena per ballare, fare
            fotografie o gestire comodamente il servizio.
          </p>

          <h2>2. Chiarisci se avrai l'esclusiva degli spazi</h2>
          <p>
            Domanda quali ambienti sono riservati al tuo evento e se nello stesso momento possono esserci altre
            feste. È un dettaglio che cambia privacy, gestione degli ospiti e percezione della serata.
          </p>

          <h2>3. Confronta ciò che è realmente incluso</h2>
          <p>
            Due preventivi con lo stesso totale possono offrire cose molto diverse. Fatti indicare per iscritto
            cosa comprende la proposta e cosa invece è opzionale: location, food, beverage, allestimento,
            musica, fotografo, torta, intrattenimento e coordinamento.
          </p>

          <h2>4. Valuta il ritmo della festa, non soltanto il menu</h2>
          <p>
            Buffet, cena servita e formule più dinamiche producono esperienze diverse. Chiedi come vengono
            alternati servizio, musica, ingresso, brindisi e torta: i tempi incidono moltissimo sulla riuscita
            di un diciottesimo.
          </p>

          <h2>5. Chiedi come viene gestita la musica</h2>
          <p>
            Verifica dove si balla, come è gestito l'audio e come DJ o intrattenimento si integrano con il
            servizio. La parte musicale non dovrebbe essere un elemento separato dal resto della serata.
          </p>

          <h2>6. Guarda foto di eventi reali</h2>
          <p>
            Rendering e fotografie vuote della sala aiutano fino a un certo punto. Cerca immagini di ingressi,
            tavoli apparecchiati, allestimenti, pista e momento della torta durante feste vere: mostrano molto
            meglio come funziona lo spazio quando è vissuto.
          </p>

          <h2>7. Chiedi quanto è personalizzabile l'allestimento</h2>
          <p>
            Se hai già colori, tema o stile in mente, verifica cosa può essere modificato e cosa appartiene alla
            configurazione standard della location. Fai distinguere chiaramente ciò che è compreso da ciò che
            richiede un'integrazione.
          </p>

          <h2>8. Fai emergere gli extra prima della firma</h2>
          <p>
            Domanda quali voci possono aggiungersi al preventivo: servizi premium, richieste speciali,
            prolungamenti, beverage aggiuntivo o personalizzazioni. Il costo finale deve essere leggibile prima
            di bloccare la data.
          </p>

          <h2>9. Visita la location immaginando la tua serata</h2>
          <p>
            Durante il sopralluogo non limitarti a guardare la sala. Immagina il percorso degli ospiti:
            ingresso, accoglienza, tavolo, buffet o servizio, zona musica, fotografie, torta e uscita. È il modo
            migliore per capire se lo spazio funziona davvero.
          </p>

          <h2>10. Valuta chi seguirà concretamente l'evento</h2>
          <p>
            Chiedi chi sarà il riferimento prima e durante la festa. Una buona organizzazione dipende anche da
            quanto sono chiare responsabilità, tempi e comunicazioni tra location, famiglia e fornitori.
          </p>

          <aside className="confirmation-note">
            <strong>Checklist rapida prima di prenotare</strong>
            <p><CheckCircle2 aria-hidden="true" size={17} /> Numero invitati e configurazione reale</p>
            <p><CheckCircle2 aria-hidden="true" size={17} /> Spazi ed eventuale esclusiva</p>
            <p><CheckCircle2 aria-hidden="true" size={17} /> Servizi inclusi ed extra</p>
            <p><CheckCircle2 aria-hidden="true" size={17} /> Food, beverage e tempi del servizio</p>
            <p><CheckCircle2 aria-hidden="true" size={17} /> Musica, allestimento e momento torta</p>
            <p><CheckCircle2 aria-hidden="true" size={17} /> Referente e coordinamento dell'evento</p>
          </aside>

          <h2>Stai valutando ZAK per il tuo diciottesimo?</h2>
          <p>
            ZAK Eventi si trova in Via Napoli 270 ad Arzano. Puoi vedere fotografie reali dei diciottesimi,
            approfondire la pagina dedicata e poi richiedere una visita con data e numero indicativo di invitati.
          </p>
          <div className="button-group">
            <Link className="button button--dark" to="/diciottesimi">Diciottesimi a ZAK</Link>
            <Link className="button button--outline-dark" to="/contatti">Prenota una visita</Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
