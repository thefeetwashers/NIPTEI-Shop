import { NextResponse } from "next/server";
// label-sends — honest empty state: no seeded data, nothing invented.
// Supabase is not connected in this deployable build (NEXT_PUBLIC_SUPABASE_ANON_KEY
// is not set), so this returns an empty list until the database is connected.
export async function GET() {
  return NextResponse.json({ ok: true, connected: false, items: [], count: 0, note: "No label sends prepared yet. Sends are drafts the owner reviews and sends from nipteiapp@gmail.com — never auto-sent." });
}
