import { IssueRecord, IssueLabel } from "@/domain/issue-types";

export const AVAILABLE_REPOSITORY_LABELS: IssueLabel[] = [
  {
    id: "lbl-1",
    name: "bug",
    color: "#f87171",
    description: "Something is not working",
  },
  {
    id: "lbl-2",
    name: "feature",
    color: "#60a5fa",
    description: "New feature or enhancement request",
  },
  {
    id: "lbl-3",
    name: "documentation",
    color: "#2dd4bf",
    description: "Improvements or additions to documentation",
  },
  {
    id: "lbl-4",
    name: "maintenance",
    color: "#fbbf24",
    description: "Refactoring, dependencies, and internal chores",
  },
  {
    id: "lbl-5",
    name: "question",
    color: "#c084fc",
    description: "Further information is requested",
  },
  {
    id: "lbl-6",
    name: "authentication",
    color: "#f472b6",
    description: "Relates to login, sessions, or tokens",
  },
  {
    id: "lbl-7",
    name: "api",
    color: "#38bdf8",
    description: "Endpoints, schemas, and payload validation",
  },
  {
    id: "lbl-8",
    name: "performance",
    color: "#f97316",
    description: "Latency, throughput, and memory efficiency",
  },
  {
    id: "lbl-9",
    name: "security",
    color: "#ef4444",
    description: "Security patches and vulnerability mitigation",
  },
];

export const MOCK_REPOSITORY = {
  name: "acme/example-api",
  defaultBranch: "main",
  stats: {
    openIssues: 24,
    needsTriage: 8,
    likelyDuplicates: 3,
    highPriority: 4,
  },
};

export const MOCK_ISSUES: IssueRecord[] = [
  {
    id: "iss-42",
    number: 42,
    title: "Session token rejected after password reset in OAuth flow",
    bodyPreview:
      "When a user resets their password and returns to complete the OAuth handshake, the JWT bearer validation immediately responds with HTTP 401 Unauthorized instead of renewing the session token.",
    author: {
      login: "alex-codes",
    },
    createdAt: "2 hours ago",
    updatedAt: "30 minutes ago",
    status: "open",
    existingLabels: [{ id: "lbl-1", name: "bug", color: "#f87171" }],
    suggestion: {
      category: "bug",
      priority: "high",
      suggestedLabels: ["bug", "authentication", "security"],
      confidence: 94,
      summary:
        "Demo analysis indicates an invalidation race condition during OAuth token refresh.",
    },
    duplicateCandidates: [
      {
        issueNumber: 17,
        title: "Login failure loop after credentials reset",
        similarityScore: 91,
        verdict: "duplicate",
        explanation:
          "Similar to #17: both describe login failure after a password reset.",
      },
    ],
  },
  {
    id: "iss-17",
    number: 17,
    title: "Login failure loop after credentials reset",
    bodyPreview:
      "Users report that resetting their account password triggers an infinite redirect loop on /login with repeated 401 Unauthorized statuses in telemetry.",
    author: {
      login: "morgan-dev",
    },
    createdAt: "5 hours ago",
    updatedAt: "1 hour ago",
    status: "open",
    existingLabels: [
      { id: "lbl-1", name: "bug", color: "#f87171" },
      { id: "lbl-6", name: "authentication", color: "#f472b6" },
    ],
    suggestion: {
      category: "bug",
      priority: "high",
      suggestedLabels: ["bug", "authentication"],
      confidence: 89,
      summary:
        "Demo analysis identifies shared root cause with #42 regarding post-reset credentials refresh.",
    },
    duplicateCandidates: [
      {
        issueNumber: 42,
        title: "Session token rejected after password reset in OAuth flow",
        similarityScore: 91,
        verdict: "duplicate",
        explanation:
          "Similar to #42: both describe login failure after a password reset.",
      },
    ],
  },
  {
    id: "iss-19",
    number: 19,
    title: "Connection pool exhaustion under sustained spike load",
    bodyPreview:
      "Under 1,500 RPS sustained burst traffic, the connection pool leaks idle sockets until new HTTP requests receive a connection timeout after 5000ms.",
    author: {
      login: "jordan-ops",
    },
    createdAt: "1 day ago",
    updatedAt: "4 hours ago",
    status: "open",
    existingLabels: [{ id: "lbl-8", name: "performance", color: "#f97316" }],
    suggestion: {
      category: "bug",
      priority: "high",
      suggestedLabels: ["bug", "performance"],
      confidence: 96,
      summary:
        "Demo analysis suggests high severity due to cascading service unavailability under load.",
    },
    duplicateCandidates: [],
  },
  {
    id: "iss-51",
    number: 51,
    title: "Strict validation schema check for billing webhook callbacks",
    bodyPreview:
      "Unrecognized metadata attributes in subscription webhook payloads cause unhandled payload rejections and payment processing delays.",
    author: {
      login: "taylor-sec",
    },
    createdAt: "1 day ago",
    updatedAt: "6 hours ago",
    status: "open",
    existingLabels: [{ id: "lbl-7", name: "api", color: "#38bdf8" }],
    suggestion: {
      category: "bug",
      priority: "high",
      suggestedLabels: ["bug", "api", "security"],
      confidence: 88,
      summary:
        "Demo analysis recommends high triage priority to prevent lost billing transactions.",
    },
    duplicateCandidates: [],
  },
  {
    id: "iss-38",
    number: 38,
    title: "Update OpenAPI specifications for v2 batch query endpoints",
    bodyPreview:
      "The public developer documentation does not accurately describe the query parameters for pagination on the /v2/records endpoint.",
    author: {
      login: "dev-sentinel",
    },
    createdAt: "2 days ago",
    status: "open",
    existingLabels: [{ id: "lbl-3", name: "documentation", color: "#2dd4bf" }],
    suggestion: {
      category: "documentation",
      priority: "low",
      suggestedLabels: ["documentation", "api"],
      confidence: 92,
      summary:
        "Suggested triage: documentation discrepancy in API schema references.",
    },
    duplicateCandidates: [],
  },
  {
    id: "iss-35",
    number: 35,
    title: "Add HMAC-SHA256 signature verification helper for webhooks",
    bodyPreview:
      "Provide an official SDK utility to verify the X-Sentinel-Signature header against the configured webhook secret to prevent spoofing.",
    author: {
      login: "cloud-builder",
    },
    createdAt: "3 days ago",
    status: "open",
    existingLabels: [{ id: "lbl-2", name: "feature", color: "#60a5fa" }],
    suggestion: {
      category: "feature",
      priority: "medium",
      suggestedLabels: ["feature", "security"],
      confidence: 85,
      summary:
        "Suggested triage: ergonomic helper request for inbound webhook verification.",
    },
    duplicateCandidates: [],
  },
  {
    id: "iss-29",
    number: 29,
    title: "How to interpret X-RateLimit-Reset timestamp in UTC?",
    bodyPreview:
      "Is the timestamp in epoch milliseconds or unix seconds? We are seeing intermittent 429 retries triggered slightly earlier than expected.",
    author: {
      login: "sam-qa",
    },
    createdAt: "4 days ago",
    status: "open",
    existingLabels: [{ id: "lbl-5", name: "question", color: "#c084fc" }],
    suggestion: {
      category: "question",
      priority: "low",
      suggestedLabels: ["question", "api"],
      confidence: 90,
      summary:
        "Suggested triage: developer integration clarification regarding unix epoch format.",
    },
    duplicateCandidates: [
      {
        issueNumber: 11,
        title: "Rate limit window calculation clarifies epoch format",
        similarityScore: 78,
        verdict: "related_not_duplicate",
        explanation:
          "Related to #11: discusses rate limit headers but asks about client parsing rather than server limits.",
      },
    ],
  },
  {
    id: "iss-24",
    number: 24,
    title: "Upgrade Postgres connection driver to v3.4.0",
    bodyPreview:
      "The current driver version has a deprecation notice for legacy connection string pooling parameters. Upgrade to prevent future breaking changes.",
    author: {
      login: "jordan-ops",
    },
    createdAt: "5 days ago",
    status: "open",
    existingLabels: [{ id: "lbl-4", name: "maintenance", color: "#fbbf24" }],
    suggestion: {
      category: "maintenance",
      priority: "medium",
      suggestedLabels: ["maintenance"],
      confidence: 93,
      summary:
        "Suggested triage: standard dependency hygiene and maintenance task.",
    },
    duplicateCandidates: [],
  },
  {
    id: "iss-12",
    number: 12,
    title: "Support batch status querying for background processing jobs",
    bodyPreview:
      "Allow clients to query up to 50 job IDs in a single POST request to /v1/jobs/batch-status instead of polling each job individually.",
    author: {
      login: "cloud-builder",
    },
    createdAt: "1 week ago",
    status: "open",
    existingLabels: [{ id: "lbl-2", name: "feature", color: "#60a5fa" }],
    suggestion: {
      category: "feature",
      priority: "low",
      suggestedLabels: ["feature", "api"],
      confidence: 87,
      summary:
        "Suggested triage: throughput enhancement for job status polling.",
    },
    duplicateCandidates: [],
  },
];
