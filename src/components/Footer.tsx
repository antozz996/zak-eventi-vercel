import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { navigation, siteConfig } from "../data/siteConfig";
import { Link } from "../lib/router";
import { Brand } from "./Brand";
import { WhatsAppButton } from "./WhatsAppButton";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Brand />
          <p>{siteConfig.payoff}</p>
          <WhatsAppButton label="WhatsApp" />
        </div>
        <div>
          <h2>Esplora</h2>
          <nav aria-label="Navigazione footer">
            {navigation.map((item) => <Link key={item.href} to={item.href}>{item.label}</Link>)}
          </nav>
        </div>
        <div>
          <h2>Contatti</h2>
          <ul className="footer-contacts">
            <li><MapPin aria-hidden="true" /> {siteConfig.contact.address}</li>
            <li>
              <Phone aria-hidden="true" />
              <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>
            </li>
            <li><Mail aria-hidden="true" /> {siteConfig.contact.email || "Email da confermare"}</li>
          </ul>
        </div>
        <div>
          <h2>Seguici</h2>
          <div className="social-links">
            {siteConfig.social.instagram ? (
              <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
            ) : <span aria-label="Instagram da configurare"><Instagram /></span>}
            {siteConfig.social.facebook ? (
              <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook /></a>
            ) : <span aria-label="Facebook da configurare"><Facebook /></span>}
          </div>
          <small>Link social da confermare</small>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <p>© {new Date().getFullYear()} ZAK Eventi. Dati societari da integrare.</p>
        <div>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/cookie-policy">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
