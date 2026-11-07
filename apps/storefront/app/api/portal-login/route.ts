import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  if (!body.code) return NextResponse.json({ ok: false, message: "A portal code is required." }, { status: 400 });
  return NextResponse.json({ ok: false, message: "Portal code could not be verified — Supabase is not connected in this deployable build, and no supplier data exists yet. Ask the owner for your code once the portal is live." }, { status: 401 });
}
