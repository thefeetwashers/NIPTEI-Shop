import HairLetterForm from "@/components/HairLetterForm";

const ISSUES = [
  ["1 — Your Scalp Is Skin Too", "Why scalp care is skin care, and what that changes about your routine."],
  ["2 — The Three Hero Categories, Explained", "Purify, balance, repair — what each one does, and what it does not do."],
  ["3 — Why Mass-Market Anti-Dandruff Shampoo Strips Your Hair", "The trade-off most bottles never mention."],
  ["4 — Your Hair Type, Your Routine", "Type 1–4 and thinning, in plain English."],
  ["5 — Meet the Hero 3", "The three original formulas in development, and how they will be tested before they are sold."],
];

export default function HairLetterPage() {
  return (
    <section><div className="container">
      <h1>The NIPTEI Hair Letter</h1>
      <p>Weekly, education first. Drafts only — nothing is auto-sent until the owner approves each issue.</p>
      <HairLetterForm source="Hair Letter page" />
      <h2>Draft issues</h2>
      {ISSUES.map(([title, body]) => <div key={title} className="card"><h3>{title}</h3><p>{body}</p><p style={{ fontSize: 13, color: "#666" }}>Draft — not sent yet.</p></div>)}
      <div className="card"><h2>What Is This, Really?</h2><p>Every product page carries a “What Is This, Really?” box — what the product is, what it is not, and what is still unproven. No invented claims, no cure language, no fake reviews.</p></div>
    </div></section>
  );
}
