import { NextResponse } from "next/server";
// save-quiz-result — honest state: Supabase is not connected in this deployable build,
// so nothing is stored or sent. No data is invented.
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  
  return NextResponse.json({ ok: true, stored: false, message: "Quiz result noted in this browser only — Supabase is not connected yet, so it is not saved. Nothing is emailed." });
}
