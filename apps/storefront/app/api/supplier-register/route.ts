import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

// Supplier registration. Owner approval is required before any portal access.
// No email is sent by this route. Status starts as "pending".
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  if (!body.businessName || !body.email) {
    return NextResponse.json({ ok: false, message: "Business name and email are required." }, { status: 400 });
  }
  const supabase = getSupabase();
  if (!supabase) {
    return NextResponse.json({ ok: true, stored: false, message: "Registration received, but Supabase is not connected yet — the owner will review it once the database is connected. No portal access is granted yet." });
  }
  const { error } = await supabase.from("supplier_registrations").insert({
    business_name: body.businessName, contact_name: body.contactName ?? null, email: body.email,
    phone: body.phone ?? null, country: body.country ?? null, city: body.city ?? null,
    supply_type: body.supplyType ?? null, years_in_business: body.years ? Number(body.years) : null,
    blind_ship: body.blindShip === "Yes", status: "pending",
  });
  if (error) return NextResponse.json({ ok: false, stored: false, message: error.message }, { status: 500 });
  return NextResponse.json({ ok: true, stored: true, message: "Registration submitted. The owner will review it — no portal access until approved." });
}
