import React from "react";
import { IssueRecord } from "@/domain/issue-types";
import { CategoryBadge, PriorityBadge, ConfidenceBadge } from "./status-badge";
import { AlertTriangle, Tag, Sparkles, User, Calendar } from "lucide-react";

interface IssueCardProps {
  issue: IssueRecord;
}

export function IssueCard({ issue }: IssueCardProps) {
  const primaryDuplicate = issue.duplicateCandidates[0];

  return (
    <article
      className="p-5 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-slate-700/80 transition-all flex flex-col gap-4 shadow-sm"
      data-testid={`issue-card-${issue.number}`}
      aria-labelledby={`issue-title-${issue.number}`}
    >
      {/* Top Header: Issue Number, Title, Metadata */}
      <div>
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-1.5">
          <span className="font-mono font-semibold text-slate-300">
            #{issue.number}
          </span>
          <span>•</span>
          <span className="inline-flex items-center gap-1">
            <User className="w-3 h-3 text-slate-500" aria-hidden="true" />
            <span className="text-slate-300 font-medium">
              @{issue.author.login}
            </span>
          </span>
          <span>•</span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="w-3 h-3 text-slate-500" aria-hidden="true" />
            <span>opened {issue.createdAt}</span>
          </span>
          {issue.updatedAt && (
            <>
              <span>•</span>
              <span className="text-slate-500">updated {issue.updatedAt}</span>
            </>
          )}
        </div>

        <h3
          id={`issue-title-${issue.number}`}
          className="text-base font-semibold text-white tracking-tight leading-snug"
        >
          {issue.title}
        </h3>

        <p className="text-sm text-slate-400 mt-1 line-clamp-2 leading-relaxed">
          {issue.bodyPreview}
        </p>
      </div>

      {/* Existing Labels */}
      {issue.existingLabels.length > 0 && (
        <div
          className="flex flex-wrap items-center gap-1.5"
          aria-label="Existing labels"
        >
          <span className="text-[11px] text-slate-500 font-medium uppercase tracking-wider mr-1">
            Labels:
          </span>
          {issue.existingLabels.map((lbl) => (
            <span
              key={lbl.id}
              className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium border"
              style={{
                backgroundColor: `${lbl.color}15`,
                color: lbl.color,
                borderColor: `${lbl.color}40`,
              }}
            >
              {lbl.name}
            </span>
          ))}
        </div>
      )}

      {/* AI Triage Suggestion Box */}
      <div className="rounded-lg border border-indigo-900/40 bg-indigo-950/20 p-3.5 flex flex-col gap-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-400" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
              Suggested triage
            </span>
          </div>
          <ConfidenceBadge confidence={issue.suggestion.confidence} />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <CategoryBadge category={issue.suggestion.category} />
          <PriorityBadge priority={issue.suggestion.priority} />

          {issue.suggestion.suggestedLabels.length > 0 && (
            <div className="flex items-center gap-1 ml-auto">
              <Tag className="w-3 h-3 text-slate-400" aria-hidden="true" />
              <span className="text-xs text-slate-400">Add:</span>
              <div className="flex flex-wrap gap-1">
                {issue.suggestion.suggestedLabels.map((tag) => (
                  <span
                    key={tag}
                    className="px-1.5 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-indigo-300 border border-indigo-800/40"
                  >
                    +{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <p className="text-xs text-slate-300 italic">
          {issue.suggestion.summary}
        </p>
      </div>

      {/* Duplicate Candidate Banner if applicable */}
      {primaryDuplicate && (
        <div
          className={`p-3 rounded-lg border text-xs flex items-start gap-2.5 ${
            primaryDuplicate.verdict === "duplicate"
              ? "border-amber-700/60 bg-amber-950/30 text-amber-200"
              : "border-slate-700 bg-slate-800/40 text-slate-300"
          }`}
          data-testid="duplicate-banner"
        >
          <AlertTriangle
            className={`w-4 h-4 shrink-0 mt-0.5 ${
              primaryDuplicate.verdict === "duplicate"
                ? "text-amber-400"
                : "text-slate-400"
            }`}
            aria-hidden="true"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2 font-semibold">
              <span>
                {primaryDuplicate.verdict === "duplicate"
                  ? "Likely Duplicate Detected"
                  : "Related Issue Identified"}
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-900/40 border border-amber-700/40">
                {primaryDuplicate.similarityScore}% match
              </span>
            </div>
            <p className="mt-0.5 text-xs opacity-90">
              {primaryDuplicate.explanation}
            </p>
          </div>
        </div>
      )}

      {/* Footer / Disabled Action Button */}
      <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between">
        <span className="text-[11px] text-slate-500">
          Approval required before applying repository labels
        </span>
        <button
          type="button"
          disabled
          aria-disabled="true"
          title="Reviewing and applying suggestions is disabled in static preview"
          className="inline-flex items-center px-3 py-1.5 rounded-md bg-slate-800/60 border border-slate-700 text-xs font-medium text-slate-400 cursor-not-allowed opacity-80"
          data-testid={`review-button-${issue.number}`}
        >
          Review suggestion
          <span className="text-[10px] text-slate-500 ml-1.5">(demo only)</span>
        </button>
      </div>
    </article>
  );
}
