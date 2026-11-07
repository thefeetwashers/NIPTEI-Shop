import { NextResponse } from "next/server";
// getinquirylog — verbatim from the artifact: no entries logged yet.
export async function GET() {
  return NextResponse.json({ ok: true, entries: [] });
}
