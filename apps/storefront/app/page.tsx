import Link from "next/link";
import { PRODUCTS, productsByCollection, formatPrice, COLLECTION_LABELS } from "@/lib/products";

function ProductCard({ p }: { p: (typeof PRODUCTS)[number] }) {
  const buyable = p.status === "live";
  return (
    <article className="card">
      <h3>{p.name}</h3>
      <p>{p.tagline}{p.sizeMl ? ` · ${p.sizeMl} ml` : ""}</p>
      <p className="price soon">{formatPrice(p.priceCents)}</p>
      <p>
        <span className="badge">{COLLECTION_LABELS[p.collection]}</span>{" "}
        {p.status !== "live" && <span className="badge gold">{p.status === "in-development" ? "In Development — Waitlist" : "Coming Soon — Waitlist"}</span>}
      </p>
      <p>{p.description}</p>
      <p><Link href={`/products/${p.slug}`}>View product →</Link></p>
      {buyable ? <button className="btn" disabled title="Checkout is not live yet — prices are not set">Add to Bag (coming soon)</button> : <Link className="btn secondary" href="/collections#coming-soon">Join the waitlist</Link>}
    </article>
  );
}

export default function Home() {
  const hero3 = productsByCollection("hero3");
  const core = productsByCollection("core");
  const luxury = productsByCollection("luxury");
  return (
    <>
      <div className="hero">
        <div className="container">
          <h1>Healthy Hair. Confident You.</h1>
          <p>NIPTEI luxury Natural &amp; Vegan hair care. No one-size-fits-all magic bottle — take the 60-second quiz and get the routine made for your hair type.</p>
          <Link className="btn" href="/quiz">Take the Hair Quiz — 60 seconds</Link>{" "}
          <Link className="btn secondary" href="/collections">Shop all products</Link>
        </div>
      </div>
      <section>
        <div className="container">
          <h2>Shop by Your Hair</h2>
          <p>One household, one shop. Women, Men, Kids, Pets, New Mums, Sensitive Scalps, Silver Hair — and the salons that care for them.</p>
          <div className="grid">
            {["Type 1 — Fine / Straight", "Type 2 — Wavy", "Type 3 — Curly", "Type 4 — Coily / Kinky", "Thinning / Alopecia"].map((t) => (
              <div key={t} className="card"><h3>{t}</h3><p>Find the routine made for this hair.</p><Link href="/quiz">Take the quiz →</Link></div>
            ))}
          </div>
          <h2>Hero 3 — In Development</h2>
          <p>Our original formulas, developed with a US cosmetic manufacturer. Hero 3 first. Waitlist only — no price, no buy button, until the formula and safety review are done.</p>
          <div className="grid">{hero3.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
          <h2>Core Collection</h2>
          <div className="grid">{core.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
          <h2>Luxury Collection</h2>
          <div className="grid">{luxury.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
          <div className="notice">
            <strong>Our Honest Promise:</strong> we do not sell a one-size-fits-all magic bottle. Prices are not set yet — every product shows “Price coming soon” until the owner sets a real price. Made in USA is shown only when origin is verified with documents on file.
          </div>
          <p><Link href="/pricing">See how NIPTEI prices — Transparent Pricing →</Link> · <Link href="/swap-promise">The Swap Promise →</Link></p>
        </div>
      </section>
    </>
  );
}
