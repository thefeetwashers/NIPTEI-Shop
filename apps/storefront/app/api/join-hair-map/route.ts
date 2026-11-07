import { NextResponse } from "next/server";
// join-hair-map — honest state: Supabase is not connected in this deployable build,
// so nothing is stored or sent. No data is invented.
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  
  return NextResponse.json({ ok: true, stored: false, message: "Hair Map pin not saved — Supabase is not connected yet. Pins store only country, hair type and climate, never names, emails or addresses." });
}
