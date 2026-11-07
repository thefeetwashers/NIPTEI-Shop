import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const b = await req.json().catch(() => ({}));
  const totalOz = (Number(b.pounds ?? 0) * 16) + Number(b.ounces ?? 0);
  if (totalOz <= 0) return NextResponse.json({ ok: false, message: "Weight cannot be 0 lb." }, { status: 400 });
  const dimWeight = (Number(b.length ?? 0) * Number(b.width ?? 0) * Number(b.height ?? 0)) / 166;
  const actualLb = totalOz / 16;
  const billable = Math.max(dimWeight, actualLb);
  return NextResponse.json({ ok: true, stored: false, actual_lb: actualLb, dimensional_lb: dimWeight, billable_lb: billable, note: "Estimate only — to be confirmed with the carrier. No live rates, no label or postage purchase. Not saved — Supabase is not connected yet." });
}
