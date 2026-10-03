export type ContentStatus = "confirmed" | "placeholder" | "to-confirm";

export type EventType = {
  slug: string;
  title: string;
  description: string;
  moment: string;
  media?: string;
  mediaAlt?: string;
};

export type Service = {
  title: string;
  description: string;
  icon: "map" | "palette" | "utensils" | "music" | "sparkles" | "cake" | "calendar";
  status: ContentStatus;
};

export type GalleryCategory = "Diciottesimi" | "Cerimonie" | "Allestimenti" | "Emozioni";

export type GalleryItem = {
  id: string;
  title: string;
  category: GalleryCategory;
  alt: string;
  mediaType: "image" | "video";
  src?: string;
  poster?: string;
  aspect: "portrait" | "landscape" | "square";
  status: ContentStatus;
};

export type Testimonial = {
  id: string;
  quote?: string;
  name?: string;
  eventType?: string;
  source?: string;
  rating?: number;
  status: ContentStatus;
};
