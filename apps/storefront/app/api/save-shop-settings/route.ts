import { NextResponse } from "next/server";
// save-shop-settings — honest state: Supabase is not connected in this deployable build,
// so nothing is stored or sent. No data is invented.
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  
  return NextResponse.json({ ok: true, stored: false, message: "Shop settings noted, but Supabase is not connected yet. Enabling a discount without a code is rejected — no live discount exists." });
}
