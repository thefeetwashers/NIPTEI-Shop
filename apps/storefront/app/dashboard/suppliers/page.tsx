import { SUPPLIERS, MANUFACTURER_COMPARISON } from "@/lib/artifact-data";

const GROUP_LABELS: Record<string, string> = {
  usa_formula: "USA Formula",
  usa_packaging: "USA Packaging",
  usa_ingredients: "USA Bulk Ingredients",
  alibaba_formula: "Alibaba Formula — reference only",
  alibaba_packaging: "Alibaba Packaging",
};

export default function DashboardSuppliers() {
  return (
    <section><div className="container">
      <h1>Dashboard — Suppliers</h1>
      <p>20 seeded suppliers in 5 groups (USA Formula, USA Packaging, USA Bulk Ingredients, Alibaba Formula — reference only, Alibaba Packaging). No supplier has been contacted, sample-tested, or marked Partner yet.</p>
      <div className="notice">Quote requests go only to verified emails. Private Label Labs has no verified public email — use its contact form or phone (248) 938-4181. Do not use unverified addresses found elsewhere.</div>
      <p>Supplier registration approvals: 0 pending. Quote requests: 0. Supplier listings: 0.</p>
      <table><thead><tr><th>Supplier</th><th>Group</th><th>Location</th><th>Contact email</th><th>Status</th><th>MOQ</th><th>Certifications</th></tr></thead><tbody>
        {SUPPLIERS.map((s) => (
          <tr key={s.id}>
            <td>{s.name}</td>
            <td>{GROUP_LABELS[s.group_key] ?? s.group_key}</td>
            <td>{s.location}</td>
            <td>{s.contact_email ? `${s.contact_email}${s.email_verified ? " (verified)" : ""}` : "No verified email"}</td>
            <td>{s.status === "not_contacted" ? "Not contacted" : s.status}</td>
            <td>{s.moq}</td>
            <td>{s.certifications}</td>
          </tr>
        ))}
      </tbody></table>
      {SUPPLIERS.map((s) => (
        <div key={s.id} className="card">
          <h3>{s.name}</h3>
          <p><strong>Supplies:</strong> {s.supplies}</p>
          <p><strong>Price notes:</strong> {s.price_notes}</p>
          <p>Stripe Connect: {s.stripe_connect_status === "not_started" ? "not started" : s.stripe_connect_status}. Blind ship: {s.blind_ship_status === "not_asked" ? "not asked" : s.blind_ship_status}. Verified badge: {s.verified_badge ? "Yes" : "No"}.</p>
        </div>
      ))}
      <div className="card"><h2>Supplier Database Matrix</h2>
        <p>Example rows only (Lab Choice A–D). Replace with a real vetted lab and real quoted cost — example numbers can never be saved as real.</p>
        <p>No matrix rows saved yet — the matrix is empty until the owner saves a real vetted lab and a real quoted cost. Supabase is not connected.</p>
      </div>
      <div className="card"><h2>Manufacturer Comparison Tracker — labelled worked example</h2>
        <p>Labelled worked example until the owner saves real quotes. (is_example: true)</p>
        <table><thead><tr><th>Manufacturer</th><th>Location</th><th>Shampoo cost</th><th>Shampoo MOQ</th><th>Conditioner cost</th><th>Conditioner MOQ</th><th>Serum cost</th><th>Serum MOQ</th><th>Sample kit</th><th>Onboarding</th><th>Lead time</th><th>Shipping terms</th></tr></thead><tbody>
          {MANUFACTURER_COMPARISON.rows.map((r) => (
            <tr key={r.lab}><td>{r.lab}</td><td>{r.location}</td><td>{r.shampoo_cost}</td><td>{r.shampoo_moq}</td><td>{r.conditioner_cost}</td><td>{r.conditioner_moq}</td><td>{r.serum_cost}</td><td>{r.serum_moq}</td><td>{r.sample_kit}</td><td>{r.onboarding}</td><td>{r.lead_time}</td><td>{r.shipping_terms}</td></tr>
          ))}
        </tbody></table>
        <p>Worked example: Cosmlab $2.25 / BeautyForm $1.90 / EcoChem $2.80 shampoo cost. These are example figures only, not real quotes.</p>
      </div>
    </div></section>
  );
}
