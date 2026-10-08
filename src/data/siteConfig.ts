import type { EventType, GalleryItem, Service, Testimonial } from "../types/content";

export const siteConfig = {
  name: "ZAK Eventi",
  shortName: "ZAK",
  payoff: "Il tuo evento entra in scena.",
  description:
    "ZAK crea, organizza e mette in scena momenti speciali in una location per eventi ad Arzano.",
  locale: "it_IT",
  siteUrl: "https://www.zakeventi.com",
  heroVideo: "",
  heroPoster: "/images/events/ingresso-abito-blu.webp",
  heroPosterMobile: "/images/events/ingresso-abito-blu.webp",
  contact: {
    whatsapp: "393533198020",
    phone: "353 319 8020",
    phoneHref: "tel:+393533198020",
    email: "",
    address: "Via Napoli 270, 80022 Arzano NA",
    openingHours: "Consulta Google Maps per gli orari aggiornati",
    mapEmbedUrl: "",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=ZAK%20Eventi&query_place_id=ChIJFbZ-w5gHOxMR8ZoQF7QAYEA",
  },
  googleReviews: {
    rating: 4.8,
    reviewCount: 149,
    placeId: "ChIJFbZ-w5gHOxMR8ZoQF7QAYEA",
  },
  social: {
    instagram: "",
    facebook: "",
  },
  formEndpoint: "",
  analyticsEnabled: false,
  legal: {
    companyName: "ZERO S.r.l.",
    vatNumber: "08769811210",
    registeredOffice: "Via Napoli 270, 80022 Arzano (NA)",
    pec: "espositosalvatore87@pec.it",
  },
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "La location", href: "/location" },
  { label: "Eventi", href: "/eventi" },
  { label: "Servizi", href: "/servizi" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contatti", href: "/contatti" },
] as const;

export const eventTypes: EventType[] = [
  {
    slug: "diciottesimi",
    media: "/images/events/xtgb3357.webp",
    mediaAlt: "Ingresso del festeggiato tra fontane luminose e ospiti",
    title: "Diciottesimi",
    description: "Un ingresso che racconta chi sei, seguito da una festa costruita intorno al tuo stile.",
    moment: "Ingresso, applausi, festa e torta.",
  },
  {
    slug: "compleanni",
    media: "/images/events/xtgb3320.webp",
    mediaAlt: "Festeggiata in abito rosso accanto alla torta con rose",
    title: "Compleanni",
    description: "Ogni età ha la sua atmosfera. ZAK dà forma a un momento personale e condiviso.",
    moment: "Abbracci, brindisi e sorprese.",
  },
  {
    slug: "comunioni",
    media: "/images/events/xtgb6585.webp",
    mediaAlt: "Famiglia accanto alla torta e all’allestimento esterno",
    title: "Comunioni",
    description: "Una giornata luminosa da vivere con la famiglia, con dettagli pensati per l’occasione.",
    moment: "Famiglia, emozione e convivialità.",
  },
  {
    slug: "battesimi",
    media: "/images/events/xtgb6585.webp",
    mediaAlt: "Famiglia durante una cerimonia con torta e allestimento a ZAK Eventi",
    title: "Battesimi",
    description: "Un ricevimento di famiglia da costruire intorno all'occasione e alle persone che la vivono.",
    moment: "Famiglia, accoglienza e convivialità.",
  },
  {
    slug: "cerimonie",
    media: "/images/events/xtgb0819.webp",
    mediaAlt: "Allestimento con torta e palloncini blu e argento",
    title: "Cerimonie",
    description: "Un ambiente trasformabile per accogliere celebrazioni eleganti e autentiche.",
    moment: "Accoglienza, atmosfera e momenti speciali.",
  },
  {
    slug: "feste-private",
    media: "/images/events/xtgb2648.webp",
    mediaAlt: "Ospiti in cerchio durante la festa nella sala ZAK",
    title: "Feste private",
    description: "Una scena riservata alle persone che vuoi accanto, da immaginare insieme.",
    moment: "Musica, condivisione e libertà.",
  },
  {
    slug: "lauree",
    media: "/images/events/xtgb9908.webp",
    mediaAlt: "Brindisi di gruppo durante una festa reale a ZAK Eventi",
    title: "Lauree",
    description: "Una festa per celebrare un traguardo importante, con una formula da costruire insieme.",
    moment: "Brindisi, persone care e festa.",
  },
  {
    slug: "eventi-personalizzati",
    media: "/images/events/xtgb5080.webp",
    mediaAlt: "Arco di palloncini e torta personalizzata per una comunione",
    title: "Eventi personalizzati",
    description: "Quando l’idea non entra in una categoria, il progetto parte direttamente dal tuo racconto.",
    moment: "Un’esperienza disegnata su misura.",
  },
];

export const experienceSteps = [
  "Ascoltiamo la tua idea",
  "Progettiamo l’atmosfera",
  "Prepariamo ogni dettaglio",
  "Mettiamo in scena il tuo ingresso",
  "Viviamo insieme il momento finale",
] as const;

export const services: Service[] = [
  { title: "Location", description: "Lo spazio e i suoi ambienti, da conoscere durante la visita.", icon: "map", status: "to-confirm" },
  { title: "Progettazione dell’allestimento", description: "Un progetto visivo coerente con l’occasione e con chi la vive.", icon: "palette", status: "to-confirm" },
  { title: "Banqueting", description: "Soluzioni food e beverage da definire in base alla formula scelta.", icon: "utensils", status: "to-confirm" },
  { title: "Musica e DJ", description: "Il ritmo della serata, coordinato con i suoi momenti principali.", icon: "music", status: "to-confirm" },
  { title: "Animazione", description: "Intrattenimento valutato in relazione al tipo di evento.", icon: "sparkles", status: "to-confirm" },
  { title: "Torta e momenti speciali", description: "La regia dei passaggi più attesi, dal brindisi al finale.", icon: "cake", status: "to-confirm" },
  { title: "Coordinamento dell’evento", description: "Una presenza organizzativa lungo il percorso dell’esperienza.", icon: "calendar", status: "to-confirm" },
];

export const serviceJourney = [
  { title: "Consulenza iniziale", text: "Partiamo dalle persone, dall’occasione e da ciò che vuoi far sentire." },
  { title: "Progettazione", text: "Traduciamo l’idea in una direzione visiva e in una sequenza di momenti." },
  { title: "Allestimento", text: "Lo spazio cambia volto attraverso composizioni, luci e dettagli." },
  { title: "Accoglienza", text: "L’esperienza comincia dal modo in cui gli ospiti vengono ricevuti." },
  { title: "Intrattenimento", text: "Musica e animazione seguono il ritmo scelto per la festa." },
  { title: "Food e beverage", text: "La proposta viene definita durante l’appuntamento, in base alla formula." },
  { title: "Coordinamento", text: "I passaggi della giornata vengono raccordati in una regia coerente." },
  { title: "Momenti speciali", text: "Ingresso, brindisi e torta diventano scene da ricordare." },
] as const;

export const galleryItems: GalleryItem[] = [
  {
    "id": "xtgb3344",
    "title": "Il tuo ingresso",
    "category": "Emozioni",
    "alt": "Vista verticale dello stesso ingresso del festeggiato in azzurro tra le fontane.",
    "mediaType": "image",
    "src": "/images/events/xtgb3344.webp",
    "aspect": "portrait",
    "status": "confirmed"
  },
  {
    "id": "xtgb6517",
    "title": "La sala, prima degli ospiti",
    "category": "Allestimenti",
    "alt": "Sala apparecchiata con sedute blu, tavoli tondi, parete vegetale e luci verdi.",
    "mediaType": "image",
    "src": "/images/events/xtgb6517.webp",
    "aspect": "landscape",
    "status": "confirmed"
  },
  {
    "id": "xtgb0046",
    "title": "L’abbraccio che resta",
    "category": "Emozioni",
    "alt": "Abbraccio di gruppo con festeggiata in azzurro e persona in verde.",
    "mediaType": "image",
    "src": "/images/events/xtgb0046.webp",
    "aspect": "landscape",
    "status": "confirmed"
  },
  {
    "id": "xtgb1140",
    "title": "Diciotto candeline",
    "category": "Diciottesimi",
    "alt": "Festeggiato in scuro soffia sulle candeline 18 davanti alla parete vegetale.",
    "mediaType": "image",
    "src": "/images/events/xtgb1140.webp",
    "aspect": "landscape",
    "status": "confirmed"
  },
  {
    "id": "xtgb2618",
    "title": "La sala in festa",
    "category": "Emozioni",
    "alt": "Grande gruppo sorridente in sala con mani alzate e illuminazione rossa.",
    "mediaType": "image",
    "src": "/images/events/xtgb2618.webp",
    "aspect": "landscape",
    "status": "confirmed"
  },
  {
    "id": "xtgb9908",
    "title": "Un brindisi insieme",
    "category": "Emozioni",
    "alt": "Brindisi di gruppo con festeggiata in abito azzurro al centro.",
    "mediaType": "image",
    "src": "/images/events/xtgb9908.webp",
    "aspect": "landscape",
    "status": "confirmed"
  },
  {
    "id": "xtgb6585",
    "title": "Un giorno in famiglia",
    "category": "Cerimonie",
    "alt": "Gruppo familiare accanto a torta bianca e azzurra, fiori e supporti dorati all’esterno.",
    "mediaType": "image",
    "src": "/images/events/xtgb6585.webp",
    "aspect": "landscape",
    "status": "confirmed"
  },
  {
    "id": "xtgb5080",
    "title": "Dettagli di una comunione",
    "category": "Cerimonie",
    "alt": "Allestimento esterno serale con arco di palloncini blu e bianchi, nome e torta Prima Comunione.",
    "mediaType": "image",
    "src": "/images/events/xtgb5080.webp",
    "aspect": "landscape",
    "status": "confirmed"
  },
  {
    "id": "xtgb3531",
    "title": "Il momento della torta",
    "category": "Diciottesimi",
    "alt": "Dettaglio verticale di torta a tre piani con decorazioni azzurre, oro e numero 18.",
    "mediaType": "image",
    "src": "/images/events/xtgb3531.webp",
    "aspect": "portrait",
    "status": "confirmed"
  },
  {
    "id": "xtgb3320",
    "title": "Una festa in rosso",
    "category": "Emozioni",
    "alt": "Festeggiata in abito rosso presso torta con rose, palloncini e fondale dorato.",
    "mediaType": "image",
    "src": "/images/events/xtgb3320.webp",
    "aspect": "portrait",
    "status": "confirmed"
  },
  {
    "id": "xtgb2834",
    "title": "Il tappeto rosso",
    "category": "Emozioni",
    "alt": "Ingresso verticale di festeggiata in abito rosso sul tappeto tra fontane luminose.",
    "mediaType": "image",
    "src": "/images/events/xtgb2834.webp",
    "aspect": "portrait",
    "status": "confirmed"
  },
  {
    "id": "xtgb2648",
    "title": "Il ritmo della festa",
    "category": "Emozioni",
    "alt": "Gruppo di ragazzi in cerchio con braccia sulle spalle, mentre sul fondo si balla.",
    "mediaType": "image",
    "src": "/images/events/xtgb2648.webp",
    "aspect": "landscape",
    "status": "confirmed"
  },
  {
    "id": "xtgb6513",
    "title": "Un altro sguardo sulla sala",
    "category": "Allestimenti",
    "alt": "Vista verticale della sala apparecchiata con sedute blu e banco sul fondo.",
    "mediaType": "image",
    "src": "/images/events/xtgb6513.webp",
    "aspect": "portrait",
    "status": "confirmed"
  },
  {
    "id": "xtgb5807",
    "title": "Dopo l’applauso",
    "category": "Diciottesimi",
    "alt": "Abbraccio sorridente durante la festa, sotto una luce calda e rossa.",
    "mediaType": "image",
    "src": "/images/events/xtgb5807.webp",
    "aspect": "portrait",
    "status": "confirmed"
  },
  {
    "id": "xtgb5086",
    "title": "La prima comunione",
    "category": "Cerimonie",
    "alt": "Bambino in abito scuro davanti a torta con scritta Prima Comunione e palloncini.",
    "mediaType": "image",
    "src": "/images/events/xtgb5086.webp",
    "aspect": "portrait",
    "status": "confirmed"
  },
  {
    "id": "xtgb0819",
    "title": "Blu, argento e luce",
    "category": "Allestimenti",
    "alt": "Festeggiata in abito blu davanti a torta, palloncini blu e argento e supporti dorati.",
    "mediaType": "image",
    "src": "/images/events/xtgb0819.webp",
    "aspect": "portrait",
    "status": "confirmed"
  },
  {
    "id": "xtgb3529",
    "title": "Un allestimento per i diciotto",
    "category": "Allestimenti",
    "alt": "Allestimento esterno per diciottesimo con numeri 1 e 8, torta e cerchi luminosi.",
    "mediaType": "image",
    "src": "/images/events/xtgb3529.webp",
    "aspect": "landscape",
    "status": "confirmed"
  },
  {
    "id": "xtgb3357",
    "title": "Tra luci e applausi",
    "category": "Diciottesimi",
    "alt": "Ingresso del festeggiato in completo azzurro tra ospiti e fontane luminose sul tappeto rosso.",
    "mediaType": "image",
    "src": "/images/events/xtgb3357.webp",
    "aspect": "landscape",
    "status": "confirmed"
  }
];

export const testimonials: Testimonial[] = [
  { id: "review-placeholder-1", status: "placeholder" },
  { id: "review-placeholder-2", status: "placeholder" },
  { id: "review-placeholder-3", status: "placeholder" },
];

export const pageMeta = {
  home: {
    title: "ZAK Eventi — Location per eventi ad Arzano",
    description: "Sala eventi ad Arzano, in Via Napoli 270: diciottesimi, compleanni, comunioni e feste private. Scopri le foto di ZAK e prenota una visita.",
  },
  location: {
    title: "Location per eventi e feste ad Arzano | ZAK Eventi",
    description: "Scopri ZAK Eventi in Via Napoli 270 ad Arzano: sala, allestimenti e feste reali per diciottesimi, compleanni, comunioni, lauree ed eventi privati.",
  },
  eventi: {
    title: "Diciottesimi, compleanni e comunioni ad Arzano | ZAK Eventi",
    description: "Organizza un diciottesimo, compleanno, comunione o festa privata ad Arzano. Esplora le occasioni e richiedi informazioni a ZAK Eventi.",
  },
  diciottesimi: {
    title: "Sala per diciottesimo ad Arzano e Napoli Nord | ZAK Eventi",
    description: "Cerchi una location per un diciottesimo ad Arzano o Napoli Nord? Scopri ZAK Eventi, guarda foto reali di feste e allestimenti e chiedi disponibilità.",
  },
  comunioni: {
    title: "Sala per comunioni ad Arzano e Napoli Nord | ZAK Eventi",
    description: "Organizza una comunione ad Arzano: scopri ZAK Eventi, gli allestimenti e le foto reali delle cerimonie. Chiedi informazioni e disponibilità.",
  },
  battesimi: {
    title: "Sala per battesimi ad Arzano e Napoli Nord | ZAK Eventi",
    description: "Cerchi una sala per un battesimo ad Arzano? Scopri ZAK Eventi, la location e le foto reali delle cerimonie. Chiedi disponibilità e prenota una visita.",
  },
  compleanni: {
    title: "Sala per compleanni ad Arzano e Napoli Nord | ZAK Eventi",
    description: "Cerchi una sala per compleanno ad Arzano o Napoli Nord? Scopri ZAK Eventi, guarda feste reali e chiedi disponibilità per la tua data.",
  },
  "feste-private": {
    title: "Location per feste private ad Arzano | ZAK Eventi",
    description: "Organizza una festa privata ad Arzano: scopri la location ZAK Eventi, le foto reali e una proposta costruita intorno alla tua occasione.",
  },
  lauree: {
    title: "Festa di laurea ad Arzano e Napoli Nord | ZAK Eventi",
    description: "Cerchi una location per una festa di laurea ad Arzano? Scopri ZAK Eventi, guarda la sala e chiedi una proposta per cena, brindisi e festa.",
  },
  servizi: {
    title: "Organizzazione eventi ad Arzano | Servizi ZAK Eventi",
    description: "Scopri il percorso ZAK per organizzare un evento ad Arzano: progettazione, allestimento, intrattenimento, food & beverage e coordinamento da definire nella proposta.",
  },
  percheZak: {
    title: "Perché scegliere ZAK Eventi? Recensioni Google e Facebook",
    description: "Scopri perché scegliere ZAK Eventi attraverso recensioni Google e raccomandazioni Facebook reali: staff, organizzazione, food, atmosfera, allestimento e accoglienza.",
  },
  guide: {
    title: "Guide per organizzare feste ed eventi | ZAK Eventi",
    description: "Guide pratiche ZAK per scegliere location, formula e servizi per diciottesimi, compleanni, comunioni e feste private a Napoli e provincia.",
  },
  guideDiciottesimo: {
    title: "Come scegliere una sala per un diciottesimo a Napoli | ZAK",
    description: "10 controlli da fare prima di prenotare una sala per un diciottesimo a Napoli: invitati, spazi, servizi, food, musica, allestimento, extra e sopralluogo.",
  },
  guideCostoDiciottesimo: {
    title: "Quanto costa un diciottesimo a Napoli? Guida 2026 | ZAK",
    description: "Quanto costa una festa di 18 anni a Napoli? Range di mercato, voci che incidono sul preventivo, costi extra e come confrontare davvero due proposte.",
  },
  guideBuffetCena: {
    title: "Buffet o cena servita per un diciottesimo? | ZAK Eventi",
    description: "Buffet o cena servita per un 18°? Confronta ritmo della festa, servizio, musica, beverage e cosa chiedere alla location prima di scegliere.",
  },
  guideChecklistDiciottesimo: {
    title: "Checklist diciottesimo: cosa organizzare e quando | ZAK",
    description: "Checklist per organizzare un diciottesimo: cosa fare 6 mesi, 3 mesi, 1 mese e una settimana prima della festa senza dimenticare nulla.",
  },
  guideComunione: {
    title: "Come organizzare una comunione a Napoli | Guida ZAK",
    description: "Come organizzare una comunione a Napoli: location, pranzo o cena, menu bambini, intrattenimento, allestimento e domande da fare prima di prenotare.",
  },
  guidePrenotazioneDiciottesimo: {
    title: "Quanto prima prenotare una sala per un 18°? | ZAK Eventi",
    description: "Quanto tempo prima prenotare una sala per un diciottesimo? Scopri quando iniziare, quali periodi si riempiono prima e cosa sapere prima di bloccare la data.",
  },
  guideAllestimentoDiciottesimo: {
    title: "Allestimento diciottesimo a Napoli: guida pratica | ZAK",
    description: "Come scegliere l'allestimento per un diciottesimo a Napoli: palette, zona torta, photo corner, numeri luminosi, balloon art, ingombri ed extra.",
  },
  gallery: {
    title: "Foto della sala e delle feste ad Arzano | ZAK Eventi",
    description: "Guarda le foto reali della sala, degli allestimenti e delle feste di ZAK Eventi ad Arzano. Filtra ingressi, cerimonie, diciottesimi ed emozioni.",
  },
  contatti: {
    title: "Contatti e visita alla sala eventi ad Arzano | ZAK Eventi",
    description: "Contatta ZAK Eventi al 353 319 8020 o su WhatsApp. La sala è in Via Napoli 270, Arzano: chiedi informazioni e prenota una visita.",
  },
} as const;
