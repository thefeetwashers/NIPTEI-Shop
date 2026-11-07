import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) return NextResponse.json({ ok: false, message: "Supplier Helper is not connected yet — set OPENROUTER_API_KEY in Vercel environment variables." }, { status: 503 });
  return NextResponse.json({ ok: false, message: "Supplier Helper key is set, but supplier data is not connected in this build — answers are limited to the supplier's own portal data, which is empty here." }, { status: 503 });
}
