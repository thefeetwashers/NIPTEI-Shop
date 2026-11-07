import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

// Waitlist signup. Inserts into Supabase `waitlist` when env vars are set;
// otherwise returns stored:false honestly — nothing is invented or emailed.
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!email || !email.includes("@")) {
    return NextResponse.json({ ok: false, message: "A valid email is required." }, { status: 400 });
  }
  const supabase = getSupabase();
  if (!supabase) {
    return NextResponse.json({ ok: true, stored: false, message: "Waitlist noted, but Supabase is not connected yet — run supabase/schema.sql and set NEXT_PUBLIC_SUPABASE_ANON_KEY to store it." });
  }
  const { error } = await supabase.from("waitlist").insert({ email, interest: body.interest ?? null });
  if (error) return NextResponse.json({ ok: false, stored: false, message: error.message }, { status: 500 });
  return NextResponse.json({ ok: true, stored: true, message: "You are on the waitlist. We will email you only when it launches." });
}
