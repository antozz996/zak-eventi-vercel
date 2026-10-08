import { trackGoogleAnalyticsContact } from "../lib/googleAnalytics";
import { trackMetaContact } from "../lib/metaPixel";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "../lib/router";
import { validateContact } from "../utils/contactValidation";
import { eventTypes } from "../data/siteConfig";
import { getContactWhatsAppMessage, getWhatsAppLink } from "../utils/whatsapp";

type FormErrors = Partial<Record<string, string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [notice, setNotice] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors = validateContact(data);
    const email = String(data.get("email") ?? "").trim();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setNotice("Controlla i campi evidenziati.");
      requestAnimationFrame(() => form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus());
      return;
    }

    setNotice("");
    const eventSlug = String(data.get("eventType") ?? "");
    const eventType = eventTypes.find((item) => item.slug === eventSlug)?.title;
    const rawDate = String(data.get("date") ?? "");
    const eventDate = rawDate
      ? new Intl.DateTimeFormat("it-IT").format(new Date(`${rawDate}T00:00:00`))
      : "";
    const whatsappMessage = getContactWhatsAppMessage({
      name: String(data.get("name") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      email,
      eventType,
      eventDate,
      guests: String(data.get("guests") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    });
    const whatsappLink = getWhatsAppLink(whatsappMessage);

    if (!whatsappLink) {
      setNotice("Il numero WhatsApp non è configurato. Contatta ZAK telefonicamente.");
      return;
    }

    trackGoogleAnalyticsContact("form_whatsapp", "contact_form");
    trackMetaContact("form_whatsapp");
    window.location.assign(whatsappLink);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="name">Nome e cognome *</label>
        <input id="name" name="name" required maxLength={100} autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />
        {errors.name && <span id="name-error" className="field-error">{errors.name}</span>}
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="phone">Telefono *</label>
          <input id="phone" name="phone" required maxLength={30} type="tel" inputMode="tel" autoComplete="tel" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined} />
          {errors.phone && <span id="phone-error" className="field-error">{errors.phone}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" maxLength={200} type="email" inputMode="email" autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />
          {errors.email && <span id="email-error" className="field-error">{errors.email}</span>}
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="eventType">Tipologia di evento</label>
          <select id="eventType" name="eventType" defaultValue="">
            <option value="" disabled>Seleziona</option>
            {eventTypes.map((item) => <option key={item.slug} value={item.slug}>{item.title}</option>)}
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="date">Data indicativa</label>
          <input id="date" name="date" type="date" aria-invalid={Boolean(errors.date)} aria-describedby={errors.date ? "date-error" : undefined} />
          {errors.date && <span id="date-error" className="field-error">{errors.date}</span>}
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="guests">Numero indicativo di invitati</label>
        <input id="guests" name="guests" type="number" min="1" step="1" inputMode="numeric" aria-invalid={Boolean(errors.guests)} aria-describedby={errors.guests ? "guests-error" : undefined} />
        {errors.guests && <span id="guests-error" className="field-error">{errors.guests}</span>}
      </div>
      <div className="form-field">
        <label htmlFor="message">Raccontaci il tuo evento</label>
        <textarea id="message" name="message" rows={5} maxLength={1500} />
      </div>
      <p className="form-caption">I dati vengono inseriti nel messaggio WhatsApp e non salvati dal modulo sul sito. <Link to="/privacy-policy">Informazioni sulla privacy</Link>.</p>
      <button className="button button--gold" type="submit">
        <MessageCircle aria-hidden="true" size={18} />
        Continua su WhatsApp
      </button>
      {notice && <p className="form-notice" role="status">{notice}</p>}
      <p className="form-caption">
        * Campi obbligatori. Il modulo apre WhatsApp con i dati precompilati: il messaggio viene inviato soltanto quando confermi dentro WhatsApp.
      </p>
    </form>
  );
}
