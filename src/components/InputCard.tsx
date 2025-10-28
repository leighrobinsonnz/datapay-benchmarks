"use client";
import Tooltip from "./Tooltip";
import { Inputs, Segment, SizeBand, PayCycle } from "@/types";

export default function InputCard({
  value,
  onChange,
}: {
  value: Inputs;
  onChange: (v: Inputs) => void;
}) {
  const set = <K extends keyof Inputs>(k: K, v: Inputs[K]) =>
    onChange({ ...value, [k]: v });

  return (
    <section className="bg-white rounded-2xl shadow p-5 space-y-3">
      <h2 className="text-lg font-medium">1) Assessment Inputs</h2>

      <label className="text-sm flex items-center gap-2">
        Segment <Tooltip text="Choose Council or Enterprise" />
      </label>
      <select
        className="w-full border rounded p-2"
        value={value.segment}
        onChange={(e) => set("segment", e.target.value as Segment)}
      >
        <option>Council</option>
        <option>Enterprise</option>
      </select>

      <label className="text-sm flex items-center gap-2">
        Size band <Tooltip text="Rough employee band" />
      </label>
      <select
        className="w-full border rounded p-2"
        value={value.size}
        onChange={(e) => set("size", e.target.value as SizeBand)}
      >
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
      </select>

      <label className="text-sm flex items-center gap-2">
        Employees <Tooltip text="Total headcount paid by payroll" />
      </label>
      <input
        type="number"
        className="w-full border rounded p-2"
        value={value.employees}
        onChange={(e) => set("employees", Number(e.target.value))}
      />

      <label className="text-sm flex items-center gap-2">
        Pay cycle <Tooltip text="52 weekly, 26 fortnightly, 24 semi-monthly, 12 monthly" />
      </label>
      <select
        className="w-full border rounded p-2"
        value={value.payCycle}
        onChange={(e) => set("payCycle", Number(e.target.value) as PayCycle)}
      >
        <option value={52}>52 (Weekly)</option>
        <option value={26}>26 (Fortnightly)</option>
        <option value={24}>24 (Semi-monthly)</option>
        <option value={12}>12 (Monthly)</option>
      </select>

      <label className="text-sm flex items-center gap-2">
        Admin hours / cycle <Tooltip text="Hands-on time to prepare/run payroll" />
      </label>
      <input
        type="number"
        className="w-full border rounded p-2"
        value={value.adminHoursPerCycle}
        onChange={(e) => set("adminHoursPerCycle", Number(e.target.value))}
      />

      <label className="text-sm flex items-center gap-2">
        Rework % <Tooltip text="Percent of cycles with corrections/rework (e.g. 8 for 8%)" />
      </label>
      <input
        type="number"
        className="w-full border rounded p-2"
        value={value.reworkPct * 100}
        onChange={(e) => set("reworkPct", Number(e.target.value) / 100)}
      />

      <label className="text-sm flex items-center gap-2">
        Hourly fully-loaded rate ($) <Tooltip text="Estimated blended rate for payroll admin" />
      </label>
      <input
        type="number"
        className="w-full border rounded p-2"
        value={value.hourlyRate}
        onChange={(e) => set("hourlyRate", Number(e.target.value))}
      />
    </section>
  );
}
