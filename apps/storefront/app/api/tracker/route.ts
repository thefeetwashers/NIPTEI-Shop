import { NextResponse } from "next/server";
// tracker — honest empty state: no seeded data, nothing invented.
// Supabase is not connected in this deployable build (NEXT_PUBLIC_SUPABASE_ANON_KEY
// is not set), so this returns an empty list until the database is connected.
export async function GET() {
  return NextResponse.json({ ok: true, connected: false, items: [], count: 0, note: "First Real Product Tracker — 7 steps. Step 1 is in progress (R&D inquiry sent to Pravada, Nov 7, 2026); all other steps Not started." });
}
