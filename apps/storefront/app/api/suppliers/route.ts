import { NextResponse } from "next/server";
import { SUPPLIERS } from "@/lib/artifact-data";
// listsuppliers — verbatim from the artifact: 20 suppliers, all not_contacted.
export async function GET() {
  return NextResponse.json({ ok: true, count: SUPPLIERS.length, suppliers: SUPPLIERS });
}
