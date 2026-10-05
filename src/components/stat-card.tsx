import React, { ReactNode } from "react";

interface StatCardProps {
  label: string;
  value: number | string;
  helperText?: string;
  icon?: ReactNode;
  accentColor?: "neutral" | "amber" | "indigo" | "rose";
}

export function StatCard({
  label,
  value,
  helperText,
  icon,
  accentColor = "neutral",
}: StatCardProps) {
  const accentStyles = {
    neutral: "border-slate-800 bg-slate-900/60 text-slate-100",
    amber: "border-amber-900/40 bg-amber-950/20 text-amber-200",
    indigo: "border-indigo-900/40 bg-indigo-950/20 text-indigo-200",
    rose: "border-rose-900/40 bg-rose-950/20 text-rose-200",
  }[accentColor];

  return (
    <div
      className={`p-4 rounded-xl border backdrop-blur-sm transition-all ${accentStyles}`}
      data-testid={`stat-card-${label.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="flex items-center justify-between text-xs text-slate-400 font-medium mb-1">
        <span>{label}</span>
        {icon && <span className="opacity-80">{icon}</span>}
      </div>
      <div className="text-2xl font-bold tracking-tight text-white">
        {value}
      </div>
      {helperText && (
        <p className="text-[11px] text-slate-400 mt-1">{helperText}</p>
      )}
    </div>
  );
}
