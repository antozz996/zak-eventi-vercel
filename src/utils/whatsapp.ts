import { siteConfig } from "../data/siteConfig";

const defaultMessage = "Ciao ZAK, vorrei ricevere informazioni per organizzare un evento.";

export type ContactWhatsAppData = {
  name: string;
  phone: string;
  email?: string;
  eventType?: string;
  eventDate?: string;
  guests?: string;
  message?: string;
};

export function getWhatsAppLink(message = defaultMessage): string | null {
  const number = siteConfig.contact.whatsapp.replace(/\D/g, "");
  if (!number) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function getEventWhatsAppMessage(eventName: string): string {
  return `Ciao ZAK, vorrei ricevere informazioni per ${eventName.toLowerCase()}.`;
}

export function getContactWhatsAppMessage(data: ContactWhatsAppData): string {
  const lines = [
    "Ciao ZAK, vorrei ricevere informazioni per organizzare un evento.",
    "",
    `Nome e cognome: ${data.name}`,
    `Telefono: ${data.phone}`,
    data.email ? `Email: ${data.email}` : "",
    data.eventType ? `Tipologia di evento: ${data.eventType}` : "",
    data.eventDate ? `Data indicativa: ${data.eventDate}` : "",
    data.guests ? `Numero indicativo di invitati: ${data.guests}` : "",
    data.message ? `Messaggio: ${data.message}` : "",
  ];

  return lines.filter((line, index) => line || index === 1).join("\n");
}
