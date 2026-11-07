import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "NIPTEI — Healthy Hair. Confident You.",
  description: "NIPTEI luxury Natural & Vegan hair care. Healthy Hair. Confident You. Made in the United States.",
};

function Footer() {
  return (
    <footer className="site">
      <div className="container">
        <p style={{ color: "#c9a227", fontSize: 20, fontWeight: 700 }}>
          NIPTEI — Healthy Hair. Confident You.
        </p>
        <p>Natural &amp; Vegan. Made in the United States when verified with documents on file.</p>
        <div className="footer-grid">
          <div>
            <h3>Shop</h3>
            <Link href="/collections">All Products</Link>
            <Link href="/quiz">Take the Hair Quiz</Link>
            <Link href="/collections#hero3">Hero 3 — In Development</Link>
            <Link href="/collections#men">Men Care</Link>
            <Link href="/collections#pet">Pet Hair Care</Link>
            <Link href="/collections#coming-soon">Coming Soon — Waitlist</Link>
          </div>
          <div>
            <h3>Shop by Your Hair</h3>
            <Link href="/quiz">Type 1 — Fine / Straight</Link>
            <Link href="/quiz">Type 2 — Wavy</Link>
            <Link href="/quiz">Type 3 — Curly</Link>
            <Link href="/quiz">Type 4 — Coily / Kinky</Link>
            <Link href="/hair-loss">Thinning / Alopecia</Link>
          </div>
          <div>
            <h3>Find Your Routine</h3>
            <Link href="/quiz">Hair Quiz (60 seconds)</Link>
            <Link href="/pricing">How NIPTEI Prices — Transparent Pricing</Link>
            <Link href="/hair-loss">Understanding Hair Loss</Link>
            <Link href="/swap-promise">The Swap Promise</Link>
          </div>
          <div>
            <h3>Help &amp; Trust</h3>
            <Link href="mailto:nipteiapp@gmail.com">Contact — nipteiapp@gmail.com</Link>
            <Link href="/swap-promise">Swap Promise — Terms (Draft)</Link>
            <Link href="/hair-loss">Education, not medical advice</Link>
            <Link href="/suppliers/register">Become a Supplier</Link>
          </div>
          <div>
            <h3>For Suppliers</h3>
            <Link href="/suppliers/register">Supplier Registration</Link>
            <Link href="/suppliers/quote">Request a Quote</Link>
            <Link href="/dashboard">Owner Dashboard</Link>
            <Link href="/dashboard/suppliers">Suppliers</Link>
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
        <div className="footer-bottom">
          <p>© 2026 NIPTEI — Premium Hair Care. Healthy Hair. Confident You.</p>
          <p>Made with care in Broward County, Florida, USA — for customers all over the world.</p>
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
          <div className="container">
            <Link className="brand" href="/">NIPTEI<small>HEALTHY HAIR · CONFIDENT YOU</small></Link>
            <nav className="main">
              <Link href="/collections">Shop</Link>
              <Link href="/quiz">Hair Quiz</Link>
              <Link href="/pricing">Transparent Pricing</Link>
              <Link href="/swap-promise">Swap Promise</Link>
              <Link href="/suppliers/register">Become a Supplier</Link>
              <Link href="/dashboard">Dashboard</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
