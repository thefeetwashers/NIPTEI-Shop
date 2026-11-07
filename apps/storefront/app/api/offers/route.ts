import { NextResponse } from "next/server";
import { PUBLIC_OFFERS } from "@/lib/artifact-data";
// getpublicoffers — verbatim from the artifact: quiz offer 10% OFF, waitlist offer 15% OFF.
export async function GET() {
  return NextResponse.json({ ok: true, ...PUBLIC_OFFERS });
}
