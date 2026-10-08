import { Link } from "../lib/router";
import { Seo } from "../components/Seo";
import { siteConfig } from "../data/siteConfig";

export function LegalPage({ type }: { type: "privacy" | "cookie" }) {
  const isPrivacy = type === "privacy";
  const title = isPrivacy ? "Privacy Policy" : "Cookie Policy";

  return (
    <>
      <Seo
        title={`${title} | ZAK Eventi`}
        description={
          isPrivacy
            ? "Informativa sul trattamento dei dati personali del sito ZAK Eventi."
            : "Informativa sull'uso di cookie e strumenti tecnici sul sito ZAK Eventi."
        }
        path={isPrivacy ? "/privacy-policy" : "/cookie-policy"}
        noIndex
      />
      <section className="legal-page">
        <div className="container legal-page__content">
          <p className="eyebrow">Ultimo aggiornamento: 8 ottobre 2026</p>
          <h1>{title}</h1>

          {isPrivacy ? (
            <>
              <p>
                Questa informativa descrive il trattamento dei dati personali degli utenti che visitano
                www.zakeventi.com o contattano ZAK Eventi attraverso i canali messi a disposizione.
              </p>

              <h2>Titolare del trattamento</h2>
              <p>
                Il titolare del trattamento è <strong>{siteConfig.legal.companyName}</strong>, con sede in{" "}
                {siteConfig.legal.registeredOffice}, P.IVA {siteConfig.legal.vatNumber}. Per richieste relative
                alla protezione dei dati è possibile scrivere alla PEC{" "}
                <a href={`mailto:${siteConfig.legal.pec}`}>{siteConfig.legal.pec}</a>.
              </p>

              <h2>Dati trattati</h2>
              <p>
                La navigazione può comportare il trattamento di dati tecnici necessari alla trasmissione,
                sicurezza e corretta erogazione del sito, come indirizzo IP, data e ora della richiesta,
                risorsa richiesta e informazioni tecniche sul browser o dispositivo.
              </p>
              <p>
                Nel modulo contatti l'utente può inserire nome, telefono, email, tipologia e data indicativa
                dell'evento, numero di invitati e un messaggio libero. Il modulo non salva questi dati in un
                database del sito: vengono utilizzati nel browser per preparare un messaggio WhatsApp e sono
                trasmessi soltanto se l'utente prosegue su WhatsApp e conferma l'invio.
              </p>

              <h2>Finalità e basi giuridiche</h2>
              <ul>
                <li>erogare, proteggere e mantenere il sito;</li>
                <li>rispondere a richieste di informazioni, disponibilità, appuntamenti e preventivi;</li>
                <li>gestire eventuali rapporti precontrattuali o contrattuali richiesti dall'utente;</li>
                <li>adempiere a obblighi amministrativi, fiscali o di legge quando applicabili.</li>
              </ul>
              <p>
                Le basi giuridiche sono, a seconda del trattamento, l'esecuzione di misure precontrattuali
                richieste dall'interessato, l'esecuzione di un contratto, l'adempimento di obblighi legali e il
                legittimo interesse alla sicurezza e al corretto funzionamento del sito.
              </p>

              <h2>Conferimento dei dati</h2>
              <p>
                I dati forniti volontariamente per una richiesta di contatto sono utilizzati per gestire la
                richiesta. L'utente può scegliere di non fornire i dati facoltativi; la mancata comunicazione
                dei dati necessari può impedire di rispondere o predisporre correttamente la richiesta.
              </p>

              <h2>Destinatari e servizi esterni</h2>
              <p>
                Con il consenso marketing, Meta Platforms può ricevere dati di navigazione, eventi di interazione e identificativi tecnici per misurare le campagne pubblicitarie. Potrebbero verificarsi trasferimenti internazionali, disciplinati dalle garanzie applicabili. I dati tecnici possono essere trattati dai fornitori dell'infrastruttura di hosting, rete e
                sicurezza nei limiti necessari all'erogazione del servizio. Se l'utente sceglie di aprire
                WhatsApp, Google Maps, Instagram o altri servizi esterni, il trattamento successivo è regolato
                anche dalle informative dei rispettivi fornitori.
              </p>

              <h2>Conservazione</h2>
              <p>
                Il sito non conserva in proprio i dati digitati nel modulo prima dell'invio su WhatsApp.
                Le comunicazioni ricevute attraverso i canali esterni vengono conservate per il tempo necessario
                a gestire la richiesta e l'eventuale rapporto che ne deriva, nonché per i periodi ulteriori
                richiesti da obblighi di legge o necessari alla tutela dei diritti del titolare.
              </p>

              <h2>Trasferimenti internazionali</h2>
              <p>
                Alcuni fornitori tecnologici utilizzati direttamente dall'utente possono trattare dati anche
                fuori dallo Spazio Economico Europeo. In tali casi il trattamento è disciplinato dalle garanzie
                previste dalla normativa applicabile e dalle informative dei rispettivi fornitori.
              </p>

              <h2>Diritti dell'interessato</h2>
              <p>
                Nei casi previsti dal Regolamento (UE) 2016/679, l'interessato può chiedere accesso, rettifica,
                cancellazione, limitazione e portabilità dei dati, nonché opporsi al trattamento. Le richieste
                possono essere inviate alla PEC indicata sopra. Resta il diritto di proporre reclamo al Garante
                per la protezione dei dati personali.
              </p>

              <h2>Aggiornamenti</h2>
              <p>
                L'informativa può essere aggiornata quando cambiano funzionalità, fornitori o trattamenti del
                sito. La data riportata in alto identifica la versione corrente.
              </p>
            </>
          ) : (
            <>
              <p>
                Questa informativa descrive l'uso di cookie e tecnologie analoghe nella configurazione attuale
                di www.zakeventi.com.
              </p>

              <h2>Configurazione attuale</h2>
              <p>
                Il Meta Pixel (ID 3132799710244140) viene utilizzato solo dopo il consenso marketing per misurare visite, visualizzazioni di pagine evento e clic di contatto.
                Non vengono installati prima del consenso strumenti di tracciamento non necessari che richiedano
                il consenso preventivo dell'utente.
              </p>

              <h2>Strumenti tecnici</h2>
              <p>
                Possono essere utilizzate informazioni o tecnologie tecniche strettamente necessarie alla
                trasmissione delle pagine, alla sicurezza, alla gestione della rete e al corretto funzionamento
                dell'infrastruttura. Questi strumenti non sono utilizzati da ZAK Eventi per profilazione o
                pubblicità comportamentale.
              </p>

              <h2>Banner cookie</h2>
              <p>
                Il Meta Pixel richiede il consenso preventivo;
                per questo il sito non presenta un banner di accettazione o rifiuto. Prima dell'eventuale
                attivazione futura di analytics non tecnici, advertising o altri strumenti soggetti a consenso,
                puoi aggiornare la scelta dal pulsante Preferenze cookie. Il rifiuto blocca il caricamento del Pixel e la revoca blocca nuove attività dopo il ricaricamento.
              </p>

              <h2>Link a servizi esterni</h2>
              <p>
                I collegamenti verso WhatsApp, Google Maps, Instagram o altri servizi esterni portano l'utente
                fuori da www.zakeventi.com. I rispettivi servizi possono utilizzare cookie o tecnologie proprie
                secondo le loro informative quando vengono aperti.
              </p>

              <h2>Titolare</h2>
              <p>
                <strong>{siteConfig.legal.companyName}</strong>, {siteConfig.legal.registeredOffice}, P.IVA{" "}
                {siteConfig.legal.vatNumber}. PEC:{" "}
                <a href={`mailto:${siteConfig.legal.pec}`}>{siteConfig.legal.pec}</a>.
              </p>

              <h2>Aggiornamenti</h2>
              <p>
                Questa Cookie Policy viene aggiornata quando cambia la configurazione tecnica del sito.
              </p>
            </>
          )}

          <Link className="button button--dark" to="/contatti">Torna ai contatti</Link>
        </div>
      </section>
    </>
  );
}
