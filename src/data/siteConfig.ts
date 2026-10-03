import type { EventType, GalleryItem, Service, Testimonial } from "../types/content";

export const siteConfig = {
  name: "ZAK Eventi",
  shortName: "ZAK",
  payoff: "Il tuo evento entra in scena.",
  description:
    "ZAK crea, organizza e mette in scena momenti speciali in una location per eventi ad Arzano.",
  locale: "it_IT",
  siteUrl: "https://zak-eventi-arzano.antozz9966.chatgpt.site",
  heroVideo: "",
  heroPoster: "/images/events/xtgb0557-hero.webp",
  heroPosterMobile: "/images/events/xtgb0557-hero.webp",
  contact: {
    whatsapp: "393533198020",
    phone: "353 319 8020",
    phoneHref: "tel:+393533198020",
    email: "",
    address: "Via Napoli 270, 80022 Arzano NA",
    openingHours: "Consulta Google Maps per gli orari aggiornati",
    mapEmbedUrl: "",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Zak%20Eventi%20Via%20Napoli%20270%2080022%20Arzano%20NA",
  },
  googleReviews: {
    rating: 4.8,
    reviewCount: 145,
    placeId: "",
  },
  social: {
    instagram: "",
    facebook: "",
  },
  formEndpoint: "",
  analyticsEnabled: false,
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
    description: "Ogni evento merita il suo ingresso. Scopri ZAK Eventi ad Arzano e immagina il tuo momento speciale.",
  },
  location: {
    title: "La location | ZAK Eventi",
    description: "Uno spazio, infinite atmosfere. Scopri la location ZAK Eventi ad Arzano.",
  },
  eventi: {
    title: "Eventi | ZAK Eventi",
    description: "Diciottesimi, compleanni, comunioni, cerimonie e feste private messe in scena da ZAK.",
  },
  servizi: {
    title: "Servizi | ZAK Eventi",
    description: "Dal primo incontro all’ultimo applauso: scopri il percorso di progettazione di un evento ZAK.",
  },
  gallery: {
    title: "Gallery | ZAK Eventi",
    description: "Ingressi, allestimenti ed emozioni vissute negli eventi ZAK.",
  },
  contatti: {
    title: "Contatti | ZAK Eventi",
    description: "Richiedi informazioni o prenota una visita alla location ZAK Eventi ad Arzano.",
  },
} as const;
