"use client";
import { useState } from "react";
import { SUPPLIERS } from "@/lib/artifact-data";
import { LABEL_CONTACT_LINE } from "@/lib/products";

// Supplier Registration — registration form, supplier directory, Sourcing Guide.
// Nothing is auto-sent. The owner approves every registration before a supplier
// can list anything. No supplier goes live automatically.
const GROUP_LABELS: Array<[string, string]> = [
  ["usa_formula", "USA Formula"],
  ["usa_packaging", "USA Packaging"],
  ["usa_ingredients", "USA Bulk Ingredients"],
  ["alibaba_formula", "Alibaba Formula — reference only"],
  ["alibaba_packaging", "Alibaba Packaging"],
];

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
      <h1>Supplier Registration</h1>
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

      <h2>Supplier Directory</h2>
      <p>20 suppliers in 5 groups. No supplier has been contacted, sample-tested, or marked Partner yet.</p>
      <p>Label contact line on every label: <strong>{LABEL_CONTACT_LINE}</strong> — shop.niptei.com, never plain niptei.com.</p>
      {GROUP_LABELS.map(([groupKey, groupLabel]) => (
        <div key={groupKey}>
          <h3>{groupLabel}</h3>
          {groupKey === "alibaba_formula" && <p>Reference / dropship testing only — never Hero 3.</p>}
          <table><thead><tr><th>Supplier</th><th>Location</th><th>Supplies</th><th>MOQ</th><th>Certifications</th><th>Status</th><th>Contact</th></tr></thead><tbody>
            {SUPPLIERS.filter((s) => s.group_key === groupKey).map((s) => (
              <tr key={s.supplier_key}>
                <td>{s.name}</td>
                <td>{s.location}</td>
                <td>{s.supplies}</td>
                <td>{s.moq}</td>
                <td>{s.certifications}</td>
                <td>Not contacted</td>
                <td>{s.email_verified && s.contact_email ? s.contact_email : "No verified email on file — do not send."}</td>
              </tr>
            ))}
          </tbody></table>
        </div>
      ))}

      <div className="card"><h2>Sourcing Guide</h2>
        <ul>
          <li>ThomasNet</li>
          <li>Alibaba packaging only — NEVER Hero 3 formulas</li>
          <li>Never label China-made as Made in USA</li>
          <li>Labs to research — verify on the official site before contacting: Evora Worldwide, Radical Cosmetics, Genesis Private Label</li>
        </ul>
        <p>Do not invent supplier emails or websites. Verify on the official site before contacting.</p>
      </div>
      <p>Labels contact line: {LABEL_CONTACT_LINE}</p>
    </div></section>
  );
}
