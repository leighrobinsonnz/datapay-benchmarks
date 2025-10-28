// src/app/page.tsx
"use client";
import { useMemo, useState } from "react";
import InputCard from "@/components/InputCard";
import ResultsCard from "@/components/ResultsCard";
import BenchmarkCard from "@/components/BenchmarkCard";
import InsightsCard from "@/components/InsightsCard";
import ExportCard from "@/components/ExportCard";
import { Inputs, Results } from "@/types";
import { computeResults } from "@/lib/calc";
import { getBenchmarks } from "@/lib/benchmarks";

export default function Page() {
  const [inputs, setInputs] = useState<Inputs>({
    segment: "Council",
    size: "Medium",
    employees: 600,
    payCycle: 26,
    adminHoursPerCycle: 12,
    reworkPct: 0.08,
    hourlyRate: 80,
  });

  const results: Results = useMemo(() => computeResults(inputs), [inputs]);
  const benchmarks = useMemo(
    () => getBenchmarks(inputs.segment, inputs.size),
    [inputs]
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8 max-w-6xl mx-auto grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-1 space-y-6">
        <InputCard value={inputs} onChange={setInputs} />
      </div>
      <div className="lg:col-span-2 space-y-6">
        <ResultsCard inputs={inputs} results={results} />
        <BenchmarkCard results={results} benchmarks={benchmarks} />
        <InsightsCard inputs={inputs} results={results} />
        <ExportCard
          inputs={inputs}
          results={results}
          benchmarks={benchmarks}
        />
      </div>
    </div>
  );
}
