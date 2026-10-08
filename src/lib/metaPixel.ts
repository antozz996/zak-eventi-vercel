const PIXEL_ID = "3132799710244140";
const CONSENT_KEY = "zak-marketing-consent";
type Fbq = ((...args: unknown[]) => void) & { callMethod?: (...args: unknown[]) => void; queue?: unknown[][]; loaded?: boolean; version?: string };
declare global { interface Window { fbq?: Fbq; _fbq?: Fbq } }
let initialized = false;
let lastPage = "";
export function hasMarketingConsent(): boolean {
  try { return localStorage.getItem(CONSENT_KEY) === "accepted"; } catch { return false; }
}
export function setMarketingConsent(accepted: boolean) {
  try { localStorage.setItem(CONSENT_KEY, accepted ? "accepted" : "rejected"); } catch { /* Session-only selection. */ }
  window.dispatchEvent(new Event("zak-marketing-consent-change"));
  if (accepted) initMetaPixel();
  else if (initialized) window.location.reload(); // Stops further browser-side Pixel calls after withdrawal.
}
export function initMetaPixel() {
  if (typeof window === "undefined" || !hasMarketingConsent() || initialized) return;
  initialized = true;
  if (!window.fbq) {
    const fbq = function (...args: unknown[]) {
      if (fbq.callMethod) fbq.callMethod(...args);
      else (fbq.queue ??= []).push(args);
    } as Fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];
    window.fbq = fbq;
    window._fbq = fbq;
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
  }
  window.fbq("init", PIXEL_ID);
}
export function trackMetaPage(path: string) {
  if (!hasMarketingConsent()) return;
  initMetaPixel();
  if (lastPage === path) return;
  lastPage = path;
  window.fbq?.("track", "PageView");
  if (/^\/(diciottesimi|comunioni|battesimi|compleanni|feste-private|lauree|servizi|location|eventi)$/.test(path)) {
    window.fbq?.("track", "ViewContent", { content_name: path.slice(1), content_category: "eventi" });
  }
}
export function trackMetaContact(method: "whatsapp" | "form_whatsapp") {
  if (!hasMarketingConsent()) return;
  initMetaPixel();
  window.fbq?.("track", "Contact", { contact_method: method });
}
