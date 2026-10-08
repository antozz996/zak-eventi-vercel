import { ExternalLink, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "../data/siteConfig";

type GoogleReview = {
  name: string;
  rating: number;
  text: string;
  relativePublishTimeDescription: string;
  author: {
    displayName: string;
    uri?: string;
    photoUri?: string;
  };
  googleMapsUri: string;
};

type GoogleReviewsResponse = {
  configured: true;
  rating: number;
  reviewCount: number;
  googleMapsUri: string;
  reviews: GoogleReview[];
};
type GoogleReviewsApiResponse = GoogleReviewsResponse | { configured: false };

function Stars({ rating }: { rating: number }) {
  return (
    <span className="rating-stars" aria-label={`${rating} stelle su 5`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          aria-hidden="true"
          fill={index < Math.round(rating) ? "currentColor" : "none"}
        />
      ))}
    </span>
  );
}

export function GoogleReviews() {
  const [reviewsData, setReviewsData] = useState<GoogleReviewsResponse | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/google-reviews", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Google Places non disponibile");
        return response.json() as Promise<GoogleReviewsApiResponse>;
      })
      .then((response) => {
        if (response.configured) setReviewsData(response);
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setReviewsData(null);
      });

    return () => controller.abort();
  }, []);

  const rating = reviewsData?.rating;
  const reviewCount = reviewsData?.reviewCount;
  const mapsUrl = reviewsData?.googleMapsUri || siteConfig.contact.googleMapsUrl;

  return (
    <div className="google-reviews">
      <div className="google-reviews__summary">
        <div>
          <span className="google-reviews__source">Recensioni da Google Maps</span>
          {typeof rating === "number" && typeof reviewCount === "number" && <><p className="google-reviews__score">
            <strong>{rating.toLocaleString("it-IT", { minimumFractionDigits: 1 })}</strong>
            <Stars rating={rating} />
          </p>
          <p className="google-reviews__count">{reviewCount} recensioni pubblicate su Google</p></>}
        </div>
        <a className="button button--outline-dark" href={mapsUrl} target="_blank" rel="noreferrer">
          Vedi tutte su Google <ExternalLink aria-hidden="true" size={16} />
        </a>
      </div>

      {reviewsData?.reviews?.length ? (
        <>
          <div className="google-review-grid">
            {reviewsData.reviews.map((review) => (
              <article className="google-review-card" key={review.name}>
                <header>
                  {review.author.photoUri ? (
                    <img
                      src={review.author.photoUri}
                      alt=""
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <span className="google-review-card__avatar" aria-hidden="true">
                      {review.author.displayName.charAt(0)}
                    </span>
                  )}
                  <div>
                    {review.author.uri ? (
                      <a href={review.author.uri} target="_blank" rel="noreferrer">
                        {review.author.displayName}
                      </a>
                    ) : (
                      <strong>{review.author.displayName}</strong>
                    )}
                    <span>{review.relativePublishTimeDescription}</span>
                  </div>
                </header>
                <Stars rating={review.rating} />
                <p>{review.text}</p>
                <a href={review.googleMapsUri} target="_blank" rel="noreferrer">
                  Leggi la recensione su Google Maps <ExternalLink aria-hidden="true" size={14} />
                </a>
              </article>
            ))}
          </div>
          <p className="google-reviews__disclosure">
            Recensioni mostrate da Google Maps e ordinate per rilevanza. Autori e contenuti appartengono ai rispettivi titolari.
          </p>
        </>
      ) : (
        <p className="google-reviews__disclosure">
          Consulta il profilo Google Maps per leggere le recensioni e la valutazione aggiornata.
        </p>
      )}
    </div>
  );
}
