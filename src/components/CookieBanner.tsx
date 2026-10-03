import { useState } from "react";
import { Link } from "../lib/router";

const storageKey = "zak-cookie-choice";

export function CookieBanner() {
  const [visible, setVisible] = useState(() => !sessionStorage.getItem(storageKey));

  const choose = (choice: "essential" | "accepted") => {
    sessionStorage.setItem(storageKey, choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside className="cookie-banner" aria-label="Preferenze cookie">
      <div>
        <strong>La tua privacy, senza effetti speciali.</strong>
        <p>
          Al momento il sito non attiva strumenti di tracciamento. Il pannello è predisposto per gestire
          eventuali script futuri solo dopo il consenso. <Link to="/cookie-policy">Cookie Policy</Link>
        </p>
      </div>
      <div className="cookie-banner__actions">
        <button className="button button--text" onClick={() => choose("essential")}>Solo necessari</button>
        <button className="button button--gold" onClick={() => choose("accepted")}>Accetta</button>
      </div>
    </aside>
  );
}
