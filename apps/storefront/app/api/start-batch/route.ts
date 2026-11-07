import { NextResponse } from "next/server";
// start-batch — honest state: Supabase is not connected in this deployable build,
// so nothing is stored or sent. No data is invented.
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  
  return NextResponse.json({ ok: true, stored: false, message: "Batch start noted, but Supabase is not connected yet. No production was started and no supplier was paid." });
}
