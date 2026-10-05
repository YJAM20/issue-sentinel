import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import DashboardPage from "@/app/page";
import { EmptyState } from "@/components/empty-state";
import { ErrorState } from "@/components/error-state";
import { LoadingSkeleton } from "@/components/loading-skeleton";

describe("Issue Sentinel Dashboard Components", () => {
  it("renders product title and tagline in dashboard header", () => {
    render(<DashboardPage />);
    expect(
      screen.getByRole("heading", { level: 1, name: /issue sentinel/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/AI-assisted GitHub issue triage/i)
    ).toBeInTheDocument();
  });

  it("renders all four stat cards with required numbers and labels", () => {
    render(<DashboardPage />);
    expect(screen.getByTestId("stat-card-open-issues")).toBeInTheDocument();
    expect(screen.getByTestId("stat-card-open-issues")).toHaveTextContent("24");

    expect(screen.getByTestId("stat-card-needs-triage")).toBeInTheDocument();
    expect(screen.getByTestId("stat-card-needs-triage")).toHaveTextContent("8");

    expect(
      screen.getByTestId("stat-card-likely-duplicates")
    ).toBeInTheDocument();
    expect(screen.getByTestId("stat-card-likely-duplicates")).toHaveTextContent(
      "3"
    );

    expect(screen.getByTestId("stat-card-high-priority")).toBeInTheDocument();
    expect(screen.getByTestId("stat-card-high-priority")).toHaveTextContent(
      "4"
    );
  });

  it("renders at least one mock issue number, title, and body preview", () => {
    render(<DashboardPage />);
    expect(screen.getByText("#42")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Session token rejected after password reset in OAuth flow"
      )
    ).toBeInTheDocument();
  });

  it("renders category, priority, and confidence badges correctly", () => {
    render(<DashboardPage />);
    const bugBadges = screen.getAllByTestId("category-badge-bug");
    expect(bugBadges.length).toBeGreaterThan(0);

    const highPriorityBadges = screen.getAllByTestId("priority-badge-high");
    expect(highPriorityBadges.length).toBeGreaterThan(0);

    const confidenceBadges = screen.getAllByTestId("confidence-badge");
    expect(confidenceBadges.length).toBeGreaterThan(0);
  });

  it("renders duplicate candidate banner and explanation for issue with duplicate", () => {
    render(<DashboardPage />);
    const duplicateBanners = screen.getAllByTestId("duplicate-banner");
    expect(duplicateBanners.length).toBeGreaterThan(0);
    expect(
      screen.getByText(
        /Similar to #17: both describe login failure after a password reset./i
      )
    ).toBeInTheDocument();
  });

  it("renders demo controls with disabled state and demo notices", () => {
    render(<DashboardPage />);
    const syncButton = screen.getByTestId("sync-issues-button");
    expect(syncButton).toBeDisabled();
    expect(syncButton).toHaveAttribute("aria-disabled", "true");

    const demoBadge = screen.getByTestId("demo-data-badge");
    expect(demoBadge).toHaveTextContent("Demo data");

    const searchInput = screen.getByPlaceholderText(/search issues/i);
    expect(searchInput).toBeDisabled();
  });

  it("renders triage activity panel with required static activity events", () => {
    render(<DashboardPage />);
    expect(
      screen.getByRole("heading", { level: 2, name: /triage activity/i })
    ).toBeInTheDocument();
    expect(screen.getByText("Issue #42 analyzed")).toBeInTheDocument();
    expect(
      screen.getByText("Suggested labels: bug, authentication")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Potential duplicate found: #17")
    ).toBeInTheDocument();
    expect(screen.getByText("Awaiting human review")).toBeInTheDocument();
  });

  it("renders EmptyState component with expected copy", () => {
    render(<EmptyState />);
    expect(screen.getByTestId("empty-state")).toBeInTheDocument();
    expect(screen.getByText("No issues to review")).toBeInTheDocument();
    expect(
      screen.getByText("Sync a repository to begin triage.")
    ).toBeInTheDocument();
  });

  it("renders ErrorState component with expected copy and alert role", () => {
    render(<ErrorState />);
    const errorAlert = screen.getByRole("alert");
    expect(errorAlert).toBeInTheDocument();
    expect(
      screen.getByText("Failed to sync repository issues")
    ).toBeInTheDocument();
  });

  it("renders LoadingSkeleton component with accessible status role", () => {
    render(<LoadingSkeleton />);
    const skeleton = screen.getByRole("status");
    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveAttribute("aria-label", "Loading issue data");
  });
});
