import { NextResponse } from "next/server";
import { AUTOMATION_RULES } from "@/lib/artifact-data";
// listrules — verbatim from the artifact: rules 1-5 on, 6-10 off.
export async function GET() {
  return NextResponse.json({ ok: true, rules: AUTOMATION_RULES });
}
