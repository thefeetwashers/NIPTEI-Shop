import { NextResponse } from "next/server";
// delete-product — honest state: Supabase is not connected in this deployable build,
// so nothing is stored or sent. No data is invented.
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  
  return NextResponse.json({ ok: true, stored: false, message: "Product deletion refused in this deployable build — delete from the owner dashboard once Supabase is connected." });
}
