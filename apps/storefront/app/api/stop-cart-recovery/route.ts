import { NextResponse } from "next/server";
// stop-cart-recovery — honest state: Supabase is not connected in this deployable build,
// so nothing is stored or sent. No data is invented.
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  
  return NextResponse.json({ ok: true, stored: false, message: "Cart recovery stopped for this bag — no channel may message about it again. (Supabase is not connected yet, so this is recorded in this session only.)" });
}
