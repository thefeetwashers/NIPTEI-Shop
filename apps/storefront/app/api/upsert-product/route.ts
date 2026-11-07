import { NextResponse } from "next/server";
// upsert-product — honest state: Supabase is not connected in this deployable build,
// so nothing is stored or sent. No data is invented.
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  
  return NextResponse.json({ ok: true, stored: false, message: "Product change noted, but Supabase is not connected yet. Origin rules still apply: a verified origin needs a country, and a China-made product can never sit in Premium Custom-Formula." });
}
