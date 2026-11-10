"use client";
import { useState } from "react";
import Link from "next/link";

// My NIPTEI — customer dashboard. Preorders are free reservations, so a
// customer can see them with just their email, before any order number.
export default function MyNipteiPage() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = await fetch("/api/waitlist", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, interest: "My NIPTEI lookup" }) });
    const json = await res.json();
    setMsg(json.message || "Checked. Preorders are stored against your email — if you have reserved anything, it will show here once the Supabase connection is live.");
  }
  return (
    <section><div className="container">
      <h1>My NIPTEI</h1>
      <p>Your orders, preorders, quiz results, Hair Twin, swaps, and refill reminders — in one place. No order yet? Preorders are free reservations: reserve a product, and it shows here under your email.</p>
      {msg && <div className="notice">{msg}</div>}
      <form onSubmit={submit} className="card">
        <label>Email used at checkout / preorder<input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" /></label>
        <p><button className="btn" type="submit">Show my preorders</button></p>
      </form>
      <div className="card"><h2>My Preorders</h2><p>No preorders shown yet — join a waitlist from <Link href="/collection">The Collection</Link> and it will appear here. Preorder — reserve yours now. No charge today.</p></div>
      <div className="card"><h2>My Waitlist</h2><p>No waitlist entries shown yet. Join a waitlist from <Link href="/collection">The Collection</Link> and it will appear here under your email.</p></div>
      <div className="card"><h2>My Quiz Results</h2><p>No quiz result saved yet. Take the <Link href="/quiz">Hair Quiz</Link> and your result will show here once the Supabase connection is live.</p></div>
      <div className="card"><h2>Request a Swap</h2><p>One swap only, within 30 days of delivery, to the correct formula from your re-taken quiz. You do NOT return the old bottle. <Link href="/swap-promise">Swap Promise terms (Draft) →</Link></p></div>
      <div className="card"><h2>Hair Twin</h2><p>Your 12-week living profile, climate / season-aware. Building — your quiz results will feed it once the Supabase connection is live.</p><p>Hair Twin matching is permission only — match with someone like you, only if you opt in.</p></div>
      <div className="card"><h2>Refill reminders</h2><p>Consent-based only. We offer a reorder 3 days before you run out — never auto-charge without your approval.</p></div>
      <p><Link href="/quiz">Take the Hair Quiz →</Link> · <Link href="/hair-letter">The NIPTEI Hair Letter →</Link></p>
    </div></section>
  );
}
