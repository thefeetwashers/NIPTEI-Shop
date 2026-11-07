import Link from "next/link";

const TRACKER_GROUPS: Array<[string, Array<[string, string, string]>]> = [
  ["Hero 3 — Nourishing Hair Growth Oil · Hydrating Shampoo · Restorative Deep Conditioner (first)", [
    ["Quote requested from Pravada / Envii / Shay", "Not started", ""],
    ["Real quote received (MOQ, cost/unit, sample cost, lead time)", "Not started", ""],
    ["Sample ordered", "Not started", ""],
    ["Sample tested on the owner’s own hair", "Not started", ""],
    ["Formula safety review by a qualified professional", "Not started", ""],
    ["Real price set", "Not started", ""],
    ["Product live for sale", "Not started", ""],
  ]],
  ["Scalp-Resurfacing & Growth Serum (after the Hero 3)", [
    ["Quote requested from Pravada / Envii / Shay", "Not started", ""],
    ["Real quote received (MOQ, cost/unit, sample cost, lead time)", "Not started", ""],
    ["Sample ordered", "Not started", ""],
    ["Sample tested on the owner’s own hair", "Not started", ""],
    ["Formula safety review by a qualified professional", "Not started", ""],
    ["Real price set", "Not started", ""],
    ["Product live for sale", "Not started", ""],
  ]],
];

const DIFFERENTIATORS = [
  ["7-Day Scalp Reset Guide", "Free guide, education only."],
  ["Printable Wash Day Planner", "Free, printable."],
  ["What to Ask Your Dermatologist", "Free checklist."],
  ["Ingredient Glossary + checker", "Free — what each ingredient does, and what is still unproven."],
  ["Name Your Routine", "Give your matched routine a name in the quiz."],
  ["Public Hair Twin matching", "Permission only — match with someone like you."],
  ["Weekly live Q&A", "On Niptei TV / TikTok. First live coming soon — no date claimed. https://www.youtube.com/@NipteiTV"],
  ["Open NIPTEI Standard", "Public page — transparent pricing formula, Honest Origin, Firsts. Adoption: none yet."],
  ["First in Your Country board", "Be the first in your country."],
  ["Consent-based refill reminders", "Only if you opt in. Never auto-charged."],
];

const FIRSTS = [
  ["Hair Twin", "Building", "A 12-week living profile, climate / season-aware, in My NIPTEI."],
  ["Ask Someone Like Me", "Building", "Anonymised verified-buyer experiences, permission only."],
  ["Swap Promise", "Coming soon", "One quiz-matched swap in 30 days, keep the old bottle, pay only actual supplier shipping plus postage. Not live until the owner enables it with real costs and approved terms."],
  ["NIPTEI Passport / Ritual Points", "Building", "From real actions only."],
  ["Global Hair Map", "Building", "Opt-in pins storing only country / type / climate. Empty countries show “Be the first in your country”."],
  ["Watch Your Bottle Being Made", "Building", "Real batch photo at quality check, or “Update coming soon”."],
  ["Never Run Out", "Building", "Usage-based reorder offer 3 days before run-out. Never auto-charge without approval."],
  ["The NIPTEI Standard", "Live", "Public standard — transparent pricing, Honest Origin, Firsts."],
];

export default function WhyNipteiPage() {
  return (
    <section><div className="container">
      <h1>Why NIPTEI Is Different</h1>
      <p>Fair comparison — no invented prices or policies for Amazon or Walmart. What makes NIPTEI different: a quiz-matched routine for your hair, transparent pricing you can see, honest origin, preorder honesty, and a shop built around scalp health — not a one-size-fits-all magic bottle.</p>
      <h2>First Real Product Tracker — owner only, honest steps</h2>
      {TRACKER_GROUPS.map(([group, steps]) => (
        <div key={group}>
          <h3>{group}</h3>
          <table><thead><tr><th>Step</th><th>Status</th><th>Notes</th></tr></thead><tbody>{steps.map(([s, st, n]) => <tr key={s}><td>{s}</td><td>{st}</td><td>{n}</td></tr>)}</tbody></table>
        </div>
      ))}
      <h2>Proof, Not Promises</h2>
      <p>Every product page carries Proof slots — each one <strong>Pending</strong> until it is real: real ingredients, real origin documents, real safety review, real reviews (verified buyers only, with permission). Nothing is marked proven before it is proven.</p>
      <h2>Ten free differentiators</h2>
      {DIFFERENTIATORS.map(([t, d]) => <div key={t} className="card"><h3>{t}</h3><p>{d}</p></div>)}
      <h2>12 Firsts — and 8 More for the Next 100 Years</h2>
      {FIRSTS.map(([t, s, d]) => <div key={t} className="card"><h3>{t} — {s}</h3><p>{d}</p></div>)}
      <p><Link href="/swap-promise">The Swap Promise (Draft) →</Link> · <Link href="/pricing">Transparent Pricing →</Link> · <Link href="/standards">Our Standards →</Link></p>
    </div></section>
  );
}
