import { NextResponse } from "next/server";
import { NEXT_FIRSTS } from "@/lib/artifact-data";
// getnextfirsts — verbatim from the artifact.
export async function GET() {
  return NextResponse.json({ ok: true, ...NEXT_FIRSTS });
}
