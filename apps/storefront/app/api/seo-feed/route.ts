import { NextResponse } from "next/server";
import { PRODUCTS } from "@/lib/products";
// getseofeed — same row shape as the artifact: OutOfStock, price not submitted,
// origin not yet documented. The artifact's sitemap lists /, /why-niptei,
// /learn and /my-niptei plus every product.
export async function GET() {
  const rows = PRODUCTS.map((p, i) => ({
    id: i + 1,
    slug: p.slug,
    title: `${p.name} — NIPTEI Natural & Vegan Hair Care`,
    path: `/products/${p.slug}`,
    availability: "OutOfStock",
    price_label: "Price coming soon — NOT submitted to Shopping",
    origin_label: "Origin: not yet documented — verification pending",
    seo_indexed: false,
    feed_ready: false,
  }));
  const urls = ["/", "/why-niptei", "/learn", "/my-niptei", ...PRODUCTS.map((p) => `/products/${p.slug}`)];
  const sitemap_xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${u}</loc></url>`).join("\n")}\n</urlset>`;
  return NextResponse.json({
    ok: true,
    count: rows.length,
    rows,
    robots_txt: "User-agent: *\nAllow: /\nSitemap: /sitemap.xml",
    sitemap_xml,
  });
}
