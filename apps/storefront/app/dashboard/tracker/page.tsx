import { LAUNCH_TRACKER } from "@/lib/artifact-data";

export default function TrackerPage() {
  return (
    <section><div className="container">
      <h1>Dashboard — First Real Product Tracker</h1>
      <p>7 honest steps from quote request to live for sale. Nothing is auto-completed — a step only changes when the owner saves it.</p>
      {LAUNCH_TRACKER.map((group) => (
        <div key={group.key}>
          <h2>{group.label}</h2>
          <table><thead><tr><th>Step</th><th>Status</th><th>Notes</th></tr></thead><tbody>{group.steps.map((s) => <tr key={s.label}><td>{s.label}</td><td>{s.status === "not_started" ? "Not started" : s.status}</td><td>{s.notes}</td></tr>)}</tbody></table>
        </div>
      ))}
      <p>Manufacturer Comparison Tracker: labelled worked example until the owner saves real quotes. R&amp;D inquiry log: no entries yet.</p>
    </div></section>
  );
}
