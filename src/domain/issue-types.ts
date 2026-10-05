export type IssueCategory =
  "bug" | "feature" | "question" | "documentation" | "maintenance";

export type IssuePriority = "low" | "medium" | "high";

export interface IssueLabel {
  id: string;
  name: string;
  color: string;
  description?: string;
}

export interface IssueAuthor {
  login: string;
  avatarUrl?: string;
}

export interface IssueSuggestion {
  category: IssueCategory;
  priority: IssuePriority;
  suggestedLabels: string[];
  confidence: number; // percentage from 0 to 100
  summary: string;
}

export type DuplicateVerdict =
  "duplicate" | "related_not_duplicate" | "not_related";

export interface DuplicateCandidate {
  issueNumber: number;
  title: string;
  similarityScore: number; // percentage from 0 to 100
  verdict: DuplicateVerdict;
  explanation: string;
}

export interface IssueRecord {
  id: string;
  number: number;
  title: string;
  bodyPreview: string;
  author: IssueAuthor;
  createdAt: string;
  updatedAt?: string;
  existingLabels: IssueLabel[];
  suggestion: IssueSuggestion;
  duplicateCandidates: DuplicateCandidate[];
  status: "open" | "closed";
}
