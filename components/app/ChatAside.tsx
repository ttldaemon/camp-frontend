"use client";

import { Badge } from "@/components/ui/Badge";

const ONLINE = [
  { name: "Alex Rivera", color: "#5282FF" },
  { name: "Sam Chen", color: "#A78BFA" },
  { name: "Jordan Lee", color: "#34D399" },
];

const OFFLINE = [
  { name: "Morgan Patel", color: "#FFBE32" },
  { name: "Riley Kim", color: "#FF6B4A" },
];

const RECENT_TASKS = [
  { title: "Wire chat WebSocket", status: "in progress" as const },
  { title: "Kanban drag-and-drop", status: "review" as const },
  { title: "OAuth callback flow", status: "todo" as const },
];

export function ChatAside() {
  return (
    <aside className="w-[180px] shrink-0 bg-surface border-l border-border flex flex-col h-full overflow-y-auto">
      <div className="p-2.5 border-b border-border">
        <p className="text-[10px] font-medium uppercase tracking-[.06em] text-text-muted mb-2">
          Online — {ONLINE.length}
        </p>
        <ul className="space-y-1">
          {ONLINE.map((m) => (
            <li key={m.name} className="flex items-center gap-1.5 px-1 py-0.5">
              <div className="relative shrink-0">
                <div
                  className="w-[22px] h-[22px] rounded-full flex items-center justify-center text-[9px] font-medium text-white"
                  style={{ background: m.color }}
                >
                  {m.name[0]}
                </div>
                <span className="absolute -bottom-px -right-px w-2 h-2 rounded-full bg-success border-2 border-surface" />
              </div>
              <span className="text-[12px] text-text-secondary truncate">{m.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-2.5 border-b border-border">
        <p className="text-[10px] font-medium uppercase tracking-[.06em] text-text-muted mb-2">
          Offline — {OFFLINE.length}
        </p>
        <ul className="space-y-1 opacity-60">
          {OFFLINE.map((m) => (
            <li key={m.name} className="flex items-center gap-1.5 px-1 py-0.5">
              <div
                className="w-[22px] h-[22px] rounded-full flex items-center justify-center text-[9px] font-medium text-white shrink-0"
                style={{ background: m.color }}
              >
                {m.name[0]}
              </div>
              <span className="text-[12px] text-text-muted truncate">{m.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-2.5 flex-1">
        <p className="text-[10px] font-medium uppercase tracking-[.06em] text-text-muted mb-2">
          Recent tasks
        </p>
        <ul className="space-y-1.5">
          {RECENT_TASKS.map((t) => (
            <li
              key={t.title}
              className="bg-surface-1 border border-border rounded-sm px-2 py-1.5"
            >
              <p className="text-[11px] font-medium text-text-secondary truncate mb-1">
                {t.title}
              </p>
              <Badge status={t.status} size="sm" />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
