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
            <Link to="/guide">Guide</Link>
            <Link to="/perche-scegliere-zak">Perché ZAK</Link>
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
            {siteConfig.contact.email && <li><Mail aria-hidden="true" /><a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></li>}
          </ul>
        </div>
        {(siteConfig.social.instagram || siteConfig.social.facebook) && <div>
          <h2>Seguici</h2>
          <div className="social-links">
            {siteConfig.social.instagram ? (
              <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
            ) : <span aria-label="Instagram da configurare"><Instagram /></span>}
            {siteConfig.social.facebook ? (
              <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook /></a>
            ) : <span aria-label="Facebook da configurare"><Facebook /></span>}
          </div>
        </div>}
      </div>
      <div className="container site-footer__bottom">
        <div>
          <p>© {new Date().getFullYear()} ZAK Eventi.</p>
          <p>{siteConfig.legal.companyName} · P.IVA {siteConfig.legal.vatNumber} · {siteConfig.legal.registeredOffice}</p>
        </div>
        <div>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/cookie-policy">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
