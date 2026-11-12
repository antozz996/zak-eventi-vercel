import { MapPin } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "../data/siteConfig";

/**
 * La mappa di Google si carica solo su richiesta: finché non si preme il
 * pulsante la pagina non contatta Google e resta più leggera.
 */
export function ContactMap() {
  const [mapVisible, setMapVisible] = useState(false);
  const { address, googleMapsUrl, mapEmbedUrl } = siteConfig.contact;

  if (mapVisible && mapEmbedUrl) {
    return (
      <section className="map-placeholder" aria-label="Mappa">
        <iframe title="Mappa ZAK Eventi" src={mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
      </section>
    );
  }

  return (
    <section className="map-placeholder" aria-label="Mappa">
      <div>
        <MapPin aria-hidden="true" />
        <strong>ZAK Eventi · Arzano</strong>
        <span>{address}</span>
        <div className="map-placeholder__actions">
          {mapEmbedUrl && (
            <button type="button" className="button button--gold" onClick={() => setMapVisible(true)}>
              Mostra la mappa
            </button>
          )}
          <a className={mapEmbedUrl ? "button button--ghost" : "button button--gold"} href={googleMapsUrl} target="_blank" rel="noreferrer">
            Apri in Google Maps
          </a>
        </div>
        {mapEmbedUrl && <span className="map-placeholder__note">La mappa è un servizio di Google: mostrandola, il tuo browser si collega ai suoi server.</span>}
      </div>
    </section>
  );
}
