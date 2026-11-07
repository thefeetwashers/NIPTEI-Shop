import { NextResponse } from "next/server";
// place-order — honest state: Supabase is not connected in this deployable build,
// so nothing is stored or sent. No data is invented.
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  
  return NextResponse.json({ ok: true, stored: false, message: "Order NOT placed — Stripe is not connected and no prices are set. No payment was taken and no stock was changed." });
}
