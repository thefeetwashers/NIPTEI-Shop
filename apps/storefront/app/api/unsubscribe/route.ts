import { NextResponse } from "next/server";
// unsubscribe — honest state: Supabase is not connected in this deployable build,
// so nothing is stored or sent. No data is invented.
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  
  return NextResponse.json({ ok: true, stored: false, message: "Unsubscribe noted — Supabase is not connected yet. That address will never be emailed marketing again once the list is connected." });
}
