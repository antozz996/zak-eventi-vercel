import { Quote } from "lucide-react";
import type { Testimonial } from "../types/content";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  if (testimonial.status === "placeholder") {
    return (
      <article className="testimonial-card testimonial-card--placeholder">
        <Quote aria-hidden="true" />
        <p>Spazio predisposto per una recensione reale verificata.</p>
        <span>Contenuto da sostituire prima della pubblicazione</span>
      </article>
    );
  }

  return (
    <article className="testimonial-card">
      <Quote aria-hidden="true" />
      <blockquote>{testimonial.quote}</blockquote>
      <p>{testimonial.name} · {testimonial.eventType}</p>
      {testimonial.source && <span>Fonte: {testimonial.source}</span>}
    </article>
  );
}
