"use client";
import { useState } from "react";

// Supplier Shipping Calculator — estimate only, to be confirmed with the carrier.
// No live rates, no label purchase, no postage purchase, no payment.
// Posts the shipment to /api/shipping-calculation and shows the local estimate.
function ShippingCalculator() {
  const [from, setFrom] = useState("33313");
  const [to, setTo] = useState("usa");
  const [packaging, setPackaging] = useState("Box");
  const [l, setL] = useState(8); const [w, setW] = useState(6); const [h, setH] = useState(4);
  const [lb, setLb] = useState(0); const [oz, setOz] = useState(8);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  async function calculate() {
    const totalOz = lb * 16 + oz;
    if (totalOz <= 0) { setError("Weight cannot be 0 lb — enter a weight above 0."); setResult(null); return; }
    setError(null);
    const dimWeight = (l * w * h) / 166;
    const actualLb = totalOz / 16;
    const billable = Math.max(dimWeight, actualLb);
    const carrier = billable < 1 ? "USPS Ground Advantage (single light bottle — usually $3.50–$5.00, 2–5 business days)" : billable >= 2 ? "UPS Ground (household bundle — cheaper once the package passes 2–3 lbs)" : "USPS Ground Advantage or UPS Ground — compare both";
    setResult(`Shipment: ${from} → ${to} · ${packaging} ${l}×${w}×${h} in · ${lb} lb ${oz} oz (${actualLb.toFixed(2)} lb actual, ${dimWeight.toFixed(2)} lb dimensional) · Billable weight: ${billable.toFixed(2)} lb. Suggested carrier (estimate only): ${carrier}.`);
    try {
      await fetch("/api/shipping-calculation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ from_zip: from, to_zip: to, packaging, length: l, width: w, height: h, pounds: lb, ounces: oz }),
      });
    } catch {
      // Estimate is shown locally regardless; the API stores nothing live yet.
    }
  }
  return (
    <div className="card">
      <h3>Shipping Calculator — estimate only</h3>
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
  );
}

export default function ShippingPage() {
  return (
    <section><div className="container">
      <h1>Shipping &amp; Delivery</h1>
      <p>We ship via UPS and USPS — a dual-carrier strategy, not a single carrier for everything.</p>
      <div className="card"><h2>Dual-Carrier Shipping (UPS + USPS)</h2>
        <table><thead><tr><th>Carrier</th><th>Best for</th><th>Pros</th><th>Cons</th></tr></thead><tbody>
          <tr><td>USPS (Post Office)</td><td>Lightweight single-bottle orders under 1 lb</td><td>Cheapest rates for lightweight serums; reaches every mailbox and PO Box</td><td>Tracking can occasionally lag; slower cross-country ground</td></tr>
          <tr><td>UPS</td><td>Multi-product household bundles over 1–2 lbs</td><td>Superior tracking reliability; fast, predictable ground delivery; handles heavier boxes efficiently</td><td>Can get expensive for ultra-lightweight single items; strict residential delivery surcharges</td></tr>
          <tr><td>FedEx</td><td>Express / overnight</td><td>Fast transit networks</td><td>Notorious surprise residential delivery fees; less reliable ground service for independent e-commerce than UPS</td></tr>
        </tbody></table>
      </div>
      <div className="card"><h2>The dual-carrier rule</h2>
        <p><strong>1. Single Serum Buyer (The Tester)</strong> — one 50 ml bottle, well under 1 lb: ship via USPS Ground Advantage. Usually $3.50–$5.00 across the US, built-in tracking, 2–5 business days.</p>
        <p><strong>2. One Household, One Shop Buyer (Multi-Routine Bundle)</strong> — products for self, partner, kids, pets, box heavier and more valuable: ship via UPS Ground. Exact tracking notifications, avoids FedEx residential inconsistencies, often cheaper than USPS once a package passes 2–3 lbs.</p>
        <p>Shipping software: ShipStation or Pirate Ship to manage both carriers, print labels, and sync tracking. <strong>Not connected yet</strong> — listed as “to connect when shipping goes live”. Pirate Ship account exists for nipteiapp@gmail.com (USPS + UPS, no monthly fee); email verification and a payment method are still needed before postage can be bought.</p>
      </div>
      <div className="card"><h2>Shipping &amp; Delivery Policy — Proposed, not live</h2>
        <p>Free shipping on orders over $50 (bundles upgraded to UPS Ground at no extra cost). Under $50, flat $4.95 via USPS. Processing 1–2 business days. PO Box / APO / FPO via USPS only.</p>
        <p>Financial example only, never a live price: Single $38.00 gross / $10.39 total fulfilled / $27.61 net / 72.6% vs Bundle $76.00 / $20.28 / $55.72 / 73.3% — targets / estimates only.</p>
        <p>Checkout incentive, PROPOSED, not live until the owner enables it: “Bundle a routine for your partner or family member and get upgraded to Free UPS 3-Day Reliable Shipping.”</p>
      </div>
      <ShippingCalculator />
      <div className="card"><h2>Unboxing — The NIPTEI Ritual</h2>
        <p>Matte white / raw kraft box, centered logo, inside lid: “Custom Formulas For The Whole Household.” Divider cards For Me / For My Partner (+ Child / Pet — pet products NOT for human use), tissue with translucent logo, sticker: “Your 60-Second Diagnostic Results Are Inside.”, Diagnostic Summary Thank-You Card with a QR code to My NIPTEI (no fake QR).</p>
        <p>Shipping emails (drafts, automation OFF, sender nipteiapp@gmail.com until a support@niptei.com mailbox is set up): Dispatched — “Your Niptei Household Routine is on the move! 📦” · Delivered — “Delivered: Your customized hair care has arrived 🏠”.</p>
      </div>
      <p>Worldwide shipping — coming soon, join the waitlist for your country. English / USD for now.</p>
    </div></section>
  );
}
