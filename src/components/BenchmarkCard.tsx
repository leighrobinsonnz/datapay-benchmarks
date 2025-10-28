// src/components/BenchmarkCard.tsx
import { Results, Benchmarks } from "@/types";
import Tooltip from "./Tooltip";

function Bar({
  label,
  value,
  median,
  top,
}: {
  label: string;
  value: number;
  median: number;
  top: number;
}) {
  const pct = Math.round(value * 100);
  const med = Math.round(median * 100);
  const tq = Math.round(top * 100);
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span className="flex items-center gap-2">
          {label}{" "}
          <Tooltip
            text={`Your ${label.toLowerCase()} vs sector median and top quartile.`}
          />
        </span>
        <span className="text-gray-500">{pct}%</span>
      </div>
      <div className="h-3 bg-gray-100 rounded-full">
        <div className="h-3 bg-blue-500 rounded-full" style={{ width: `${pct}%` }} />
      </div>
      <p className="text-xs text-gray-600 mt-1">
        Sector median: {med}% · Top quartile: {tq}%
      </p>
    </div>
  );
}

export default function BenchmarkCard({
  results,
  benchmarks,
}: {
  results: Results;
  benchmarks: Benchmarks;
}) {
  return (
    <section className="bg-white rounded-2xl shadow p-5">
      <h2 className="text-lg font-medium mb-3">3) How You Compare</h2>
      <Bar
        label="Automation Level"
        value={results.automationPct}
        median={benchmarks.automationMedian}
        top={benchmarks.automationTopQuartile}
      />
      <Bar
        label="Manual Data Handling"
        value={results.manualPct}
        median={benchmarks.manualMedian}
        top={benchmarks.manualTopQuartile}
      />
      <Bar
        label="Compliance Efficiency"
        value={results.complianceEfficiency}
        median={benchmarks.complianceMedian}
        top={benchmarks.complianceTopQuartile}
      />
    </section>
  );
}
