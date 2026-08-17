"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import {
  CampIconButton,
  CampAddButton,
  ChannelItem,
  SidebarSection,
  UserFooter,
} from "@/components/ui/camp-components";
import { CHANNELS, PROJECT_CHANNELS } from "@/lib/camp-mock-data";
import { useCampStore } from "@/store/useCampStore";
import { cn } from "@/utils/cn";
import { useGetCamps } from "@/features/camp/hooks/camp.hooks";

interface CampSidebarProps {
  slug?: string;
}

export function CampSidebar({ slug }: CampSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const activeCamp = useCampStore((s) => s.activeCamp);
  const isDiscover = pathname.startsWith("/discover");

  const { data: USER_CAMPS } = useGetCamps()

  const camp = slug ? USER_CAMPS.find((c) => c.slug === slug) : activeCamp;
  const campName = isDiscover ? "Discover" : camp?.name ?? "Select a camp";
  const memberCount = camp?.memberCount ?? 0;

  const channelMatch = pathname.match(/\/chat\/([^/]+)/);
  const activeChannelId = channelMatch?.[1];

  return (
    <aside className="w-50 shrink-0 flex flex-col bg-surface border-r border-border h-full">
      <button
        type="button"
        className="flex items-center gap-1.5 px-3 py-2.5 border-b border-border hover:bg-surface-1 transition-colors duration-150 text-left w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
      >
        <span className="text-[13px] font-medium text-text truncate flex-1">
          {campName}
        </span>
        {!isDiscover && (
          <span className="text-[11px] text-text-muted shrink-0">{memberCount}</span>
        )}
        <ChevronDown size={14} className="text-text-muted shrink-0" />
      </button>

      <div className="flex-1 overflow-y-auto scrollbar-thin py-1">
        {!isDiscover && slug && (
          <>
            <SidebarSection label="Channels">
              {CHANNELS.map((ch) => (
                <Link
                  key={ch.id}
                  href={`/camps/${slug}/chat/${ch.id}`}
                  className="block"
                >
                  <ChannelItem
                    name={ch.name}
                    type={ch.type}
                    active={activeChannelId === ch.id}
                    unreadCount={ch.unreadCount}
                  />
                </Link>
              ))}
            </SidebarSection>
            <SidebarSection label="Projects">
              {PROJECT_CHANNELS.map((ch) => (
                <Link
                  key={ch.id}
                  href={`/camps/${slug}/chat/${ch.id}`}
                  className="block"
                >
                  <ChannelItem
                    name={ch.name}
                    type={ch.type}
                    active={activeChannelId === ch.id}
                    unreadCount={ch.unreadCount}
                  />
                </Link>
              ))}
            </SidebarSection>
            <SidebarSection label="Camp">
              <Link href={`/camps/${slug}/tasks`} className="block">
                <ChannelItem
                  name="task-board"
                  type="text"
                  active={pathname.includes("/tasks")}
                />
              </Link>
              <Link href={`/camps/${slug}/members`} className="block">
                <ChannelItem
                  name="members"
                  type="text"
                  active={pathname.includes("/members")}
                />
              </Link>
              <Link href={`/camps/${slug}/settings`} className="block">
                <ChannelItem
                  name="settings"
                  type="text"
                  active={pathname.includes("/settings")}
                />
              </Link>
            </SidebarSection>
          </>
        )}
        {isDiscover && (
          <SidebarSection label="Browse">
            <button
              type="button"
              onClick={() => router.push("/discover")}
              className={cn(
                "w-full text-left mx-1 px-2 py-1.25 rounded-xs text-[13px] transition-colors duration-150",
                "bg-surface-2 text-text"
              )}
              style={{ width: "calc(100% - 8px)" }}
            >
              All camps
            </button>
          </SidebarSection>
        )}
      </div>

      <UserFooter name="Alex Rivera" avatarColor="#5282FF" online />
    </aside>
  );
}
