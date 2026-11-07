import Link from "next/link";
import { PRODUCTS, productsByCollection, formatPrice, COLLECTION_LABELS } from "@/lib/products";
import { ProductGrid } from "@/app/components/product-card";
import HairLetterForm from "@/app/components/hair-letter-form";

function ProductCard({ p }: { p: (typeof PRODUCTS)[number] }) {
  const buyable = p.status === "live";
  return (
    <article className="card">
      {p.image && <img src={p.image} alt={`${p.name} — design proof, not a final print file`} style={{ width: "100%", borderRadius: 6, marginBottom: 8 }} />}
      <h3>{p.name}</h3>
      <p>{p.tagline}{p.sizeLabel ? ` · ${p.sizeLabel}` : ""}</p>
      <p className="price soon">{formatPrice(p.priceCents)}</p>
      <p>
        <span className="badge">{COLLECTION_LABELS[p.collection]}</span>{" "}
        {p.status !== "live" && <span className="badge gold">{p.status === "in-development" ? "In Development — Waitlist" : "Coming Soon — Waitlist"}</span>}
      </p>
      <p>{p.description}</p>
      <p><Link href={`/products/${p.slug}`}>View product →</Link></p>
      {buyable ? <button className="btn" disabled>Add to Bag (coming soon)</button> : <Link className="btn secondary" href="/collection">Join the waitlist</Link>}
    </article>
  );
}

export default function Home() {
  const hero3 = productsByCollection("hero3");
  const core = productsByCollection("core");
  const luxury = productsByCollection("luxury");
  const scalp = productsByCollection("scalp");
  return (
    <>
      <section className="hero-artifact">
        <div className="hero-artifact-grid">
          <div className="hero-artifact-copy">
            <p className="eyebrow">Natural &amp; Vegan Hair Care</p>
            <h1>Grow Strong.<br />Live Beautiful.</h1>
            <p>Botanical hair care rooted in nature — Jamaican black castor oil, pumpkin seed and herbal infusions. No parabens, no sulfates, cruelty free.</p>
            <p className="hero-badges">
              <span className="badge hero-badge-accent">🌿 100% Natural &amp; Vegan</span>{" "}
              <span className="badge hero-badge-gold">🔎 Honest origin — verified with documents, shown on every product</span>{" "}
              <span className="badge hero-badge-accent">🐰 Cruelty Free</span>
            </p>
          </div>
          <img className="hero-artifact-img" src="/images/hero-strengthen-restore-shampoo.jpg" alt="Strengthen &amp; Restore Shampoo" />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="card">
            <h2>Find Your Perfect Hair Routine in 60 Seconds</h2>
            <h3>Who is this routine for?</h3>
            <div className="grid">
              <Link className="quiz-option" href="/quiz">For Me (Woman)</Link>
              <Link className="quiz-option" href="/quiz">For Me (Man)</Link>
              <Link className="quiz-option" href="/quiz">For My Partner</Link>
              <Link className="quiz-option" href="/quiz">For My Child (Coming Soon)</Link>
              <Link className="quiz-option" href="/quiz">For My Pet (Coming Soon)</Link>
            </div>
            <p><Link className="btn" href="/quiz">Take the Hair Quiz</Link></p>
          </div>
          <h2>Shop by Who It&apos;s For</h2>
          <p>One household, one shop. Women, Men, Kids, Pets, New Mums, Sensitive Scalps, Silver Hair — and the salons that care for them.</p>
          <div className="grid">
            <div className="card"><h3>For Women</h3><p>Luxury, Hero 3, Scalp Health, Botanical Reserve and all adult women&apos;s routines.</p><Link href="/collection?for=women">Shop for Women →</Link></div>
            <div className="card"><h3>For Men</h3><p>Beard, scalp and styling care.</p><Link href="/men">Shop Men Care →</Link></div>
            <div className="card"><h3>For Kids</h3><p>Little Hair. Big Confidence. — all ages 0–17.</p><Link href="/kids">Shop NIPTEI Kids →</Link></div>
            <div className="card"><h3>For Pets</h3><p>Gentle care for dogs and cats. Pet products — NOT for human use.</p><Link href="/pets">Shop Pet Hair Care →</Link></div>
          </div>
          <h2>Shop by Your Hair</h2>
          <div className="grid">
            {["Type 1 — Fine / Straight", "Type 2 — Wavy", "Type 3 — Curly", "Type 4 — Coily / Kinky", "Thinning / Alopecia"].map((t) => (
              <div key={t} className="card"><h3>{t}</h3><p>Find the routine made for this hair.</p><Link href="/quiz">Take the quiz →</Link></div>
            ))}
          </div>
          <h2>The Three Hero Categories</h2>
          <p><strong>Not basic shampoo. Three specialized solutions — Purify the scalp, Balance the scalp, Repair the hair.</strong></p>
          <div className="grid">
            <div className="card"><h3>Purifying Scalp Scrubs</h3><p>For scalp suffocation and buildup.</p><Link href="/scalp-health">Scalp Health →</Link></div>
            <div className="card"><h3>Microbiome-Balancing Drop Serums</h3><p>For severe flaking and irritation. This is a cosmetic, not a medicine.</p><Link href="/scalp-health">Scalp Health →</Link></div>
            <div className="card"><h3>Molecular Hair Repair Masks</h3><p>For over-processed and brittle strands.</p><Link href="/scalp-health">Scalp Health →</Link></div>
          </div>
          <ProductGrid items={scalp.slice(0, 3)} />
          <h2>Hero 3 — In Development</h2>
          <p>Our original formulas, developed with a US cosmetic manufacturer. Hero 3 first. Waitlist only — no price, no buy button, until the formula and safety review are done.</p>
          <div className="grid">{hero3.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
          <h2>Core Collection</h2>
          <div className="grid">{core.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
          <h2>Luxury Collection</h2>
          <div className="grid">{luxury.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
          <h2>Rare Botanicals — Beyond Ordinary Oils</h2>
          <p>Rare oils. Thoughtful botanical science. Hair care for every generation. <Link href="/botanicals">Explore Rare Botanicals →</Link></p>
          <h2>Shop by Your Problem</h2>
          <p>One Problem. One Solution. One Product That Does the Job. <Link href="/problems">Shop by Your Problem →</Link></p>
          <div className="notice">
            <strong>Our Honest Promise:</strong> we do not sell a one-size-fits-all magic bottle.
          </div>
          <p><Link href="/pricing">See how NIPTEI prices — Transparent Pricing →</Link> · <Link href="/swap-promise">The Swap Promise →</Link> · <Link href="/why-niptei">Why NIPTEI Is Different →</Link></p>
          <HairLetterForm source="Homepage" />
        </div>
      </section>
    </>
  );
}
