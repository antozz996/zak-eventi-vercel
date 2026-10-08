# ZAK Eventi — audit SEO e performance (8 ottobre 2026)

## Sintesi esecutiva

La sitemap pubblicata risponde con HTTP 200 e contiene già **21 URL indicizzabili**. Il controllo automatico era rimasto fermo a 6 e quindi segnalava un falso errore. La correzione proposta allinea il controllo alle route del progetto: confronta gli URL esatti con tutte le route senza `noindex`, rifiuta duplicati e origini diverse e mantiene l’atteso progettuale di 21.

Nessuna modifica è stata applicata al DNS o alla configurazione Vercel. Non ho modificato testi, servizi, recensioni o dati aziendali: il materiale esistente contiene già dettagli locali e contenuti per le occasioni, e non ho trovato informazioni verificabili aggiuntive da inserire.

## Confronto prima/dopo

| Controllo | Prima (main / sito pubblico) | Dopo (branch) |
| --- | --- | --- |
| Sitemap pubblicata | HTTP 200, XML valido, 21 URL; 21 route indicizzabili | Nessun cambio alla sitemap; controllo esatto route↔sitemap |
| Test sitemap | Assertion rigida `6`; errore nonostante 21 URL corretti | Calcola le route `noindex`, verifica origine, unicità e corrispondenza completa; atteso 21 |
| Policy noindex | Privacy e cookie escluse dalla sitemap | La verifica le continua a escludere e rifiuta qualunque route noindex |
| Metadati Home | Title, description, canonical, robots e JSON-LD presenti nell’HTML | Nessuna modifica ai metadati; non è emerso un difetto verificabile |
| Prestazioni / CWV | Bundle main: JS 348,87 kB (100,49 kB gzip), CSS 37,99 kB (8,14 kB gzip). LCP/INP non misurabili; CLS 0 in finestra passiva breve | Bundle: JS 348,99 kB (100,51 kB gzip), CSS invariato. Lieve aumento del bundle legato alla lettura SSR-safe del consenso; LCP/INP restano senza misura affidabile |

## Risultati raccolti

### DNS, TLS e redirect

- I record NS pubblici indicano Aruba: `dns.technorail.com`, `dns2.technorail.com`, `dns3.arubadns.net`, `dns4.arubadns.cz`.
- Il record A di `zakeventi.com` risolve a `216.198.79.1`.
- `www.zakeventi.com` è CNAME verso `08902f864ffdd29b.vercel-dns-017.com`, che risolve a `216.198.79.1` e `64.29.17.1`.
- Il record MX pubblicato è `10 mx.zakeventi.com`. Il resolver pubblico interrogato non ha restituito record TXT per il dominio.
- Vercel associa entrambi i domini al progetto e li segna verificati. I certificati per `www` e dominio apex sono attivi con rinnovo automatico; il browser ha completato la navigazione HTTPS in un contesto sicuro.
- `https://zakeventi.com` restituisce 308 verso `https://www.zakeventi.com`; l’apex è configurato in Vercel con redirect 308.
- La navigazione da `http://zakeventi.com` osservata passa per due 308: prima HTTPS sull’apex, poi HTTPS su `www`. È un hop aggiuntivo; non ho trovato una modifica sicura, verificabile e supportata dal connettore che lo rimuova senza cambiare la gestione del dominio.

### Indicizzazione e on-page

- `/robots.txt`: HTTP 200, consente il crawling e dichiara la sitemap canonica.
- `/sitemap.xml`: HTTP 200, `application/xml`, 21 URL canonici con `lastmod` 7 ottobre 2026; non include privacy/cookie.
- Le 21 URL corrispondono alle route indicizzabili; le due route legali sono escluse dal sitemap e gestite come noindex nel codice.
- Home live: titolo “ZAK Eventi — Location per eventi ad Arzano”; description menziona sala eventi, Arzano, Via Napoli 270 e le occasioni; canonical `https://www.zakeventi.com/`; robots `index, follow, max-image-preview:large`; un solo H1.
- JSON-LD della Home include Organization, LocalBusiness/EventVenue, WebSite e WebPage con indirizzo e telefono coerenti con i dati del progetto. Non pubblica aggregateRating statico.
- Una ricerca pubblica `site:www.zakeventi.com` non ha restituito risultati nello strumento disponibile. È un indizio inconcludente, non una prova di deindicizzazione: qui non è disponibile Search Console per controllare copertura, sitemap acquisita, canonical scelto da Google o richieste di indicizzazione.

### Pixel e consenso

- Il codice contiene Pixel ID **3132799710244140**.
- L’inizializzazione e gli eventi sono subordinati a `zak-marketing-consent=accepted`; il fallback se lo storage non è disponibile rimane non tracciato.
- La sessione browser esaminata aveva consenso marketing `rejected`: nessuna risorsa o richiesta verso Facebook/Meta era presente nel campione di rete.
- Il codice disabilita la raccolta automatica Meta prima dell’inizializzazione. Non ho accettato il consenso per non generare eventi di tracciamento reali.

### Performance, immagini, CSS e JS

- Campione mobile in viewport 390×844: DOMContentLoaded circa 514 ms e load circa 626 ms nella navigazione osservata; la sessione aveva già visitato il sito e le risorse potevano essere in cache. Non è un confronto Lighthouse prima/dopo.
- Bundle build Vercel: baseline main JS 348,87 kB (100,49 kB gzip), CSS 37,99 kB (8,14 kB gzip); branch JS 348,99 kB (100,51 kB gzip), CSS invariato. L’aumento misurato è 0,12 kB raw / 0,02 kB gzip.
- Il browser non ha fornito una misura affidabile di LCP o INP in quel campione. Il valore CLS osservato è 0 nella finestra passiva di circa 2,5 secondi, senza interazioni: non è una misura RUM/Core Web Vitals e non permette un confronto prima/dopo.
- Nel campione desktop iniziale, la navigation entry riportava circa 660 ms a DOMContentLoaded e 806 ms a load; il trasferimento della sola navigazione HTML era circa 7,2 kB. Questi dati non sono un Lighthouse score né un peso pagina completo.
- La copertina usa WebP responsive, la variante mobile `-720.webp` era selezionata a 390 px; le immagini non iniziali sono lazy. CSS e JS arrivano da asset statici Vercel con nomi hash. Non ho cambiato bundle, immagini o caching perché non è emersa una regressione misurabile da correggere in questa modifica.
- L’endpoint recensioni restituisce 503 nel sito pubblico. Il repository documenta che Google Places non è configurato e che il 503 è il fallback previsto; rating statici non sono esposti nel JSON-LD.

## Verifiche su branch e preview

La build Vercel sul branch esegue in sequenza `lint`, `typecheck`, `build` e `check:site`; tutti e quattro sono passati sul commit `60dbcc67b5a6d801b5e23bac6a3e793c87e53f23`.

- `lint`: superato dopo aver spostato la lettura della preferenza cookie a `useSyncExternalStore`, eliminando il `setState` nell’effetto.
- `typecheck`: superato (`tsc -b --pretty false`).
- `build`: superato; prerender di 23 pagine + 404 e 21 URL sitemap.
- `check:site`: superato, 23 pagine, 721 link interni controllati, 21 URL sitemap, routing e validazione modulo superati.
- Smoke test browser sulla preview: robots e sitemap HTTP 200; 23/23 route con HTTP 200, title, canonical, un H1, JSON-LD valido e robots coerenti (21 indicizzabili, 2 policy noindex).
- Preview senza preferenza salvata: nessuna richiesta verso Facebook/Meta.

Il primo tentativo del gate ha trovato un problema preesistente in `CookieBanner.tsx`; il successivo ha trovato una assertion che confrontava l’URL del nodo `WebSite` con quello della pagina. Entrambi sono stati corretti e l’intera sequenza è passata al rilancio.

La Lighthouse/CrUX API di PageSpeed ha restituito HTTP 429 con quota giornaliera impostata a 0; non sono disponibili risultati affidabili LCP/INP né dati Search Console. I comandi sono stati eseguiti nel build Vercel collegato al repository remoto: il mirror locale di questo progetto non contiene il checkout del repository e le cartelle `sources/` sono read-only.

## Azione fuori codice consigliata

Collegare Search Console al proprietario del dominio per verificare l’indicizzazione reale e l’elaborazione delle 21 URL. La ricerca pubblica non sostituisce i dati di copertura. Valutare l’hop HTTP apex→HTTPS apex→www dopo la preview; DNS e redirect di produzione non sono stati modificati in questo audit.
