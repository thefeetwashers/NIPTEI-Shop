import { NextResponse } from "next/server";
// update-supplier — honest state: Supabase is not connected in this deployable build,
// so nothing is stored or sent. No data is invented.
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  
  return NextResponse.json({ ok: true, stored: false, message: "Supplier update noted, but Supabase is not connected yet. Partner requires blind ship confirmed in writing AND a test parcel checked with a photo." });
}
