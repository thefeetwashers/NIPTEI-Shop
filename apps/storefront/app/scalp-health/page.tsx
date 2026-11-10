import Link from "next/link";
import { productsByCollection } from "@/lib/products";
import { ProductGrid } from "@/components/ProductCard";

export default function ScalpHealthPage() {
  const scalp = productsByCollection("scalp");
  return (
    <section><div className="container">
      <h1>Scalp Health — The Problems No One Talks About</h1>
      <div className="warning"><strong>This is education, not medical advice, not a diagnosis.</strong> If this sounds like you, see a doctor / dermatologist / trichologist.</div>
      <p>Many people hide heavy flaking, itching, or scabbing because they think it looks like poor hygiene. These are often medical dermatological conditions, not poor hygiene. <strong>Scalp Health as the Foundation for Hair Growth</strong> — premium, skin-first scalp care, not mass-market anti-dandruff shampoo that strips your hair.</p>
      <div className="card"><h2>Chronic Scalp Conditions — misrepresented as “Just Dandruff”</h2>
        <p><strong>Seborrheic Dermatitis:</strong> inflammatory response to naturally occurring yeast, greasy stubborn yellow or white scales.</p>
        <p><strong>Scalp Psoriasis:</strong> autoimmune condition, raised reddish patches with silvery plaque-like scales, can damage follicles and lead to temporary thinning.</p>
        <p><strong>Pityriasis Amiantacea:</strong> thick asbestos-like scales binding tightly to hair shafts, anchoring hair into painful clumps.</p>
        <p><strong>Scalp Acne and Cysts:</strong> breakouts under the hair, when products, heavy oils, or dead skin trap bacteria deep in the follicle; severe cystic acne can destroy follicles if untreated.</p>
        <p><strong>The Widening Part and Frontal Density Loss in Women:</strong> frontal hairline receding / middle part widening from aging, hormonal shifts, genetics — roughly 50% of women experience notable thinning by age 50 (from the user’s paste, not a NIPTEI study), yet it is stigmatized and isolating.</p>
        <p><strong>Trichotillomania (Hair Pulling Disorder):</strong> compulsive urge to pull hair, patchy bald spots, camouflage with hats / styling / makeup — with compassion, no shame, and a note to seek professional support.</p>
      </div>
      <div className="card"><h2>Product / Sebum Buildup — Scalp Suffocation</h2>
        <p>Buildup from products and sebum can suffocate the scalp — the step most routines miss. Purify first, then balance, then repair.</p></div>
      <h2>The Three Hero Categories</h2>
      <p><strong>Not basic shampoo. Three specialized solutions — Purify the scalp, Balance the scalp, Repair the hair.</strong></p>
      <ol><li><strong>Purifying Scalp Scrubs</strong> — for scalp suffocation and buildup.</li><li><strong>Microbiome-Balancing Drop Serums</strong> — for severe flaking and irritation.</li><li><strong>Molecular Hair Repair Masks</strong> — for over-processed and brittle strands.</li></ol>
      <p><strong>This is a cosmetic, not a medicine. If you have a scalp condition, see a doctor / dermatologist / trichologist.</strong></p>
      <ProductGrid items={scalp} />
      <p>All Scalp Health products are In Development / Waitlist only, Price coming soon. <Link href="/hair-loss">Understanding Hair Loss →</Link> · <Link href="/quiz">Take the Hair Quiz →</Link></p>
      <div className="warning"><strong>This is education, not medical advice, not a diagnosis.</strong> If this sounds like you, see a doctor / dermatologist / trichologist.</div>
    </div></section>
  );
}
