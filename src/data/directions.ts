import { siteConfig } from "./siteConfig";

/**
 * Distanze e tempi in auto verso la sede, letti da Google Maps il 12 novembre 2026
 * e arrotondati: sono indicativi e cambiano con il traffico.
 */
export const directionsFrom = [
  { town: "Casavatore", origin: "Casavatore NA", distance: "circa 2 km", time: "5–10 minuti in auto" },
  { town: "Casoria", origin: "Casoria NA", distance: "circa 3,5 km", time: "circa 10 minuti in auto" },
  { town: "Frattamaggiore", origin: "Frattamaggiore NA", distance: "circa 6 km", time: "circa 15 minuti in auto" },
] as const;

/** Link a Google Maps con il percorso in auto già impostato dal comune indicato. */
export function getDirectionsUrl(origin: string) {
  const params = new URLSearchParams({
    api: "1",
    origin,
    destination: siteConfig.name,
    destination_place_id: siteConfig.googleReviews.placeId,
    travelmode: "driving",
  });
  return `https://www.google.com/maps/dir/?${params}`;
}
