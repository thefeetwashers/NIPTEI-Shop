import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";
import HairLetterForm from "@/app/components/hair-letter-form";

export const metadata = {
  title: "NIPTEI — Healthy Hair. Confident You.",
  description: "NIPTEI luxury Natural & Vegan hair care. Healthy Hair. Confident You.",
};

function Footer() {
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
            <span>Fediverse / Mastodon — Coming soon</span>
            <span>Bluesky — Coming soon</span>
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site">
          <div className="container header-row">
            <Link className="brand" href="/">NIPTEI<small>NATURAL HAIR CARE</small></Link>
            <nav className="main" aria-label="Main navigation">
              <Link href="/collection">Shop</Link>
              <Link href="/collection">The Collection</Link>
              <details className="nav-dropdown">
                <summary>Shop by Who It&apos;s For ▾</summary>
                <div className="nav-menu">
                  <Link href="/collection?for=women"><span className="nav-item-title">For Women</span><span className="nav-item-desc">The women&apos;s collection — Luxury, Hero 3, Scalp Health, Botanical Reserve and every adult women&apos;s routine.</span></Link>
                  <Link href="/men"><span className="nav-item-title">For Men</span><span className="nav-item-desc">Men Care — Beard Growth Oil, Beard Wash &amp; Conditioner, Scalp Serum for Men, Anti-Thinning Shampoo for Men, Hair &amp; Beard Styling Balm, Razor Bump Oil and the Men&apos;s bundles.</span><span className="nav-item-badge">In Development · Preorder only</span></Link>
                  <Link href="/kids"><span className="nav-item-title">For Kids</span><span className="nav-item-desc">NIPTEI Kids — Little Hair. Big Confidence. All ages 0–3, 4–8, 9–12 and 13–17, Little Botanicals and the Kids bundles.</span><span className="nav-item-badge">In Development — professional review needed</span></Link>
                  <Link href="/pets"><span className="nav-item-title">For Pets</span><span className="nav-item-desc">Pet Hair Care for dogs and cats — separate dog and cat formulas, never human products on a pet.</span><span className="nav-item-badge">Pet products — NOT for human use · In development — vet review needed</span></Link>
                </div>
              </details>
              <Link href="/botanicals">Rare Botanicals</Link>
              <Link href="/my-niptei">My NIPTEI</Link>
              <details className="nav-dropdown">
                <summary>More ▾</summary>
                <div className="nav-menu">
                  <Link href="/why-niptei"><span className="nav-item-title">Why NIPTEI</span><span className="nav-item-desc">How NIPTEI is different from ordinary hair-oil brands.</span></Link>
                  <Link href="/luxury"><span className="nav-item-title">Luxury</span><span className="nav-item-desc">The luxury identity — black, gold and emerald, Healthy Hair. Confident You.</span></Link>
                  <Link href="/scalp-health"><span className="nav-item-title">Learn</span><span className="nav-item-desc">Guides, hair-care education and the Resource Center.</span></Link>
                  <Link href="/kids"><span className="nav-item-title">NIPTEI Kids</span><span className="nav-item-desc">Little Hair. Big Confidence. — the dedicated Kids page with the For Parents hub.</span></Link>
                  <Link href="/suppliers/portal"><span className="nav-item-title">Supplier Portal</span><span className="nav-item-desc">Suppliers: your orders, quote requests, listings and the Labels Library.</span></Link>
                  <Link href="/dashboard"><span className="nav-item-title">Owner Dashboard</span><span className="nav-item-desc">Owner only — products, orders, suppliers, integrations and labels.</span></Link>
                </div>
              </details>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
