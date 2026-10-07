import { Link } from "../lib/router";
import { EventPhoto } from "../components/EventPhoto";
import { FinalCTA } from "../components/FinalCTA";
import { Seo } from "../components/Seo";
import { pageMeta } from "../data/siteConfig";

function GuideCTA({ eventHref, eventLabel }: { eventHref: string; eventLabel: string }) {
  return (
    <div className="button-group">
      <Link className="button button--dark" to={eventHref}>{eventLabel}</Link>
      <Link className="button button--outline-dark" to="/contatti">Chiedi informazioni</Link>
    </div>
  );
}

export function BuffetVsCenaGuidePage() {
  return (
    <>
      <Seo {...pageMeta.guideBuffetCena} path="/guide/buffet-o-cena-servita-diciottesimo" />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Guida · Formula food</p>
          <h1>Buffet o cena servita per un diciottesimo? Differenze, vantaggi e cosa chiedere prima di scegliere.</h1>
          <p>
            Non esiste una formula migliore in assoluto: cambia il ritmo della festa, il modo in cui si muovono gli ospiti,
            il tempo dedicato alla musica e il tipo di esperienza che vuoi creare.
          </p>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container legal-page__content">
          <p className="eyebrow">Aggiornata il 7 ottobre 2026 · A cura di ZAK Eventi</p>

          <h2>Buffet: quando funziona meglio</h2>
          <p>
            Il buffet tende a rendere la serata più dinamica. Gli ospiti si alzano, si spostano e la festa può entrare
            prima nel vivo. È utile quando il festeggiato vuole dare più spazio a musica, foto e interazione tra gruppi diversi.
          </p>

          <h2>Cena servita: quando ha più senso</h2>
          <p>
            La cena servita crea un ritmo più ordinato e una parte conviviale più lunga. Può essere adatta quando si vuole
            dare peso alla cena, alle famiglie presenti e a un'esperienza più scandita.
          </p>

          <h2>La soluzione ibrida</h2>
          <p>
            Molte feste funzionano bene con una formula mista: accoglienza o antipasti più dinamici, un passaggio servito
            e poi una seconda parte più libera. L'importante è capire come la location coordina davvero i tempi.
          </p>

          <aside className="confirmation-note">
            <strong>Le domande da fare</strong>
            <p>Quante persone possono muoversi comodamente durante il buffet?</p>
            <p>Quanto dura la parte food?</p>
            <p>Quando parte la musica?</p>
            <p>Come vengono gestiti brindisi e torta?</p>
            <p>Cosa comprende davvero il beverage?</p>
          </aside>

          <EventPhoto
            src="/images/events/xtgb6517.webp"
            alt="Sala ZAK Eventi apparecchiata prima dell'arrivo degli ospiti"
            aspect="landscape"
          />

          <h2>Come scegliere senza sbagliare</h2>
          <p>
            Se il tuo obiettivo principale è ballare e stare con gli amici, una formula più fluida può funzionare meglio.
            Se vuoi dare più spazio a famiglia e cena, una formula servita può risultare più coerente. In entrambi i casi,
            confronta tempi, quantità, beverage e servizi inclusi prima del prezzo finale.
          </p>

          <GuideCTA eventHref="/diciottesimi" eventLabel="Scopri i diciottesimi ZAK" />
        </div>
      </section>
      <FinalCTA />
    </>
  );
}

export function ChecklistDiciottesimoGuidePage() {
  return (
    <>
      <Seo {...pageMeta.guideChecklistDiciottesimo} path="/guide/checklist-diciottesimo" />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Guida · Checklist</p>
          <h1>Checklist diciottesimo: cosa organizzare dai 6 mesi prima al giorno della festa.</h1>
          <p>
            Una timeline semplice per evitare di concentrare tutte le decisioni nelle ultime settimane e arrivare alla festa
            con location, invitati, formula, musica e dettagli già sotto controllo.
          </p>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container legal-page__content">
          <p className="eyebrow">Aggiornata il 7 ottobre 2026 · A cura di ZAK Eventi</p>

          <h2>6 mesi prima</h2>
          <p>Definisci budget massimo, numero indicativo di invitati, data preferita e stile generale della festa.</p>

          <h2>4–5 mesi prima</h2>
          <p>Visita le location che ti interessano e confronta disponibilità, spazi, formula, esclusiva, servizi e costi.</p>

          <h2>3 mesi prima</h2>
          <p>Conferma location e formula. Inizia a definire musica, fotografo, allestimento, torta e momenti principali.</p>

          <h2>2 mesi prima</h2>
          <p>Lavora sulla lista invitati definitiva, sugli inviti e sulle eventuali richieste speciali.</p>

          <h2>1 mese prima</h2>
          <p>Conferma i dettagli dell'allestimento, verifica gli orari e rivedi il programma della serata.</p>

          <h2>2 settimane prima</h2>
          <p>Chiudi il numero realistico degli ospiti e segnala eventuali esigenze alimentari o organizzative.</p>

          <h2>La settimana della festa</h2>
          <p>Conferma con il referente location orari, ingresso, musica, torta, servizi e contatti dei fornitori coinvolti.</p>

          <h2>Il giorno della festa</h2>
          <p>Evita di gestire dettagli operativi all'ultimo minuto: la regia dovrebbe essere già chiara e condivisa.</p>

          <aside className="confirmation-note">
            <strong>Le 8 cose che non devono restare aperte</strong>
            <p>Data e orari</p>
            <p>Numero invitati</p>
            <p>Formula food &amp; beverage</p>
            <p>Musica e intrattenimento</p>
            <p>Allestimento</p>
            <p>Foto/video</p>
            <p>Torta e momento finale</p>
            <p>Referente operativo della serata</p>
          </aside>

          <GuideCTA eventHref="/diciottesimi" eventLabel="Organizza il tuo diciottesimo" />
        </div>
      </section>
      <FinalCTA />
    </>
  );
}

export function ComunioneGuidePage() {
  return (
    <>
      <Seo {...pageMeta.guideComunione} path="/guide/come-organizzare-comunione-napoli" />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Guida · Comunione</p>
          <h1>Come organizzare una comunione a Napoli: location, menu, bambini e tempi della giornata.</h1>
          <p>
            Una comunione deve funzionare per il bambino, per la famiglia e per gli invitati. La location giusta è quella
            che rende semplice la gestione della giornata senza trasformarla in una sequenza di decisioni improvvisate.
          </p>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container legal-page__content">
          <p className="eyebrow">Aggiornata il 7 ottobre 2026 · A cura di ZAK Eventi</p>

          <h2>1. Scegli la location partendo dagli invitati</h2>
          <p>
            Valuta dimensione della sala, disposizione dei tavoli, eventuali spazi esterni e facilità di movimento per adulti e bambini.
          </p>

          <h2>2. Decidi se lavorare a pranzo o a cena</h2>
          <p>
            Orario della funzione, età dei bambini, distanza degli invitati e durata desiderata del ricevimento incidono sulla scelta.
          </p>

          <h2>3. Pensa a un menu adatto anche ai bambini</h2>
          <p>
            Prima di definire il menu, chiedi se esistono proposte dedicate ai più piccoli e come vengono gestite eventuali intolleranze.
          </p>

          <h2>4. Non sottovalutare l'intrattenimento</h2>
          <p>
            Se sono presenti molti bambini, considera attività coerenti con spazio e durata della giornata. L'intrattenimento deve aiutare
            l'esperienza, non complicare il servizio.
          </p>

          <h2>5. Allestimento e torta devono avere una linea coerente</h2>
          <p>
            Colori, backdrop, torta e tavolo principale funzionano meglio quando fanno parte della stessa direzione visiva.
          </p>

          <h2>6. Chiedi subito cosa è incluso</h2>
          <p>
            Menu, beverage, allestimento, torta, animazione, fotografo e altri servizi possono essere gestiti in modi diversi.
            Fatti consegnare una proposta leggibile prima di bloccare la data.
          </p>

          <aside className="confirmation-note">
            <strong>Checklist comunione</strong>
            <p>Data e orario funzione</p>
            <p>Numero adulti e bambini</p>
            <p>Formula pranzo/cena</p>
            <p>Menu bambini</p>
            <p>Esigenze alimentari</p>
            <p>Allestimento e torta</p>
            <p>Animazione</p>
            <p>Durata della giornata</p>
          </aside>

          <EventPhoto
            src="/images/events/xtgb5080.webp"
            alt="Allestimento per una comunione reale a ZAK Eventi"
            aspect="landscape"
          />

          <GuideCTA eventHref="/comunioni" eventLabel="Scopri le comunioni ZAK" />
        </div>
      </section>
      <FinalCTA />
    </>
  );
}

export function PrenotazioneDiciottesimoGuidePage() {
  return (
    <>
      <Seo {...pageMeta.guidePrenotazioneDiciottesimo} path="/guide/quanto-prima-prenotare-sala-diciottesimo" />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Guida · Tempi</p>
          <h1>Quanto prima prenotare una sala per un diciottesimo?</h1>
          <p>
            Prima inizi, più scelta hai su data, formula e personalizzazione. Ma il tempo giusto dipende soprattutto dal periodo
            dell'anno e da quanto è rigida la tua data.
          </p>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container legal-page__content">
          <p className="eyebrow">Aggiornata il 7 ottobre 2026 · A cura di ZAK Eventi</p>

          <h2>La regola pratica</h2>
          <p>
            Per una festa importante conviene iniziare a muoversi tra 3 e 6 mesi prima, soprattutto se vuoi un sabato,
            un periodo molto richiesto o una data precisa.
          </p>

          <h2>Quando 1–2 mesi possono bastare</h2>
          <p>
            Se sei flessibile su giorno della settimana, formula e allestimento, potresti trovare disponibilità anche con meno anticipo.
            Ma avrai meno margine per confrontare più location.
          </p>

          <h2>Quando prenotare prima</h2>
          <p>
            Primavera, inizio estate e sabati possono saturarsi più velocemente. Se il compleanno cade in un periodo richiesto,
            verifica le date appena hai un'idea realistica degli invitati.
          </p>

          <h2>Cosa devi sapere prima di bloccare</h2>
          <p>
            Non serve avere già deciso ogni dettaglio. Ti bastano data o finestra di date, numero indicativo di invitati,
            budget e tipo di festa desiderata.
          </p>

          <GuideCTA eventHref="/diciottesimi" eventLabel="Verifica il tuo diciottesimo" />
        </div>
      </section>
      <FinalCTA />
    </>
  );
}

export function AllestimentoDiciottesimoGuidePage() {
  return (
    <>
      <Seo {...pageMeta.guideAllestimentoDiciottesimo} path="/guide/allestimento-diciottesimo-napoli" />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Guida · Allestimento</p>
          <h1>Allestimento diciottesimo a Napoli: cosa scegliere e cosa evitare.</h1>
          <p>
            Un buon allestimento non è la somma di palloncini, luci e backdrop: deve valorizzare ingresso, fotografie,
            torta e atmosfera senza togliere spazio alla festa.
          </p>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container legal-page__content">
          <p className="eyebrow">Aggiornata il 7 ottobre 2026 · A cura di ZAK Eventi</p>

          <h2>Parti da una palette, non da dieci idee</h2>
          <p>
            Due o tre colori coerenti aiutano molto più di una scenografia piena di elementi non collegati tra loro.
          </p>

          <h2>Decidi dove vuoi concentrare l'impatto</h2>
          <p>
            Ingresso, zona torta e photo corner sono i punti che in genere ricevono più attenzione. Non serve riempire ogni parete.
          </p>

          <h2>Chiedi sempre cosa è base e cosa è premium</h2>
          <p>
            Numeri luminosi, strutture, balloon art, fiori, fondali personalizzati ed elementi speciali possono essere inclusi oppure extra.
            Il preventivo deve distinguerli con chiarezza.
          </p>

          <h2>Pensa alle fotografie</h2>
          <p>
            L'allestimento deve funzionare dal vivo ma anche nei momenti che verranno fotografati: ingresso, gruppo, brindisi e torta.
          </p>

          <h2>Lascia spazio alla festa</h2>
          <p>
            Un allestimento troppo invasivo può ridurre passaggi, zona musica o comodità degli ospiti. Prima di approvarlo, verifica ingombri e flussi.
          </p>

          <EventPhoto
            src="/images/events/xtgb3529.webp"
            alt="Allestimento reale per un diciottesimo a ZAK Eventi"
            aspect="landscape"
          />

          <GuideCTA eventHref="/diciottesimi" eventLabel="Scopri gli allestimenti dei diciottesimi" />
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
