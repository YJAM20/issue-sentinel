import { IssueCategory, IssuePriority } from "@/domain/issue-types";

export function formatConfidence(score: number): string {
  return `${Math.round(score)}%`;
}

export function getCategoryBadgeClasses(category: IssueCategory): {
  badge: string;
  dot: string;
} {
  switch (category) {
    case "bug":
      return {
        badge: "bg-rose-950/60 text-rose-300 border-rose-800/60",
        dot: "bg-rose-500",
      };
    case "feature":
      return {
        badge: "bg-blue-950/60 text-blue-300 border-blue-800/60",
        dot: "bg-blue-500",
      };
    case "question":
      return {
        badge: "bg-purple-950/60 text-purple-300 border-purple-800/60",
        dot: "bg-purple-500",
      };
    case "documentation":
      return {
        badge: "bg-teal-950/60 text-teal-300 border-teal-800/60",
        dot: "bg-teal-500",
      };
    case "maintenance":
      return {
        badge: "bg-amber-950/60 text-amber-300 border-amber-800/60",
        dot: "bg-amber-500",
      };
    default:
      return {
        badge: "bg-neutral-800 text-neutral-300 border-neutral-700",
        dot: "bg-neutral-500",
      };
  }
}

export function getPriorityBadgeClasses(priority: IssuePriority): {
  badge: string;
  label: string;
} {
  switch (priority) {
    case "high":
      return {
        badge: "bg-red-500/20 text-red-400 border-red-500/40 font-semibold",
        label: "High Priority",
      };
    case "medium":
      return {
        badge: "bg-amber-500/20 text-amber-300 border-amber-500/40 font-medium",
        label: "Medium Priority",
      };
    case "low":
      return {
        badge: "bg-slate-800 text-slate-300 border-slate-700 font-normal",
        label: "Low Priority",
      };
  }
}
