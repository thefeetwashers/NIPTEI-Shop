"use client";
import { useState } from "react";
import Link from "next/link";
import { getProduct } from "@/lib/products";
import { PUBLIC_OFFERS } from "@/lib/artifact-data";
import HairLetterForm from "@/components/HairLetterForm";

// 30-Second Hair & Scalp Assessment — matches the visitor to a Biblical Botanicals routine
// by who it is for + their hair loss / scalp concern. Cosmetic guidance only: this is a quiz,
// not a medical scan or diagnosis. No drug claims are made from quiz results.
const CONCERNS = [
  "Traction alopecia / broken edges (braids, wigs, ponytails)",
  "Hormonal or pattern thinning (postpartum, menopause, receding hairline)",
  "Stress or medication shedding (sudden all-over shedding)",
  "Dryness, dandruff & buildup (flaking, itching, clogged follicles)",
  "Patchy hair loss (alongside medical care)",
];
const ROUTINES = ["Wash and go — under 5 minutes", "A simple routine — 10 minutes", "A full ritual — 20+ minutes", "Protective styles most days"];

function matchFor(who: string | null, concern: string): string[] {
  if (who === "For My Child") return ["biblical-little-crowns-wash", "biblical-little-crowns-braid-butter"];
  if (concern.startsWith("Traction")) return ["biblical-scalp-serum", "biblical-nourishing-hair-oil"];
  if (concern.startsWith("Hormonal")) return ["biblical-scalp-serum", "biblical-nourishing-hair-oil"];
  if (concern.startsWith("Stress")) return ["biblical-hydrating-shampoo", "biblical-scalp-serum"];
  if (concern.startsWith("Dryness")) return ["biblical-exfoliating-scalp-scrub", "biblical-hydrating-shampoo"];
  return ["biblical-hydrating-shampoo", "biblical-nourishing-hair-oil"]; // patchy: gentle care + oil
}

export default function QuizPage() {
  const [who, setWho] = useState<string | null>(null);
  const [waitlistFor, setWaitlistFor] = useState<string | null>(null);
  const [step, setStep] = useState(0); // 0=Q1, 1=Q2, 2=Q3, 3=done
  const [answers, setAnswers] = useState<Record<string, string>>({});

  if (waitlistFor) {
    return (
      <section><div className="container">
        <h1>Coming Soon — Join the Waitlist</h1>
        <p>{waitlistFor} routines are coming soon. Join the email waitlist and get <strong>15% off your first household order</strong>.</p>
        <p>
          Offer status: {PUBLIC_OFFERS.waitlist_offer_enabled
            ? `${PUBLIC_OFFERS.waitlist_offer_pct}% off with code ${PUBLIC_OFFERS.waitlist_offer_code}`
            : "not yet active — no code or expiry set by the owner."}
        </p>
        <HairLetterForm source={`Quiz waitlist — ${waitlistFor}`} />
        <p><button className="btn secondary" onClick={() => setWaitlistFor(null)}>← Back to the quiz</button></p>
      </div></section>
    );
  }

  if (step === 3) {
    const slugs = matchFor(who, answers.q2 || "");
    const products = slugs.map((s) => getProduct(s)).filter((p): p is NonNullable<typeof p> => !!p);
    const isChild = who === "For My Child";
    const isPatchy = (answers.q2 || "").startsWith("Patchy");
    return (
      <section><div className="container">
        <p>Your 30-second assessment is done.</p>
        <h1>Your Biblical Botanicals Routine</h1>
        <p style={{ fontSize: 13, color: "#666" }}>This is a quiz, not a medical scan or diagnosis. Cosmetic care only — these products support the look of fuller hair and a healthy scalp; they do not cure alopecia, treat baldness, or regrow hair medically.</p>
        {isPatchy && <p><strong>Important:</strong> patchy or sudden hair loss needs a doctor. Use gentle cosmetic care alongside medical care — never instead of it.</p>}
        {isChild && <p><strong>Little Crowns — ages 2 and up:</strong> a mild 0.5% essential-oil dilution with no peppermint and no cinnamon. In development — professional review and tear-free testing are required before sale.</p>}
        <p>Who it is for: {who}. Concern: {answers.q2}. Routine: {answers.q3}.</p>
        <div className="grid">
          {products.map((p) => (
            <div key={p.slug} className="card">
              <h2>{p.name}</h2>
              <p>{p.description}</p>
              <p className="price soon">Price coming soon</p>
              <p>In Development — Join Waitlist.</p>
              <p><Link href={`/products/${p.slug}`}>View it →</Link></p>
            </div>
          ))}
        </div>
        <p>Want the full 90-day routine? The complete Biblical Botanicals system is 8 products: shampoo, mask, scalp scrub, leave-in milk, follicle serum, anointing oil, and the two Little Crowns kids products. <Link href="/collection">See the full line →</Link></p>
        <p><button className="btn" onClick={() => { setStep(0); setWho(null); setAnswers({}); }}>Retake the assessment</button> <Link className="btn secondary" href="/pricing">See how the price is made</Link></p>
        <HairLetterForm source="Quiz results" />
      </div></section>
    );
  }

  if (step === 0) {
    return (
      <section><div className="container">
        <h1>Find Your Routine in 30 Seconds</h1>
        <h2>Who is this routine for?</h2>
        {["For Me (Woman)", "For Me (Man)", "For My Child", "For My Partner"].map((o) => (
          <button key={o} className="quiz-option" onClick={() => { setWho(o); setStep(1); }}>{o}</button>
        ))}
        <button className="quiz-option" onClick={() => setWaitlistFor("For My Pet (Coming Soon)")}>For My Pet (Coming Soon)</button>
        <p style={{ fontSize: 13, color: "#666" }}>Your answers stay in your browser for this quiz. No medical claims are made from quiz results.</p>
      </div></section>
    );
  }

  const questions = [
    { id: "q2", q: "What is the main concern?", options: CONCERNS },
    { id: "q3", q: "What is your styling routine?", options: ROUTINES },
  ];
  const q = questions[step - 1];
  return (
    <section><div className="container">
      <h1>Find Your Routine in 30 Seconds</h1>
      <p>Question {step + 1} of 3</p>
      <h2>{q.q}</h2>
      {q.options.map((o) => (
        <button key={o} className="quiz-option" onClick={() => { setAnswers({ ...answers, [q.id]: o }); setStep(step + 1); }}>{o}</button>
      ))}
      <p style={{ fontSize: 13, color: "#666" }}>This is a quiz, not a medical scan or diagnosis.</p>
    </div></section>
  );
}
