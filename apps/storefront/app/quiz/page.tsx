"use client";
import { useState } from "react";
import Link from "next/link";
import { HAIR_EDUCATION } from "@/lib/pricing";
import { getProduct } from "@/lib/products";
import HairLetterForm from "@/app/components/hair-letter-form";

const Q2 = ["Itchy, flaky or irritated scalp", "Buildup — hair feels heavy, dull, coated", "Thinning / wider part / more scalp showing", "Dry, brittle or damaged hair", "My scalp is fine — I want growth and shine"];
const Q3 = ["Yes — noticeably thinner or shedding more", "A little — some change", "No — density is the same", "Not sure"];
const Q4 = ["Wash and go — under 5 minutes", "A simple routine — 10 minutes", "A full ritual — 20+ minutes", "Protective styles most days"];

export default function QuizPage() {
  const [who, setWho] = useState<string | null>(null);
  const [waitlistFor, setWaitlistFor] = useState<string | null>(null);
  const [step, setStep] = useState(0); // 0=Q1, 1=Q2, 2=Q3, 3=Q4, 4=done
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const serum = getProduct("scalp-resurfacing-growth-serum");

  if (waitlistFor) {
    return (
      <section><div className="container">
        <h1>Coming Soon — Join the Waitlist</h1>
        <p>{waitlistFor} routines are coming soon. Join the email waitlist and get <strong>15% off your first household order</strong>.</p>
        <HairLetterForm source={`Quiz waitlist — ${waitlistFor}`} />
        <p><button className="btn secondary" onClick={() => setWaitlistFor(null)}>← Back to the quiz</button></p>
      </div></section>
    );
  }

  if (step === 4) {
    return (
      <section><div className="container">
        <p>Analyzing your follicular profile…</p>
        <h1>Your Perfect Routine Match: The Niptei Resurfacing &amp; Growth Ecosystem</h1>
        <p style={{ fontSize: 13, color: "#666" }}>This is a quiz, not a medical scan or diagnosis.</p>
        <div className="card"><h2>Featured hero — Scalp-Resurfacing &amp; Growth Serum</h2>
          <p>{serum?.description}</p>
          <p className="price soon">Price coming soon</p>
          <p>In Development — Join Waitlist.</p>
          <p><Link href="/products/scalp-resurfacing-growth-serum">View the serum →</Link></p>
        </div>
        <p>Who it is for: {who}. Scalp: {answers.q2}. Density: {answers.q3}. Routine: {answers.q4}.</p>
        <p><strong>Name Your Routine:</strong> give your matched routine a name — it is yours.</p>
        <p><button className="btn" onClick={() => { setStep(0); setWho(null); setAnswers({}); }}>Retake the quiz</button> <Link className="btn secondary" href="/pricing">See how the price is made</Link></p>
        <HairLetterForm source="Quiz results" />
      </div></section>
    );
  }

  if (step === 0) {
    return (
      <section><div className="container">
        <h1>Find Your Perfect Hair Routine in 60 Seconds</h1>
        <h2>Who is this routine for?</h2>
        {["For Me (Woman)", "For Me (Man)", "For My Partner"].map((o) => (
          <button key={o} className="quiz-option" onClick={() => { setWho(o); setStep(1); }}>{o}</button>
        ))}
        <button className="quiz-option" onClick={() => setWaitlistFor("For My Child (Coming Soon)")}>For My Child (Coming Soon)</button>
        <button className="quiz-option" onClick={() => setWaitlistFor("For My Pet (Coming Soon)")}>For My Pet (Coming Soon)</button>
        <p style={{ fontSize: 13, color: "#666" }}>Your answers stay in your browser for this quiz. No medical claims are made from quiz results.</p>
      </div></section>
    );
  }

  const questions = [
    { id: "q2", q: "What frustrates you most about your scalp?", options: Q2 },
    { id: "q3", q: "Has your hair density or growth changed?", options: Q3 },
    { id: "q4", q: "What is your styling routine?", options: Q4 },
  ];
  const q = questions[step - 1];
  return (
    <section><div className="container">
      <h1>Find Your Perfect Hair Routine in 60 Seconds</h1>
      <p>Question {step + 1} of 4</p>
      <h2>{q.q}</h2>
      {q.options.map((o) => (
        <button key={o} className="quiz-option" onClick={() => { setAnswers({ ...answers, [q.id]: o }); setStep(step + 1); }}>{o}</button>
      ))}
      <p style={{ fontSize: 13, color: "#666" }}>This is a quiz, not a medical scan or diagnosis.</p>
    </div></section>
  );
}
