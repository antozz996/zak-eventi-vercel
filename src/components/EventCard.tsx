import { ArrowUpRight } from "lucide-react";
import { Link } from "../lib/router";
import type { EventType } from "../types/content";
import { MediaPlaceholder } from "./MediaPlaceholder";
import { EventPhoto } from "./EventPhoto";

export function EventCard({ event }: { event: EventType }) {
  const destination =
    event.slug === "diciottesimi"
      ? "/diciottesimi"
      : event.slug === "comunioni"
        ? "/comunioni"
        : `/eventi#${event.slug}`;
  return (
    <article className="event-card">
      {event.media ? <EventPhoto src={event.media} alt={event.mediaAlt ?? event.title} aspect="portrait" /> : <MediaPlaceholder label={`Foto ${event.title}`} aspect="portrait" />}
      <div className="event-card__shade" />
      <div className="event-card__content">
        <p>{event.moment}</p>
        <h3>{event.title}</h3>
        <Link to={destination}>
          Scopri <ArrowUpRight aria-hidden="true" size={18} />
        </Link>
      </div>
    </article>
  );
}
