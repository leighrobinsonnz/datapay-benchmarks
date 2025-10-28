// src/components/ExportCard.tsx
import { Inputs, Results, Benchmarks } from "@/types";

export default function ExportCard(_props: {
  inputs: Inputs;
  results: Results;
  benchmarks: Benchmarks;
  recommendations?: any;
}) {
  return (
    <section className="bg-white rounded-2xl shadow p-5">
      <h3 className="text-base font-medium">Export</h3>
      <p className="text-sm text-gray-600 mb-3">
        Create a branded PDF snapshot for the prospect.
      </p>
      <button className="px-4 py-2 rounded-xl bg-black text-white text-sm">
        Download Snapshot PDF
      </button>
    </section>
  );
}
