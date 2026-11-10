import Link from "next/link";
import { LAUNCH_TRACKER, NEXT_FIRSTS } from "@/lib/artifact-data";

const DIFFERENTIATORS = [
  ["7-Day Scalp Reset Guide", "Free guide, education only."],
  ["Printable Wash Day Planner", "Free, printable."],
  ["What to Ask Your Dermatologist", "Free checklist."],
  ["Ingredient Glossary + checker", "Free — what each ingredient does, and what is still unproven."],
  ["Name Your Routine", "Give your matched routine a name in the quiz."],
  ["Public Hair Twin matching", "Permission only — match with someone like you."],
  ["Open NIPTEI Standard", "Public page — transparent pricing formula, Honest Origin, Firsts. Adoption: none yet."],
  ["First in Your Country board", "Be the first in your country."],
  ["Consent-based refill reminders", "Only if you opt in. Never auto-charged."],
];

const FIRSTS: Array<[keyof typeof NEXT_FIRSTS.statuses, string, string]> = [
  ["hair-twin", "Hair Twin", "A 12-week living profile, climate / season-aware, in My NIPTEI."],
  ["ask-like-me", "Ask Someone Like Me", "Anonymised verified-buyer experiences, permission only."],
  ["swap-promise", "Swap Promise", "One quiz-matched swap in 30 days, keep the old bottle, pay only actual supplier shipping plus postage. Not live until the owner enables it with real costs and approved terms."],
  ["passport", "NIPTEI Passport / Ritual Points", "From real actions only."],
  ["hair-map", "Global Hair Map", "Opt-in pins storing only country / type / climate. Empty countries show “Be the first in your country”."],
  ["watch-bottle", "Watch Your Bottle Being Made", "Real batch photo at quality check, or “Update coming soon”."],
  ["never-run-out", "Never Run Out", "Usage-based reorder offer 3 days before run-out. Never auto-charge without approval."],
  ["standard", "The NIPTEI Standard", "Public standard — transparent pricing, Honest Origin, Firsts."],
];

function statusLabel(s: string) {
  if (s === "not_started") return "Not started";
  if (s === "coming_soon") return "Coming soon";
  if (s === "building") return "Building";
  if (s === "live") return "Live";
  return s;
}

export default function WhyNipteiPage() {
  return (
    <section><div className="container">
      <h1>Why NIPTEI Is Different</h1>
      <p>Fair comparison — no invented prices or policies for Amazon or Walmart. What makes NIPTEI different: a quiz-matched routine for your hair, transparent pricing you can see, honest origin, preorder honesty, and a shop built around scalp health — not a one-size-fits-all magic bottle.</p>
      <h2>First Real Product Tracker — owner only, honest steps</h2>
      {LAUNCH_TRACKER.map((group) => (
        <div key={group.key}>
          <h3>{group.label}</h3>
          <table><thead><tr><th>Step</th><th>Status</th><th>Notes</th></tr></thead><tbody>{group.steps.map((step) => <tr key={step.label}><td>{step.label}</td><td>{statusLabel(step.status)}</td><td>{step.notes}</td></tr>)}</tbody></table>
        </div>
      ))}
      <h2>Proof, Not Promises</h2>
      <p>Every product page carries Proof slots — each one <strong>Pending</strong> until it is real: real ingredients, real origin documents, real safety review, real reviews (verified buyers only, with permission). Nothing is marked proven before it is proven.</p>
      <h2>Ten free differentiators</h2>
      {DIFFERENTIATORS.map(([t, d]) => <div key={t} className="card"><h3>{t}</h3><p>{d}</p></div>)}
      <div className="card"><h3>Weekly live Q&amp;A</h3><p>On Niptei TV / TikTok — <a href="https://www.youtube.com/@NipteiTV">https://www.youtube.com/@NipteiTV</a>. First live coming soon.</p></div>
      <h2>12 Firsts — and 8 More for the Next 100 Years</h2>
      {FIRSTS.map(([key, t, d]) => <div key={key} className="card"><h3>{t} — {statusLabel(NEXT_FIRSTS.statuses[key])}</h3><p>{d}</p></div>)}
      <p><Link href="/swap-promise">The Swap Promise (Draft) →</Link> · <Link href="/pricing">Transparent Pricing →</Link> · <Link href="/standards">Our Standards →</Link></p>
    </div></section>
  );
}
