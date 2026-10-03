import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navigation } from "../data/siteConfig";
import { Link, NavLink, useLocation } from "../lib/router";
import { Brand } from "./Brand";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    requestAnimationFrame(() => {
      dialogRef.current?.querySelector<HTMLElement>(focusableSelector)?.focus();
    });
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector));
        const first = focusable[0];
        const last = focusable.at(-1);
        if (!first || !last) return;
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div ref={dialogRef} className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu principale">
      <div className="mobile-menu__top">
        <Brand />
        <button className="icon-button" onClick={onClose} aria-label="Chiudi menu">
          <X aria-hidden="true" />
        </button>
      </div>
      <nav aria-label="Navigazione mobile">
        {navigation.map((item, index) => (
          <NavLink key={item.href} to={item.href} onClick={onClose}>
            <span>0{index + 1}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <Link className="button button--gold" to="/contatti" onClick={onClose}>
        Organizza il tuo evento
      </Link>
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 36);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`site-header${scrolled || !isHome ? " site-header--solid" : ""}`}>
        <div className="site-header__inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Navigazione principale">
            {navigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === "/"}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Link className="button button--header" to="/contatti">
            Organizza il tuo evento
          </Link>
          <button
            className="icon-button menu-toggle"
            onClick={() => setMenuOpen(true)}
            aria-label="Apri menu"
            aria-expanded={menuOpen}
          >
            <Menu aria-hidden="true" />
          </button>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
