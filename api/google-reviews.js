function json(data, status = 200, cacheControl = "no-store") {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": cacheControl,
      "X-Content-Type-Options": "nosniff",
    },
  });
}

async function getGoogleReviews(env) {
  const apiKey = env?.GOOGLE_PLACES_API_KEY;
  const placeId = env?.GOOGLE_PLACE_ID || "ChIJFbZ-w5gHOxMR8ZoQF7QAYEA";

  if (!apiKey || !placeId) {
    return json({ configured: false }, 200);
  }

  const endpoint =
    "https://places.googleapis.com/v1/places/" +
    encodeURIComponent(placeId) +
    "?languageCode=it&regionCode=IT";

  const response = await fetch(endpoint, {
    signal: AbortSignal.timeout(8000),
    headers: {
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask":
        "displayName,rating,userRatingCount,reviews,googleMapsUri",
    },
  });

  if (!response.ok) {
    return json({ error: "Google Places non disponibile" }, 502);
  }

  const place = await response.json();
  const reviews = Array.isArray(place.reviews)
    ? place.reviews.map((review) => ({
        name: review.name,
        rating: review.rating,
        text: review.text?.text ?? "",
        relativePublishTimeDescription:
          review.relativePublishTimeDescription ?? "",
        author: {
          displayName: review.authorAttribution?.displayName ?? "Utente Google",
          uri: review.authorAttribution?.uri,
          photoUri: review.authorAttribution?.photoUri,
        },
        googleMapsUri: review.googleMapsUri ?? place.googleMapsUri,
      }))
    : [];

  return json(
    {
      rating: place.rating,
      reviewCount: place.userRatingCount,
      googleMapsUri: place.googleMapsUri,
      reviews,
    },
    200,
    "public, max-age=300, s-maxage=21600, stale-while-revalidate=86400",
  );
}

export default async function handler(request, response) {
  let result;
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    result = json({ error: "Metodo non consentito" }, 405);
  } else {
    try {
      result = await getGoogleReviews(process.env);
    } catch {
      result = json({ error: "Google Places non disponibile" }, 502);
    }
  }
  for (const [name, value] of result.headers) response.setHeader(name, value);
  response.status(result.status).send(await result.text());
}
