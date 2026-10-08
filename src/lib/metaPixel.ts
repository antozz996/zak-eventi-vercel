const PIXEL_ID = "3132799710244140";
const CONSENT_KEY = "zak-marketing-consent";
type Fbq = ((...args: unknown[]) => void) & { callMethod?: (...args: unknown[]) => void; queue?: unknown[][]; loaded?: boolean; version?: string };
declare global { interface Window { fbq?: Fbq; _fbq?: Fbq } }
let initialized = false;
let lastPage = "";

type EventName = "PageView" | "ViewContent" | "Contact";
type EventOptions = { contact_method?: "whatsapp" | "form_whatsapp" };

function makeEventId() {
  if (typeof crypto.randomUUID === "function") return crypto.randomUUID();
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = [...bytes].map((byte) => byte.toString(16).padStart(2, "0")).join("");
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

function marketingCookie(name: "_fbp" | "_fbc") {
  const entry = document.cookie.split(";").map((value) => value.trim()).find((value) => value.startsWith(`${name}=`));
  if (!entry) return undefined;
  try { return decodeURIComponent(entry.slice(name.length + 1)); } catch { return undefined; }
}

function sendConversionsApiEvent(eventName: EventName, eventId: string, options: EventOptions = {}) {
  if (!hasMarketingConsent()) return;
  const pageUrl = new URL(window.location.href);
  pageUrl.search = "";
  pageUrl.hash = "";
  const payload = {
    event_name: eventName,
    event_id: eventId,
    page_url: pageUrl.href,
    fbp: marketingCookie("_fbp"),
    fbc: marketingCookie("_fbc"),
    ...options,
  };
  void fetch("/api/meta-events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true,
    credentials: "same-origin",
  }).catch(() => {
    // Browser Pixel tracking remains available if server-side delivery is temporarily unavailable.
  });
}

function trackEvent(eventName: EventName, parameters: Record<string, string> = {}, options: EventOptions = {}) {
  if (!hasMarketingConsent()) return;
  initMetaPixel();
  const eventId = makeEventId();
  window.fbq?.("track", eventName, parameters, { eventID: eventId });
  sendConversionsApiEvent(eventName, eventId, options);
}

export function hasMarketingConsent(): boolean {
  try { return localStorage.getItem(CONSENT_KEY) === "accepted"; } catch { return false; }
}
export function setMarketingConsent(accepted: boolean) {
  // Reload after a choice so Meta Pixel Helper and Meta Test Events can detect
  // the same initialization flow as a returning visitor. Rejecting or
  // withdrawing consent also unloads any already-initialized Pixel.
  try {
    localStorage.setItem(CONSENT_KEY, accepted ? "accepted" : "rejected");
  } catch {
    // Without persistent opt-in, the page must remain untracked.
    if (!accepted) window.location.reload();
    return;
  }
  window.location.reload();
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
  // This site sends explicitly defined events; disable Meta's automatic
  // button and metadata collection before initializing the Pixel.
  window.fbq("set", "autoConfig", false, PIXEL_ID);
  window.fbq("init", PIXEL_ID);
}
export function trackMetaPage(path: string) {
  if (!hasMarketingConsent()) return;
  initMetaPixel();
  if (lastPage === path) return;
  lastPage = path;
  trackEvent("PageView");
  if (/^\/(diciottesimi|comunioni|battesimi|compleanni|feste-private|lauree|servizi|location|eventi)$/.test(path)) {
    trackEvent("ViewContent", { content_name: path.slice(1), content_category: "eventi" });
  }
}
export function trackMetaContact(method: "whatsapp" | "form_whatsapp") {
  if (!hasMarketingConsent()) return;
  trackEvent("Contact", { contact_method: method }, { contact_method: method });
}
