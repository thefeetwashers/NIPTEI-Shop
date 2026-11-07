"use client";
import { useState } from "react";

export default function SupplierRegisterPage() {
  const [msg, setMsg] = useState("");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const res = await fetch("/api/supplier-register", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    const json = await res.json();
    setMsg(json.message || "Registration received.");
  }
  return (
    <section><div className="container">
      <h1>Become a Supplier — Register</h1>
      <p>Register to supply NIPTEI. The owner approves every registration before you can list anything. No supplier goes live automatically.</p>
      <p>You will see only your own orders, products and Trust Score — never NIPTEI prices, profit, other suppliers, or customer payment details.</p>
      {msg && <div className="notice">{msg}</div>}
      <form onSubmit={submit}>
        <label>Business name<input name="businessName" required /></label>
        <label>Contact name<input name="contactName" required /></label>
        <label>Business email<input name="email" type="email" required /></label>
        <label>Phone<input name="phone" /></label>
        <label>Country<input name="country" required /></label>
        <label>City / State<input name="city" /></label>
        <label>What do you supply?<select name="supplyType"><option>Formula / private label</option><option>Packaging</option><option>Bulk ingredients</option><option>Pet formula</option><option>Kids formula</option><option>Men &amp; beard</option></select></label>
        <label>Years in business<input name="years" type="number" min={0} /></label>
        <label>Can you ship blind? (No supplier name, logo, invoice or price in the parcel)<select name="blindShip"><option>Yes</option><option>No</option></select></label>
        <p><button className="btn" type="submit">Submit registration</button></p>
      </form>
    </div></section>
  );
}
