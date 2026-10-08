# Verifica visiva ZAK — 8 ottobre 2026

Controllo in browser di tutte le 23 pagine, prima desktop (1363 px), poi mobile (390 px), con scorrimento dall'inizio al footer. Ricontrollo della versione corretta a 1280, 320, 390 e 430 px. Le larghezze mobile sono viewport di browser, non telefoni fisici.

## Correzioni

- Home: ritaglio della foto desktop per mantenere il volto visibile; gradiente nell'header per leggere la navigazione.
- Pagine interne: titoli proporzionati allo schermo e link leggibili sulle sezioni scure.
- Eventi: testo descrittivo e numerazione con contrasto adeguato.
- Diciottesimi: sei pulsanti delle guide separati e a larghezza piena su mobile; nessuna parola spezzata lettera per lettera.
- Gallery: tutti i filtri visibili su più righe; colonne senza espansione dovuta alle immagini; anteprima mobile più ampia con controlli inferiori.
- Menu e anteprima: banner e preferenze cookie nascosti durante l'apertura, senza modificare il consenso.
- Guide: spazio tra fotografie e testo, interlinea dei titoli.
- Servizi e footer: testo più leggibile; footer desktop a tre colonne quando non contiene social; pulsante preferenze cookie di almeno 44 px.

## Pagine controllate

| Pagina | Desktop | Mobile |
| --- | --- | --- |
| / | Controllata | Controllata |
| /gallery | Controllata | Controllata |
| /guide | Controllata | Controllata |
| /cookie-policy | Controllata | Controllata |
| /privacy-policy | Controllata | Controllata |
| /location | Controllata | Controllata |
| /lauree | Controllata | Controllata |
| /diciottesimi | Controllata | Controllata |
| /battesimi | Controllata | Controllata |
| /eventi | Controllata | Controllata |
| /servizi | Controllata | Controllata |
| /perche-scegliere-zak | Controllata | Controllata |
| /feste-private | Controllata | Controllata |
| /compleanni | Controllata | Controllata |
| /contatti | Controllata | Controllata |
| /comunioni | Controllata | Controllata |
| /guide/allestimento-diciottesimo-napoli | Controllata | Controllata |
| /guide/quanto-prima-prenotare-sala-diciottesimo | Controllata | Controllata |
| /guide/buffet-o-cena-servita-diciottesimo | Controllata | Controllata |
| /guide/come-organizzare-comunione-napoli | Controllata | Controllata |
| /guide/quanto-costa-diciottesimo-napoli | Controllata | Controllata |
| /guide/checklist-diciottesimo | Controllata | Controllata |
| /guide/come-scegliere-sala-diciottesimo-napoli | Controllata | Controllata |

## Verifica

- Ricontrollate 92 combinazioni pagina/larghezza dopo il caricamento; nessuna eccedenza orizzontale persistente.
- Filtri della galleria, apertura, cambio fotografia e chiusura dell'anteprima verificati.
- Menu verificato anche a 320 × 568; impostazioni cookie nascoste durante l'apertura.
- Nessuna immagine caricata e visibile risultata rotta durante la navigazione completa.
- Lint, TypeScript, build e controlli del sito superati: 23 pagine più 404, 21 URL sitemap e 885 collegamenti interni.
- Il modulo contatti non è stato inviato, per evitare richieste di prova al personale.

L'harness per le viewport è presente solo nel ramo QA e non viene pubblicato su main.
