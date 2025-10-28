// src/components/ResultsCard.tsx
import { Inputs, Results } from "@/types";

export default function ResultsCard({
  inputs,
  results,
}: {
  inputs: Inputs;
  results: Results;
}) {
  return (
    <section className="bg-white rounded-2xl shadow p-5">
      <h2 className="text-lg font-medium mb-3">2) Results</h2>
      <div className="grid grid-cols-3 gap-3 text-center">
        <div className="p-3 rounded-xl bg-gray-50 border">
          <div className="text-xs text-gray-600">Hours back / cycle</div>
          <div className="text-lg font-semibold">
            {results.hoursSavedPerCycle.toFixed(1)}
          </div>
        </div>
        <div className="p-3 rounded-xl bg-gray-50 border">
          <div className="text-xs text-gray-600">Cost impact / cycle</div>
          <div className="text-lg font-semibold">
            ${results.costImpactPerCycle.toFixed(0)}
          </div>
        </div>
        <div className="p-3 rounded-xl bg-gray-50 border">
          <div className="text-xs text-gray-600">Maturity level</div>
          <div className="text-lg font-semibold">L{results.maturityLevel}</div>
        </div>
      </div>
    </section>
  );
}
