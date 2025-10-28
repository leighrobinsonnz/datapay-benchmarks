// src/lib/benchmarks.ts
import table from "@/data/benchmarks.json";
import type { Benchmarks, Segment, SizeBand } from "@/types";

/**
 * Look up benchmark values for a given segment (Council/Enterprise)
 * and size band (Small/Medium/Large).
 */
export function getBenchmarks(segment: Segment, size: SizeBand): Benchmarks {
  const row = (table as any)[segment]?.[size];
  if (!row) {
    // Safe fallback if the JSON is missing a key
    return {
      automationMedian: 0.7,
      automationTopQuartile: 0.9,
      manualMedian: 0.3,
      manualTopQuartile: 0.1,
      complianceMedian: 0.75,
      complianceTopQuartile: 0.95,
    };
  }

  return {
    automationMedian: row.automationMedian,
    automationTopQuartile: row.automationTopQuartile,
    manualMedian: row.manualMedian,
    manualTopQuartile: row.manualTopQuartile,
    complianceMedian: row.complianceMedian,
    complianceTopQuartile: row.complianceTopQuartile,
  };
}
