// src/components/InsightsCard.tsx
import { Inputs, Results } from "@/types";

export default function InsightsCard({
  inputs,
  results,
}: {
  inputs: Inputs;
  results: Results;
}) {
  return (
    <section className="bg-white rounded-2xl shadow p-5">
      <h2 className="text-lg font-medium mb-3">4) Prescriptive Insights</h2>
      <ul className="space-y-3 text-sm">
        <li className="p-3 rounded-xl bg-amber-50 border border-amber-200">
          <span className="font-medium">Automate onboarding → payroll sync</span>
          <br />
          Eliminates rekeying for new starters and rate changes. Est. save 2–3 hrs/cycle.
        </li>
        <li className="p-3 rounded-xl bg-sky-50 border border-sky-200">
          <span className="font-medium">Enable leave & roster integration</span>
          <br />
          Reduces compliance defects; improves audit readiness. Est. save 1–2 hrs/cycle.
        </li>
        <li className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
          <span className="font-medium">Auto-reconciliation & PAYE/KiwiSaver checks</span>
          <br />
          Cuts back rework by ~20% over 3–6 months.
        </li>
      </ul>
    </section>
  );
}
