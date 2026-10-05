import React from "react";
import { ShieldAlert, RefreshCw, GitBranch } from "lucide-react";

export function DashboardHeader() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
              <ShieldAlert className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold text-white tracking-tight">
                  Issue Sentinel
                </h1>
                <span
                  className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-amber-500/10 text-amber-400 border border-amber-500/30"
                  data-testid="demo-data-badge"
                >
                  Demo data
                </span>
              </div>
              <p className="text-xs text-slate-400">
                AI-assisted GitHub issue triage
              </p>
            </div>
          </div>

          {/* Repository Selector & Sync Action (Demo Controls) */}
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <label htmlFor="repo-selector" className="sr-only">
                Target repository selector (demo only)
              </label>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-700/80 text-xs text-slate-300 shadow-sm cursor-not-allowed opacity-90">
                <GitBranch
                  className="w-3.5 h-3.5 text-slate-400"
                  aria-hidden="true"
                />
                <span className="font-mono text-slate-200" id="repo-selector">
                  acme/example-api
                </span>
                <span className="text-[10px] text-slate-500 bg-slate-800 px-1.5 py-0.5 rounded">
                  demo only
                </span>
              </div>
            </div>

            <button
              type="button"
              disabled
              aria-disabled="true"
              title="Issue synchronization is disabled in static demo preview"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-xs font-medium text-slate-500 cursor-not-allowed opacity-80"
              data-testid="sync-issues-button"
            >
              <RefreshCw
                className="w-3.5 h-3.5 text-slate-500"
                aria-hidden="true"
              />
              <span>Sync issues</span>
              <span className="sr-only">(disabled in demo)</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
