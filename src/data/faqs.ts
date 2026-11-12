export type Faq = { q: string; a: string };

/**
 * Domande frequenti mostrate nelle pagine evento. La stessa sorgente alimenta
 * il markup FAQPage, così testo visibile e dati strutturati restano allineati.
 */
export const eventFaqs: Record<string, Faq[]> = {
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
