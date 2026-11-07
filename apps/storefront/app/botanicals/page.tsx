import Link from "next/link";
import { productsByCollection } from "@/lib/products";
import { ProductGrid } from "@/app/components/product-card";

const INGREDIENTS: Array<[string, string, string]> = [
  ["Mongongo — Schinziophyton rautanenii", "Limited, promising hair-fiber evidence", "A 2025 lab study of mongongo-derived fatty-acid ethyl esters improved surface coverage and gloss. It did not establish hair growth."],
  ["Pracaxi — Pentaclethra macroloba", "Limited", "Smoothing and shine; traditional use and early lab work only."],
  ["Kalahari Melon — Citrullus lanatus Seed Oil", "Limited", "Lightweight hydration; early evidence only."],
  ["Mafura — Trichilia emetica", "Limited", "Rich moisture butter; early evidence only."],
  ["Black Seed — Nigella sativa Seed Oil", "Limited", "Does not establish regrowth. Strong human hair-growth evidence is lacking."],
  ["Amla — Phyllanthus emblica", "Traditional / preliminary", "Long traditional use; preliminary research only."],
  ["Bhringraj — Eclipta prostrata", "Traditional / preclinical", "Traditional use and preclinical work; not proven in humans."],
  ["Black Currant — Ribes nigrum Seed Oil", "Limited", "Omega-rich; early evidence only."],
  ["Fenugreek — Trigonella foenum-graecum", "Traditional / preclinical", "Allergens need attention. Not proven to grow hair."],
  ["Green Tea — Camellia sinensis Leaf Extract", "Preclinical / indirect", "Antioxidant interest; indirect evidence only."],
  ["Rice Protein", "Formulation-dependent", "Not established as a hair-growth treatment."],
  ["Ginseng", "Promising but not conclusive", "Early research only."],
];

export default function BotanicalsPage() {
  const botanical = productsByCollection("botanical");
  const reserve = productsByCollection("reserve");
  const little = productsByCollection("little");
  const bundles = productsByCollection("bundles").filter((p) => p.slug.includes("botanical"));
  const systems = botanical.filter((p) => ["botanical-night-repair", "botanical-scalp-reset", "botanical-length-retention", "botanical-silk-finish", "botanical-infusion", "botanical-moisture-rescue"].includes(p.slug));
  const oils = botanical.filter((p) => !systems.some((s) => s.slug === p.slug));
  return (
    <section><div className="container">
      <h1>Rare Botanicals — Beyond Ordinary Oils</h1>
      <p><strong>Rare oils. Thoughtful botanical science. Hair care for every generation.</strong></p>
      <p>Go beyond ordinary coconut, argan, rosemary and castor oil. Two ranges: <strong>NIPTEI Botanical Reserve — Adults</strong> and <strong>NIPTEI Little Botanicals — Children</strong> (ages 4–12 first). Both share black / emerald / gold / ivory; children’s use softer colours (soft sage, ivory, pale peach, muted lavender) and friendlier illustrations.</p>
      <div className="warning"><strong>Honest evidence:</strong> These ingredients are not all equally supported by research. Reviews of herbal hair remedies highlight promising possibilities but also emphasize small studies, inconsistent formulas and insufficient clinical evidence. Traditional use and promising lab research are NOT proven to grow human hair. The best early commercial promise is cosmetic performance, not hair growth.</div>
      <h2>Ingredient directory — with honest evidence ratings</h2>
      <table><thead><tr><th>Ingredient</th><th>Evidence</th><th>What we know</th></tr></thead><tbody>{INGREDIENTS.map(([n, e, k]) => <tr key={n}><td>{n}</td><td>{e}</td><td>{k}</td></tr>)}</tbody></table>
      <h2>Claims we use</h2>
      <p>“Helps hair feel softer and smoother” · “Improves the appearance of shine” · “Helps reduce friction during combing” · “Helps improve manageability” · “Conditions dry-feeling hair” · “Helps reduce the appearance of frizz” · “Leaves curls feeling soft and defined”.</p>
      <h2>Claims we avoid — without a drug pathway</h2>
      <p>“Regrows hair” · “Reverses baldness” · “Stops alopecia” · “Stimulates hair follicles” · “Treats dandruff, eczema, psoriasis, or scalp infections” · “Prevents hair loss”. The FDA identifies hair-growth / hair-loss claims as potentially drug claims.</p>
      <h2>The 15 Rare Botanicals</h2>
      <ProductGrid items={oils} />
      <h2>6 Treatment Systems — proposed concepts, not proven treatments for hair loss</h2>
      <ProductGrid items={systems} />
      <h2>Signature Collection — top 5</h2>
      <p>NIPTEI Pumpkin Seed Oil (preliminary human research in pattern hair loss — more studies needed), Black Seed Elixir, Pracaxi Silk Oil, Bhringraj Herbal Elixir, African Moisture Butter.</p>
      <h2>Botanical Reserve — Adults</h2>
      <p>Launch with 3 adult + 3 children’s products, not all 12 at once. Working names — not trademark-cleared.</p>
      <ProductGrid items={reserve} />
      <h2>Little Botanicals — Children (ages 4–12 first)</h2>
      <p>Children’s formulas are purpose-built, not diluted adult products. Separate safety / formulation assessment before baby / toddler products; teens are a later bridge to the adult range.</p>
      <ProductGrid items={little} />
      <h2>Innovation bundles</h2>
      <p>Family bundles never mix adult and children’s formulas.</p>
      <ProductGrid items={bundles} />
      <h2>Test before selling</h2>
      <p>Supplier verification (botanical identity / INCI, plant part, extraction, origin, COA, spec sheet, contaminant testing, fatty-acid profile, oxidation / odour / colour / batch consistency, allergen and safety documents) plus finished-product testing (stability, packaging compatibility / leakage, micro + preservative efficacy for water-based products, pH / viscosity, hair-tress testing, consumer-use testing with adults, separate pediatric safety assessment). The FDA does not generally pre-approve cosmetics. Verify USA origin before any unqualified “Made in USA” claim.</p>
      <p>Launch roadmap: Phase 1 signature adult (Mongongo Silk Shield, Mafura Hair Butter, Amla + Rice Silk Mask) · Phase 2 children’s essentials (Gentle Wash, Easy Comb Spray, Soft Curl Conditioner) · Phase 3 test and refine · Phase 4 launch bundles · Phase 5 expand.</p>
      <p><Link href="/collection">See Botanicals in The Collection →</Link></p>
    </div></section>
  );
}
