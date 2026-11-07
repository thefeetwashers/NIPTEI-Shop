import { NextResponse } from "next/server";
import { PRODUCTS } from "@/lib/products";
export async function GET() {
  return NextResponse.json({ ok: true, connected: false, count: PRODUCTS.length, items: PRODUCTS.map((p) => ({ slug: p.slug, name: p.name, collection: p.collection, status: p.status, price_cents: p.priceCents, origin_verified: p.originVerified })) });
}
