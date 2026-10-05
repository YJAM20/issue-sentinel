import React from "react";

export function LoadingSkeleton() {
  return (
    <div
      className="space-y-4 animate-pulse"
      role="status"
      aria-label="Loading issue data"
      data-testid="loading-skeleton"
    >
      <div className="h-8 bg-slate-800/60 rounded-lg w-1/3 mb-2" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="h-24 bg-slate-900/60 border border-slate-800 rounded-xl p-4"
          >
            <div className="h-3 bg-slate-800 rounded w-1/2 mb-3" />
            <div className="h-7 bg-slate-800 rounded w-1/3" />
          </div>
        ))}
      </div>
      <div className="space-y-3 mt-6">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="h-36 bg-slate-900/40 border border-slate-800 rounded-xl p-5"
          >
            <div className="h-4 bg-slate-800 rounded w-1/4 mb-3" />
            <div className="h-5 bg-slate-800 rounded w-3/4 mb-2" />
            <div className="h-4 bg-slate-800 rounded w-full mb-4" />
            <div className="h-10 bg-slate-800/50 rounded" />
          </div>
        ))}
      </div>
      <span className="sr-only">Loading issue triage contents...</span>
    </div>
  );
}
