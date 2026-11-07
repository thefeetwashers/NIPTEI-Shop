import { NextResponse } from "next/server";
// add-review — honest state: Supabase is not connected in this deployable build,
// so nothing is stored or sent. No data is invented.
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  
  return NextResponse.json({ ok: true, stored: false, message: "Review refused — reviews can only be posted by verified buyers (email + order number must match a real order). No review was added and nothing was invented." });
}
