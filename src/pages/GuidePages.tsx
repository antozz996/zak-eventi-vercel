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

          <article className="event-detail event-detail--reverse">
            <EventPhoto
              src="/images/events/xtgb3531.webp"
              alt="Torta di un diciottesimo reale a ZAK Eventi"
              aspect="portrait"
            />
            <div className="event-detail__content">
              <span className="event-detail__number">02</span>
              <p className="eyebrow">Budget</p>
              <h2>Quanto costa un diciottesimo a Napoli?</h2>
              <p>
                Una guida per capire i range pubblici di mercato, quali voci fanno salire il preventivo e
                perché due offerte con lo stesso numero di invitati possono avere prezzi molto diversi.
              </p>
              <Link className="text-link" to="/guide/quanto-costa-diciottesimo-napoli">
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


export function CostoDiciottesimoGuidePage() {
  return (
    <>
      <Seo {...pageMeta.guideCostoDiciottesimo} path="/guide/quanto-costa-diciottesimo-napoli" />

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Guida · Budget diciottesimo</p>
          <h1>Quanto costa un diciottesimo a Napoli? Prezzi, voci del preventivo e costi da confrontare.</h1>
          <p>
            Non esiste un prezzo unico: il totale cambia in base a numero di invitati, esclusiva della location,
            formula food, beverage, musica, allestimento, fotografo e servizi extra.
          </p>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container legal-page__content">
          <p className="eyebrow">Aggiornata il 7 ottobre 2026 · A cura di ZAK Eventi</p>

          <h2>La risposta breve: quanto può costare?</h2>
          <p>
            Guardando offerte pubblicamente visibili nel mercato napoletano, oggi si trovano formule molto
            diverse. Un esempio locale pubblica pacchetti da circa 1.000 euro fino a 30 invitati, 1.500 euro
            fino a 50 e 2.000 euro fino a 50 per una formula più completa; un'altra guida di settore dedicata
            a Napoli indica un intervallo molto ampio, da circa 800 a 4.000 euro, proprio perché servizi e
            impostazione possono cambiare radicalmente.
          </p>

          <aside className="confirmation-note">
            <strong>Importante: questi non sono i prezzi ZAK</strong>
            <p>
              Sono esempi pubblici di mercato consultati a ottobre 2026 e servono soltanto a spiegare perché
              confrontare due preventivi usando un solo numero può essere fuorviante. ZAK formula la propria
              proposta in base all'evento e la conferma durante l'appuntamento.
            </p>
          </aside>

          <EventPhoto
            src="/images/events/xtgb6517.webp"
            alt="Sala ZAK Eventi apparecchiata prima di una festa"
            aspect="landscape"
          />

          <h2>1. Numero di invitati: fisso, a persona o formula mista?</h2>
          <p>
            Alcune location lavorano con un minimo fisso che copre l'esclusiva della sala e un certo numero di
            ospiti; oltre quella soglia applicano un costo per persona. Altre costruiscono il preventivo quasi
            interamente per invitato. Prima di confrontare due offerte, chiedi sempre quale modello viene usato.
          </p>

          <h2>2. Location in esclusiva</h2>
          <p>
            L'esclusiva può incidere sul prezzo, ma cambia molto anche il valore dell'esperienza. Verifica se la
            sala è realmente riservata al tuo evento, quali ambienti comprende e per quante ore.
          </p>

          <h2>3. Food: buffet, cena servita o formula ibrida</h2>
          <p>
            Quantità, qualità, numero di portate e tipo di servizio modificano sensibilmente il costo. Un buffet
            semplice non è confrontabile con una cena servita completa, anche se entrambi vengono descritti come
            "food incluso".
          </p>

          <h2>4. Beverage e cocktail</h2>
          <p>
            Acqua e soft drink, prosecco, cocktail di benvenuto, open bar analcolico e drink alcolici possono
            essere inclusi, limitati oppure conteggiati a parte. Questa voce può cambiare parecchio il totale
            finale.
          </p>

          <h2>5. DJ, speaker e intrattenimento</h2>
          <p>
            Chiedi se musica e intrattenimento sono compresi, se esistono limiti orari e se eventuali performer
            sono extra. La differenza tra semplice diffusione musicale e una vera regia della serata è sostanziale.
          </p>

          <h2>6. Allestimento</h2>
          <p>
            Un allestimento istituzionale e una scenografia completamente personalizzata non hanno lo stesso
            costo. Palloncini, strutture, fiori, numeri luminosi, backdrop e personalizzazioni vanno separati in
            modo chiaro nel preventivo.
          </p>

          <h2>7. Fotografo e contenuti</h2>
          <p>
            Verifica se fotografo, video, album o contenuti social sono inclusi oppure extra e, soprattutto,
            cosa viene realmente consegnato dopo l'evento.
          </p>

          <h2>8. Torta e momento finale</h2>
          <p>
            Alcune formule includono la torta, altre consentono di portarla dall'esterno, altre ancora la
            conteggiano a peso. È una voce da chiarire prima, insieme a eventuali effetti scenografici.
          </p>

          <h2>9. Extra che spesso fanno cambiare il totale</h2>
          <p>
            Personalizzazioni premium, drink alcolici, fotografo, performer, prolungamento orario, effetti
            scenografici e richieste speciali sono tra le voci che più facilmente fanno allontanare il totale
            dal prezzo iniziale.
          </p>

          <h2>10. Come confrontare due preventivi senza sbagliare</h2>
          <p>
            Porta le offerte allo stesso livello: stesso numero di invitati, stesso orario, stessa formula food,
            stesso beverage, stessi servizi e stessi extra. Solo dopo ha senso confrontare il totale.
          </p>

          <aside className="confirmation-note">
            <strong>La formula più utile</strong>
            <p>
              Totale evento ÷ numero invitati può aiutarti a capire il costo medio, ma non racconta tutto:
              esclusiva, allestimento e alcuni servizi sono costi fissi e hanno più peso quando gli invitati sono pochi.
            </p>
          </aside>

          <h2>Quanto costa un diciottesimo a ZAK Eventi?</h2>
          <p>
            Non pubblichiamo una cifra generica perché rischierebbe di essere sbagliata rispetto alla tua festa.
            Per ricevere una proposta utile servono almeno data indicativa, numero di invitati e tipo di evento.
            Da lì il team può definire la formula e indicare con chiarezza cosa è incluso e cosa è extra.
          </p>

          <div className="button-group">
            <Link className="button button--dark" to="/diciottesimi">Scopri i diciottesimi ZAK</Link>
            <Link className="button button--outline-dark" to="/contatti">Chiedi una proposta</Link>
          </div>

          <p>
            Vuoi prima capire come valutare la location? Leggi anche la guida su{" "}
            <Link className="text-link" to="/guide/come-scegliere-sala-diciottesimo-napoli">
              come scegliere una sala per un diciottesimo a Napoli
            </Link>.
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
