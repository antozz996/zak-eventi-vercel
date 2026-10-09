const CLARITY_PROJECT_ID = "yv0il5c0dn";
const ANALYTICS_CONSENT_KEY = "zak-analytics-consent";

type ClarityCommand = ((...args: unknown[]) => void) & { q?: unknown[][] };

declare global {
  interface Window {
    clarity?: ClarityCommand;
  }
}

function hasStatisticsConsent() {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(ANALYTICS_CONSENT_KEY) === "accepted";
  } catch {
    return false;
  }
}

export function initializeClarity() {
  if (!hasStatisticsConsent()) return;

  if (!window.clarity) {
    const queue: unknown[][] = [];
    const clarity = ((...args: unknown[]) => {
      queue.push(args);
    }) as ClarityCommand;
    clarity.q = queue;
    window.clarity = clarity;
  }

  // Clarity's EEA consent signal is explicit: analytics is consented,
  // while advertising storage remains denied because Clarity is used for statistics only.
  window.clarity("consentv2", {
    analytics_Storage: "granted",
    ad_Storage: "denied",
  });

  if (document.getElementById("zak-microsoft-clarity")) return;

  const script = document.createElement("script");
  script.id = "zak-microsoft-clarity";
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}`;
  document.head.appendChild(script);
}

export function denyClarityConsent() {
  if (typeof window === "undefined" || !window.clarity) return;
  window.clarity("consentv2", {
    analytics_Storage: "denied",
    ad_Storage: "denied",
  });
}
