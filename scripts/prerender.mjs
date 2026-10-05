import { mkdir, readFile, writeFile } from "node:fs/promises";
import { createServer } from "vite";
import { dirname } from "node:path";

const server = await createServer({ server: { middlewareMode: true }, appType: "custom" });
try {
  const { render, getPageSeo, getStructuredData, pageRoutes, siteConfig } = await server.ssrLoadModule("/src/entry-server.tsx");
  const template = await readFile("dist/index.html", "utf8");
  const escape = (value) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
  for (const path of [...pageRoutes, "/404"]) {
    const meta = getPageSeo(path);
    const url = `${siteConfig.siteUrl}${path}`;
    const image = `${siteConfig.siteUrl}${siteConfig.heroPoster}`;
    const head = `<title>${escape(meta.title)}</title>
      <meta name="description" content="${escape(meta.description)}" />
      <meta name="robots" content="${meta.noIndex ? "noindex, follow" : "index, follow, max-image-preview:large"}" />
      <link rel="canonical" href="${url}" />
      <meta property="og:title" content="${escape(meta.title)}" />
      <meta property="og:description" content="${escape(meta.description)}" />
      <meta property="og:url" content="${url}" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="it_IT" />
      <meta property="og:site_name" content="ZAK Eventi" />
      <meta property="og:image" content="${image}" />
      <meta property="og:image:alt" content="Ingresso di una festeggiata alla location ZAK Eventi" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="${escape(meta.title)}" />
      <meta name="twitter:description" content="${escape(meta.description)}" />
      <meta name="twitter:image" content="${image}" />
      <script id="site-schema" type="application/ld+json">${JSON.stringify(getStructuredData(path, meta.title)).replace(/</g, "\\u003c")}</script>`;
    const output = path === "/" ? "dist/index.html" : path === "/404" ? "dist/404.html" : `dist${path}/index.html`;
    await mkdir(dirname(output), { recursive: true });
    await writeFile(output, template.replace(/<!--seo-start-->[\s\S]*?<!--seo-end-->/, `<!--seo-start-->${head}<!--seo-end-->`).replace('<div id="root"></div>', `<div id="root">${render(path)}</div>`));
  }
  const indexedRoutes = pageRoutes.filter((path) => !getPageSeo(path).noIndex);
  await writeFile("dist/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${indexedRoutes.map(path => `<url><loc>${siteConfig.siteUrl}${path}</loc></url>`).join("\n")}\n</urlset>`);
  await writeFile("dist/robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${siteConfig.siteUrl}/sitemap.xml\n`);
  console.log(`Prerender: ${pageRoutes.length} pagine + 404; ${indexedRoutes.length} URL in sitemap.`);
} finally {
  await server.close();
}
