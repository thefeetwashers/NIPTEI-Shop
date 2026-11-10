import Link from "next/link";
import QuizSection from "@/components/QuizSection";
import { ProductCard, ProductGrid } from "@/components/ProductCard";
import HairLetterForm from "@/components/HairLetterForm";
import { getProduct, productsByCollection } from "@/lib/products";

const PROBLEM_ROWS: Array<[string, string, string[]]> = [
  ["Buildup — product / sebum buildup, scalp suffocation", "Purifying Scalp Scrub", ["care-scalp-scrub"]],
  ["Itch / flaking — severe flaking and irritation", "Microbiome-Balancing Drop Serum / Scalp-Resurfacing & Growth Serum", ["scalp-resurfacing-growth-serum"]],
  ["Damaged / brittle — over-processed hair", "Molecular Hair Repair Mask", ["nourishing-hair-mask"]],
  ["Thinning — wider part, more scalp showing, excessive shedding", "Root Renewal Scalp Stimulating Elixir + Hair Growth Serum", ["care-root-renewal-elixir", "hair-growth-serum"]],
  ["Dry / dull", "Nourishing Hair Mask + Argan Oil Shampoo + Argan Oil Conditioner", ["nourishing-hair-mask", "argan-oil-shampoo", "argan-oil-conditioner"]],
  ["Beard", "Beard Growth Oil + Beard Wash & Conditioner + Razor Bump Oil", ["men-beard-growth-oil", "men-beard-wash-conditioner", "men-razor-bump-soothing-oil"]],
  ["Pet coat", "Gentle Pet Shampoo + Pet Coat & Skin Oil", ["pet-shampoo-dogs", "pet-coat-skin-oil"]],
];

const HAIR_TYPES = [
  "Type 1 — Fine / Straight",
  "Type 2 — Wavy",
  "Type 3 — Curly",
  "Type 4 — Coily / Kinky",
  "Thinning / Alopecia",
];

const HERO_CATEGORIES: Array<[string, string]> = [
  ["Purifying Scalp Scrubs", "For scalp suffocation and buildup."],
  ["Microbiome-Balancing Drop Serums", "For severe flaking and irritation."],
  ["Molecular Hair Repair Masks", "For over-processed and brittle strands."],
];

export default function Home() {
  const hero3 = productsByCollection("hero3");
  const core = productsByCollection("core");
  const luxury = productsByCollection("luxury");
  const botanical = productsByCollection("botanical");
  return (
    <>
      <section className="overflow-hidden rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)]">
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col justify-center p-6 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--gold)]">Natural &amp; Vegan Hair Care</p>
            <h1 className="font-display mt-3 text-4xl font-semibold leading-tight sm:text-5xl">Grow Strong.<br />Live Beautiful.</h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--dim)]">Botanical hair care rooted in nature — Jamaican black castor oil, pumpkin seed and herbal infusions. No parabens, no sulfates, cruelty free.</p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold">
              <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1.5">🌿 100% Natural &amp; Vegan</span>
              <span className="rounded-full bg-[var(--gold-soft)] px-3 py-1.5">🔎 Honest origin — verified with documents, shown on every product</span>
              <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1.5">🐰 Cruelty Free</span>
            </div>
          </div>
          <img alt="Strengthen &amp; Restore Shampoo" className="h-full max-h-[420px] w-full object-cover" src="/images/hero-strengthen-restore-shampoo.jpg" />
        </div>
      </section>
      <QuizSection />
      <section>
        <div className="container">
          <h2>Shop by Who It&apos;s For</h2>
          <p>One household, one shop. Women, Men, Kids, Pets, New Mums, Sensitive Scalps, Silver Hair…</p>
          <div className="grid">
            <div className="card"><h3>For Women</h3><p>Luxury, Hero 3, Scalp Health, Botanical Reserve and all adult women&apos;s routines.</p><Link href="/collection?for=women">Shop for Women →</Link></div>
            <div className="card"><h3>For Men</h3><p>Beard, scalp and styling care.</p><Link href="/men">Shop Men Care →</Link></div>
            <div className="card"><h3>For Kids</h3><p>Little Hair. Big Confidence. — all ages 0–17.</p><Link href="/kids">Shop NIPTEI Kids →</Link></div>
            <div className="card"><h3>For Pets</h3><p>Gentle care for dogs and cats. Pet products — NOT for human use.</p><Link href="/pets">Shop Pet Hair Care →</Link></div>
          </div>
          <h2>Shop by Your Hair</h2>
          <div className="grid">
            {HAIR_TYPES.map((t) => (
              <div key={t} className="card"><h3>{t}</h3><p>Find the routine made for this hair.</p><Link href="/quiz">Take the quiz →</Link></div>
            ))}
          </div>
          <h2>The Three Hero Categories</h2>
          <p><strong>Not basic shampoo. Three specialized solutions — Purify the scalp, Balance the scalp, Repair the hair.</strong></p>
          <div className="grid">
            {HERO_CATEGORIES.map(([name, desc]) => (
              <div key={name} className="card">
                <h3>{name}</h3>
                <p>{desc}</p>
                <p>This is a cosmetic, not a medicine. If you have a scalp condition, see a doctor / dermatologist / trichologist.</p>
                <Link href="/scalp-health">Scalp Health →</Link>
              </div>
            ))}
          </div>
          <h2>Hero 3 — In Development</h2>
          <p>Our original formulas, developed with a US cosmetic manufacturer. Hero 3 first. Waitlist only — no price, no buy button, until the formula and safety review are done.</p>
          <div className="grid">{hero3.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
          <p><Link className="btn secondary" href="/collection">Join the waitlist</Link></p>
          <h2>Core Collection</h2>
          <div className="grid">{core.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
          <h2>Luxury Collection</h2>
          <div className="grid">{luxury.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
          <h2>Rare Botanicals — Beyond Ordinary Oils</h2>
          <p>Rare oils. Thoughtful botanical science. Hair care for every generation. <Link href="/botanicals">Explore Rare Botanicals →</Link></p>
          <ProductGrid items={botanical} />
          <h2>Shop by Your Problem</h2>
          <p>One Problem. One Solution. One Product That Does the Job.</p>
          <p>Education only — never a diagnosis or a cure. If a scalp condition worries you, see a doctor / dermatologist / trichologist.</p>
          <div className="notice">
            <strong>Our Honest Promise:</strong> we do not sell a one-size-fits-all magic bottle.
          </div>
          {PROBLEM_ROWS.map(([problem, solution, slugs]) => (
            <div key={problem} className="card">
              <h2>{problem}</h2>
              <p><strong>Solution:</strong> {solution}</p>
              <div className="grid">{slugs.map((s) => { const p = getProduct(s); return p ? <ProductCard key={s} p={p} /> : null; })}</div>
            </div>
          ))}
          <p>Worldwide shipping coming soon — join the waitlist. English / USD for now. <Link href="/quiz">Find your routine first →</Link></p>
          <HairLetterForm source="Homepage" />
        </div>
      </section>
    </>
  );
}
