import { NextResponse } from "next/server";

// AI Hair Helper — server-only OpenRouter call.
// OPENROUTER_API_KEY is read from server env only, never exposed to the browser.
// If the key is not set, the route says so honestly instead of inventing an answer.
export async function POST(req: Request) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ ok: false, message: "AI Helper is not connected yet — set OPENROUTER_API_KEY in Vercel environment variables." }, { status: 503 });
  }
  const body = await req.json().catch(() => ({}));
  const question = typeof body.question === "string" ? body.question.trim() : "";
  if (!question) return NextResponse.json({ ok: false, message: "A question is required." }, { status: 400 });
  const model = process.env.OPENROUTER_MODEL || "meta-llama/llama-3.1-8b-instruct";
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: "You are the NIPTEI Hair Helper. Answer only from NIPTEI product, hair-type and routine information. Never invent a price, review, supplier, or medical claim. Never promise hair regrowth or a cure. If you do not know, say: I don't know, let me ask the owner." },
        { role: "user", content: question },
      ],
    }),
  });
  if (!res.ok) {
    return NextResponse.json({ ok: false, message: `OpenRouter returned ${res.status}. Check the API key and credits.` }, { status: 502 });
  }
  const data = await res.json();
  const answer = data?.choices?.[0]?.message?.content ?? "I don't know, let me ask the owner.";
  return NextResponse.json({ ok: true, answer });
}
