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
        : event.slug === "battesimi"
          ? "/battesimi"
          : event.slug === "compleanni"
          ? "/compleanni"
          : event.slug === "feste-private"
            ? "/feste-private"
            : event.slug === "lauree"
              ? "/lauree"
              : `/eventi#${event.slug}`;
  return (
    <article className="event-card">
      {event.media ? <EventPhoto src={event.media} alt={event.mediaAlt ?? event.title} aspect="portrait" sizes="(max-width: 559px) calc(100vw - 2.5rem), (max-width: 959px) calc((100vw - 3.5rem) / 2), 33vw" /> : <MediaPlaceholder label={`Foto ${event.title}`} aspect="portrait" />}
      <div className="event-card__shade" />
      <div className="event-card__content">
        <p>{event.moment}</p>
        <h3>{event.title}</h3>
        <Link to={destination} aria-label={`Scopri ${event.title}`}>
          Scopri <ArrowUpRight aria-hidden="true" size={18} />
        </Link>
      </div>
    </article>
  );
}
