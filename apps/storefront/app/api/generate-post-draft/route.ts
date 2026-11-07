import { NextResponse } from "next/server";
// generate-post-draft — honest state: Supabase is not connected in this deployable build,
// so nothing is stored or sent. No data is invented.
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  
  return NextResponse.json({ ok: true, stored: false, message: "AI Content Studio is not connected yet — set OPENROUTER_API_KEY in Vercel environment variables. No draft was generated." });
}
