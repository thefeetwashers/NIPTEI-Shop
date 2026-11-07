import { NextResponse } from "next/server";
// record-product-view — honest state: Supabase is not connected in this deployable build,
// so nothing is stored or sent. No data is invented.
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  
  return NextResponse.json({ ok: true, stored: false, message: "Product view noted, but Supabase is not connected yet — Discovery stats stay at zero until it is connected." });
}
