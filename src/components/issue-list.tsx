import React from "react";
import { IssueRecord } from "@/domain/issue-types";
import { IssueCard } from "./issue-card";
import { Search, Filter, ArrowUpDown } from "lucide-react";

interface IssueListProps {
  issues: IssueRecord[];
}

export function IssueList({ issues }: IssueListProps) {
  return (
    <div className="space-y-4">
      {/* Filter / Search Bar Row */}
      <div className="p-3 rounded-xl border border-slate-800 bg-slate-900/40 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {/* Search input */}
        <div className="relative flex-1">
          <label htmlFor="issue-search" className="sr-only">
            Search issues
          </label>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
            <Search className="w-4 h-4" aria-hidden="true" />
          </div>
          <input
            id="issue-search"
            type="text"
            placeholder="Search issues"
            disabled
            aria-disabled="true"
            title="Search filtering is disabled in static demo preview"
            className="w-full pl-9 pr-24 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-400 placeholder-slate-500 cursor-not-allowed"
          />
          <span className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-[10px] text-slate-500 font-mono">
            demo only
          </span>
        </div>

        {/* Static Filter Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Category Filter */}
          <div className="relative">
            <label htmlFor="category-filter" className="sr-only">
              Category filter (demo only)
            </label>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-400 cursor-not-allowed">
              <Filter className="w-3 h-3 text-slate-500" aria-hidden="true" />
              <span id="category-filter">Category: All</span>
              <span className="text-[10px] text-slate-600">(static)</span>
            </div>
          </div>

          {/* Priority Filter */}
          <div className="relative">
            <label htmlFor="priority-filter" className="sr-only">
              Priority filter (demo only)
            </label>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-400 cursor-not-allowed">
              <span id="priority-filter">Priority: All</span>
              <span className="text-[10px] text-slate-600">(static)</span>
            </div>
          </div>

          {/* Sort Filter */}
          <div className="relative">
            <label htmlFor="sort-filter" className="sr-only">
              Sort issues (demo only)
            </label>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-400 cursor-not-allowed">
              <ArrowUpDown
                className="w-3 h-3 text-slate-500"
                aria-hidden="true"
              />
              <span id="sort-filter">Sort: Newest</span>
              <span className="text-[10px] text-slate-600">(static)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Issues Stack */}
      <div className="space-y-3" role="feed" aria-label="Mock issue feed">
        {issues.map((issue) => (
          <IssueCard key={issue.id} issue={issue} />
        ))}
      </div>
    </div>
  );
}
