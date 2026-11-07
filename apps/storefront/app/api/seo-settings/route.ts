import { NextResponse } from "next/server";
import { SEO_SETTINGS } from "@/lib/artifact-data";
// getseosettings — verbatim from the artifact: nothing submitted or verified yet.
export async function GET() {
  return NextResponse.json({ ok: true, ...SEO_SETTINGS });
}
