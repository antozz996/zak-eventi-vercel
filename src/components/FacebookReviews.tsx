import { Facebook } from "lucide-react";
import { facebookReviews, facebookSummary } from "../data/facebookReviews";
import { siteConfig } from "../data/siteConfig";

/**
 * Raccomandazioni Facebook: riepilogo, estratti e nota sulla fonte.
 * Con `featuredOnly` mostra solo la selezione breve usata in home.
 */
export function FacebookReviews({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const reviews = featuredOnly ? facebookReviews.filter((review) => review.featured) : facebookReviews;

  return (
    <>
      <div className="facebook-proof facebook-proof--summary">
        <Facebook aria-hidden="true" />
        <div>
          <p className="eyebrow">Facebook · Raccomandazioni</p>
          <h2>
            {facebookSummary.positivePercent}% valutazioni positive su {facebookSummary.reviewCount} recensioni.
          </h2>
          <p>
            Dato rilevato dalla sezione Recensioni della pagina Facebook di ZAK Eventi, aggiornato
            all'{facebookSummary.updatedAt}.
          </p>
          {siteConfig.social.facebook && (
            <a className="button button--outline-dark" href={siteConfig.social.facebook} target="_blank" rel="noreferrer">
              Apri la pagina Facebook
            </a>
          )}
        </div>
      </div>

      <div className="facebook-review-grid">
        {reviews.map((review) => (
          <article className="facebook-review-card" key={`${review.author}-${review.date}`}>
            <div className="facebook-review-card__source">
              <Facebook aria-hidden="true" />
              <span>Facebook</span>
            </div>
            <h3>{review.author}</h3>
            <p className="facebook-review-card__meta">{review.event} · {review.date}</p>
            <blockquote>“{review.excerpt}”</blockquote>
            <p className="facebook-review-card__recommendation">Consiglia ZAK Eventi</p>
          </article>
        ))}
      </div>

      <p className="google-reviews__disclosure">
        Estratti dalle raccomandazioni pubblicate sulla pagina Facebook di ZAK Eventi. Testi abbreviati
        solo per lunghezza, senza modificarne il significato.
      </p>
    </>
  );
}
