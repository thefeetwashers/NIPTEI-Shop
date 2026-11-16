"use client";

import { useState } from "react";
import Link from "next/link";
import NavDropdown from "@/components/NavDropdown";

// Site header — fresh scaffold build (artifact v15).
// Dropdowns share one piece of state, so only one menu is ever open:
// opening "More" closes "Shop by Who It's For" and vice versa.
// Menus also close on Escape and on click outside (see NavDropdown).
// Nav links scroll to the homepage sections, as in the artifact:
// Shop → /#shop, The Collection → /#collection, Rare Botanicals → /#botanicals.
export default function SiteHeader() {
  const [open, setOpen] = useState<"who" | "more" | null>(null);
  return (
    <header className="site">
      <div className="container header-row">
        <Link className="brand" href="/">
          NIPTEI<small>NATURAL HAIR CARE</small>
        </Link>
        <nav className="main" aria-label="Main navigation">
          <Link href="/#shop">Shop</Link>
          <Link href="/#collection">The Collection</Link>
          <NavDropdown
            title="Shop by Who It's For ▾"
            open={open === "who"}
            onToggle={() => setOpen(open === "who" ? null : "who")}
            onClose={() => setOpen(null)}
          >
            <Link href="/collection?for=women">
              <span className="nav-item-title">👩 For Women</span>
              <span className="nav-item-desc">
                The women&apos;s collection — Luxury, Hero 3, Scalp Health, Botanical Reserve and every adult women&apos;s routine.
              </span>
            </Link>
            <Link href="/men">
              <span className="nav-item-title">🧔 For Men</span>
              <span className="nav-item-desc">
                Men Care — Beard Growth Oil, Beard Wash &amp; Conditioner, Scalp Serum for Men, Anti-Thinning Shampoo for Men, Hair &amp; Beard Styling Balm, Razor Bump Oil and the Men&apos;s bundles.
              </span>
              <span className="nav-item-badge">In Development · Preorder only</span>
            </Link>
            <Link href="/kids">
              <span className="nav-item-title">👧 For Kids</span>
              <span className="nav-item-desc">
                NIPTEI Kids — Little Hair. Big Confidence. All ages 0–3, 4–8, 9–12 and 13–17, Little Botanicals and the Kids bundles.
              </span>
              <span className="nav-item-badge">In Development — professional review needed</span>
            </Link>
            <Link href="/pets">
              <span className="nav-item-title">🐾 For Pets</span>
              <span className="nav-item-desc">
                Pet Hair Care for dogs and cats — separate dog and cat formulas, never human products on a pet.
              </span>
              <span className="nav-item-badge">Pet products — NOT for human use · In development — vet review needed</span>
            </Link>
          </NavDropdown>
          <Link href="/#botanicals">Rare Botanicals</Link>
          <Link href="/my-niptei">My NIPTEI</Link>
          <NavDropdown
            title="More ▾"
            align="right"
            open={open === "more"}
            onToggle={() => setOpen(open === "more" ? null : "more")}
            onClose={() => setOpen(null)}
          >
            <Link href="/why-niptei">
              <span className="nav-item-title">Why NIPTEI</span>
              <span className="nav-item-desc">How NIPTEI is different from ordinary hair-oil brands.</span>
            </Link>
            <Link href="/#luxury">
              <span className="nav-item-title">Luxury</span>
              <span className="nav-item-desc">The luxury identity — black, gold and emerald, Healthy Hair. Confident You.</span>
            </Link>
            <Link href="/learn">
              <span className="nav-item-title">Learn</span>
              <span className="nav-item-desc">Guides, hair-care education and the Resource Center.</span>
            </Link>
            <Link href="/kids">
              <span className="nav-item-title">NIPTEI Kids</span>
              <span className="nav-item-desc">Little Hair. Big Confidence. — the dedicated Kids page with the For Parents hub.</span>
            </Link>
            <Link href="/suppliers/portal">
              <span className="nav-item-title">Supplier Portal</span>
              <span className="nav-item-desc">Suppliers: your orders, quote requests, listings and the Labels Library.</span>
            </Link>
            <Link href="/dashboard">
              <span className="nav-item-title">Owner Dashboard</span>
              <span className="nav-item-desc">Owner only — products, orders, suppliers, integrations and labels.</span>
            </Link>
          </NavDropdown>
        </nav>
      </div>
    </header>
  );
}
