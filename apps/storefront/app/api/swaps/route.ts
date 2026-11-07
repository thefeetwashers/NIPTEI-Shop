import { NextResponse } from "next/server";
// swaps — honest empty state: no seeded data, nothing invented.
// Supabase is not connected in this deployable build (NEXT_PUBLIC_SUPABASE_ANON_KEY
// is not set), so this returns an empty list until the database is connected.
export async function GET() {
  return NextResponse.json({ ok: true, connected: false, items: [], count: 0, note: "No swap requests yet. The list is empty until a real swap happens. The Swap Promise is Draft V3, not live." });
}
