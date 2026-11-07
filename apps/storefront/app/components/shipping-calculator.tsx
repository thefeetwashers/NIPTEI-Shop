"use client";
import { useState } from "react";

// Supplier Shipping Calculator — estimate only, to be confirmed with the carrier.
// No live rates, no label purchase, no postage purchase, no payment.
export default function ShippingCalculator() {
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
