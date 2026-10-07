import { useEffect, useSyncExternalStore } from "react";
import { useLocation } from "../lib/router";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { WhatsAppButton } from "./WhatsAppButton";

const hashEvents = ["popstate", "hashchange", "pushState", "replaceState"];
function subscribeHash(callback: () => void) {
  hashEvents.forEach((name) => window.addEventListener(name, callback));
  return () => hashEvents.forEach((name) => window.removeEventListener(name, callback));
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

  return (
    <>
      <Header />
      <main id="main-content">
        {children}
      </main>
      <Footer />
      <WhatsAppButton fixed />
    </>
  );
}
