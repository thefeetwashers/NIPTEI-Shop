import Link from "next/link";
import HairLetterForm from "@/components/HairLetterForm";

// Site footer — fresh scaffold build (artifact v15 exact wording).
export default function SiteFooter() {
  return (
    <footer className="site">
      <div className="container">
        <p style={{ color: "#c9a227", fontSize: 20, fontWeight: 700 }}>
          NIPTEI — Healthy Hair. Confident You.
        </p>
        <p>Natural &amp; Vegan.</p>
        <div className="footer-grid">
          <div>
            <h3>Shop</h3>
            <Link href="/collection">The Collection</Link>
            <Link href="/collections">All Products</Link>
            <Link href="/quiz">Take the Hair Quiz</Link>
            <Link href="/problems">Shop by Your Problem</Link>
            <Link href="/botanicals">Rare Botanicals</Link>
            <Link href="/luxury">Luxury &amp; The Ritual</Link>
          </div>
          <div>
            <h3>Shop by Who It&apos;s For</h3>
            <Link href="/collection?for=women">For Women</Link>
            <Link href="/men">For Men</Link>
            <Link href="/kids">For Kids</Link>
            <Link href="/pets">For Pets</Link>
            <Link href="/my-niptei">My NIPTEI</Link>
          </div>
          <div>
            <h3>Find Your Routine</h3>
            <Link href="/quiz">Hair Quiz (60 seconds)</Link>
            <Link href="/pricing">How NIPTEI Prices — Transparent Pricing</Link>
            <Link href="/hair-loss">Understanding Hair Loss</Link>
            <Link href="/scalp-health">Scalp Health</Link>
            <Link href="/swap-promise">The Swap Promise</Link>
          </div>
          <div>
            <h3>Learn</h3>
            <Link href="/why-niptei">Why NIPTEI Is Different</Link>
            <Link href="/standards">Our Standards</Link>
            <Link href="/hair-letter">The NIPTEI Hair Letter</Link>
            <Link href="/shipping">Shipping &amp; Delivery</Link>
            <Link href="/problems">Shop by Your Problem</Link>
          </div>
          <div>
            <h3>Help &amp; Trust</h3>
            <Link href="mailto:nipteiapp@gmail.com">Contact — nipteiapp@gmail.com</Link>
            <Link href="/swap-promise">Swap Promise — Terms (Draft)</Link>
            <Link href="/hair-loss">Education, not medical advice</Link>
            <Link href="/suppliers/register">Become a Supplier</Link>
            <Link href="/suppliers/portal">Supplier Portal</Link>
          </div>
          <div>
            <h3>For Suppliers</h3>
            <Link href="/suppliers/register">Supplier Registration</Link>
            <Link href="/suppliers/quote">Request a Quote</Link>
            <Link href="/dashboard">Owner Dashboard</Link>
            <Link href="/dashboard/suppliers">Suppliers</Link>
            <Link href="/dashboard/labels">Labels Library</Link>
            <Link href="/dashboard/shipping">Shipping</Link>
            <Link href="/dashboard/tracker">First Real Product Tracker</Link>
          </div>
          <div>
            <h3>Follow NIPTEI — Worldwide</h3>
            <a href="https://www.youtube.com/@NipteiTV">YouTube / Niptei TV @NipteiTV</a>
            <span>Instagram — Coming soon</span>
            <span>Threads — Coming soon</span>
            <span>TikTok — Coming soon</span>
            <span>Facebook — Coming soon</span>
            <span>Pinterest — Coming soon</span>
          </div>
        </div>
        <HairLetterForm source="Footer" />
        <div className="footer-bottom">
          <p>© 2026 NIPTEI — Premium Hair Care. Healthy Hair. Confident You.</p>
          <p>Labels: shop.niptei.com • support@niptei.com</p>
          <p>Worldwide shipping — coming soon, join the waitlist for your country. Secure checkout — coming soon.</p>
          <p>Building the platform everyone will be talking about.</p>
        </div>
      </div>
    </footer>
  );
}
