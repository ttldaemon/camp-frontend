"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Compass, Tent, Users, Search } from "lucide-react";
import { MainHeader } from "@/components/ui/camp-components";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
// import { DISCOVER_CAMPS } from "@/lib/camp-mock-data";
import { cn } from "@/utils/cn";
import NewCamp from "@/components/modals/NewCamp";
import { useDiscoverCamps } from "@/features/camp/hooks/camp.hooks";
import { Camp } from "@/features/camp/types/camp.types";
import { getInitials } from "@/features/camp/utils/camp.utils";
import { useMe } from "@/features/auth/hooks/auth.hooks";

const FILTERS = [
  "All",
  "Backend",
  "Frontend",
  "ML/AI",
  "Open Source",
  "Hackathon",
] as const;

export default function DiscoverPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [isNewCamp, setIsNewCamp] = useState(false);
  const [query, setQuery] = useState("");

  const { data: DISCOVER_CAMPS } = useDiscoverCamps()
  const { data: user } = useMe()

  const userId = user?.user.id ?? ""

  const camps = useMemo(() => {
    return DISCOVER_CAMPS.filter((c: Camp) => {
      const matchesFilter =
        filter === "All" || c.tags.some((t) => t === filter);
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [filter, query, DISCOVER_CAMPS]);

  return (
    <>
      <MainHeader icon={Compass} title="Discover camps">
        <div className="w-44 shrink-0">
          <Input
            size="sm"
            placeholder="Search camps..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            leftIcon={<Search size={14} />}
          />
        </div>
        <Button variant="primary" size="sm" onClick={() => setIsNewCamp(true)}>
          New camp
        </Button>
      </MainHeader>

      <div className="flex-1 overflow-y-auto p-3.5">
        <div className="flex gap-1.5 overflow-x-auto hide-scrollbar mb-3">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                "shrink-0 px-2.5 py-1 rounded-xs text-[11px] font-medium border transition-colors duration-150",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 focus-visible:ring-offset-background",
                filter === f
                  ? "bg-accent text-white border-accent"
                  : "bg-surface-2 border-border text-text-muted hover:text-text-secondary"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {camps.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <Tent size={48} className="text-text-disabled mb-3" />
            <p className="text-[14px] font-medium text-text mb-1">No camps found</p>
            <p className="text-[12px] text-text-muted">Try a different filter</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {camps.map((camp: Camp) => (
              <Card
                key={camp.id}
                className="rounded-lg border-border bg-surface-1 hover:border-surface-3 transition-colors duration-150 p-3"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div
                    className="w-8 h-8 rounded-md flex items-center justify-center text-[11px] font-medium text-white shrink-0"
                    // style={{ background: camp.color }}
                  >
                    {getInitials(camp.name)}
                  </div>
                  {camp.membersIds.includes(userId) ? (
                    <Badge variant="accent" size="sm">
                      joined
                    </Badge>
                  ) : (
                    <Button variant="ghost" size="xs">
                      Join
                    </Button>
                  )}
                </div>
                <Link
                  href={`/camps/${camp.slug}/chat/general`}
                  className="block group"
                >
                  <p className="text-[12px] font-medium text-text group-hover:text-accent transition-colors duration-150 mb-1">
                    {camp.name}
                  </p>
                  <p className="text-[11px] text-text-muted line-clamp-2 mb-2.5">
                    {camp.description}
                  </p>
                </Link>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1">
                    {camp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-1.5 py-px rounded-xs bg-surface-2 border border-border text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-[10px] text-text-muted shrink-0">
                    <Users size={12} />
                    {camp.memberCount}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        )}

        {
          isNewCamp && <NewCamp onClose={() => setIsNewCamp(false)} />
        }
      </div>
    </>
  );
}
