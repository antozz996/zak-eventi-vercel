# ZAK Eventi — audit SEO tecnico e performance

Data: 8 ottobre 2026 · Dominio: https://www.zakeventi.com

## Risultati

| Verifica | Prima delle modifiche | Dopo le modifiche |
| --- | --- | --- |
| Sitemap indicizzabile | 21 URL presenti; il check ne pretendeva 6 e falliva | 21/21 URL confrontati con le route indicizzabili; sitemap e check coerenti |
| Controllo sito | Si fermava su un’asserzione errata che leggeva `WebSite` come `WebPage` | 23 pagine, 721 riferimenti interni, 21 URL indicizzabili verificati |
| Lighthouse mobile | Produzione prima: score 89; FCP 2,7 s; LCP 3,2 s; TBT 0 ms; CLS 0 | Non misurabile sulla preview protetta: PSI viene reindirizzato al login Vercel |
| INP / dati di campo | Nessun dato CrUX disponibile | Da ricontrollare dopo la preview; il laboratorio Lighthouse non fornisce INP |
| Immagini responsive segnalate | 432.238 byte nelle sei risorse WebP selezionate | 267.627 byte nelle sei varianti AVIF: −164.611 byte (−38,1%); il browser sceglie una sola variante |
| Richieste render-blocking | CSS del sito 9,6 KiB / 170 ms; CSS Google Fonts 1,6 KiB / 750 ms; opportunità totale stimata 1.270 ms | Foglio Google Fonts caricato in modo non bloccante; nessun nuovo dato Lighthouse attribuito alla preview protetta |
| Cache | Produzione: CSS e immagini `max-age=0, must-revalidate` (CDN `HIT`) | Preview verificata: asset hashati 1 anno immutabile; immagini 1 giorno browser/CDN, `stale-while-revalidate=604800` |
| Pixel Meta | Script presente solo dopo opt-in nel codice | Pixel `3132799710244140` assente prima della scelta e dopo rifiuto; nessuna richiesta `facebook.net` osservata nel browser di test |

## Modifiche

- Aggiornato `scripts/check-site.mjs`: genera l’insieme atteso dalle route marcate indexable, pretende 21 URL, confronta URL e ordine della sitemap e verifica `robots.txt`, canonical e nodo schema `WebPage`.
- Corretto il selettore del test JSON-LD: il controllo ora identifica il nodo per tipo schema invece di presumere una posizione fissa nel grafo.
- Rimossa la sincronizzazione dello stato cookie tramite setState sincrono in un effect; il consenso legge lo storage con `useSyncExternalStore`, mantiene un hydration snapshot stabile e consente di riaprire le preferenze.
- Reso non bloccante il foglio Google Fonts; il testo usa i font di sistema mentre i web font vengono caricati.
- Configurata cache browser annuale e immutabile per gli asset con hash in URL e cache giornaliera per immagini a nome stabile, con TTL CDN e stale-while-revalidate.
- Aggiunte varianti AVIF per l’immagine hero e le immagini segnalate da Lighthouse, con fallback WebP e `srcset` responsive. Risparmio calcolato sui file WebP/AVIF di tutte le taglie, non sul trasferimento di una singola visita.
- Quando Google Places non è configurato, l’API recensioni ora restituisce `200 {"configured":false}`; la UI continua a omettere rating e conteggi senza generare l’errore console 503. La risposta positiva reale continua a dipendere dalla configurazione delle credenziali Google.
- Nessun testo, prezzo, servizio, rating o dato geografico nuovo è stato inventato. I dati strutturati preesistenti restano basati sui dati societari/locali del progetto; nessun `aggregateRating` statico viene aggiunto.

## Verifiche live

- DNS pubblico: `zakeventi.com` risolve a `216.198.79.1`; `www.zakeventi.com` è CNAME verso `08902f864ffdd29b.vercel-dns-017.com`. Nessun record AAAA è stato restituito. I domini risultano verificati nel progetto Vercel corretto.
- Redirect: Vercel configura il dominio apex verso `www` con 308; le versioni HTTP passano a HTTPS con 308. La pagina canonica HTTPS `www` restituisce 200 e invia HSTS. La navigazione HTTPS è stata verificata nel browser.
- `robots.txt` e `sitemap.xml`: 200; `robots.txt` dichiara la sitemap corretta; sitemap live con 21 URL.
- Route non esistente: 404 effettivo. Route legali: `noindex, follow` e fuori dalla sitemap.
- Schema: `Organization`, `LocalBusiness`/`EventVenue`, `WebSite`, `WebPage`, `BreadcrumbList` e `Article` per le guide; nessun punteggio recensioni aggregato statico.
- Meta Pixel: con consenso assente, `window.fbq` è `undefined`, nessuno script Meta e nessuna richiesta Meta; dopo rifiuto lo stato `rejected` è persistito e il Pixel resta assente. Il test non ha attivato il tracciamento.
- Preview Vercel del commit `26cd8ac`: root/robots/sitemap/privacy/API/media rispondono con gli stati previsti; sitemap 21 URL; `/missing-preview-route` 404; API non configurata 200 `{configured:false}`; asset AVIF con `image/avif` e cache corretta. Vercel aggiunge `X-Robots-Tag: noindex` al deployment preview.

## Metriche e limiti

Misura PageSpeed Insights mobile della pagina Home live, 8 ottobre 2026 alle 16:23 CEST: Performance 89, Accessibility 96, Best Practices 96, SEO 100. Lighthouse riporta anche risparmio stimato di 135 KiB sulle immagini e 53 KiB di JavaScript non usato. La diagnostica segnalava errore console per la risposta 503 della API recensioni non configurata, corretto nel branch.

INP non era disponibile nei dati CrUX della produzione e il Lighthouse post-change non è attribuibile alla preview: PageSpeed Insights segue il redirect di protezione al login Vercel. L’invio del token temporaneo di accesso al dominio PageSpeed è stato rifiutato dal revisore automatico perché avrebbe esposto un token di bypass a un servizio esterno; non è stato usato un workaround. Non si dichiarano dunque punteggi o CWV “dopo” non misurati. TBT pari a 0 ms è una misura di laboratorio e non sostituisce INP; i punteggi Lighthouse variano tra esecuzioni.

## Controlli di build

- `npm run lint`: superato.
- `npm run typecheck`: superato.
- `npm run build`: superato; 23 pagine prerenderizzate più 404, 21 URL in sitemap.
- `npm run check:site`: superato; 23 pagine, 721 riferimenti, 21 URL indexable/sitemap, routing e validazione modulo.

Il pannello privato DNS Aruba non è stato modificato né interrogato: la verifica DNS è pubblica e il collegamento/verification Vercel risulta attivo. Nessun record DNS, dominio, impostazione di produzione o deployment production è stato modificato.
