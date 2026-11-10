"use client";
import Link from "next/link";
import { useState } from "react";
import { PRODUCTS, productsByCollection, COLLECTION_LABELS } from "@/lib/products";

export default function CollectionsPage() {
  const groups: Array<[string, string]> = [
    ["core", "Core Collection"], ["luxury", "Luxury Collection"], ["chebe", "Chebe Collection"], ["hero3", "Hero 3 — In Development"],
    ["scalp", "Scalp Health — Skin-First Scalp Care"], ["complete", "Complete Care"], ["firsts", "NIPTEI Firsts"],
    ["men", "Men Care"], ["pet", "Pet Hair Care"], ["kids", "NIPTEI Kids"],
    ["new-mums", "New Mums / Postpartum"], ["sensitive", "Sensitive Scalp"], ["silver", "Silver & Grey"],
    ["pro", "NIPTEI Pro"], ["gift", "Gift a Routine"], ["ritual", "The NIPTEI Ritual"],
    ["bundles", "Bundle & Gift Sets"], ["botanical", "Rare Botanicals"], ["reserve", "Botanical Reserve"], ["little", "Little Botanicals"],
  ];
  return (
    <section><div className="container">
      <h1>All Products — The Collection</h1>
      <p>See <a href="/collection">The Collection</a> with Shop by Who It’s For filters (For Women / Men / Kids / Pets).</p>
      <p>Every product shows “Price coming soon” until the owner sets a real price. No prices are invented here.</p>
      {groups.map(([key, label]) => {
        const items = productsByCollection(key as never);
        if (!items.length) return null;
        return (
          <div key={key} id={key}>
            <h2>{label}</h2>
            <p><Link href="/collection">See {label} in The Collection →</Link></p>
            {key === "pet" && <div className="warning"><strong>Pet safety:</strong> human hair products are NOT for pets. Pet formulas are made separately and need a vet review. Some human ingredients, including tea tree oil, are dangerous for cats.</div>}
            <div className="grid">{items.map((p) => (
              <article key={p.slug} className="card">
                <h3>{p.name}</h3><p>{p.tagline}{p.sizeMl ? ` · ${p.sizeMl} ml` : ""}</p>
                <p className="price soon">Price coming soon</p>
                <p><span className="badge">{COLLECTION_LABELS[p.collection]}</span></p>
                <p>{p.description}</p>
                <p><Link href={`/products/${p.slug}`}>View product →</Link></p>
              </article>
            ))}</div>
          </div>
        );
      })}
      <div id="coming-soon" className="notice">
        <h2>Coming Soon — Waitlist</h2>
        <p>Kids Care, New Mums, Sensitive Scalp, Silver &amp; Grey, NIPTEI Pro for salons, and Gift a Routine are in development. Join the waitlist below — no price, no buy button, until the real formula and safety review are done.</p>
        <WaitlistForm />
      </div>
      <p>Total products in catalog: {PRODUCTS.length}. All prices unset.</p>
    </div></section>
  );
}

function WaitlistForm() {
  const [msg, setMsg] = useState("");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const res = await fetch("/api/waitlist", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    const json = await res.json();
    setMsg(json.message || "Waitlist noted.");
  }
  return (
    <form onSubmit={submit}>
      {msg && <div className="notice">{msg}</div>}
      <label htmlFor="wl-email">Email (only with your consent — we email you when it launches)</label>
      <input id="wl-email" name="email" type="email" required placeholder="you@example.com" />
      <label htmlFor="wl-interest">I am interested in</label>
      <select id="wl-interest" name="interest"><option>Kids Care</option><option>New Mums</option><option>Sensitive Scalp</option><option>Silver &amp; Grey</option><option>NIPTEI Pro (salons)</option><option>Gift a Routine</option><option>Hero 3</option><option>Men Care</option><option>Pet Hair Care</option></select>
      <p><button className="btn" type="submit">Join the waitlist</button></p>
    </form>
  );
}
