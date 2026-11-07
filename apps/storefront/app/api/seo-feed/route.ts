import { NextResponse } from "next/server";
import { PRODUCTS } from "@/lib/products";
export async function GET() {
  const feed = PRODUCTS.map((p) => ({ slug: p.slug, name: p.name, price: "Price coming soon — NOT submitted", availability: p.status === "live" ? "PreOrder" : "PreOrder", origin_verified: p.originVerified }));
  return NextResponse.json({ ok: true, count: feed.length, note: "Unset prices are marked 'Price coming soon — NOT submitted', never faked.", items: feed });
}
