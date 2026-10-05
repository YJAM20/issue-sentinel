import { describe, it, expect } from "vitest";
import {
  IssueRecordSchema,
  IssueCategorySchema,
  IssuePrioritySchema,
  IssueSuggestionSchema,
} from "@/domain/issue-schema";
import { MOCK_ISSUES } from "@/mocks/issues";

describe("Domain Schema Validation", () => {
  it("validates that all mock issues satisfy the IssueRecordSchema", () => {
    expect(MOCK_ISSUES.length).toBeGreaterThanOrEqual(8);
    for (const issue of MOCK_ISSUES) {
      const parsed = IssueRecordSchema.safeParse(issue);
      expect(parsed.success).toBe(true);
    }
  });

  it("accepts valid categories and rejects invalid category values", () => {
    const validCategories = [
      "bug",
      "feature",
      "question",
      "documentation",
      "maintenance",
    ];
    for (const cat of validCategories) {
      expect(IssueCategorySchema.safeParse(cat).success).toBe(true);
    }

    const invalidCategories = [
      "critical-bug",
      "enhancement-v2",
      "unknown",
      "",
      123,
    ];
    for (const invalid of invalidCategories) {
      expect(IssueCategorySchema.safeParse(invalid).success).toBe(false);
    }
  });

  it("accepts valid priorities and rejects invalid priority values", () => {
    const validPriorities = ["low", "medium", "high"];
    for (const prio of validPriorities) {
      expect(IssuePrioritySchema.safeParse(prio).success).toBe(true);
    }

    const invalidPriorities = ["urgent", "p0", "none", "", 99];
    for (const invalid of invalidPriorities) {
      expect(IssuePrioritySchema.safeParse(invalid).success).toBe(false);
    }
  });

  it("validates confidence bounds in suggestion schema", () => {
    const validSuggestion = {
      category: "bug" as const,
      priority: "high" as const,
      suggestedLabels: ["bug"],
      confidence: 85,
      summary: "Valid suggestion summary",
    };
    expect(IssueSuggestionSchema.safeParse(validSuggestion).success).toBe(true);

    const negativeConfidence = { ...validSuggestion, confidence: -5 };
    expect(IssueSuggestionSchema.safeParse(negativeConfidence).success).toBe(
      false
    );

    const overConfidence = { ...validSuggestion, confidence: 105 };
    expect(IssueSuggestionSchema.safeParse(overConfidence).success).toBe(false);
  });
});
