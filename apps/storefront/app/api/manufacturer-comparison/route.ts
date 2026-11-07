import { NextResponse } from "next/server";
import { MANUFACTURER_COMPARISON } from "@/lib/artifact-data";
// getmanufacturercomparison — verbatim from the artifact: labelled worked example.
export async function GET() {
  return NextResponse.json({ ok: true, is_example: MANUFACTURER_COMPARISON.is_example, rows: MANUFACTURER_COMPARISON.rows });
}
