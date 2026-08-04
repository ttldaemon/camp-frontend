"use client";

import { useMemo, useState } from "react";
import { Mail, Search, UserPlus, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { MainHeader, MemberRow } from "@/components/ui/camp-components";

const MEMBERS = [
  {
    name: "Alex Rivera",
    username: "alexr",
    role: "owner" as const,
    joinedDate: "Jan 12",
    avatarColor: "#5282FF",
  },
  {
    name: "Sam Chen",
    username: "samc",
    role: "admin" as const,
    joinedDate: "Jan 14",
    avatarColor: "#A78BFA",
  },
  {
    name: "Jordan Lee",
    username: "jordanl",
    role: "member" as const,
    joinedDate: "Feb 2",
    avatarColor: "#34D399",
  },
  {
    name: "Morgan Patel",
    username: "morganp",
    role: "member" as const,
    joinedDate: "Feb 18",
    avatarColor: "#FFBE32",
  },
  {
    name: "Riley Kim",
    username: "rileyk",
    role: "viewer" as const,
    joinedDate: "Mar 1",
    avatarColor: "#FF6B4A",
  },
];

const PENDING = [
  { email: "dev@example.com", sentDays: 2 },
  { email: "partner@camp.dev", sentDays: 5 },
];

export default function MembersPage() {
  const [query, setQuery] = useState("");
  const [role, setRole] = useState("all");

  const filtered = useMemo(() => {
    return MEMBERS.filter((m) => {
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        m.name.toLowerCase().includes(q) ||
        m.username.toLowerCase().includes(q);
      const matchesRole = role === "all" || m.role === role;
      return matchesQuery && matchesRole;
    });
  }, [query, role]);

  return (
    <>
      <MainHeader icon={Users} title="Members" subtitle={`${MEMBERS.length} total`}>
        <Button variant="primary" size="sm">
          <UserPlus size={14} />
          Invite member
        </Button>
      </MainHeader>

      <div className="flex-1 overflow-y-auto p-3.5">
        <div className="flex flex-wrap gap-2 mb-3 [&>div:first-child]:flex-1 [&>div:first-child]:min-w-[200px]">
          <Input
            size="sm"
            placeholder="Search members..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            leftIcon={<Search size={14} />}
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="bg-surface-1 border border-border rounded-sm text-[12px] text-text-secondary px-2 py-[5px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <option value="all">All roles</option>
            <option value="owner">Owner</option>
            <option value="admin">Admin</option>
            <option value="member">Member</option>
            <option value="viewer">Viewer</option>
          </select>
        </div>

        <div
          className="grid gap-2 px-2.5 pb-1 mb-1 border-b border-border text-[10px] uppercase tracking-[.06em] text-text-muted"
          style={{ gridTemplateColumns: "1fr 100px 80px 40px" }}
        >
          <span>Member</span>
          <span>Role</span>
          <span>Joined</span>
          <span />
        </div>

        <div className="space-y-0.5">
          {filtered.map((m) => (
            <MemberRow key={m.username} {...m} />
          ))}
        </div>

        <div className="mt-4">
          <p className="text-[11px] uppercase tracking-[.06em] text-text-muted mb-2">
            Pending invitations
          </p>
          <ul className="space-y-2">
            {PENDING.map((inv) => (
              <li
                key={inv.email}
                className="flex items-center gap-2 bg-surface-1 border border-dashed border-border rounded-md px-3 py-2"
              >
                <Mail size={16} className="text-text-muted shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-[12px] text-text-secondary truncate">{inv.email}</p>
                  <p className="text-[11px] text-text-muted">
                    Sent {inv.sentDays} days ago
                  </p>
                </div>
                <Button variant="ghost" size="xs" className="ml-auto shrink-0">
                  Resend
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
