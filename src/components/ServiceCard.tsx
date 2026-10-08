import {
  CalendarCheck,
  CakeSlice,
  MapPinned,
  Music2,
  Palette,
  Sparkles,
  Utensils,
} from "lucide-react";
import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";
import type { Service } from "../types/content";

const icons: Record<Service["icon"], ComponentType<LucideProps>> = {
  map: MapPinned,
  palette: Palette,
  utensils: Utensils,
  music: Music2,
  sparkles: Sparkles,
  cake: CakeSlice,
  calendar: CalendarCheck,
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon];
  return (
    <article className="service-card">
      <Icon aria-hidden="true" strokeWidth={1.25} />
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      {service.status !== "confirmed" && <span className="content-status">Disponibilità da confermare</span>}
    </article>
  );
}
