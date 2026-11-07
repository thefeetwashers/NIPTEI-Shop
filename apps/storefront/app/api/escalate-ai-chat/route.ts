import { NextResponse } from "next/server";
// escalate-ai-chat — honest state: Supabase is not connected in this deployable build,
// so nothing is stored or sent. No data is invented.
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  
  return NextResponse.json({ ok: true, stored: false, message: "Escalation noted — the owner will reply. No message was sent automatically." });
}
