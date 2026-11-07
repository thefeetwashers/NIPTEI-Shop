export default function TrackerPage() {
  const steps = [
    ["1. Quote requested", "In progress", "R&D Formulation Inquiry sent to Pravada (info@pravada.com), Nov 7, 2026, for the Scalp-Resurfacing & Growth Serum."],
    ["2. Real quote received", "Not started", "No quote received yet."],
    ["3. Sample ordered", "Not started", ""],
    ["4. Sample tested on the owner’s own hair", "Not started", ""],
    ["5. Formula safety review", "Not started", "Qualified professional review required."],
    ["6. Real price set", "Not started", "No price until a real quote supports it."],
    ["7. Product live", "Not started", "Hero 3 first, then the Serum."],
  ];
  return (
    <section><div className="container">
      <h1>Dashboard — First Real Product Tracker</h1>
      <p>7 honest steps from quote request to live for sale. Nothing is auto-completed — a step only changes when the owner saves it.</p>
      <table><thead><tr><th>Step</th><th>Status</th><th>Notes</th></tr></thead><tbody>{steps.map(([s, st, n]) => <tr key={s}><td>{s}</td><td>{st}</td><td>{n}</td></tr>)}</tbody></table>
      <p>Manufacturer Comparison Tracker: labelled worked example until the owner saves real quotes. R&amp;D inquiry log: 1 sent (Pravada), awaiting reply.</p>
    </div></section>
  );
}
