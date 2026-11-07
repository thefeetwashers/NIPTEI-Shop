import { NextResponse } from "next/server";
// save-abandoned-cart — honest state: Supabase is not connected in this deployable build,
// so nothing is stored or sent. No data is invented.
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  
  return NextResponse.json({ ok: true, stored: false, message: "Bag saved in this browser only — Supabase is not connected yet. Recovery drafts are due after 1 hour, then 24 hours, and stop if you opt out." });
}
