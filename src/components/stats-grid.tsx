import React from "react";
import { StatCard } from "./stat-card";
import { AlertCircle, Clock, Copy, Flame } from "lucide-react";

interface StatsGridProps {
  stats: {
    openIssues: number;
    needsTriage: number;
    likelyDuplicates: number;
    highPriority: number;
  };
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 my-6">
      <StatCard
        label="Open issues"
        value={stats.openIssues}
        helperText="Across repository default branch"
        icon={
          <AlertCircle className="w-4 h-4 text-slate-400" aria-hidden="true" />
        }
        accentColor="neutral"
      />
      <StatCard
        label="Needs triage"
        value={stats.needsTriage}
        helperText="Pending human label approval"
        icon={<Clock className="w-4 h-4 text-amber-400" aria-hidden="true" />}
        accentColor="amber"
      />
      <StatCard
        label="Likely duplicates"
        value={stats.likelyDuplicates}
        helperText="High semantic similarity candidates"
        icon={<Copy className="w-4 h-4 text-indigo-400" aria-hidden="true" />}
        accentColor="indigo"
      />
      <StatCard
        label="High priority"
        value={stats.highPriority}
        helperText="Immediate blocker or critical flaw"
        icon={<Flame className="w-4 h-4 text-rose-400" aria-hidden="true" />}
        accentColor="rose"
      />
    </div>
  );
}
