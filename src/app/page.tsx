import React from "react";
import { DashboardHeader } from "@/components/dashboard-header";
import { StatsGrid } from "@/components/stats-grid";
import { IssueList } from "@/components/issue-list";
import { TriageActivity } from "@/components/triage-activity";
import { MOCK_ISSUES, MOCK_REPOSITORY } from "@/mocks/issues";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#090d16] text-slate-100 selection:bg-indigo-500/30">
      {/* Top Navigation */}
      <DashboardHeader />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Repository Overview Header */}
        <section aria-labelledby="repo-overview-heading">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-2">
            <div>
              <h2
                id="repo-overview-heading"
                className="text-2xl font-bold tracking-tight text-white"
              >
                Repository overview
              </h2>
              <p className="text-sm text-slate-400 mt-0.5">
                Review open issues, inspect AI-assisted triage suggestions, and
                identify likely duplicates.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
              <span
                className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
                aria-hidden="true"
              />
              <span>Static demo engine active</span>
            </div>
          </div>

          {/* Metric Summary Cards */}
          <StatsGrid stats={MOCK_REPOSITORY.stats} />
        </section>

        {/* Dashboard Grid: Main Issues Feed + Right-side Activity Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-6">
          {/* Main Issue Feed (8 columns on desktop) */}
          <div className="lg:col-span-8">
            <IssueList issues={MOCK_ISSUES} />
          </div>

          {/* Right-side Triage Activity Panel (4 columns on desktop) */}
          <div className="lg:col-span-4 sticky top-20">
            <TriageActivity />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-900 bg-slate-950/60 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4">
          <p>
            Issue Sentinel • Phase 1 static portfolio preview • No external API
            connections or write operations enabled.
          </p>
        </div>
      </footer>
    </div>
  );
}
