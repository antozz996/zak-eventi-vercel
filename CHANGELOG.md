# Changelog

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
