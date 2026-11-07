import { NextResponse } from "next/server";
// inquiry-log — honest empty state: no seeded data, nothing invented.
// Supabase is not connected in this deployable build (NEXT_PUBLIC_SUPABASE_ANON_KEY
// is not set), so this returns an empty list until the database is connected.
export async function GET() {
  return NextResponse.json({ ok: true, connected: false, items: [], count: 0, note: "1 R&D inquiry sent (Pravada, info@pravada.com, Nov 7, 2026) — awaiting reply. No other supplier contacted." });
}
