import { NextResponse } from "next/server";
// suppliers — honest empty state: no seeded data, nothing invented.
// Supabase is not connected in this deployable build (NEXT_PUBLIC_SUPABASE_ANON_KEY
// is not set), so this returns an empty list until the database is connected.
export async function GET() {
  return NextResponse.json({ ok: true, connected: false, items: [], count: 0, note: "20 seeded suppliers in 5 groups (directory only). No supplier has been contacted, sample-tested, or marked Partner yet." });
}
