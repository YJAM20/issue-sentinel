import { z } from "zod";

export const IssueCategorySchema = z.enum([
  "bug",
  "feature",
  "question",
  "documentation",
  "maintenance",
]);

export const IssuePrioritySchema = z.enum(["low", "medium", "high"]);

export const IssueLabelSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  color: z.string().min(1),
  description: z.string().optional(),
});

export const IssueAuthorSchema = z.object({
  login: z.string().min(1),
  avatarUrl: z.string().optional(),
});

export const IssueSuggestionSchema = z.object({
  category: IssueCategorySchema,
  priority: IssuePrioritySchema,
  suggestedLabels: z.array(z.string()),
  confidence: z.number().min(0).max(100),
  summary: z.string().min(1),
});

export const DuplicateVerdictSchema = z.enum([
  "duplicate",
  "related_not_duplicate",
  "not_related",
]);

export const DuplicateCandidateSchema = z.object({
  issueNumber: z.number().int().positive(),
  title: z.string().min(1),
  similarityScore: z.number().min(0).max(100),
  verdict: DuplicateVerdictSchema,
  explanation: z.string().min(1),
});

export const IssueRecordSchema = z.object({
  id: z.string().min(1),
  number: z.number().int().positive(),
  title: z.string().min(1),
  bodyPreview: z.string(),
  author: IssueAuthorSchema,
  createdAt: z.string(),
  updatedAt: z.string().optional(),
  existingLabels: z.array(IssueLabelSchema),
  suggestion: IssueSuggestionSchema,
  duplicateCandidates: z.array(DuplicateCandidateSchema),
  status: z.enum(["open", "closed"]),
});

export type IssueRecordInput = z.infer<typeof IssueRecordSchema>;
