# Issue Sentinel

> AI-assisted GitHub issue triage with duplicate detection and human-approved label changes.

Issue Sentinel is designed for GitHub repository maintainers to streamline incoming issue triaging, detect potential duplicates, estimate priority, and ensure label mutations only occur after human approval.

**Phase 1** is a static, frontend-only portfolio dashboard demonstrating domain modeling, responsive developer-tool UI, and strict client-side validation using realistic local mock data.

---

## Features (Phase 1)

- **Repository Overview:** High-level metrics for open issues, issues needing triage, duplicate candidates, and high-priority items.
- **Triage Suggestions:** AI-assisted classification previewing category (bug, feature, documentation, question, maintenance), priority (low, medium, high), confidence score, and suggested labels.
- **Duplicate Detection:** Inline identification of duplicate and related issues with similarity scores and rationale.
- **Triage Activity Feed:** Live activity trail demonstrating human-in-the-loop review workflow.
- **Developer Tool Aesthetic:** High-contrast dark theme with semantic badges and accessible labels.
- **Strict Verification:** TypeScript strict mode, Zod runtime schema validation, Vitest component test suites, ESLint, Prettier, and GitHub Actions CI.

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript (`strict: true`, `noImplicitAny: true`, `strictNullChecks: true`)
- **Styling:** Tailwind CSS
- **Validation:** Zod
- **Testing:** Vitest & React Testing Library
- **Icons:** Lucide React
- **CI:** GitHub Actions

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm (use `npm.cmd` on Windows PowerShell if execution policies apply)

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the static dashboard.

### Verification Commands

```bash
# Run all checks (format check, lint, typecheck, tests, build)
npm run check

# Individual commands
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run build
```

---

## Scope Boundary & Notice

This repository currently implements **Phase 1 (Static Preview)**:

- All data shown is local mock data (`acme/example-api`).
- No GitHub OAuth, GitHub Apps, personal access tokens, or Octokit calls are included.
- No database connections, vector databases, embeddings, or external AI APIs are connected.
- All mutate / review / sync buttons are non-functional demo controls.
