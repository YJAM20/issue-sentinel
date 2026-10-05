import React from "react";
import { IssueCategory, IssuePriority } from "@/domain/issue-types";
import {
  getCategoryBadgeClasses,
  getPriorityBadgeClasses,
  formatConfidence,
} from "@/lib/formatters";

interface CategoryBadgeProps {
  category: IssueCategory;
  className?: string;
}

export function CategoryBadge({
  category,
  className = "",
}: CategoryBadgeProps) {
  const { badge, dot } = getCategoryBadgeClasses(category);
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border capitalize ${badge} ${className}`}
      data-testid={`category-badge-${category}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dot}`} aria-hidden="true" />
      {category}
    </span>
  );
}

interface PriorityBadgeProps {
  priority: IssuePriority;
  className?: string;
}

export function PriorityBadge({
  priority,
  className = "",
}: PriorityBadgeProps) {
  const { badge, label } = getPriorityBadgeClasses(priority);
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-xs border ${badge} ${className}`}
      data-testid={`priority-badge-${priority}`}
    >
      {label}
    </span>
  );
}

interface ConfidenceBadgeProps {
  confidence: number;
}

export function ConfidenceBadge({ confidence }: ConfidenceBadgeProps) {
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono bg-sky-950/70 text-sky-300 border border-sky-800/60"
      title="Triage confidence score"
      data-testid="confidence-badge"
    >
      {formatConfidence(confidence)} confidence
    </span>
  );
}
