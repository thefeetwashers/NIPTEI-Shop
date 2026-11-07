import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

// Quote request. This route SAVES the request only. It does NOT send email.
// The owner reviews and sends from nipteiapp@gmail.com, to a verified email only.
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  if (!body.supplierName || !body.email || !body.product) {
    return NextResponse.json({ ok: false, message: "Supplier name, verified email, and product are required." }, { status: 400 });
  }
  const supabase = getSupabase();
  if (!supabase) {
    return NextResponse.json({ ok: true, stored: false, message: "Quote request saved locally in this form only — Supabase is not connected yet, and no email was sent." });
  }
  const { error } = await supabase.from("quote_requests").insert({
    supplier_name: body.supplierName, email: body.email, product: body.product,
    quantity: body.quantity ? Number(body.quantity) : null, template: body.template ?? null,
    message: body.message ?? null, status: "draft",
  });
  if (error) return NextResponse.json({ ok: false, stored: false, message: error.message }, { status: 500 });
  return NextResponse.json({ ok: true, stored: true, message: "Quote request saved as a draft. No email was sent — the owner reviews and sends it." });
}
