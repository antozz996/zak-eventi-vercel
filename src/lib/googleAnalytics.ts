const MEASUREMENT_ID = "G-X2Q3CL2BZM";
const CONSENT_KEY = "zak-analytics-consent";

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

let initialized = false;
let lastPage = "";

export function hasAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(CONSENT_KEY) === "accepted";
  } catch {
    return false;
  }
}

export function trackGoogleAnalyticsPage(path: string) {
  if (!hasAnalyticsConsent()) return;
  initGoogleAnalytics();
  if (lastPage === path) return;
  lastPage = path;
  window.gtag?.("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

export function trackGoogleAnalyticsContact(method: "whatsapp" | "form_whatsapp") {
  if (!hasAnalyticsConsent()) return;
  initGoogleAnalytics();
  window.gtag?.("event", "contact_click", { method });
}

function initGoogleAnalytics() {
  if (typeof window === "undefined" || !hasAnalyticsConsent() || initialized) return;
  initialized = true;
  window.dataLayer = window.dataLayer ?? [];
  window.gtag = (...args: unknown[]) => {
    window.dataLayer?.push(args);
  };

  // Keep advertising storage denied. The Analytics tag is not loaded at all
  // until the visitor has explicitly opted in to statistics.
  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("js", new Date());
  window.gtag("config", MEASUREMENT_ID, { send_page_view: false });

  if (!document.getElementById("zak-google-analytics")) {
    const script = document.createElement("script");
    script.id = "zak-google-analytics";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    document.head.appendChild(script);
  }
}
