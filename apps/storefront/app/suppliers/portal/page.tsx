"use client";
import { useState } from "react";

// Supplier Portal — sign-in with the owner-issued portal code.
// Demo shell in the deployable build: no real supplier data here yet.
export default function SupplierPortalPage() {
  const [code, setCode] = useState("");
  const [msg, setMsg] = useState("");
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMsg(code.trim() ? "Portal code noted. In the live shop, this signs you in to your own orders only — your products, your Trust Score, blind-ship packing slips — never NIPTEI prices, profit, other suppliers, or customer payment details." : "Enter the portal code the owner issued you.");
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
      <div className="card"><h2>Shipping Calculator</h2><p>Suppliers can calculate shipping in the portal too — see <a href="/shipping">Shipping &amp; Delivery</a>. Estimate only, to be confirmed with the carrier.</p></div>
      <p>Not a supplier yet? <a href="/suppliers/register">Become a Supplier →</a></p>
    </div></section>
  );
}
