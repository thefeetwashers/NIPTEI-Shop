import { NextResponse } from "next/server";
import { SHOP_SETTINGS } from "@/lib/artifact-data";
// getshopsettings — verbatim from the artifact.
export async function GET() {
  return NextResponse.json({ ok: true, ...SHOP_SETTINGS });
}
