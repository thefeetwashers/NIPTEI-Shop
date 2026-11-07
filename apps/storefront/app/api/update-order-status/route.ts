import { NextResponse } from "next/server";
// update-order-status — honest state: Supabase is not connected in this deployable build,
// so nothing is stored or sent. No data is invented.
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  
  return NextResponse.json({ ok: true, stored: false, message: "Order status update noted, but Supabase is not connected yet — no orders exist." });
}
