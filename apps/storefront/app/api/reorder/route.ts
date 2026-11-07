import { NextResponse } from "next/server";
// reorder — honest state: Supabase is not connected in this deployable build,
// so nothing is stored or sent. No data is invented.
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  
  return NextResponse.json({ ok: true, stored: false, message: "Reorder refused — Stripe is not connected and no previous order exists in this build. No payment was taken." });
}
