import Link from "next/link";

export default function StandardsPage() {
  return (
    <section><div className="container">
      <h1>Our Standards — Ingredient &amp; Claims Transparency</h1>
      <p>What NIPTEI will and will not claim — in public, so anyone can check us.</p>
      <div className="card"><h2>Honest Origin</h2><p>Per product: (a) Made in / Manufactured in country, (b) Ingredient origin, (c) Origin verified with documents? Yes / No. Made in USA badge ONLY when origin is verified with documents. If not verified: “Origin: [country] — verification pending”, NO Made in USA badge. Jamaican Black Castor Oil is an ingredient, never a manufacturing location. Blind shipping hides the supplier, NEVER the country of origin — US law requires origin marking.</p></div>
      <div className="card"><h2>Ingredients</h2><p>No invented ingredients. Full INCI lists come from the manufacturer — until then, placeholders say so. “Natural &amp; Vegan” is our brand philosophy for formulations; whether it also covers extensions, wigs and accessories is still open.</p></div>
      <div className="card"><h2>Claims</h2><p>We use: “Supports a healthy scalp ecosystem”, “Reduces breakage and shedding”, “Improves the appearance of hair density and thickness”, “Helps hair feel softer and smoother”, “Improves the appearance of shine”. We never use: “Cures Baldness”, “Regrows Hair”, “Reverses baldness”, “Stops alopecia”, “Stimulates hair follicles”, “Treats dandruff, eczema, psoriasis, or scalp infections”, “Prevents hair loss”. Cosmetics generally do not get FDA premarket approval — safety substantiation, labeling and MoCRA obligations apply.</p></div>
      <div className="card"><h2>Certifications</h2><p>Not certified yet — where that is true, we say so. No certification is claimed until it is earned and documented.</p></div>
      <div className="card"><h2>Reviews</h2><p>Only genuine reviews, from verified buyers, with permission. No invented reviews or review counts — ever.</p></div>
      <p><Link href="/why-niptei">Why NIPTEI Is Different →</Link> · <Link href="/collection">The Collection →</Link></p>
    </div></section>
  );
}
