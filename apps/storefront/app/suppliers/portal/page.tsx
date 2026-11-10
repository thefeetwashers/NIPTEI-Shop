"use client";
import { useState } from "react";
import Link from "next/link";
import { PRODUCTS, LABEL_CONTACT_LINE } from "@/lib/products";

// Supplier Portal — sign-in with the owner-issued portal code.
// portal-login returns 401 without credentials — no access is invented here.
const LABEL_GROUPS: Array<[string, string[]]> = [
  ["Collection A — Shampoo & Conditioner", ["strengthen-restore-shampoo", "anti-hair-loss-shampoo", "argan-oil-shampoo", "argan-oil-conditioner"]],
  ["Collection B — Hair Growth & Scalp Oils", ["pumpkin-seed-oil", "herbal-hair-oil", "rosemary-hair-oil", "tea-tree-hair-oil", "biotin-hair-oil", "onion-hair-growth-oil", "baobab-oil"]],
  ["Collection C — Serums & Treatments", ["hair-growth-serum", "scalp-resurfacing-growth-serum", "care-root-renewal-elixir", "black-rice-hair-growth-spray"]],
  ["Collection D — Curly & Natural", ["curl-cream", "nourishing-hair-mask", "care-leave-in-conditioner", "care-hair-butter"]],
  ["Kids", ["kids-gentle-tear-free-shampoo", "kids-detangling-spray", "kids-curl-cream", "kids-scalp-oil"]],
  ["Pet", ["pet-shampoo-dogs", "pet-shampoo-cats", "pet-coat-skin-oil", "pet-deshedding-conditioner", "pet-paw-nose-balm", "pet-detangling-spray"]],
];

export default function SupplierPortalPage() {
  const [code, setCode] = useState("");
  const [msg, setMsg] = useState("");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!code.trim()) { setMsg("Enter the portal code the owner issued you."); return; }
    const res = await fetch("/api/portal-login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ code }) });
    const json = await res.json().catch(() => ({}));
    setMsg(json.message || "Portal code could not be verified — Supabase is not connected in this deployable build, and no supplier data exists yet. Ask the owner for your code once the portal is live.");
  }

  // Shipping Calculator — estimate only, to be confirmed with the carrier.
  // No live rates, no label purchase, no postage purchase, no payment.
  const [from, setFrom] = useState("33313");
  const [to, setTo] = useState("usa");
  const [packaging, setPackaging] = useState("Box");
  const [l, setL] = useState(8); const [w, setW] = useState(6); const [h, setH] = useState(4);
  const [lb, setLb] = useState(0); const [oz, setOz] = useState(8);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  function calculate() {
    const totalOz = lb * 16 + oz;
    if (totalOz <= 0) { setError("Weight cannot be 0 lb — enter a weight above 0."); setResult(null); return; }
    setError(null);
    const dimWeight = (l * w * h) / 166;
    const actualLb = totalOz / 16;
    const billable = Math.max(dimWeight, actualLb);
    const carrier = billable < 1 ? "USPS Ground Advantage (single light bottle — usually $3.50–$5.00, 2–5 business days)" : billable >= 2 ? "UPS Ground (household bundle — cheaper once the package passes 2–3 lbs)" : "USPS Ground Advantage or UPS Ground — compare both";
    setResult(`Shipment: ${from} → ${to} · ${packaging} ${l}×${w}×${h} in · ${lb} lb ${oz} oz (${actualLb.toFixed(2)} lb actual, ${dimWeight.toFixed(2)} lb dimensional) · Billable weight: ${billable.toFixed(2)} lb. Suggested carrier (estimate only): ${carrier}.`);
  }

  return (
    <section><div className="container">
      <h1>Supplier Portal</h1>
      <p>For approved suppliers only. You see only your own orders, products and Trust Score. Suppliers never set a retail price. Go-live is gated: owner approval + sample test passed + origin documents on file.</p>
      {msg && <div className="notice">{msg}</div>}
      <form onSubmit={submit} className="card">
        <label>Portal code<input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Your owner-issued portal code" /></label>
        <p><button className="btn" type="submit">Sign in to the Supplier Portal</button></p>
      </form>
      <div className="card"><h2>Blind shipping</h2><p>Blind-ship packing slips hide the supplier — never the country of origin. Stripe Connect split is gated: auto-pay only after sample test passed AND Stripe Connect onboarding / KYC complete; otherwise manual approve-and-pay. Stripe is not connected yet.</p></div>

      <div className="card"><h2>Supplier-order queue</h2><p>0 orders — no supplier orders yet.</p></div>
      <div className="card"><h2>Quote replies</h2><p>No quote replies yet.</p></div>
      <div className="card"><h2>Supplier listings</h2><p>Supplier listings: 0.</p></div>
      <div className="card"><h2>Stripe Connect split</h2><p>Stripe Connect split is gated until sample test + onboarding. Auto-pay only after sample test passed AND Stripe Connect onboarding / KYC complete; otherwise manual approve-and-pay. Stripe is not connected yet. Stripe Connect status for every supplier: not started.</p></div>

      <div className="card"><h2>Shipping Calculator — estimate only</h2>
        {error && <div className="warning">{error}</div>}
        {result && <div className="notice">{result}<br /><strong>Estimate only — to be confirmed with the carrier.</strong> No live rates, no label or postage purchase here.</div>}
        <label>From (USA only) — Zipcode<input value={from} onChange={(e) => setFrom(e.target.value)} /></label>
        <label>To — USA zipcode or Country Name<input value={to} onChange={(e) => setTo(e.target.value)} /></label>
        <label>Type of Packaging<select value={packaging} onChange={(e) => setPackaging(e.target.value)}><option>Box</option><option>Rigid Packaging</option></select><span style={{ fontWeight: 400, fontSize: 13 }}>Any custom box or thick parcel.</span></label>
        <label>Dimensions (Inches) — Length<input type="number" min={0} value={l} onChange={(e) => setL(Number(e.target.value))} /></label>
        <label>Width<input type="number" min={0} value={w} onChange={(e) => setW(Number(e.target.value))} /></label>
        <label>Height<input type="number" min={0} value={h} onChange={(e) => setH(Number(e.target.value))} /></label>
        <label>Weight — Pounds<input type="number" min={0} value={lb} onChange={(e) => setLb(Number(e.target.value))} /></label>
        <label>Weight — Ounces<input type="number" min={0} max={15} value={oz} onChange={(e) => setOz(Number(e.target.value))} /></label>
        <p><button className="btn" type="button" onClick={calculate}>Calculate shipping (estimate)</button></p>
        <p style={{ fontSize: 13, color: "#666" }}>Dimensional weight = Length × Width × Height ÷ 166. Billable weight is whichever is higher: actual or dimensional. Dual-carrier rule: single 50 ml serum under 1 lb → USPS Ground Advantage; household bundle over 2–3 lbs → UPS Ground. Free shipping over $50 (proposed) and $4.95 flat under $50 via USPS (proposed) — not live until the owner enables them.</p>
      </div>

      <h2>Labels Library</h2>
      <p>Label contact line on every label: <strong>{LABEL_CONTACT_LINE}</strong> — shop.niptei.com, never plain niptei.com.</p>
      <div className="warning"><strong>Design proofs — not final print files.</strong> No Made in USA seal until origin documents are on file. Placeholders where the manufacturer has not supplied information yet: “[Full INCI list — supplied by manufacturer]”, “[Key ingredients — to be confirmed by manufacturer]”, “[Manufacturer information — to be supplied]”, batch / expiry / barcode spaces. Known defects to fix before any printing: some back-label text is garbled, one barcode shows illustrative digits, some bottle sizes are generator defaults (confirm real sizes), Chebe products share one back panel with no separate carton per product. Do NOT send these to print as-is.</div>
      {LABEL_GROUPS.map(([group, slugs]) => (
        <div key={group}>
          <h3>{group}</h3>
          <table><thead><tr><th>Product</th><th>Label status</th><th>Download</th></tr></thead><tbody>
            {slugs.map((s) => { const p = PRODUCTS.find((x) => x.slug === s); if (!p) return null; return (
              <tr key={s}><td><Link href={`/products/${s}`}>{p.name}</Link></td><td>Design proof — not final print file · {LABEL_CONTACT_LINE}</td><td>{p.image ? <a href={p.image} download>Download design proof</a> : "No design-proof file on file yet — download not available."}</td></tr>
            ); })}
          </tbody></table>
        </div>
      ))}
      <div className="card"><h2>Master Brand Presentation</h2><p>NIPTEI – BEAUTY HAS NO BOUNDARIES. HEALTHY HAIR. CONFIDENT YOU. FOR ALL PEOPLE. FOR ALL HAIR TYPES. {LABEL_CONTACT_LINE}</p></div>
      <p>Label sends are logged as “Prepared — owner to review &amp; send”. Nothing is ever auto-sent.</p>
      <p>Not a supplier yet? <a href="/suppliers/register">Become a Supplier →</a></p>
    </div></section>
  );
}
