# Changelog

## 2026-11-12 - Orari, Instagram e testi in prima persona

- orari pubblicati (tutti i giorni 10:00–20:30, come sulla scheda Google Maps) in /contatti e nei dati strutturati
- collegato il profilo Instagram @zak_eventi nel footer e nei dati strutturati
- riscritti in prima persona i testi su capienza, accessibilità e pacchetti ("dichiarati dalla proprietà" e simili)

## 2026-11-12 - Mappa, FAQ strutturate e pagine in chunk separati

- mappa Google in /contatti caricata solo su richiesta
- coordinate della sede e FAQPage su diciottesimi, comunioni, location e servizi
- hero mobile: pulsante principale visibile sopra il banner cookie
- JavaScript diviso per pagina (bundle iniziale da 105 a 77 KB gzip)

## 2026-11-12 - Conversione, recensioni in home e SEO locale

- unificata l'azione principale su "Chiedi disponibilità" in header, hero, pagine e CTA finale
- aggiunte "Guide" e "Perché ZAK" al menu; nel menu mobile anche WhatsApp e telefono
- portate in home tre raccomandazioni Facebook e il riepilogo "100% su 381"
- banner cookie compatto su mobile (da circa il 35% al 15% dello schermo)
- H1 della home con la località; dati strutturati con area servita e FAQPage sulle pagine evento
- generati `llms.txt` e `lastmod` nella sitemap durante il prerender
- predisposti in `siteConfig` coordinate, orari strutturati e profili social: entrano nello schema quando compilati

## 2026-07-27 - Invio modulo contatti tramite WhatsApp

- configurato il numero WhatsApp ufficiale `+39 353 319 8020`
- collegato il form contatti al generatore WhatsApp centralizzato
- aggiunto riepilogo precompilato con tutti i dati dell’evento
- mantenuta la conferma finale dell’invio dentro WhatsApp

## 2026-07-27 - Dati ufficiali e recensioni Google

- aggiunti telefono, indirizzo, valutazione 4,8 e totale di 145 recensioni
- sostituiti i placeholder recensioni con un riepilogo Google verificato
- predisposto endpoint server-side per Google Places con segreti hosting e cache
- aggiunti attribuzione autore e link diretti richiesti per le recensioni dinamiche
- aggiornati contatti e dati strutturati `EventVenue`

## 2026-07-27 - Packaging per pubblicazione Sites

- aggiunto worker statico con fallback SPA e header di sicurezza
- inclusa la metadata hosting nell’output `dist`
- aggiornato il comando di build per produrre un artefatto distribuibile
- configurati canonical, sitemap, robots e dati strutturati con l’URL pubblico

## 2026-07-27 - Fondazione sito ufficiale ZAK Eventi

- creato il progetto React, TypeScript strict e Vite
- realizzate otto pagine con routing semantico
- aggiunti componenti editoriali, gallery accessibile, form e CTA WhatsApp
- centralizzati contenuti, contatti e stati di conferma
- predisposti SEO, dati strutturati, cookie banner e policy placeholder
- documentati asset e dati mancanti in `CONTENT_TODO.md`
- nessun backend, database, servizio esterno o ambiente di produzione modificato
