# ZAK Eventi — sito ufficiale

Sito editoriale, emozionale e mobile-first per ZAK Eventi, location per feste ed eventi ad Arzano. Il concept creativo è “Il tuo evento entra in scena”: l’esperienza mette al centro le persone e i momenti vissuti, non una sala vuota.

Il progetto è pronto per ricevere gli asset originali e, in futuro, contenuti da CMS. Non contiene prezzi, recensioni, recapiti o servizi presentati come confermati quando non disponibili.

## Stack

- React 19
- TypeScript strict
- Vite
- React Router
- CSS custom properties e componenti responsive
- Lucide React per icone lineari
- ESLint

## Avvio locale

Richiede Node.js 20 o successivo.

```bash
npm install
npm run dev
```

Vite mostrerà l’URL locale, normalmente `http://localhost:5173`.

## Verifiche

```bash
npm run lint
npm run typecheck
npm run build
npm run preview
```

Con il server di preview attivo sulla porta `4173`, il controllo browser responsive si esegue con:

```bash
npm run check:visual
```

Il comando emula 360, 390, 430 px, tablet, desktop e schermo ampio, verifica l’overflow e salva alcune catture in `screenshots/`.

## Struttura

```text
src/
  components/       componenti UI e funzionali riutilizzabili
  data/             contenuti e configurazione centralizzati
  pages/            pagine associate alle rotte
  styles/           design token e stile responsive
  types/            modelli TypeScript pronti per CMS
  utils/            helper, incluso il generatore WhatsApp
public/
  images/
    hero/
    location/
    events/
    gallery/
    testimonials/
  videos/
  logos/
  icons/
```

## Pagine

- `/`
- `/location`
- `/eventi`
- `/servizi`
- `/gallery`
- `/contatti`
- `/privacy-policy`
- `/cookie-policy`

## Sostituire testi e dati

I dati modificabili sono raccolti in `src/data/siteConfig.ts`: configurazione del sito, navigazione, tipologie di evento, servizi, percorso, gallery, recensioni e SEO.

I campi non confermati usano stringhe vuote, indicazioni “da confermare” oppure `status: "placeholder"` / `"to-confirm"`. Mantenere questo stato finché il cliente non approva il contenuto.

## Aggiungere immagini e video

1. Copiare file originali e autorizzati nella cartella `public` appropriata.
2. Preferire AVIF/WebP per le immagini e MP4/WebM compressi per i video.
3. Inserire i percorsi nei record in `src/data/siteConfig.ts`.
4. Scrivere alt text descrittivi legati al momento raffigurato.
5. Per il video hero impostare `heroVideo` e sostituire `heroPoster`.

La gallery supporta immagini e video, lazy loading, formati diversi, filtro in URL e lightbox da tastiera.

## Contatti e WhatsApp

I recapiti sono centralizzati in `siteConfig.contact`. Il numero WhatsApp è memorizzato in formato internazionale, senza essere ripetuto nei componenti.

La funzione `getWhatsAppLink` in `src/utils/whatsapp.ts` genera il link e codifica il messaggio. Supporta sia il messaggio generale sia messaggi contestuali per tipo di evento.

## Recensioni Google

Il riepilogo ufficiale usa i valori confermati in `siteConfig.googleReviews`. Il componente `GoogleReviews` prova inoltre a leggere `/api/google-reviews`; il worker interroga Google Places lato server e non espone la chiave nel browser.

Per attivare le singole recensioni dinamiche nel provider hosting servono:

- `GOOGLE_PLACE_ID`: Place ID ufficiale di ZAK Eventi;
- `GOOGLE_PLACES_API_KEY`: chiave con Places API (New) e fatturazione abilitate.

La chiave deve essere salvata come segreto nell’hosting, mai in `.env` versionati o nel codice. L’endpoint richiede soltanto i campi necessari e applica una cache di un’ora. La UI conserva attribuzione autore, link alla singola recensione e link Google Maps.

## Modulo contatti

Il modulo esegue validazione client-side, compone un riepilogo con tutti i campi e apre WhatsApp sul numero ufficiale ZAK. Il browser non dichiara mai il messaggio inviato: l’utente deve confermare l’invio nell’app o in WhatsApp Web.

Non viene usato un backend per questo flusso. Se in futuro si vorranno anche archiviazione CRM, notifiche email o automazioni, serviranno endpoint HTTPS, validazione server-side, protezione anti-spam e gestione della conservazione.

## SEO

Titolo e descrizione vengono aggiornati per pagina. Sono predisposti Open Graph, Twitter Card, canonical, dati strutturati `EventVenue`, `robots.txt` e sitemap.

Canonical, sitemap e robots usano l’URL pubblico del provider. Se viene collegato un dominio personalizzato, aggiornare `siteConfig.siteUrl`, `public/sitemap.xml`, `public/robots.txt` e il dato strutturato in `index.html`.

## Privacy, cookie e analytics

Le pagine legali sono placeholder in `noindex`. Nessun analytics, Meta Pixel o tracciamento non essenziale è attivo. Il banner salva una scelta di sessione ed è predisposto per una futura gestione degli script dopo consenso.

Testi legali e logica cookie devono essere adeguati ai servizi realmente configurati e validati prima della pubblicazione.

## Deploy futuro

Il comando `npm run build` produce anche `dist/server/index.js`, un worker statico con fallback SPA, e copia la metadata del progetto in `dist/.openai/hosting.json`. Questo rende l’output compatibile con il provider Sites/Vercel usato dal progetto.

Per future pubblicazioni:

1. eseguire lint, typecheck e build;
2. impostare dominio e variabili del backend form;
3. verificare canonical, sitemap, Open Graph e policy;
4. salvare una nuova versione Sites associata al commit sorgente;
5. distribuire la versione salvata in produzione.

Il worker incorpora gli asset generati e restituisce `index.html` per le rotte client-side.


## Deploy su Vercel

Importare il repository GitHub come progetto Vercel. `vercel.json` configura la build Vite, le pagine interne e gli header. L’endpoint `api/google-reviews.js` mantiene le recensioni Google. Per abilitarle impostare `GOOGLE_PLACES_API_KEY` e `GOOGLE_PLACE_ID` tra le variabili server di Vercel, senza inserirle nel codice. In assenza di queste variabili resta disponibile lo stato non configurato previsto dal sito.
