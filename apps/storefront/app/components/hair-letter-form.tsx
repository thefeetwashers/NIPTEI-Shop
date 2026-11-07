"use client";
import { useState } from "react";

// The NIPTEI Hair Letter — consent is UNCHECKED by default.
// No one is subscribed until they actively tick the box.
export default function HairLetterForm({ source }: { source: string }) {
  const [msg, setMsg] = useState("");
  const [consent, setConsent] = useState(false);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) { setMsg("Please tick the consent box first — we never subscribe anyone without their say-so."); return; }
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const res = await fetch("/api/waitlist", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, interest: `Hair Letter — ${source}` }) });
    const json = await res.json();
    setMsg(json.message || "Welcome to The NIPTEI Hair Letter. You can unsubscribe anytime.");
  }
  return (
    <form onSubmit={submit} className="card">
      <h3>Join The NIPTEI Hair Letter</h3>
      <p>Weekly, education first. No spam, no selling your email. Unsubscribe anytime.</p>
      {msg && <div className="notice">{msg}</div>}
      <label htmlFor={`hl-email-${source}`}>Email</label>
      <input id={`hl-email-${source}`} name="email" type="email" required placeholder="you@example.com" />
      <p>
        <label style={{ display: "flex", gap: 8, alignItems: "flex-start", fontWeight: 400 }}>
          <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} style={{ width: "auto", marginTop: 4 }} />
          <span>Yes, email me hair education and NIPTEI product news. I can unsubscribe anytime.</span>
        </label>
      </p>
      <p><button className="btn" type="submit" disabled={!consent}>Subscribe to the Hair Letter</button></p>
      {!consent && <p style={{ fontSize: 13, color: "#666" }}>Tick the box above to subscribe — it starts unticked, on purpose.</p>}
    </form>
  );
}
