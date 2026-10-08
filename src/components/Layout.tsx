import { useEffect, useSyncExternalStore } from "react";
import { useLocation } from "../lib/router";
import { CookieBanner } from "./CookieBanner";
import { trackMetaContact, trackMetaPage } from "../lib/metaPixel";
import {
  trackGoogleAnalyticsContact,
  trackGoogleAnalyticsEvent,
  trackGoogleAnalyticsPage,
} from "../lib/googleAnalytics";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { WhatsAppButton } from "./WhatsAppButton";

const hashEvents = ["popstate", "hashchange", "pushState", "replaceState"];
const eventCategoryPattern = /^\/(diciottesimi|compleanni|comunioni|battesimi|cerimonie|feste-private|lauree|eventi-personalizzati)$/;

function subscribeHash(callback: () => void) {
  hashEvents.forEach((name) => window.addEventListener(name, callback));
  return () => hashEvents.forEach((name) => window.removeEventListener(name, callback));
}

function getCtaLocation(anchor: HTMLAnchorElement) {
  if (anchor.closest("footer")) return "footer";
  if (anchor.closest("header")) return "header";
  if (anchor.closest(".page-hero")) return "hero";
  if (anchor.closest("section")) return "content";
  return "other";
}

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const hash = useSyncExternalStore(subscribeHash, () => window.location.hash, () => "");

  useEffect(() => {
    let id = hash.slice(1);
    try { id = decodeURIComponent(id); } catch { /* Use undecoded hash. */ }
    if (id) {
      document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location.pathname, hash]);

  useEffect(() => {
    const eventType = hash.replace(/^#/, "");
    if (location.pathname === "/eventi" && eventCategoryPattern.test(`/${eventType}`)) {
      trackGoogleAnalyticsEvent("view_event_category", { event_type: eventType });
    }
  }, [location.pathname, hash]);

  useEffect(() => {
    const path = location.pathname;
    trackMetaPage(path);
    trackGoogleAnalyticsPage(path);

    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor) return;

      let url: URL;
      try {
        url = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }

      const label = (anchor.getAttribute("aria-label") || anchor.textContent || "")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 80);

      if (url.protocol === "tel:") {
        trackGoogleAnalyticsContact("phone", "phone_link");
        trackMetaContact("phone");
        return;
      }
      if (url.protocol === "mailto:") {
        trackGoogleAnalyticsContact("email", "email_link");
        return;
      }
      if (url.hostname === "www.google.com" && url.pathname.startsWith("/maps")) {
        trackGoogleAnalyticsEvent("directions_click", { link_name: label });
        return;
      }
      if (url.hostname === "wa.me" || url.hostname.endsWith(".whatsapp.com")) return;

      if (url.origin !== window.location.origin) return;

      const destinationPath = url.pathname;
      const navigation = anchor.closest("nav");
      if (navigation) {
        trackGoogleAnalyticsEvent("navigation_click", {
          link_name: label || destinationPath,
          navigation_location: navigation.getAttribute("aria-label") || "navigation",
          destination_path: destinationPath,
        });
        return;
      }

      if (destinationPath === "/contatti") {
        trackGoogleAnalyticsEvent("cta_click", {
          cta_name: label || "contact",
          cta_location: getCtaLocation(anchor),
          destination_path: destinationPath,
          source_path: path,
        });
        return;
      }

      const eventType = eventCategoryPattern.test(destinationPath)
        ? destinationPath.slice(1)
        : destinationPath === "/eventi" && eventCategoryPattern.test(`/${url.hash.replace(/^#/, "")}`)
          ? url.hash.slice(1)
          : "";
      if (eventType) {
        trackGoogleAnalyticsEvent("event_category_click", {
          event_type: eventType,
          source_path: path,
        });
      }
    };

    const scrollDepths = new Set<number>();
    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const percentage = Math.min(100, Math.round((window.scrollY / scrollable) * 100));
      [25, 50, 75, 90].forEach((threshold) => {
        if (percentage >= threshold && !scrollDepths.has(threshold)) {
          scrollDepths.add(threshold);
          trackGoogleAnalyticsEvent("scroll_depth", {
            scroll_percent: threshold,
            page_path: path,
          });
        }
      });
    };

    document.addEventListener("click", handleClick);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main id="main-content">
        {children}
      </main>
      <Footer />
      <CookieBanner />
      <WhatsAppButton fixed />
    </>
  );
}
