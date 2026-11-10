import { SWAP_PROMISE_TERMS } from "@/lib/pricing";
import { SWAP_TEMPLATES } from "@/lib/artifact-data";

export default function SwapPromisePage() {
  return (
    <section><div className="container">
      <p><span className="badge gold">Draft — owner to review before this promise goes live</span></p>
      <h1>{SWAP_PROMISE_TERMS.title}</h1>
      <p>{SWAP_PROMISE_TERMS.copy}</p>
      <div className="card"><h2>Terms</h2><ul>{SWAP_PROMISE_TERMS.rules.map((r) => <li key={r}>{r}</li>)}</ul></div>
      <div className="card"><h2>Exchange Shipping Fee — exactly what it costs</h2>
        <p>Exchange Shipping Fee = Supplier Shipping Charge + Carrier Postage (USPS / UPS / FedEx), for the outbound replacement only. No profit, no markup, no buffer.</p>
        <p>Example: Exchange Shipping Fee <strong>$5.00</strong> — an example only until real supplier and postage costs are entered.</p>
        <p>You do NOT mail the old bottle back. Keep it, or pass it to a friend or family member who matches that hair profile.</p>
      </div>
      <div className="card"><h2>How a swap works</h2>
        <ol><li>Request a Swap in My NIPTEI within 30 days, once per order.</li><li>Re-take the diagnostic quiz.</li><li>Pay the exchange shipping fee at swap checkout — no charge without your approval.</li><li>The system generates the new shipping label and signals the matched supplier.</li><li>Tracking appears in My NIPTEI. Status: Requested → Fee paid → Replacement shipped → Delivered.</li></ol>
      </div>
      <div className="card"><h2>Swap notifications — exact copy</h2>
        <p><strong>Email subject:</strong> {SWAP_TEMPLATES.email_subject}</p>
        <p><strong>Email preview:</strong> {SWAP_TEMPLATES.email_preview}</p>
        <p style={{ whiteSpace: "pre-line" }}>{SWAP_TEMPLATES.email_body}</p>
        <p><strong>SMS:</strong> {SWAP_TEMPLATES.sms_text}</p>
      </div>
      <p>Swap Promise status: {SWAP_PROMISE_TERMS.status}. Terms must be approved in the dashboard before enabling.</p>
    </div></section>
  );
}
