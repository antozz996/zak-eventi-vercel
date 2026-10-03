import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { extname, join, relative, sep } from "node:path";

const outputDirectory = "dist";
const serverDirectory = join(outputDirectory, "server");
const hostingDirectory = join(outputDirectory, ".openai");

const contentTypes = {
  ".avif": "image/avif",
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mp4": "video/mp4",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webm": "video/webm",
  ".webp": "image/webp",
  ".xml": "application/xml; charset=utf-8",
};

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name === "server" || entry.name === ".openai") continue;
    const absolutePath = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await collectFiles(absolutePath));
    else files.push(absolutePath);
  }

  return files;
}

const assets = {};
for (const filePath of await collectFiles(outputDirectory)) {
  const webPath = `/${relative(outputDirectory, filePath).split(sep).join("/")}`;
  const extension = extname(filePath).toLowerCase();
  assets[webPath] = {
    body: (await readFile(filePath)).toString("base64"),
    type: contentTypes[extension] ?? "application/octet-stream",
    immutable: webPath.startsWith("/assets/"),
  };
}

const workerSource = `
const assets = ${JSON.stringify(assets)};

function decodeBase64(value) {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}

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
  const placeId = env?.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return json({ configured: false }, 503);
  }

  const endpoint =
    "https://places.googleapis.com/v1/places/" +
    encodeURIComponent(placeId) +
    "?languageCode=it&regionCode=IT";

  const response = await fetch(endpoint, {
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
    "public, max-age=3600, stale-while-revalidate=86400",
  );
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let pathname = decodeURIComponent(url.pathname);

    if (pathname === "/api/google-reviews") {
      if (request.method !== "GET") {
        return json({ error: "Metodo non consentito" }, 405);
      }
      return getGoogleReviews(env);
    }

    if (pathname === "/") pathname = "/index.html";

    let asset = assets[pathname];
    if (!asset && !pathname.split("/").at(-1)?.includes(".")) {
      asset = assets["/index.html"];
    }

    if (!asset) {
      return new Response("Not found", { status: 404 });
    }

    const headers = new Headers({
      "Content-Type": asset.type,
      "Cache-Control": asset.immutable
        ? "public, max-age=31536000, immutable"
        : asset.type.startsWith("text/html")
          ? "no-cache"
          : "public, max-age=3600",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "SAMEORIGIN",
    });

    return new Response(request.method === "HEAD" ? null : decodeBase64(asset.body), {
      status: 200,
      headers,
    });
  },
};
`;

await mkdir(serverDirectory, { recursive: true });
await mkdir(hostingDirectory, { recursive: true });
await writeFile(join(serverDirectory, "index.js"), workerSource);
await writeFile(
  join(hostingDirectory, "hosting.json"),
  await readFile(".openai/hosting.json"),
);

console.log(`Worker statico generato con ${Object.keys(assets).length} asset.`);
