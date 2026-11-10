"use client";
import { useState } from "react";
import { getProduct } from "@/lib/products";

// Request a Quote — owner form: send a quote request to a supplier.
// Nothing is sent automatically — the owner reviews and sends from
// nipteiapp@gmail.com. Supplier replies land in the Manufacturer Comparison Tracker.
const SERUM = getProduct("scalp-resurfacing-growth-serum");

export default function QuoteRequestPage() {
  const [msg, setMsg] = useState("");
  const [inquiryMsg, setInquiryMsg] = useState("");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const res = await fetch("/api/quote-request", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    const json = await res.json();
    setMsg(json.message || "Quote request received.");
  }
  function reviewApprove() {
    setInquiryMsg("Reviewed — saved for the owner to send from nipteiapp@gmail.com. Nothing was sent automatically, and nothing is sent to an unverified email.");
  }
  return (
    <section><div className="container">
      <h1>Request a Quote</h1>
      <p>Owner form: send a quote request to a supplier. Nothing is sent automatically — the owner reviews and sends from nipteiapp@gmail.com. Supplier replies land in the Manufacturer Comparison Tracker.</p>
      <p><strong>Verified emails only.</strong> Do not invent a supplier email. If a supplier has no verified email, do not send.</p>
      {msg && <div className="notice">{msg}</div>}
      <form onSubmit={submit}>
        <label>Supplier business name<input name="supplierName" required /></label>
        <label>Supplier email (verified only)<input name="email" type="email" required /></label>
        <label>Product / formula<input name="product" required placeholder="e.g. NIPTEI Hydrating Shampoo, 250 ml" /></label>
        <label>Quantity (units)<input name="quantity" type="number" min={1} defaultValue={50} /></label>
        <label>Template<select name="template"><option>Manufacturer Outreach</option><option>Sample Request</option><option>MOQ / Pricing</option><option>60 ml Precision Dropper Bottle RFQ</option><option>Origin Documents</option><option>NDA for Hero 3</option></select></label>
        <label>Message<textarea name="message" rows={6} defaultValue="Hello, we are NIPTEI, a luxury Natural & Vegan hair-care brand in Florida. Please send your MOQ, cost per unit, sample cost, lead time, GMP / ISO certificates, and whether you will sign an NDA for our custom formula." /></label>
        <p><button className="btn" type="submit">Save quote request (no email sent yet)</button></p>
      </form>

      <div className="card"><h2>R&amp;D Formulation Inquiry</h2>
        <p>To: [Verified supplier email — do not send to an unverified email]</p>
        <p>Subject: <strong>R&amp;D Formulation Inquiry: Scalp Resurfacing &amp; Growth Serum – Niptei Brand</strong></p>
        <p>Body: [Owner drafts and reviews before sending — see the Product Brief below. Nothing is sent automatically.]</p>
        {inquiryMsg && <div className="notice">{inquiryMsg}</div>}
        <p><button className="btn" type="button" onClick={reviewApprove}>Review &amp; Approve Send</button></p>
        <p>Nothing is sent automatically. The owner must click “Review &amp; Approve Send” — and nothing is sent to an unverified email.</p>
      </div>

      <div className="card"><h2>Product Brief — Scalp-Resurfacing &amp; Growth Serum (Working Title) — DRAFT</h2>
        <p>{SERUM ? SERUM.description : "Precision-dropper scalp serum in development with a US cosmetic manufacturer (R&D inquiry sent to Pravada)."}</p>
        <ul>
          <li>50 ml amber/frosted glass</li>
          <li>Precision dropper</li>
          <li>BHA 0.5–1.0%</li>
          <li>Rosemary/Peppermint 1–2%</li>
          <li>Niacinamide 2%</li>
          <li>Prebiotic/Postbiotic 1%</li>
          <li>Allantoin/Panthenol 0.5%</li>
          <li>Origin: To be confirmed with manufacturer</li>
          <li>Ingredients under evaluation: BHA / Rosemary / Peppermint / Niacinamide / Prebiotics / Allantoin</li>
        </ul>
        <p>This is a cosmetic, not a medicine. If you have a scalp condition, see a doctor / dermatologist / trichologist.</p>
        <div className="warning"><strong>Do NOT use unapproved customer claims such as:</strong>
          <ul>
            <li>“instantly calms”</li>
            <li>“increases density in 60–90 days”</li>
            <li>“clinically proven”</li>
          </ul>
        </div>
      </div>

      <div className="card"><h2>Manufacturer Outreach — Scalp &amp; Hair Care (Hero Categories)</h2>
        <p>[Your Name] · [Email] · [Phone] · [Website]</p>
        <p>Hello, we are NIPTEI, a luxury Natural &amp; Vegan hair-care brand in Florida. Please send your MOQ, cost per unit, sample cost, lead time, GMP / ISO certificates, and whether you will sign an NDA for our custom formula.</p>
        <p>Owner reviews and sends from nipteiapp@gmail.com. Never auto-sent.</p>
      </div>

      <div className="card"><h2>Best Match</h2>
        <p>Not yet determined — no supplier has been matched until the owner reviews quotes.</p>
        <p>No supplier is treated as contacted or sample-tested until it actually is.</p>
      </div>
    </div></section>
  );
}
