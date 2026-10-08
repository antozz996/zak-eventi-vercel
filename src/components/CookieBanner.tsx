import { useState, useSyncExternalStore } from "react";
import { Link } from "../lib/router";

const ANALYTICS_CONSENT_KEY = "zak-analytics-consent";
const MARKETING_CONSENT_KEY = "zak-marketing-consent";
type ConsentStatus = "checking" | "unknown" | "complete";

function subscribeToConsentChanges(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener("zak-consent-update", onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener("zak-consent-update", onChange);
  };
}

function getConsentSnapshot(): ConsentStatus {
  try {
    const analytics = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
    const marketing = window.localStorage.getItem(MARKETING_CONSENT_KEY);
    return [analytics, marketing].every((value) => value === "accepted" || value === "rejected")
      ? "complete"
      : "unknown";
  } catch {
    return "unknown";
  }
}

function getServerConsentSnapshot(): ConsentStatus {
  return "checking";
}

export function CookieBanner() {
  const choice = useSyncExternalStore(
    subscribeToConsentChanges,
    getConsentSnapshot,
    getServerConsentSnapshot,
  );
  const [settingsOpen, setSettingsOpen] = useState(false);
  const bannerOpen = choice === "unknown" || settingsOpen;

  const saveChoices = (analytics: boolean, marketing: boolean) => {
    try {
      window.localStorage.setItem(ANALYTICS_CONSENT_KEY, analytics ? "accepted" : "rejected");
      window.localStorage.setItem(MARKETING_CONSENT_KEY, marketing ? "accepted" : "rejected");
    } catch {
      // Without a saved opt-in, both trackers remain blocked.
    }
    window.dispatchEvent(new Event("zak-analytics-consent-change"));
    window.dispatchEvent(new Event("zak-marketing-consent-change"));
    window.dispatchEvent(new Event("zak-consent-update"));
    window.location.reload();
  };

  return (
    <>
      {bannerOpen && (
        <aside className="zak-consent" role="dialog" aria-label="Preferenze cookie">
          <strong>La tua privacy</strong>
          <p>
            Google Analytics viene attivato solo se scegli le statistiche; Meta Pixel solo se
            scegli il marketing. Puoi modificare la scelta quando vuoi.{" "}
            <Link to="/cookie-policy">Cookie Policy</Link>.
          </p>
          <div className="zak-consent__actions">
            <button
              type="button"
              className="button button--outline-dark"
              onClick={() => saveChoices(false, false)}
            >
              Rifiuta
            </button>
            <button
              type="button"
              className="button button--outline-dark"
              onClick={() => saveChoices(true, false)}
            >
              Solo statistiche
            </button>
            <button
              type="button"
              className="button button--gold"
              onClick={() => saveChoices(true, true)}
            >
              Accetta tutto
            </button>
          </div>
        </aside>
      )}
      {!bannerOpen && choice === "complete" && (
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
