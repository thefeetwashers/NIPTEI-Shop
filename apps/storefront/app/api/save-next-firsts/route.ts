import { NextResponse } from "next/server";
// save-next-firsts — honest state: Supabase is not connected in this deployable build,
// so nothing is stored or sent. No data is invented.
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  
  return NextResponse.json({ ok: true, stored: false, message: "Firsts statuses noted, but Supabase is not connected yet. The Swap Promise cannot be enabled without approved terms and real costs." });
}
