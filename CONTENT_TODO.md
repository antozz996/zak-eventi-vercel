# ZAK Eventi — contenuti necessari prima della pubblicazione

Tutti gli elementi di questa lista sono volutamente assenti o marcati come placeholder nel sito. Non pubblicare il progetto come definitivo finché i contenuti non sono stati forniti, verificati e autorizzati.

## Identità

- [ ] Logo originale ZAK in SVG e variante chiara/scura
- [ ] Favicon definitiva
- [ ] Eventuale manuale del marchio

## Foto e video originali

- [ ] Video hero MP4/WebM mobile-first, senza audio, idealmente 8–15 secondi
- [ ] Poster hero 1600 × 1000 px o superiore
- [ ] Ingresso sul tappeto rosso e fontane luminose
- [ ] Festeggiato e applausi degli invitati
- [ ] Sala durante la festa
- [ ] Torta, brindisi e abbraccio finale
- [ ] Foto ampie della location durante eventi reali
- [ ] Ambienti e dettagli architettonici
- [ ] Allestimenti differenti
- [ ] Coppia di immagini “prima/dopo” con la stessa inquadratura
- [ ] Media per: diciottesimi, compleanni, comunioni, cerimonie, feste private, eventi personalizzati
- [ ] Fotografie verticali, panoramiche e dettagli per la gallery
- [ ] Eventuali brevi video verticali autorizzati per la gallery
- [ ] Liberatorie e diritti d’uso per ogni persona riconoscibile

Percorsi previsti: `public/images/hero`, `location`, `events`, `gallery`, `testimonials` e `public/videos`.

## Offerta da confermare

- [ ] Elenco dei servizi effettivamente disponibili
- [ ] Quali servizi sono interni, esterni, opzionali o inclusi nelle singole formule
- [ ] Possibilità reali di personalizzazione della location
- [ ] Capienza e dettagli tecnici eventualmente pubblicabili

Non sono stati inseriti prezzi, pacchetti o affermazioni commerciali non confermate.

## Contatti e presenza online

- [x] Numero WhatsApp in formato internazionale
- [x] Telefono
- [ ] Email
- [x] Indirizzo completo
- [x] URL di ricerca Google Maps
- [ ] Place ID Google ufficiale
- [ ] Coordinate o iframe Google Maps, se approvato
- [ ] Orari di contatto o apertura
- [ ] URL Instagram
- [ ] URL Facebook
- [ ] Dominio personalizzato definitivo (il sito usa temporaneamente il dominio pubblico del provider)

Aggiornare questi valori in `src/data/siteConfig.ts`.

## Fiducia e dati legali

- [x] Valutazione Google ufficiale e numero totale di recensioni
- [ ] Google Place ID e chiave Places API con fatturazione attiva
- [ ] Import dinamico delle singole recensioni tramite Places API
- [ ] Fotografie opzionali associate alle recensioni con autorizzazione
- [ ] Privacy Policy definitiva
- [ ] Cookie Policy definitiva
- [ ] Dati del titolare del trattamento
- [ ] Dati societari e fiscali da mostrare nel footer
- [ ] Termini di conservazione dei dati del modulo

## Funzioni e misurazione

- [ ] Endpoint backend o servizio approvato per il modulo contatti
- [ ] Validazione server-side, anti-spam, rate limiting e gestione errori
- [ ] Email/destinazione delle richieste
- [ ] Variabili hosting `GOOGLE_PLACE_ID` e `GOOGLE_PLACES_API_KEY`
- [ ] Eventuale analytics con configurazione consent-mode
- [ ] Eventuale Meta Pixel
- [ ] Aggiornamento del banner cookie in base agli script realmente attivi
- [ ] Dominio definitivo in canonical, sitemap e robots
- [ ] Immagine Open Graph originale

Analytics e Pixel non sono attivi nel progetto corrente.
