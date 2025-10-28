export type Segment = "Council" | "Enterprise";
export type SizeBand = "Small" | "Medium" | "Large";
export type PayCycle = 52 | 26 | 24 | 12;

export interface Inputs {
  segment: Segment;
  size: SizeBand;
  employees: number;
  payCycle: PayCycle;
  adminHoursPerCycle: number;
  reworkPct: number;      // e.g. 0.08 for 8%
  hourlyRate: number;     // fully loaded $/hr
}

export interface Results {
  hoursSavedPerCycle: number;
  costImpactPerCycle: number;
  automationPct: number;        // 0–1
  manualPct: number;            // 0–1
  complianceEfficiency: number; // 0–1
  maturityLevel: 1|2|3|4;
}

export interface Benchmarks {
  automationMedian: number;
  automationTopQuartile: number;
  manualMedian: number;
  manualTopQuartile: number;
  complianceMedian: number;
  complianceTopQuartile: number;
}
