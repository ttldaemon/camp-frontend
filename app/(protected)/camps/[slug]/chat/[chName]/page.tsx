"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import { Bell, Hash, Search, Users } from "lucide-react";
import {
  ChatInput,
  MainHeader,
  MessageBubble,
  TypingIndicator,
} from "@/components/ui/camp-components";
import { getChannelByName } from "@/features/camp/utils/camp.utils";


type RawMessage = {
  id: string;
  authorName: string;
  authorColor: string;
  timestamp: string;
  day: string;
  content: string;
  taskEmbed?: { title: string; status: string; priority: string };
};

const MESSAGES: RawMessage[] = [
  {
    id: "1",
    authorName: "Sam Chen",
    authorColor: "#A78BFA",
    timestamp: "9:02 AM",
    day: "Today",
    content: "Pushed the STOMP reconnect logic — can someone sanity-check on staging?",
  },
  {
    id: "2",
    authorName: "Sam Chen",
    authorColor: "#A78BFA",
    timestamp: "9:04 AM",
    day: "Today",
    content: "Also fixed the duplicate subscription bug in `useCampStore`.",
  },
  {
    id: "3",
    authorName: "Jordan Lee",
    authorColor: "#34D399",
    timestamp: "9:18 AM",
    day: "Today",
    content: "On it. Linked the kanban card below.",
    taskEmbed: {
      title: "WebSocket reconnect backoff",
      status: "in progress",
      priority: "high",
    },
  },
  {
    id: "4",
    authorName: "Alex Rivera",
    authorColor: "#5282FF",
    timestamp: "10:01 AM",
    day: "Today",
    content: "Standup in 20 — drop blockers in this thread.",
  },
];

const PINNED =
  "Release checklist: migrate auth tokens to memory-only store before Friday deploy.";

function groupCompact(prev: RawMessage | undefined, curr: RawMessage): boolean {
  if (!prev) return false;
  return prev.authorName === curr.authorName;
}

export default function ChatChannelPage() {
  const params = useParams();
  const chName = params.chName as string;
  const channel = getChannelByName(chName);

  const withCompact = useMemo(() => {
    return MESSAGES.map((msg, i) => ({
      ...msg,
      compact: groupCompact(MESSAGES[i - 1], msg),
    }));
  }, []);

  let lastDay: string | null = null;

  return (
    <div className="flex flex-col h-full min-h-0">
      <MainHeader
        icon={Hash}
        title={chName}
        subtitle={channel?.description ?? "Camp channel"}
      >
        <button
          type="button"
          className="p-1 text-text-muted hover:text-text transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
          aria-label="Search messages"
        >
          <Search size={15} />
        </button>
        <span className="w-px h-4 bg-border" />
        <button
          type="button"
          className="p-1 text-text-muted hover:text-text transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
          aria-label="Channel members"
        >
          <Users size={15} />
        </button>
        <button
          type="button"
          className="p-1 text-text-muted hover:text-text transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
          aria-label="Notifications"
        >
          <Bell size={15} />
        </button>
      </MainHeader>

      <div className="flex-1 overflow-y-auto px-3.5 py-3 min-h-0">
        <div className="mb-3 bg-surface-1 border border-border border-l-2 border-l-accent rounded-sm px-3 py-2">
          <p className="text-[10px] uppercase tracking-[.06em] text-text-muted mb-0.5">
            Pinned
          </p>
          <p className="text-[12px] text-text-secondary">{PINNED}</p>
        </div>

        <div className="flex flex-col gap-3">
          {withCompact.map((msg) => {
            const sep = lastDay !== msg.day;
            lastDay = msg.day;
            return (
              <div key={msg.id}>
                {sep && (
                  <div className="flex items-center gap-2 my-3">
                    <div className="flex-1 h-px bg-border" />
                    <span className="text-[11px] text-text-muted bg-background px-2 py-0.5 rounded-xs">
                      {msg.day}
                    </span>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                )}
                <MessageBubble
                  authorName={msg.authorName}
                  authorColor={msg.authorColor}
                  timestamp={msg.timestamp}
                  content={msg.content}
                  taskEmbed={msg.taskEmbed}
                  compact={msg.compact}
                />
              </div>
            );
          })}
          <TypingIndicator name="Jordan" />
        </div>
      </div>

      <ChatInput channelName={channelName} />
    </div>
  );
}
