import { ArrowDown } from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import { imageProps } from "../data/imageMetadata";
import { Link } from "../lib/router";

export function HeroVideo() {
  const heroPosterProps = imageProps(siteConfig.heroPoster);
  const heroPosterMobileProps = imageProps(siteConfig.heroPosterMobile);
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__media" aria-hidden="true">
        <picture>
          <source media="(max-width: 767px)" type="image/avif" srcSet={heroPosterMobileProps.avifSrcSet ?? siteConfig.heroPosterMobile.replace(/\.webp/g, ".avif")} sizes="100vw" />
          <source type="image/avif" srcSet={heroPosterProps.avifSrcSet ?? siteConfig.heroPoster.replace(/\.webp/g, ".avif")} sizes="100vw" />
          <source media="(max-width: 767px)" srcSet={heroPosterMobileProps.srcSet ?? siteConfig.heroPosterMobile} sizes="100vw" />
          <img className="hero__poster" src={siteConfig.heroPoster} width={heroPosterProps.width} height={heroPosterProps.height} srcSet={heroPosterProps.srcSet} sizes="100vw" alt="" fetchPriority="high" decoding="async" />
        </picture>
        {siteConfig.heroVideo && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster={siteConfig.heroPoster}
          >
            <source src={siteConfig.heroVideo} type="video/mp4" />
          </video>
        )}
      </div>
      <div className="hero__overlay" />
      <div className="container hero__content">
        <p className="hero__kicker">ZAK · Arzano</p>
        <h1 id="hero-title">Ogni evento merita il suo ingresso.</h1>
        <p className="hero__lead">ZAK crea, organizza e mette in scena il tuo momento speciale.</p>
        <div className="button-group">
          <Link className="button button--gold" to="/contatti">
            Prenota una visita
          </Link>
          <Link className="button button--ghost" to="/location">
            Scopri la location
          </Link>
        </div>
      </div>
      <a className="scroll-cue" href="#intro" aria-label="Scopri di più">
        <span>Scorri</span>
        <ArrowDown aria-hidden="true" size={16} />
      </a>
    </section>
  );
}
