import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "../components/ContactForm";
import { Seo } from "../components/Seo";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { pageMeta, siteConfig } from "../data/siteConfig";

export function ContactPage() {
  return (
    <>
      <Seo {...pageMeta.contatti} path="/contatti" />
      <section className="page-hero page-hero--contact">
        <div className="container">
          <p className="eyebrow">Contatti</p>
          <h1>Raccontaci come immagini il tuo evento.</h1>
          <p>Il primo incontro serve a conoscersi, vedere la location e dare una direzione alla tua idea.</p>
        </div>
      </section>
      <section className="section section--ivory">
        <div className="container contact-layout">
          <div className="contact-copy">
            <p className="eyebrow">Prenota una visita</p>
            <h2>Cominciamo dalla tua storia.</h2>
            <p>Compila il modulo: apriremo WhatsApp con la tua richiesta pronta da inviare. Per parlare direttamente con noi, chiamaci o scrivici.</p>
            <ul className="contact-details">
              <li><MapPin aria-hidden="true" /><div><strong>Indirizzo</strong><span>{siteConfig.contact.address}</span></div></li>
              <li>
                <Phone aria-hidden="true" />
                <div>
                  <strong>Telefono</strong>
                  <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>
                </div>
              </li>
              {siteConfig.contact.email && <li><Mail aria-hidden="true" /><div><strong>Email</strong><a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></div></li>}
              <li><Clock aria-hidden="true" /><div><strong>Orari</strong><span>{siteConfig.contact.openingHours}</span></div></li>
            </ul>
            <WhatsAppButton label="Scrivici su WhatsApp" />
          </div>
          <ContactForm />
        </div>
      </section>
      <section className="map-placeholder">
        {siteConfig.contact.mapEmbedUrl ? (
          <iframe title="Mappa ZAK Eventi" src={siteConfig.contact.mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        ) : (
          <div>
            <MapPin aria-hidden="true" />
            <strong>ZAK Eventi · Arzano</strong>
            <span>{siteConfig.contact.address}</span>
            <a
              className="button button--gold"
              href={siteConfig.contact.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Apri in Google Maps
            </a>
          </div>
        )}
      </section>
    </>
  );
}
