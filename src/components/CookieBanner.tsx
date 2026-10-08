import { useState, useSyncExternalStore } from "react";
import { Link } from "../lib/router";
import { setMarketingConsent } from "../lib/metaPixel";

type ConsentState = "checking" | "unknown" | "accepted" | "rejected";

function getStoredChoice(): ConsentState {
  try {
    const stored = localStorage.getItem("zak-marketing-consent");
    return stored === "accepted" || stored === "rejected" ? stored : "unknown";
  } catch {
    return "unknown";
  }
}

function subscribeToConsent(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

export function CookieBanner() {
  // The server and first hydration render match; the client then reads storage.
  const choice = useSyncExternalStore<ConsentState>(
    subscribeToConsent,
    getStoredChoice,
    () => "checking",
  );
  const [reopen, setReopen] = useState(false);
  const open = choice === "unknown" || reopen;

  return (
    <>
      {open && (
        <div className="zak-consent" role="dialog" aria-label="Preferenze cookie">
          <strong>La tua privacy</strong>
          <p>
            Usiamo tecnologie necessarie al sito. Solo con il consenso attiviamo Meta Pixel
            per misurare visite e interazioni pubblicitarie. Puoi modificare la scelta quando vuoi.{" "}
            <Link to="/cookie-policy">Cookie Policy</Link>.
          </p>
          <div className="zak-consent__actions">
            <button type="button" className="button button--outline-dark" onClick={() => setMarketingConsent(false)}>
              Rifiuta
            </button>
            <button type="button" className="button button--gold" onClick={() => setMarketingConsent(true)}>
              Accetta marketing
            </button>
          </div>
        </div>
      )}
      {!open && (choice === "accepted" || choice === "rejected") && (
        <button type="button" className="zak-consent-settings" onClick={() => setReopen(true)}>
          Preferenze cookie
        </button>
      )}
    </>
  );
}
