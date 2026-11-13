export type Faq = { q: string; a: string };

/**
 * Domande frequenti mostrate nelle pagine (eventi, location, servizi). La stessa sorgente alimenta
 * il markup FAQPage, così testo visibile e dati strutturati restano allineati.
 */
export const eventFaqs: Record<string, Faq[]> = {
  "/come-raggiungerci": [
    { q: "Dove si trova l'ingresso di ZAK Eventi?", a: "In Via Napoli 270 ad Arzano (NA), al primo piano del centro commerciale." },
    { q: "C'è parcheggio per gli ospiti?", a: "Sì, la location dispone di parcheggio." },
    { q: "Quando posso venire a vedere la sala?", a: "Siamo aperti tutti i giorni dalle 10:00 alle 20:30. Per una visita con il team conviene chiedere disponibilità dalla pagina contatti o su WhatsApp." },
  ],
  "/diciottesimi": [
    { q: "Dove si trova ZAK Eventi?", a: "In Via Napoli 270, 80022 Arzano (NA), nell'area nord di Napoli." },
    { q: "Posso personalizzare la festa?", a: "Sì: il progetto parte dall'idea del festeggiato. Allestimento, servizi e formula vengono definiti durante l'appuntamento e confermati in base alla disponibilità." },
    { q: "Il diciottesimo è in esclusiva?", a: "Sì, ZAK lavora solo con eventi che riservano la sala ai propri ospiti." },
    { q: "Quali servizi comprendono i pacchetti?", a: "I nostri pacchetti prevedono DJ, speaker, fotografo, allestimenti, proposta food & beverage e torta. Le inclusioni esatte sono riepilogate nel preventivo." },
    { q: "Come posso sapere se la data è disponibile?", a: "Puoi contattare ZAK tramite WhatsApp o dalla pagina contatti indicando data, numero indicativo di invitati e tipo di evento." },
  ],
  "/comunioni": [
    { q: "Dove si trova la location?", a: "ZAK Eventi si trova in Via Napoli 270, Arzano (NA), nell'area nord di Napoli." },
    { q: "La comunione può essere organizzata a pranzo o a cena?", a: "Sì, ZAK organizza ricevimenti sia a pranzo sia a cena, secondo disponibilità." },
    { q: "Sono previsti menu bambini e animazione?", a: "Sì, sono disponibili menu bambini personalizzabili e la possibilità di aggiungere animazione." },
    { q: "La comunione può essere personalizzata?", a: "Sì. La direzione dell'allestimento e la formula vengono definite durante l'appuntamento in base alle esigenze della famiglia e alla disponibilità dei servizi." },
    { q: "Come richiedo informazioni?", a: "Puoi scrivere su WhatsApp indicando data indicativa, numero di invitati e le prime esigenze della giornata oppure prenotare un contatto dalla pagina dedicata." },
  ],
  "/location": [
    { q: "Dove si trova la sala?", a: "ZAK Eventi è in Via Napoli 270, 80022 Arzano (NA), nell'area nord di Napoli." },
    { q: "Posso vedere la location prima di decidere?", a: "Sì. Puoi richiedere un appuntamento per vedere gli spazi e parlare direttamente dell'evento che stai organizzando." },
    { q: "Quanti invitati può accogliere ZAK Eventi?", a: "La sala accoglie fino a 150 ospiti. Numero e disposizione vengono concordati in base al tipo di festa." },
    { q: "Ci sono parcheggio e accessi senza barriere?", a: "Sì: abbiamo parcheggio e percorsi senza barriere architettoniche. Per esigenze particolari, parlane con noi prima della visita." },
    { q: "La sala viene configurata sempre allo stesso modo?", a: "No. Disposizione, allestimento e atmosfera vengono valutati in funzione dell'evento e della formula concordata." },
    { q: "Quali eventi posso approfondire sul sito?", a: "Diciottesimi, compleanni, comunioni, lauree e feste private hanno pagine dedicate con foto e informazioni specifiche." },
  ],
  "/servizi": [
    { q: "I servizi elencati sono sempre inclusi?", a: "Lavoriamo sempre con la sala in esclusiva. I nostri pacchetti per diciottesimi comprendono DJ, speaker, fotografo e allestimenti; per ogni altra formula inclusioni ed extra vengono specificati nel preventivo." },
    { q: "Posso partire da un'idea senza avere già deciso la formula?", a: "Sì. Il primo passaggio serve proprio a capire occasione, invitati, atmosfera e priorità prima di definire la proposta." },
    { q: "Posso personalizzare allestimento e momenti della festa?", a: "La personalizzazione viene valutata durante l'appuntamento e costruita in relazione all'evento e ai servizi disponibili." },
    { q: "La visita alla location è gratuita?", a: "Sì, puoi richiedere un sopralluogo gratuito e valutare gli spazi insieme al team." },
    { q: "Come richiedo una proposta?", a: "Puoi usare la pagina contatti o WhatsApp indicando tipo di evento, data indicativa e numero di invitati." },
  ],
  "/compleanni": [
    { q: "Dove si trova ZAK Eventi?", a: "In Via Napoli 270, 80022 Arzano (NA), nell'area nord di Napoli." },
    { q: "Organizzate compleanni di 30, 40, 50 anni e oltre?", a: "Sì. ZAK ospita compleanni per adulti di molte età, compresi 30°, 40°, 50°, 60° e altri traguardi." },
    { q: "La sala è in esclusiva?", a: "Sì, ZAK lavora esclusivamente con eventi a uso riservato della location. La configurazione dipende dal ricevimento." },
    { q: "Posso festeggiare senza una cena completa?", a: "Sì, sono possibili formule più orientate al party, con musica e food & beverage concordati con il team." },
    { q: "Posso aggiungere cocktail o bartender?", a: "Sì. Cocktail e bartender sono opzioni extra a pagamento, da definire nel preventivo." },
    { q: "Il sopralluogo è gratuito?", a: "Sì, puoi richiedere una visita gratuita per vedere gli spazi e discutere l’evento." },
    { q: "Come verifico data e disponibilità?", a: "Scrivi su WhatsApp indicando data, numero indicativo di invitati ed età o tipo di compleanno." },
  ],
  "/feste-private": [
    { q: "Quali feste private posso proporre?", a: "Puoi raccontare l'occasione al team ZAK: la fattibilità e la formula vengono verificate durante l'appuntamento." },
    { q: "La location è ad Arzano?", a: "Sì, ZAK Eventi si trova in Via Napoli 270, Arzano (NA)." },
    { q: "Posso chiedere una proposta personalizzata?", a: "Sì. La proposta viene costruita sull'evento e confermata in base a disponibilità e servizi scelti." },
  ],
  "/lauree": [
    { q: "ZAK ha già ospitato feste di laurea?", a: "Sì. Recensioni pubbliche di clienti descrivono feste di laurea svolte nella location." },
    { q: "Posso organizzare cena e festa nello stesso evento?", a: "La formula desiderata può essere proposta al team e viene confermata durante l'appuntamento in base a disponibilità e servizi." },
    { q: "Come posso chiedere un preventivo?", a: "Scrivi su WhatsApp indicando data, numero indicativo di invitati e come immagini la serata." },
  ],
  "/battesimi": [
    { q: "Dove si trova ZAK Eventi?", a: "In Via Napoli 270, 80022 Arzano (NA), nell'area nord di Napoli." },
    { q: "Si può organizzare un battesimo a pranzo o a cena?", a: "La formula e l'orario desiderati vengono valutati durante l'appuntamento e confermati in base alla disponibilità." },
    { q: "È possibile personalizzare l'allestimento?", a: "Sì, l’allestimento viene concordato con il team in relazione alla proposta e ai servizi disponibili." },
    { q: "È disponibile un menu bambini?", a: "Sì, sono disponibili menu bambini personalizzabili. È possibile concordare anche l’animazione." },
    { q: "La sala è in esclusiva?", a: "Sì, ZAK riserva la location al singolo evento. L’eventuale uso per tutta la giornata richiede un accordo specifico." },
    { q: "Come richiedo disponibilità?", a: "Scrivi su WhatsApp indicando data indicativa, numero di invitati e come immagini il ricevimento." },
  ],
};
