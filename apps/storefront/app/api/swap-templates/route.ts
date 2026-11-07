import { NextResponse } from "next/server";
import { SWAP_PROMISE_TERMS } from "@/lib/pricing";
export async function GET() {
  return NextResponse.json({ ok: true, status: SWAP_PROMISE_TERMS.status, title: SWAP_PROMISE_TERMS.title, copy: SWAP_PROMISE_TERMS.copy, notification_1_sms_whatsapp: "Hi {{First_Name}}! Your Swap Promise replacement for order {{Order_Number}} is on its way — matched to your {{New_Hair_Type}} routine. We'll text you a tracking link the moment it leaves the warehouse! 🔁", notification_2_email_subject: "Your Swap Promise replacement is on its way! 📦", note: "Templates are sent only when a real swap is requested, and only on channels the customer opted into." });
}
