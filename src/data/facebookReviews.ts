export type FacebookReview = {
  author: string;
  date: string;
  event: string;
  excerpt: string;
  /** Mostrata anche in home. */
  featured?: boolean;
};

/** Dato rilevato dalla sezione Recensioni della pagina Facebook di ZAK Eventi. */
export const facebookSummary = {
  positivePercent: 100,
  reviewCount: 381,
  updatedAt: "8 ottobre 2026",
} as const;

export const facebookReviews: FacebookReview[] = [
  {
    author: "Lucia Di Vaio",
    date: "27 lug",
    event: "Festa di compleanno",
    excerpt: "La location bellissima, cibo ottimo e freschissimo... staff, ragazzi meravigliosi che fanno il proprio lavoro con amore e dedizione.",
  },
  {
    author: "Giovanni Prisco",
    date: "21 giu",
    event: "30° compleanno",
    excerpt: "Qualità del cibo top, prodotti freschi fatti in giornata... pulizia del locale eccellente e staff sempre educato e disponibile.",
  },
  {
    author: "Rossana Tutini",
    date: "17 giu",
    event: "Diciottesimo",
    excerpt: "Un servizio impeccabile, uno staff meraviglioso, per non parlare del buffet stratosferico.",
  },
  {
    author: "Gigi Ilbullo",
    date: "1 giu",
    event: "Battesimo",
    excerpt: "Camerieri e staff impeccabili... accoglienza top e, per poi parlare del mangiare, direi speciale.",
  },
  {
    author: "Angela Ferriero",
    date: "20 mag",
    event: "Evento privato",
    excerpt: "Grande umanità e professionalità... si mangia benissimo, cibo ottimo tutto fresco, e anche il beverage tutto curato nei minimi particolari.",
  },
  {
    author: "Giuseppe Caiazza",
    featured: true,
    date: "18 mag",
    event: "40° compleanno",
    excerpt: "Personale eccellente, ottimo cibo, tutto curato nei minimi dettagli tra cui DJ, fotografo e allestimento della sala.",
  },
  {
    author: "Martyna Gargiulo",
    date: "16 mag",
    event: "Matrimonio",
    excerpt: "Il cibo tutto buono, sala stupenda... Luca e Francesco educati ed accoglienti, hanno esaudito tutte le mie richieste.",
  },
  {
    author: "Marianna Palladino",
    date: "9 mar",
    event: "Diciottesimo",
    excerpt: "Una festa a sorpresa riuscitissima, cibo ottimo, personale professionale ed attento. Rapporto qualità prezzo super.",
  },
  {
    author: "Raffaele Panico",
    date: "8 dic 2025",
    event: "Evento con menu senza glutine",
    excerpt: "Sono celiaco: tutto il menù senza glutine dall'antipasto al dolce, veramente ottimo.",
  },
  {
    author: "Chiara De Fenza",
    featured: true,
    date: "15 set 2025",
    event: "Diciottesimo",
    excerpt: "Allestimento ricco e personalizzato... cibo ottimo, tutto fresco e in grandi quantità. Personale, fotografo, DJ e speaker gentilissimi.",
  },
  {
    author: "Patrizia Manna",
    featured: true,
    date: "16 dic 2025",
    event: "Battesimo",
    excerpt: "Organizzazione curata nei minimi dettagli... cibo ottimo e abbondante, staff gentile, disponibile e sempre attento.",
  },
  {
    author: "Antonio Romano",
    date: "13 dic 2025",
    event: "30° compleanno",
    excerpt: "Evento organizzato nei minimi dettagli... servizio e gestione impeccabili.",
  },
];
