import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  if (!body.item) return NextResponse.json({ ok: false, message: "A label item is required." }, { status: 400 });
  return NextResponse.json({ ok: true, stored: false, status: "Prepared — owner to review & send", message: "Label send prepared as a draft. Nothing was auto-sent — the owner reviews it and sends it from nipteiapp@gmail.com (mailto draft)." });
}
