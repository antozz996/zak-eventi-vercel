import { Link } from "../lib/router";
import { WhatsAppButton } from "./WhatsAppButton";

export function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-cta__glow" />
      <div className="container final-cta__content">
        <p className="eyebrow">Il prossimo momento</p>
        <h2>La prossima festa da ricordare potrebbe essere la tua.</h2>
        <p>Vieni a conoscere la location e raccontaci come immagini il tuo evento.</p>
        <div className="button-group">
          <Link className="button button--gold" to="/contatti">Prenota un appuntamento</Link>
          <WhatsAppButton label="Scrivici su WhatsApp" />
        </div>
      </div>
    </section>
  );
}
