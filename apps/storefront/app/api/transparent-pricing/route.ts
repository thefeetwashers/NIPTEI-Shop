import { NextResponse } from "next/server";
import { calculateRetailPrice } from "@/lib/pricing";
export async function POST(req: Request) {
  const b = await req.json().catch(() => ({}));
  const inputs = { supplyCost: Number(b.supplyCost ?? 0), packagingCost: Number(b.packagingCost ?? 0), shippingCost: Number(b.shippingCost ?? 0), marketingCpa: Number(b.marketingCpa ?? 0), targetMarginPct: Number(b.targetMarginPct ?? 25), merchantProcessingPct: Number(b.merchantProcessingPct ?? 2.9) };
  const result = calculateRetailPrice(inputs);
  return NextResponse.json({ ok: true, example_only: true, note: "This is a calculation from the inputs you entered — not a live price. No swap buffer is added. A real price appears only after the owner enters real quotes and sets a real price.", result });
}
