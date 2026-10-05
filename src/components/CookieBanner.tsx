import { useSyncExternalStore } from "react";
import { Link } from "../lib/router";

const storageKey = "zak-cookie-choice";
let dismissed = false;
function getSnapshot() {
  try { return !dismissed && !localStorage.getItem(storageKey); } catch { return !dismissed; }
}
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("zak-cookie-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("zak-cookie-change", callback);
  };
}
export function CookieBanner() {
  const visible = useSyncExternalStore(subscribe, getSnapshot, () => false);
  const choose = () => {
    dismissed = true;
    try { localStorage.setItem(storageKey, "essential"); } catch { /* Dismissed for this visit. */ }
    window.dispatchEvent(new Event("zak-cookie-change"));
  };
  if (!visible) return null;
  return (
    <aside className="cookie-banner" aria-label="Informazioni sui cookie">
      <div>
        <strong>La tua privacy.</strong>
        <p>Il sito non attiva strumenti di tracciamento. <Link to="/cookie-policy">Informazioni sui cookie</Link></p>
      </div>
      <div className="cookie-banner__actions">
        <button className="button button--gold" onClick={choose}>Ho capito</button>
      </div>
    </aside>
  );
}
