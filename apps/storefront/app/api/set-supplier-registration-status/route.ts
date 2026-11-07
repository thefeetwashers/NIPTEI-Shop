import { NextResponse } from "next/server";
// set-supplier-registration-status — honest state: Supabase is not connected in this deployable build,
// so nothing is stored or sent. No data is invented.
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  
  return NextResponse.json({ ok: true, stored: false, message: "Registration status noted, but Supabase is not connected yet. Approval creates the supplier and a portal code only in the live shop." });
}
