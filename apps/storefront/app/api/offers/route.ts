import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json({ ok: true, quiz_offer_live: false, quiz_offer_code: null, note: "The 15% quiz waitlist offer is owner-configured and OFF until the owner sets a code and expiry. No code exists. The cart-recovery discount is never exposed here." });
}
