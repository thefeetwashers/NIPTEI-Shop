import { NextResponse } from "next/server";
// toggle-rule — honest state: Supabase is not connected in this deployable build,
// so nothing is stored or sent. No data is invented.
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  
  return NextResponse.json({ ok: true, stored: false, message: "Automation rule toggle noted, but Supabase is not connected yet. Rules stay OFF until the owner enables them after account authorization." });
}
