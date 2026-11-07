import { NextResponse } from "next/server";
// add-queue-post — honest state: Supabase is not connected in this deployable build,
// so nothing is stored or sent. No data is invented.
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  
  return NextResponse.json({ ok: true, stored: false, message: "Queue post noted, but Supabase is not connected yet. Nothing is posted." });
}
