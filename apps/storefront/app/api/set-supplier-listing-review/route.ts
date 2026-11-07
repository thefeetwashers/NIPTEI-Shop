import { NextResponse } from "next/server";
// set-supplier-listing-review — honest state: Supabase is not connected in this deployable build,
// so nothing is stored or sent. No data is invented.
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  
  return NextResponse.json({ ok: true, stored: false, message: "Listing review noted, but Supabase is not connected yet. Live is refused unless approved, sample test passed, AND origin documents are on file." });
}
