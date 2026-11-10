import Link from "next/link";
import { SWAP_PROMISE_TERMS } from "@/lib/pricing";

export default function DashboardSwaps() {
  return (
    <section><div className="container">
      <h1>Dashboard — Swaps</h1>
      <div className="notice">No swap requests yet. The list is empty until a real swap happens. The Swap Promise is Draft V3, not live until the owner reviews terms, enters real shipping costs, and enables it.</div>
      <div className="card"><h2>{SWAP_PROMISE_TERMS.title} — Draft V3</h2>
        <p>{SWAP_PROMISE_TERMS.copy}</p>
        <ul>{SWAP_PROMISE_TERMS.rules.map((r) => <li key={r}>{r}</li>)}</ul>
        <p>Example fee: $5.00 flat — an example only until real supplier and postage costs are entered.</p>
        <p><Link href="/swap-promise">Swap Promise terms (Draft) →</Link></p>
      </div>
    </div></section>
  );
}
