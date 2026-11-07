"use client";
import { useState } from "react";
import Link from "next/link";
import { HAIR_EDUCATION } from "@/lib/pricing";
import { productsByCollection } from "@/lib/products";

const QUESTIONS = [
  { id: "who", q: "Who is this routine for?", options: ["For me (woman)", "For me (man)", "For my partner", "For my child", "For my pet"] },
  { id: "goal", q: "What is your main hair goal?", options: ["Grow longer / stronger", "Stop breakage", "Thinning / shedding", "Moisture / dryness", "Curl definition"] },
  { id: "type", q: "What is your hair texture?", options: ["Type 1 — Fine / Straight", "Type 2 — Wavy", "Type 3 — Curly", "Type 4 — Coily / Kinky", "Thinning / Alopecia"] },
  { id: "effort", q: "How much time do you want to spend on your routine?", options: ["Under 5 minutes", "10 minutes", "A full ritual — 20+ minutes"] },
];

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const done = step >= QUESTIONS.length;
  const type = answers["type"] || "";
  const key = type.startsWith("Type 1") ? "Type 1" : type.startsWith("Type 2") ? "Type 2" : type.startsWith("Type 3") ? "Type 3" : type.startsWith("Type 4") ? "Type 4" : "Thinning / Alopecia";
  const edu = HAIR_EDUCATION[key];
  const matched = type.includes("Thinning")
    ? productsByCollection("core").filter((p) => p.slug === "anti-hair-loss-shampoo" || p.slug === "hair-growth-serum")
    : type.startsWith("Type 4")
      ? productsByCollection("core").filter((p) => p.slug === "strengthen-restore-shampoo" || p.slug === "hair-growth-serum")
      : productsByCollection("core").slice(0, 3);

  if (done) {
    return (
      <section><div className="container">
        <h1>Your Hair Twin — Results</h1>
        <p><strong>Quiz ID:</strong> {`NIPTEI-${Object.values(answers).join("-").slice(0, 24).replace(/[^A-Za-z0-9]/g, "").toUpperCase() || "QUIZ"}`}</p>
        <div className="card"><h2>{edu.title}</h2><p>{edu.body}</p>
          {key === "Thinning / Alopecia" && <p><Link href="/hair-loss">Read Understanding Hair Loss — education, not medical advice →</Link></p>}
        </div>
        <h2>Your matched routine</h2>
        <div className="grid">{matched.map((p) => (
          <article key={p.slug} className="card"><h3>{p.name}</h3><p>{p.tagline}</p><p className="price soon">Price coming soon</p><p><Link href={`/products/${p.slug}`}>View product →</Link></p></article>
        ))}</div>
        <p>Who it is for: {answers["who"]}. Goal: {answers["goal"]}. Time: {answers["effort"]}.</p>
        {answers["who"]?.includes("pet") && <div className="warning"><strong>Pet note:</strong> human products are NOT for pets. Your pet needs a separate, vet-reviewed formula. See Pet Hair Care.</div>}
        <p><Link className="btn" href="/quiz" onClick={() => { setStep(0); setAnswers({}); }}>Retake the quiz</Link> <Link className="btn secondary" href="/pricing">See how the price is made</Link></p>
      </div></section>
    );
  }
  const q = QUESTIONS[step];
  return (
    <section><div className="container">
      <h1>Find Your Perfect Hair Routine in 60 Seconds</h1>
      <p>Question {step + 1} of {QUESTIONS.length}</p>
      <h2>{q.q}</h2>
      {q.options.map((o) => (
        <button key={o} className="quiz-option" onClick={() => { setAnswers({ ...answers, [q.id]: o }); setStep(step + 1); }}>{o}</button>
      ))}
      <p style={{ fontSize: 13, color: "#666" }}>Your answers stay in your browser for this quiz. No medical claims are made from quiz results.</p>
    </div></section>
  );
}
