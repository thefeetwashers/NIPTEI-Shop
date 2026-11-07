import { NextResponse } from "next/server";
import { LAUNCH_TRACKER } from "@/lib/artifact-data";
// getlaunchtracker — verbatim from the artifact: two groups, every step Not started.
export async function GET() {
  return NextResponse.json({ ok: true, tracker_json: JSON.stringify(LAUNCH_TRACKER) });
}
