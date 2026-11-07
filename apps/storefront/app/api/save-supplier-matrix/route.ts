import { NextResponse } from "next/server";
// save-supplier-matrix — honest state: Supabase is not connected in this deployable build,
// so nothing is stored or sent. No data is invented.
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  
  return NextResponse.json({ ok: true, stored: false, message: "Supplier matrix noted, but Supabase is not connected yet. Marking a row not-example requires a mapped supplier and a cost." });
}
