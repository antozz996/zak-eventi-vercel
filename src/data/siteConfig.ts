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
  heroPoster: "/images/hero/hero-poster-placeholder.svg",
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
    title: "Diciottesimi",
    description: "Un ingresso che racconta chi sei, seguito da una festa costruita intorno al tuo stile.",
    moment: "Ingresso, applausi, festa e torta.",
  },
  {
    slug: "compleanni",
    title: "Compleanni",
    description: "Ogni età ha la sua atmosfera. ZAK dà forma a un momento personale e condiviso.",
    moment: "Abbracci, brindisi e sorprese.",
  },
  {
    slug: "comunioni",
    title: "Comunioni",
    description: "Una giornata luminosa da vivere con la famiglia, con dettagli pensati per l’occasione.",
    moment: "Famiglia, emozione e convivialità.",
  },
  {
    slug: "cerimonie",
    title: "Cerimonie",
    description: "Un ambiente trasformabile per accogliere celebrazioni eleganti e autentiche.",
    moment: "Accoglienza, atmosfera e momenti speciali.",
  },
  {
    slug: "feste-private",
    title: "Feste private",
    description: "Una scena riservata alle persone che vuoi accanto, da immaginare insieme.",
    moment: "Musica, condivisione e libertà.",
  },
  {
    slug: "eventi-personalizzati",
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
  { id: "ingresso", title: "L’ingresso", category: "Emozioni", alt: "Placeholder: ingresso del festeggiato sul tappeto rosso", mediaType: "image", aspect: "portrait", status: "placeholder" },
  { id: "sala", title: "La sala in festa", category: "Allestimenti", alt: "Placeholder: sala ZAK allestita durante un evento", mediaType: "image", aspect: "landscape", status: "placeholder" },
  { id: "diciottesimo", title: "Un diciottesimo in scena", category: "Diciottesimi", alt: "Placeholder: momento emozionale durante un diciottesimo", mediaType: "image", aspect: "square", status: "placeholder" },
  { id: "fontane", title: "Luce e applausi", category: "Emozioni", alt: "Placeholder: fontane luminose durante l’ingresso", mediaType: "video", aspect: "portrait", status: "placeholder" },
  { id: "cerimonia", title: "Dettagli di cerimonia", category: "Cerimonie", alt: "Placeholder: dettaglio elegante di una cerimonia", mediaType: "image", aspect: "landscape", status: "placeholder" },
  { id: "torta", title: "Il momento della torta", category: "Emozioni", alt: "Placeholder: famiglia riunita per il momento della torta", mediaType: "image", aspect: "square", status: "placeholder" },
  { id: "tavola", title: "Atmosfera su misura", category: "Allestimenti", alt: "Placeholder: particolare di un allestimento personalizzato", mediaType: "image", aspect: "portrait", status: "placeholder" },
  { id: "abbraccio", title: "Dopo l’applauso", category: "Diciottesimi", alt: "Placeholder: abbraccio durante un diciottesimo", mediaType: "image", aspect: "landscape", status: "placeholder" },
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
