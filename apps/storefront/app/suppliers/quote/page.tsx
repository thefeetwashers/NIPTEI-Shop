"use client";
import { useState } from "react";

export default function QuoteRequestPage() {
  const [msg, setMsg] = useState("");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const res = await fetch("/api/quote-request", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    const json = await res.json();
    setMsg(json.message || "Quote request received.");
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
    </div></section>
  );
}
