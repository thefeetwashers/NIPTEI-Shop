import Link from "next/link";
import QuizSection from "@/components/QuizSection";
import { ProductCard, ProductGrid } from "@/components/ProductCard";
import HairLetterForm from "@/components/HairLetterForm";
import { getProduct, productsByCollection } from "@/lib/products";
import { INGREDIENT_GLOSSARY } from "@/lib/ingredients";

const WATCH_STEPS: Array<[string, string, string, string, string]> = [
  ["niptei-wash-day-step1-purify.mp4", "Step 1 · Purify", "Scrub, then wash. Massage the scalp scrub into a damp scalp, rinse, then wash with the Purifying & Thickening Herbal Shampoo. Clean follicles first — nothing grows through buildup.", "/products/biblical-exfoliating-scalp-scrub", "Reserve the Scrub & Shampoo →"],
  ["niptei-wash-day-step2-drench.mp4", "Step 2 · Drench", "Mask for 10 minutes. Drench your hair in the Deep Moisture & Anti-Breakage Mask once a week — olive, chebe, and batana soak in while you wait.", "/products/biblical-deep-moisture-mask", "Reserve the Mask →"],
  ["niptei-wash-day-step3-detangle.mp4", "Step 3 · Detangle", "Detangle wet, with slip. The Leave-In Detangling & Bond Milk lets the comb glide — no tears, no snapping, no broken length in the comb.", "/products/biblical-leave-in-detangling-milk", "Reserve the Leave-In Milk →"],
  ["niptei-wash-day-step4-feed-roots.mp4", "Step 4 · Feed the Roots", "Serum every morning. A few drops of the Water-Based Follicle & Edge Serum on edges and roots — light enough for braids, locs, wigs, and silk presses.", "/products/biblical-scalp-serum", "Reserve the Serum →"],
  ["niptei-wash-day-step5-seal.mp4", "Step 5 · Seal It In", "Oil on edges and beard, nightly. The Anointing Hair, Edge & Beard Oil seals in everything you just fed your hair — edges, hairline, and beard.", "/products/biblical-nourishing-hair-oil", "Reserve the Oil →"],
  ["niptei-wash-day-step6-stay-consistent.mp4", "Stay Consistent · 90 Days", "Hair grows about half an inch a month. The secret is not a miracle — it is showing up every wash day for 90 days. Your bottle is made fresh after you order and ships in 10–14 business days. Good things take time.", "/collection", "Reserve your routine →"],
];

const PROBLEM_ROWS: Array<[string, string, string[]]> = [
  ["Buildup — product / sebum buildup, scalp suffocation", "Purifying Scalp Scrub", ["care-scalp-scrub"]],
  ["Itch / flaking — severe flaking and irritation", "Microbiome-Balancing Drop Serum / Scalp-Resurfacing & Growth Serum", ["scalp-precision-serum"]],
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
  const biblical = productsByCollection("biblical");
  const core = productsByCollection("core");
  const luxury = productsByCollection("luxury");
  const botanical = productsByCollection("botanical");
  return (
    <>
      <section className="hero-artifact">
        <div className="hero-artifact-grid">
          <div className="hero-artifact-copy">
            <p className="eyebrow">The Fresh-Batch Apothecary · Pre-Order Only</p>
            <h1>Your Bottle Doesn&apos;t Exist Yet.<br />That&apos;s the Point.</h1>
            <p>Every NIPTEI bottle is made fresh, after you order it. Biblical botanicals — olive, frankincense, myrrh, and hyssop — blended with African growth herbs like chebe, batana, and rosemary. One line for straight, wavy, curly, and coily hair, for women, men, and kids. Pre-order only — your batch ships in 10–14 business days. No parabens, no sulfates, cruelty free.</p>
            <div className="hero-badges">
              <span className="badge hero-badge-accent">🌿 100% Natural &amp; Vegan</span>
              <span className="badge hero-badge-gold">🕯️ Made to Order · Ships in 10–14 Business Days</span>
              <span className="badge hero-badge-gold">🔎 Honest origin — verified with documents, shown on every product</span>
              <span className="badge hero-badge-accent">🐰 Cruelty Free</span>
            </div>
          </div>
          <img alt="Strengthen &amp; Restore Shampoo" className="hero-artifact-img" src="/images/hero-strengthen-restore-shampoo.jpg" />
        </div>
      </section>
      <section>
        <div className="container">
          <h2 id="batch-journey">Your Bottle&apos;s Journey — From Order to Your Door</h2>
          <p><strong>Nothing here sits on a warehouse shelf.</strong> When you reserve your bottle, this is what happens next. Pre-order only — please allow 10–14 business days before your batch ships.</p>
          <div className="grid">
            <div className="card"><h3>Day 1 — You Reserve</h3><p>You pre-order your routine. Your bottle is reserved in the next fresh batch.</p></div>
            <div className="card"><h3>Days 2–4 — Fresh Infusion</h3><p>Your botanicals are cold-blended to order in a small batch — olive, frankincense, myrrh, hyssop, chebe, batana, and rosemary, infused fresh for your order.</p></div>
            <div className="card"><h3>Days 5–6 — Bottled &amp; Sealed</h3><p>Your batch is bottled, sealed, and checked before it leaves. Every bottle is inspected — nothing ships unchecked.</p></div>
            <div className="card"><h3>Days 8–14 — Shipped to You</h3><p>Your batch ships to your door with tracking. Good things take time — your bottle was made for you, not for a shelf.</p></div>
          </div>
          <p>By reserving, you agree: your herbal batch is freshly infused to order and ships in 10–14 business days.</p>
        </div>
      </section>
      <QuizSection />
      <section>
        <div className="container">
          <h2 id="biblical">Biblical Botanicals — The New Line</h2>
          <p><strong>Ancient anointing oils meet African growth herbs.</strong> Olive, frankincense, myrrh, and hyssop, blended with chebe, batana, rosemary, and black castor oil — one 8-product system for straight, wavy, curly, and coily hair. The same core formulas for women and men, plus a gentle Little Crowns line for kids ages 2 and up, in development. Preorder only, price coming soon, no supplier signed yet.</p>
          <div className="grid">{biblical.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
          <p><Link className="btn secondary" href="/collection">See the full Biblical Botanicals line →</Link></p>
          <h2 id="inside">Inside Every Bottle — Know What&apos;s In It &amp; Why</h2>
          <p>Every ingredient has a job. Nothing is in the bottle to look pretty on a label. Here is what each one does for your hair — and every product page shows exactly which of these are inside it.</p>
          <div className="grid">
            {INGREDIENT_GLOSSARY.map((g) => (
              <div key={g.name} className="card"><h3>{g.name}{g.latin ? ` — ${g.latin}` : ""}</h3><p>{g.role}</p></div>
            ))}
          </div>
          <h2 id="watch">Watch &amp; Learn — The Wash-Day Ritual</h2>
          <p>Learn the ritual in six short films — and why consistency is the whole secret. Watch them here, or on <a href="https://www.youtube.com/channel/UCU43RJojiwkAOEkvbik877w">Niptei TV on YouTube</a>. These are concept films for Niptei TV — the bottles shown are design proofs. The Biblical Botanicals line is in development: pre-order only, price coming soon.</p>
          <div className="grid">
            {WATCH_STEPS.map(([file, title, text, href, cta]) => (
              <div key={file} className="card">
                <h3>{title}</h3>
                <video controls preload="metadata" playsInline src={`/videos/${file}`} style={{ width: "100%", borderRadius: 6 }} />
                <p>{text}</p>
                <p><Link href={href}>{cta}</Link></p>
              </div>
            ))}
          </div>
          <h2 id="shop">Shop by Who It&apos;s For</h2>
          <p>One household, one shop. Women, Men, Kids, Pets, New Mums, Sensitive Scalps, Silver Hair…</p>
          <div className="grid">
            <div className="card"><h3>For Women</h3><p>Luxury, Hero 3, Scalp Health, Botanical Reserve and all adult women&apos;s routines.</p><Link href="/collection?for=women">Shop for Women →</Link></div>
            <div className="card"><h3>For Men</h3><p>Beard, scalp and styling care — now including the Biblical Botanicals line for men.</p><Link href="/men">Shop Men Care →</Link></div>
            <div className="card"><h3>For Kids</h3><p>Little Hair. Big Confidence. — all ages 0–17, with the gentle Little Crowns line for ages 2 and up (in development).</p><Link href="/kids">Shop NIPTEI Kids →</Link></div>
            <div className="card"><h3>For Pets</h3><p>Gentle care for dogs and cats. Pet products — NOT for human use.</p><Link href="/pets">Shop Pet Hair Care →</Link></div>
          </div>
          <h2 id="hair">Shop by Your Hair</h2>
          <div className="grid">
            {HAIR_TYPES.map((t) => (
              <div key={t} className="card"><h3>{t}</h3><p>Find the routine made for this hair.</p><Link href="/quiz">Take the quiz →</Link></div>
            ))}
          </div>
          <h2 id="conditions">Shop by Hair Loss &amp; Scalp Condition</h2>
          <p>Not sure where to start? Take the 30-second assessment and get matched to a Biblical Botanicals routine. Education only — never a diagnosis. If a scalp condition worries you, see a doctor / dermatologist / trichologist.</p>
          <div className="grid">
            <div className="card"><h3>Traction Alopecia &amp; Broken Edges</h3><p>From tight braids, weaves, wigs, or ponytails. Supports the look of fuller edges.</p><Link href="/quiz">Take the 30-second assessment →</Link></div>
            <div className="card"><h3>Hormonal &amp; Pattern Thinning</h3><p>Postpartum shedding, menopause, or male / female pattern thinning. Nourishes thinning areas.</p><Link href="/quiz">Take the 30-second assessment →</Link></div>
            <div className="card"><h3>Stress &amp; Medication Shedding</h3><p>Sudden all-over shedding and weak roots. Gentle scalp nourishment while you recover.</p><Link href="/quiz">Take the 30-second assessment →</Link></div>
            <div className="card"><h3>Dryness, Dandruff &amp; Buildup</h3><p>Flaking, itching, and clogged follicles. Purify the scalp first, then moisturize.</p><Link href="/quiz">Take the 30-second assessment →</Link></div>
            <div className="card"><h3>Patchy Hair Loss Support</h3><p>Gentle, soothing scalp nourishment alongside medical care — never instead of it.</p><Link href="/quiz">Take the 30-second assessment →</Link></div>
          </div>
          <h2 id="how-hair-grows">How Hair Grows — And How Your Routine Matches It</h2>
          <p>Hair grows about half an inch a month, and every strand lives in a cycle. Your routine works with the cycle — not against it.</p>
          <div className="grid">
            <div className="card"><h3>1 · Growth (Anagen)</h3><p>The growth phase — 2 to 7 years per strand. The follicle is active and the hair gets longer. Your job: keep the scalp clean and fed. The shampoo, scrub, and daily serum care for the scalp while hair is growing.</p></div>
            <div className="card"><h3>2 · Rest (Catagen)</h3><p>The follicle rests for a few weeks and the strand stops growing. Your job: protect what grew. The mask and leave-in milk keep length soft and strong so it does not snap while it rests.</p></div>
            <div className="card"><h3>3 · Shedding (Telogen)</h3><p>Old strands shed and new ones begin. Some shedding is normal — every head sheds daily. Your job: stay consistent. New growth needs the same care, every wash day, for 90 days.</p></div>
          </div>
          <p><strong>The truth about length:</strong> you do not keep length by growing faster — you keep it by breaking less. Clean scalp, fed roots, sealed ends, every week. That is the whole routine.</p>
          <h2 id="bundles">Reserve a Batch — For One Person, or the Whole Household</h2>
          <p>One bottle at a time, or one batch for the whole house. Every bundle is pre-order only — made fresh after you reserve it, ships in 10–14 business days. Prices coming soon.</p>
          <div className="grid">
            <div className="card"><h3>Individual 90-Day Recovery Kit</h3><p>5 bottles — the full adult routine for 90 days. Choose your regimen: Women&apos;s, Men&apos;s Hair &amp; Beard, or Targeted Edge &amp; Thinning. Same bottles, positioned for you.</p><p className="price soon">Price coming soon</p><Link href="/quiz">Find your regimen →</Link></div>
            <div className="card"><h3>Whole-Household Family Pack</h3><p>10 bottles — mix and match women&apos;s, men&apos;s, and Little Crowns kids&apos; gentle bottles in one box. One order covers parents and children for 90 days.</p><p className="price soon">Price coming soon</p><Link href="/collection">See the line →</Link></div>
            <div className="card"><h3>Salon, Barber &amp; Trichology Partner Pack</h3><p>30 bottles — for stylists, barbershops, and natural hair care specialists. Hairline, beard, and edge treatments for your chair.</p><p className="price soon">Price coming soon</p><Link href="/collection">See the line →</Link></div>
          </div>
          <h2 id="hero-categories">The Three Hero Categories</h2>
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
          <h2 id="hero3">Hero 3 — In Development</h2>
          <p>Our original formulas, developed with a US cosmetic manufacturer. Hero 3 first. Waitlist only — no price, no buy button, until the formula and safety review are done.</p>
          <div className="grid">{hero3.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
          <p><Link className="btn secondary" href="/collection">Join the waitlist</Link></p>
          <h2 id="collection">Core Collection</h2>
          <div className="grid">{core.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
          <h2 id="luxury">Luxury Collection</h2>
          <div className="grid">{luxury.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
          <h2 id="botanicals">Rare Botanicals — Beyond Ordinary Oils</h2>
          <p>Rare oils. Thoughtful botanical science. Hair care for every generation. <Link href="/botanicals">Explore Rare Botanicals →</Link></p>
          <ProductGrid items={botanical} />
          <h2 id="problems">Shop by Your Problem</h2>
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
          <h2 id="made-with-love">Made With Love &amp; Care</h2>
          <p><strong>Hair care made with love and care.</strong> Small batches, infused fresh after you order — never mass-made and warehoused. Every bottle is checked before it ships. No sulfates, no parabens, no silicones, no synthetic fragrance. Biblical botanicals and African growth herbs, chosen for what they do for your hair — and nothing in the bottle that does not earn its place.</p>
          <p>When you wait 10–14 business days, you are not waiting on a warehouse. You are waiting on a fresh batch, made for you. That is the difference.</p>
          <HairLetterForm source="Homepage" />
        </div>
      </section>
    </>
  );
}
