import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { createServer } from "vite";

const server = await createServer({ server: { middlewareMode: true }, appType: "custom" });
let checkedLinks = 0;
try {
  const { render, pageRoutes, getPageSeo, siteConfig } = await server.ssrLoadModule("/src/entry-server.tsx");
  const { validateContact } = await server.ssrLoadModule("/src/utils/contactValidation.ts");
  const worker = (await import(`../dist/server/index.js?test=${Date.now()}`)).default;
  const titles = new Set();
  for (const path of pageRoutes) {
    const response = await worker.fetch(new Request(`https://example.com${path}`), {});
    assert.equal(response.status, 200, path);
    const html = await response.text();
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    assert.ok(title && !titles.has(title), `Unique title: ${path}`);
    titles.add(title);
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `One H1: ${path}`);
    assert.equal((html.match(/rel="canonical"/g) ?? []).length, 1);
    assert.ok(html.includes(`href="${siteConfig.siteUrl}${path}"`));
    assert.ok(html.includes('<main id="main-content"'));
    const schema = JSON.parse(html.match(/<script id="site-schema" type="application\/ld\+json">(.*?)<\/script>/s)[1]);
    assert.equal(schema["@graph"][2].url, `${siteConfig.siteUrl}${path}`);
    assert.ok(!JSON.stringify(schema).includes("aggregateRating"));
    assert.ok(html.includes(getPageSeo(path).noIndex ? "noindex, follow" : "index, follow"));
    for (const match of html.matchAll(/<img\b[^>]*>/g)) {
      assert.ok(/\balt=/.test(match[0]), `Image alt on ${path}`);
      const src = match[0].match(/src="([^"]+)"/)?.[1];
      if (src?.startsWith("/")) {
        const image = await readFile(`dist${src}`);
        assert.ok(image.length > 0, `Empty image: ${src}`);
        if (src.endsWith(".webp")) assert.equal(image.subarray(8,12).toString(), "WEBP", src);
      }
    }
    for (const match of html.matchAll(/(?:href|src)="(\/[^" ]*)"/g)) {
      const url = new URL(match[1].replace(/&amp;/g, "&"), "https://example.com");
      if (url.pathname === path && url.hash) assert.ok(html.includes(`id="${url.hash.slice(1)}"`));
      const target = await worker.fetch(new Request(url), {});
      assert.equal(target.status, 200, `Broken internal link: ${path} -> ${url.pathname}`);
      checkedLinks++;
    }
  }
  for (const path of ["/missing-page", "/images/missing.webp", "/api/unknown"]) assert.equal((await worker.fetch(new Request(`https://example.com${path}`), {})).status, 404, path);
  assert.equal((await worker.fetch(new Request("https://example.com/%FF"), {})).status, 400);
  const head = await worker.fetch(new Request("https://example.com/location", { method: "HEAD" }), {});
  assert.equal(head.status, 200); assert.equal(await head.text(), "");
  assert.equal((await worker.fetch(new Request("https://example.com/location", { method: "POST" }), {})).status, 405);
  assert.equal((await worker.fetch(new Request("https://example.com/api/google-reviews"), {})).status, 503);
  const sitemap = await readFile("dist/sitemap.xml", "utf8");
  const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\\/loc>/g)].map((match) => match[1]);
  const indexableRoutes = pageRoutes.filter((path) => !getPageSeo(path).noIndex);
  const sitemapPaths = sitemapUrls.map((url) => {
    const parsed = new URL(url);
    assert.equal(parsed.origin, siteConfig.siteUrl, `Sitemap origin: ${url}`);
    return parsed.pathname.replace(/\\/$/, "") || "/";
  });
  assert.equal(new Set(sitemapPaths).size, sitemapPaths.length, "Unique sitemap URLs");
  assert.deepEqual([...sitemapPaths].sort(), [...indexableRoutes].sort(), "Sitemap contains every indexable route and no noindex route");
  assert.equal(sitemapPaths.length, 21);
  assert.ok(!sitemap.includes("privacy-policy") && !sitemap.includes("cookie-policy"));
  const filteredGallery = render("/gallery", "?filtro=Cerimonie");
  assert.ok(filteredGallery.includes("Un giorno in famiglia"));
  assert.ok(!filteredGallery.includes("Il tuo ingresso"));
  const eventPage = render("/eventi");
  for (const slug of ["diciottesimi", "compleanni", "comunioni", "cerimonie", "feste-private", "eventi-personalizzati"]) assert.ok(eventPage.includes(`id="${slug}"`));
  const form = (values) => { const data = new FormData(); Object.entries(values).forEach(([key,value]) => data.set(key,value)); return data; };
  assert.deepEqual(validateContact(form({ name: "Antonio", phone: "+39 353 319 8020", guests: "50", date: "2027-02-28" })), {});
  assert.ok(validateContact(form({ name: "", phone: "abc", email: "bad", guests: "1.5", date: "2027-02-31" })).date);
  assert.ok(validateContact(form({ name: "Anto", phone: "123", guests: "-1" })).guests);
  const config = JSON.parse(await readFile("vercel.json", "utf8"));
  assert.ok(!config.rewrites?.some(rule => rule.destination === "/index.html"));
  await access("dist/404.html");
  console.log(JSON.stringify({ passed: true, pages: pageRoutes.length, checkedLinks, sitemapUrls: sitemapPaths.length, workerRouting: "passed", formValidation: "passed" }, null, 2));
} finally {
  await server.close();
}
