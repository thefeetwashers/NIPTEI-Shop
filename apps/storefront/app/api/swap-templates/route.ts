import { NextResponse } from "next/server";
import { SWAP_TEMPLATES } from "@/lib/artifact-data";
// getswaptemplates — verbatim from the artifact.
export async function GET() {
  return NextResponse.json({ ok: true, ...SWAP_TEMPLATES });
}
