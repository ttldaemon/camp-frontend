"use client";

import { useState } from "react";
import {
  Filter,
  LayoutKanban,
  MoreHorizontal,
} from "lucide-react";
import { AvatarGroup } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {
  KanbanColumn,
  MainHeader,
  TaskCard,
} from "@/components/ui/camp-components";

type ColumnKey = "todo" | "in_progress" | "review" | "done";

const INITIAL: Record<
  ColumnKey,
  { id: string; title: string; priority: "low" | "medium" | "high"; assignee?: string; color?: string; due?: string; dueSoon?: boolean; linked?: boolean }[]
> = {
  todo: [
    {
      id: "t1",
      title: "OAuth callback flow",
      priority: "medium",
      assignee: "Sam",
      color: "#A78BFA",
      due: "Fri",
    },
    {
      id: "t2",
      title: "Invite email templates",
      priority: "low",
      assignee: "Riley",
      color: "#FF6B4A",
    },
  ],
  in_progress: [
    {
      id: "t3",
      title: "WebSocket reconnect backoff",
      priority: "high",
      assignee: "Jordan",
      color: "#34D399",
      due: "Today",
      dueSoon: true,
      linked: true,
    },
  ],
  review: [
    {
      id: "t4",
      title: "Kanban quick-add UX",
      priority: "medium",
      assignee: "Alex",
      color: "#5282FF",
    },
  ],
  done: [
    {
      id: "t5",
      title: "App shell layout",
      priority: "medium",
      assignee: "Alex",
      color: "#5282FF",
    },
  ],
};

export default function TasksPage() {
  const [columns, setColumns] = useState(INITIAL);
  const [addingTo, setAddingTo] = useState<ColumnKey | null>(null);
  const [draft, setDraft] = useState("");

  const submitTask = (status: ColumnKey) => {
    const title = draft.trim();
    if (!title) return;
    setColumns((prev) => ({
      ...prev,
      [status]: [
        ...prev[status],
        {
          id: `new-${Date.now()}`,
          title,
          priority: "medium" as const,
        },
      ],
    }));
    setDraft("");
    setAddingTo(null);
  };

  return (
    <>
      <MainHeader
        icon={LayoutKanban}
        title="Task board"
        subtitle="camp-frontend"
      >
        <AvatarGroup
          size="sm"
          max={4}
          users={[
            { name: "Alex Rivera" },
            { name: "Sam Chen" },
            { name: "Jordan Lee" },
            { name: "Morgan Patel" },
          ]}
        />
        <span className="w-px h-4 bg-border" />
        <Button variant="primary" size="sm">
          + Task
        </Button>
        <button
          type="button"
          className="p-1 text-text-muted hover:text-text transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
          aria-label="Filter tasks"
        >
          <Filter size={15} />
        </button>
        <button
          type="button"
          className="p-1 text-text-muted hover:text-text transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
          aria-label="More actions"
        >
          <MoreHorizontal size={15} />
        </button>
      </MainHeader>

      <div className="flex-1 overflow-x-auto overflow-y-hidden px-3.5 py-2.5 min-h-0">
        <div className="flex gap-2.5 h-full min-w-max pb-2">
          {(Object.keys(columns) as ColumnKey[]).map((status) => (
            <KanbanColumn
              key={status}
              status={status}
              count={columns[status].length}
              onAdd={() => {
                setAddingTo(status);
                setDraft("");
              }}
            >
              {columns[status].map((task) => (
                <div
                  key={task.id}
                  className={status === "done" ? "opacity-60" : undefined}
                >
                  <TaskCard
                    title={task.title}
                    priority={task.priority}
                    assigneeName={task.assignee}
                    assigneeColor={task.color}
                    dueDate={task.due}
                    dueSoon={task.dueSoon}
                    linked={task.linked}
                  />
                </div>
              ))}
              {addingTo === status && (
                <div className="space-y-1.5 pt-1">
                  <Input
                    size="sm"
                    placeholder="Task title..."
                    value={draft}
                    autoFocus
                    onChange={(e) => setDraft(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") submitTask(status);
                      if (e.key === "Escape") {
                        setAddingTo(null);
                        setDraft("");
                      }
                    }}
                  />
                  <div className="flex gap-1">
                    <Button
                      size="xs"
                      variant="primary"
                      onClick={() => submitTask(status)}
                    >
                      Add
                    </Button>
                    <Button
                      size="xs"
                      variant="ghost"
                      onClick={() => {
                        setAddingTo(null);
                        setDraft("");
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
            </KanbanColumn>
          ))}
        </div>
      </div>
    </>
  );
}
