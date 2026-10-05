import { ArrowUpRight } from "lucide-react";
import { Link } from "../lib/router";
import { FinalCTA } from "../components/FinalCTA";
import { EventPhoto } from "../components/EventPhoto";
import { Seo } from "../components/Seo";
import { eventTypes, pageMeta } from "../data/siteConfig";
import { getEventWhatsAppMessage, getWhatsAppLink } from "../utils/whatsapp";

export function EventsPage() {
  return (
    <>
      <Seo {...pageMeta.eventi} path="/eventi" />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Eventi</p>
          <h1>Ogni occasione ha il suo modo di entrare in scena.</h1>
          <p>Progettiamo l’atmosfera intorno alla persona, al momento e alle emozioni da condividere.</p>
        </div>
      </section>
      <section className="section section--ivory events-list">
        <div className="container">
          {eventTypes.map((event, index) => {
            const whatsapp = getWhatsAppLink(getEventWhatsAppMessage(event.title));
            return (
              <article id={event.slug} className={`event-detail${index % 2 ? " event-detail--reverse" : ""}`} key={event.slug}>
                <EventPhoto src={event.media!} alt={event.mediaAlt ?? event.title} aspect={index % 3 === 0 ? "portrait" : "landscape"} />
                <div className="event-detail__content">
                  <span className="event-detail__number">0{index + 1}</span>
                  <h2>{event.title}</h2>
                  <p>{event.description}</p>
                  <p className="event-detail__moment">{event.moment}</p>
                  <div className="inline-links">
                    <Link to={`/gallery?filtro=${event.slug === "eventi-personalizzati" ? "Allestimenti" : event.title === "Diciottesimi" ? "Diciottesimi" : event.title === "Cerimonie" || event.title === "Comunioni" ? "Cerimonie" : "Emozioni"}`}>
                      Guarda i momenti <ArrowUpRight aria-hidden="true" size={17} />
                    </Link>
                    {whatsapp ? (
                      <a href={whatsapp} target="_blank" rel="noreferrer">Richiedi informazioni</a>
                    ) : (
                      <Link to="/contatti">Richiedi informazioni</Link>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
