import { NextResponse } from "next/server";
// shop-settings — honest empty state: no seeded data, nothing invented.
// Supabase is not connected in this deployable build (NEXT_PUBLIC_SUPABASE_ANON_KEY
// is not set), so this returns an empty list until the database is connected.
export async function GET() {
  return NextResponse.json({ ok: true, connected: false, items: [], count: 0, note: "Cart-recovery discount and quiz completion offer are both OFF until the owner enables them and sets a real code." });
}
