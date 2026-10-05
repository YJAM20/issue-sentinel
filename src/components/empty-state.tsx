import React from "react";
import { Inbox } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
}

export function EmptyState({
  title = "No issues to review",
  description = "Sync a repository to begin triage.",
}: EmptyStateProps) {
  return (
    <div
      className="p-10 rounded-xl border border-dashed border-slate-800 bg-slate-900/20 text-center flex flex-col items-center justify-center my-6"
      data-testid="empty-state"
    >
      <div className="w-12 h-12 rounded-full bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-400 mb-3">
        <Inbox className="w-6 h-6" aria-hidden="true" />
      </div>
      <h3 className="text-base font-semibold text-white mb-1">{title}</h3>
      <p className="text-xs text-slate-400 max-w-sm mb-4">{description}</p>
      <button
        type="button"
        disabled
        aria-disabled="true"
        className="px-3.5 py-1.5 rounded-lg bg-slate-800 text-xs font-medium text-slate-400 cursor-not-allowed border border-slate-700 opacity-70"
      >
        Sync repository (demo only)
      </button>
    </div>
  );
}
