import { NextResponse } from "next/server";
import { INTEGRATIONS } from "@/lib/artifact-data";
// listintegrations — verbatim from the artifact: 16 integrations, all not_connected.
export async function GET() {
  return NextResponse.json({ ok: true, count: INTEGRATIONS.length, integrations: INTEGRATIONS });
}
