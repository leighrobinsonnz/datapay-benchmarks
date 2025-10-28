import { Inputs, Results } from "@/types";

export function computeResults(i: Inputs): Results {
  const automationPct = Math.max(0, Math.min(1, 1 - i.adminHoursPerCycle / 20));
  const manualPct = 1 - automationPct;
  const complianceEfficiency = Math.max(0.5, 1 - i.reworkPct);

  const hoursSavedPerCycle = Math.max(0, (automationPct * 10) - 2);
  const costImpactPerCycle = hoursSavedPerCycle * i.hourlyRate;

  const maturityLevel =
    automationPct < 0.35 ? 1 :
    automationPct < 0.65 ? 2 :
    automationPct < 0.85 ? 3 : 4;

  return {
    hoursSavedPerCycle,
    costImpactPerCycle,
    automationPct,
    manualPct,
    complianceEfficiency,
    maturityLevel
  };
}
