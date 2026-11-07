import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const res = await fetch(new URL("/api/ai-helper", req.url), { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(await req.json().catch(() => ({}))) });
  return NextResponse.json(await res.json(), { status: res.status });
}
