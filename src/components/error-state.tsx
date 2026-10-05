import React from "react";
import { AlertOctagon, RotateCcw } from "lucide-react";

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({
  title = "Failed to sync repository issues",
  message = "Unable to fetch issues from repository source. Check repository permissions or try again.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div
      className="p-8 rounded-xl border border-rose-900/60 bg-rose-950/20 text-center flex flex-col items-center justify-center my-6"
      role="alert"
      data-testid="error-state"
    >
      <div className="w-12 h-12 rounded-full bg-rose-900/40 border border-rose-700/60 flex items-center justify-center text-rose-400 mb-3">
        <AlertOctagon className="w-6 h-6" aria-hidden="true" />
      </div>
      <h3 className="text-base font-semibold text-rose-200 mb-1">{title}</h3>
      <p className="text-xs text-rose-300/80 max-w-md mb-4">{message}</p>
      <button
        type="button"
        disabled={!onRetry}
        onClick={onRetry}
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-rose-900/40 border border-rose-700/60 text-xs font-medium text-rose-200 hover:bg-rose-900/60 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
        <span>Retry sync</span>
      </button>
    </div>
  );
}
