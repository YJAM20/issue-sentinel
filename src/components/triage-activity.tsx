import React from "react";
import { Activity, CheckCircle2, Copy, Tag, Clock } from "lucide-react";

export function TriageActivity() {
  const activities = [
    {
      id: "act-1",
      icon: (
        <Activity className="w-3.5 h-3.5 text-indigo-400" aria-hidden="true" />
      ),
      title: "Issue #42 analyzed",
      timestamp: "2 mins ago",
      type: "analysis",
    },
    {
      id: "act-2",
      icon: <Tag className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />,
      title: "Suggested labels: bug, authentication",
      timestamp: "2 mins ago",
      type: "labels",
    },
    {
      id: "act-3",
      icon: <Copy className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />,
      title: "Potential duplicate found: #17",
      timestamp: "2 mins ago",
      type: "duplicate",
    },
    {
      id: "act-4",
      icon: <Clock className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />,
      title: "Awaiting human review",
      timestamp: "Just now",
      type: "status",
    },
  ];

  return (
    <aside
      className="p-5 rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm"
      aria-labelledby="triage-activity-heading"
    >
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-indigo-400" aria-hidden="true" />
          <h2
            id="triage-activity-heading"
            className="text-sm font-semibold text-white"
          >
            Triage activity
          </h2>
        </div>
        <span className="text-[10px] text-slate-400 font-mono bg-slate-800/80 px-2 py-0.5 rounded">
          demo feed
        </span>
      </div>

      <ol className="space-y-4 relative before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-[1px] before:bg-slate-800">
        {activities.map((item) => (
          <li
            key={item.id}
            className="relative flex items-start gap-3 pl-1 text-xs"
          >
            <div className="relative z-10 w-5 h-5 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 mt-0.5">
              {item.icon}
            </div>
            <div className="flex-1">
              <p className="text-slate-200 font-medium leading-snug">
                {item.title}
              </p>
              <span className="text-[10px] text-slate-500">
                {item.timestamp}
              </span>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-6 p-3 rounded-lg border border-slate-800/80 bg-slate-950/60 text-[11px] text-slate-400 flex items-center gap-2">
        <CheckCircle2
          className="w-3.5 h-3.5 text-emerald-400 shrink-0"
          aria-hidden="true"
        />
        <span>No triage mutations executed without maintainer approval.</span>
      </div>
    </aside>
  );
}
