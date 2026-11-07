import { NextResponse } from "next/server";
// subscribe — honest state: Supabase is not connected in this deployable build,
// so nothing is stored or sent. No data is invented.
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  
  return NextResponse.json({ ok: true, stored: false, message: "Subscription noted, but Supabase is not connected yet — you are not subscribed until the database is connected and your consent is recorded. Consent is never assumed." });
}
