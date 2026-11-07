import { NextResponse } from "next/server";
// seo-settings — honest empty state: no seeded data, nothing invented.
// Supabase is not connected in this deployable build (NEXT_PUBLIC_SUPABASE_ANON_KEY
// is not set), so this returns an empty list until the database is connected.
export async function GET() {
  return NextResponse.json({ ok: true, connected: false, items: [], count: 0, note: "Get Found checklist not started — sitemap not yet submitted to Google / Bing." });
}
