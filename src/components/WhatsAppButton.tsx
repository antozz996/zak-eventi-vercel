import { trackGoogleAnalyticsContact } from "../lib/googleAnalytics";
import { trackMetaContact } from "../lib/metaPixel";
import { MessageCircle } from "lucide-react";
import { Link } from "../lib/router";
import { getWhatsAppLink } from "../utils/whatsapp";

export function WhatsAppButton({ message, label = "WhatsApp", fixed = false }: { message?: string; label?: string; fixed?: boolean }) {
  const href = getWhatsAppLink(message);
  const className = fixed ? "whatsapp-button whatsapp-button--fixed" : "button button--whatsapp";

  if (!href) {
    return (
      <Link className={className} to="/contatti" aria-label={`${label}. Numero WhatsApp in attesa di configurazione.`}>
        <MessageCircle aria-hidden="true" />
        <span>{label}</span>
      </Link>
    );
  }

  return (
    <a
      className={className}
      href={href}
      onClick={() => {
        trackGoogleAnalyticsContact("whatsapp", fixed ? "floating_button" : "whatsapp_button");
        trackMetaContact("whatsapp");
      }}
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}
