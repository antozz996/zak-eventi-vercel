import { useState, useSyncExternalStore } from "react";
import { Link } from "../lib/router";
import { setMarketingConsent } from "../lib/metaPixel";

const CONSENT_KEY = "zak-marketing-consent";

function subscribeToConsentChanges(onChange: () => void) {
  window.addEventListener("storage", onChange);
  return () => window.removeEventListener("storage", onChange);
}

function getConsentSnapshot() {
  try {
    return window.localStorage.getItem(CONSENT_KEY) ?? "unknown";
  } catch {
    return "unknown";
  }
}

function getServerConsentSnapshot() {
  return "unknown";
}

export function CookieBanner() {
  const choice = useSyncExternalStore(
    subscribeToConsentChanges,
    getConsentSnapshot,
    getServerConsentSnapshot,
  );
  const [settingsOpen, setSettingsOpen] = useState(false);
  const bannerOpen = choice === "unknown" || settingsOpen;

  const choose = (accepted: boolean) => setMarketingConsent(accepted);

  return (
    <>
      {bannerOpen && (
        <aside className="zak-consent" role="dialog" aria-label="Preferenze cookie">
          <strong>La tua privacy</strong>
          <p>
            Usiamo tecnologie necessarie al sito. Solo con il consenso attiviamo Meta Pixel per
            misurare visite e interazioni pubblicitarie. Puoi modificare la scelta quando vuoi.{" "}
            <Link to="/cookie-policy">Cookie Policy</Link>.
          </p>
          <div className="zak-consent__actions">
            <button type="button" className="button button--outline-dark" onClick={() => choose(false)}>
              Rifiuta
            </button>
            <button type="button" className="button button--gold" onClick={() => choose(true)}>
              Accetta marketing
            </button>
          </div>
        </aside>
      )}
      {!bannerOpen && choice !== "unknown" && (
        <button
          type="button"
          className="zak-consent-settings"
          onClick={() => setSettingsOpen(true)}
        >
          Preferenze cookie
        </button>
      )}
    </>
  );
}
