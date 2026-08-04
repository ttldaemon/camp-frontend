"use client";

import { useState } from "react";
import {
  Settings,
  Trash2,
  Webhook,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {
  MainHeader,
  SettingsRow,
  SidebarNavItem,
  Toggle,
} from "@/components/ui/camp-components";
import Github from "@/assets/Github";


export default function CampSettingsPage() {
  const [campName, setCampName] = useState("Hackathon Squad");
  const [slug, setSlug] = useState("hackathon-squad");
  const [visibility, setVisibility] = useState("public");
  const [taskAssignments, setTaskAssignments] = useState(true);
  const [mentions, setMentions] = useState(true);
  const [digest, setDigest] = useState(false);
  const [nav, setNav] = useState<
    "overview" | "permissions" | "notifications" | "github" | "webhooks"
  >("overview");

  return (
    <>
      <MainHeader icon={Settings} title="Camp settings" />

      <div className="flex flex-1 min-h-0 overflow-hidden">
        <nav className="w-37.5 shrink-0 border-r border-border py-2 overflow-y-auto">
          <p className="px-3 pt-1 pb-1 text-[10px] font-medium uppercase tracking-[.06em] text-text-muted">
            General
          </p>
          <SidebarNavItem
            icon={Settings}
            label="Overview"
            active={nav === "overview"}
            onClick={() => setNav("overview")}
          />
          <SidebarNavItem
            icon={Settings}
            label="Permissions"
            active={nav === "permissions"}
            onClick={() => setNav("permissions")}
          />
          <SidebarNavItem
            icon={Settings}
            label="Notifications"
            active={nav === "notifications"}
            onClick={() => setNav("notifications")}
          />

          <p className="px-3 pt-3 pb-1 text-[10px] font-medium uppercase tracking-[.06em] text-text-muted">
            Integrations
          </p>
           <SidebarNavItem
            icon={Github}
            label="GitHub"
            active={nav === "github"}
            onClick={() => setNav("github")}
          /> 
          <SidebarNavItem
            icon={Webhook}
            label="Webhooks"
            active={nav === "webhooks"}
            onClick={() => setNav("webhooks")}
          />

          <p className="px-3 pt-3 pb-1 text-[10px] font-medium uppercase tracking-[.06em] text-text-muted">
            Danger zone
          </p>
          <SidebarNavItem
            icon={Trash2}
            label="Delete camp"
            danger
            onClick={() => setNav("overview")}
          />
        </nav>

        <div className="flex-1 overflow-y-auto px-4 py-3.5">
          {(nav === "overview" || nav === "permissions") && (
            <section className="mb-6">
              <h2 className="text-[12px] font-medium text-text border-b border-border pb-2 mb-2.5">
                Camp profile
              </h2>
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-13 h-13 rounded-full flex items-center justify-center text-lg font-medium text-white"
                  style={{ background: "#5282FF" }}
                >
                  HS
                </div>
                <div className="flex gap-1.5">
                  <Button variant="secondary" size="xs">
                    Upload image
                  </Button>
                  <Button variant="secondary" size="xs">
                    Remove
                  </Button>
                </div>
              </div>
              <SettingsRow label="Camp name">
                <Input
                  size="sm"
                  value={campName}
                  onChange={(e) => setCampName(e.target.value)}
                  className="w-48"
                />
              </SettingsRow>
              <SettingsRow label="Slug" description="camp.dev/c/[slug]">
                <Input
                  size="sm"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="w-48"
                />
              </SettingsRow>
              <SettingsRow label="Visibility" description="Who can find and join">
                <select
                  value={visibility}
                  onChange={(e) => setVisibility(e.target.value)}
                  className="bg-surface-1 border border-border rounded-sm text-[12px] text-text-secondary px-2 py-1.25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                  <option value="invite">Invite only</option>
                </select>
              </SettingsRow>
              <div className="flex justify-end mt-3">
                <Button variant="primary" size="sm">
                  Save changes
                </Button>
              </div>
            </section>
          )}

          {(nav === "overview" || nav === "notifications") && (
            <section className="mb-6">
              <h2 className="text-[12px] font-medium text-text border-b border-border pb-2 mb-2.5">
                Notifications
              </h2>
              <SettingsRow label="Task assignments" description="Notify when assigned">
                <Toggle
                  checked={taskAssignments}
                  onChange={setTaskAssignments}
                  aria-label="Task assignments"
                />
              </SettingsRow>
              <SettingsRow label="Mentions" description="Notify on @mention in chat">
                <Toggle checked={mentions} onChange={setMentions} aria-label="Mentions" />
              </SettingsRow>
              <SettingsRow label="Daily digest" description="AI summary of camp activity">
                <Toggle checked={digest} onChange={setDigest} aria-label="Daily digest" />
              </SettingsRow>
            </section>
          )}

          {nav === "overview" && (
            <section>
              <h2 className="text-[12px] font-medium text-danger border-b border-border pb-2 mb-2.5">
                Danger zone
              </h2>
              <SettingsRow label="Archive camp" description="Read-only, retains all data">
                <Button variant="danger" size="sm">
                  Archive
                </Button>
              </SettingsRow>
              <SettingsRow
                label="Delete camp"
                description="Permanent, cannot be undone"
                danger
              >
                <Button variant="danger" size="sm">
                  Delete camp
                </Button>
              </SettingsRow>
            </section>
          )}

          {nav === "github" && (
            <p className="text-[12px] text-text-muted">
              Connect a GitHub organization to sync issues and PR events into Camp channels.
            </p>
          )}
          {nav === "webhooks" && (
            <p className="text-[12px] text-text-muted">
              Configure outbound webhooks for task updates and message mentions.
            </p>
          )}
          {nav === "permissions" && (
            <p className="text-[12px] text-text-muted">
              Role defaults and channel-level permission overrides will appear here.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
