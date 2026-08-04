// Import existing: Button, Input, Textarea, Badge, Card,
//   CardHeader, CardTitle, CardDescription, CardFooter,
//   CardStat, Avatar, AvatarGroup

"use client";

import { useState } from "react";
import { Hash, Volume2, Megaphone, Plus } from "lucide-react";

interface ToggleProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  "aria-label"?: string;
}

function Toggle({
  checked = false,
  onChange,
  disabled,
  "aria-label": label,
}: ToggleProps) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={[
        "relative w-8 h-4.5 rounded-full transition-colors duration-150 shrink-0",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 focus-visible:ring-offset-background",
        "disabled:opacity-40 disabled:cursor-not-allowed",
        checked ? "bg-accent" : "bg-surface-3",
      ].join(" ")}
    >
      <span
        className={[
          "absolute top-0.5 w-3.5 h-3.5 rounded-full bg-white transition-all duration-150",
          checked ? "left-4.5" : "left-0.5",
        ].join(" ")}
      />
    </button>
  );
}

// ─────────────────────────────────────────────
// 2. TextDivider — "or" divider in auth forms
// ─────────────────────────────────────────────
function TextDivider({ label = "or" }: { label?: string }) {
  return (
    <div className="flex items-center gap-3 my-3">
      <div className="flex-1 h-px bg-border" />
      <span className="text-[11px] text-text-muted">{label}</span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

// ─────────────────────────────────────────────
// 3. CampIconButton — left rail camp pill
// ─────────────────────────────────────────────
interface CampIconButtonProps {
  label: string;
  initials?: string;
  color?: string;
  active?: boolean;
  hasNotification?: boolean;
  onClick?: () => void;
}

function CampIconButton({
  label,
  initials,
  color,
  active = false,
  hasNotification = false,
  onClick,
}: CampIconButtonProps) {
  return (
    <div className="relative group">
      <button
        onClick={onClick}
        title={label}
        aria-label={label}
        className={[
          "w-9 h-9 flex items-center justify-center text-[12px] font-medium transition-all duration-150",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
          active
            ? "rounded-[8px] text-white"
            : "rounded-[10px] bg-surface-2 text-text-muted hover:rounded-[8px] hover:text-text",
        ].join(" ")}
        style={
          active && color
            ? { background: color }
            : active
              ? { background: "var(--accent)" }
              : {}
        }
      >
        {initials ?? label[0].toUpperCase()}
      </button>
      {hasNotification && (
        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-danger border-2 border-background" />
      )}
      {/* Tooltip */}
      <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-surface-3 border border-border text-text text-[11px] font-medium px-2 py-1 rounded-sm whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-100 z-50">
        {label}
      </div>
    </div>
  );
}

// Left rail add button
function CampAddButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Create new camp"
      className="w-8 h-8 rounded-full bg-surface-1 border border-dashed border-border flex items-center justify-center text-text-muted hover:text-text hover:border-border-strong transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <Plus size={14} />
    </button>
  );
}

// ─────────────────────────────────────────────
// 4. ChannelItem — sidebar nav row
// ─────────────────────────────────────────────
type ChannelType = "text" | "voice" | "announcement";

interface ChannelItemProps {
  name: string;
  type?: ChannelType;
  active?: boolean;
  unreadCount?: number;
  onClick?: () => void;
}

const CHANNEL_ICON: Record<ChannelType, React.ElementType> = {
  text: Hash,
  voice: Volume2,
  announcement: Megaphone,
};

function ChannelItem({
  name,
  type = "text",
  active = false,
  unreadCount,
  onClick,
}: ChannelItemProps) {
  const Icon = CHANNEL_ICON[type];

  return (
    <button
      onClick={onClick}
      className={[
        "w-full flex items-center gap-1.5 px-2 py-[5px] mx-1 rounded-[4px] text-[13px] transition-colors duration-100",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent",
        active
          ? "bg-surface-2 text-text"
          : "text-text-muted hover:bg-surface-1 hover:text-text-secondary",
      ].join(" ")}
      style={{ width: "calc(100% - 8px)" }}
    >
      <Icon size={14} className="flex-shrink-0" aria-hidden="true" />
      <span className="flex-1 truncate text-left">{name}</span>
      {unreadCount != null && unreadCount > 0 && (
        <span className="ml-auto bg-danger text-white text-[10px] font-medium px-[5px] py-px rounded-full flex-shrink-0">
          {unreadCount > 99 ? "99+" : unreadCount}
        </span>
      )}
    </button>
  );
}

// ─────────────────────────────────────────────
// 5. SidebarSection — labelled group header
// ─────────────────────────────────────────────
interface SidebarSectionProps {
  label: string;
  onAdd?: () => void;
  children: React.ReactNode;
}

function SidebarSection({ label, onAdd, children }: SidebarSectionProps) {
  return (
    <div>
      <div className="flex items-center justify-between px-2 pt-3 pb-1">
        <span className="text-[10px] font-medium text-text-muted uppercase tracking-[.06em]">
          {label}
        </span>
        {onAdd && (
          <button
            onClick={onAdd}
            aria-label={`Add ${label}`}
            className="text-text-muted hover:text-text-secondary transition-colors p-0.5 rounded focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
          >
            <Plus size={13} />
          </button>
        )}
      </div>
      <div className="flex flex-col">{children}</div>
    </div>
  );
}

// ─────────────────────────────────────────────
// 6. SidebarNavItem — settings-style nav item
// ─────────────────────────────────────────────
interface SidebarNavItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  danger?: boolean;
  onClick?: () => void;
}

function SidebarNavItem({
  icon: Icon,
  label,
  active,
  danger,
  onClick,
}: SidebarNavItemProps) {
  return (
    <button
      onClick={onClick}
      className={[
        "w-full flex items-center gap-[7px] px-3 py-[5px] mx-1 rounded-[4px] text-[12px] transition-colors duration-100",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent",
        danger
          ? "text-danger hover:bg-danger/10"
          : active
            ? "bg-surface-2 text-text"
            : "text-text-muted hover:bg-surface-1 hover:text-text-secondary",
      ].join(" ")}
      style={{ width: "calc(100% - 8px)" }}
    >
      <Icon size={14} className="flex-shrink-0" aria-hidden="true" />
      <span className="truncate text-left">{label}</span>
    </button>
  );
}

// ─────────────────────────────────────────────
// 7. TaskCard — Kanban card
// ─────────────────────────────────────────────
type Priority = "low" | "medium" | "high" | "critical";
type TaskStatus = "todo" | "in_progress" | "review" | "done";

const PRIORITY_DOT: Record<Priority, string> = {
  low: "bg-success",
  medium: "bg-warning",
  high: "bg-danger",
  critical: "bg-accent",
};

interface TaskCardProps {
  title: string;
  priority?: Priority;
  status?: TaskStatus;
  assigneeName?: string;
  assigneeColor?: string;
  dueDate?: string;
  dueSoon?: boolean;
  linked?: boolean;
  onClick?: () => void;
}

function TaskCard({
  title,
  priority = "medium",
  assigneeName,
  assigneeColor,
  dueDate,
  dueSoon,
  linked,
  onClick,
}: TaskCardProps) {
  return (
    <button
      onClick={onClick}
      className={[
        "w-full text-left bg-surface-1 border border-border rounded-[6px] px-[10px] py-2 cursor-pointer",
        "hover:border-border-strong transition-colors duration-150 group",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent",
        linked ? "border-l-2 border-l-accent rounded-l-none" : "",
      ].join(" ")}
    >
      <p className="text-[12px] font-medium text-text-secondary leading-snug mb-1.5 group-hover:text-text transition-colors">
        {title}
      </p>
      <div className="flex items-center gap-1.5">
        <span
          className={[
            "w-1.5 h-1.5 rounded-full flex-shrink-0",
            PRIORITY_DOT[priority],
          ].join(" ")}
        />
        {assigneeName && (
          <div
            className="w-[18px] h-[18px] rounded-full flex items-center justify-center text-[8px] font-medium text-white flex-shrink-0"
            style={{ background: assigneeColor ?? "var(--accent)" }}
            title={assigneeName}
          >
            {assigneeName[0].toUpperCase()}
          </div>
        )}
        {dueDate && (
          <span
            className={[
              "text-[10px] ml-auto",
              dueSoon ? "text-danger" : "text-text-muted",
            ].join(" ")}
          >
            {dueDate}
          </span>
        )}
      </div>
    </button>
  );
}

// ─────────────────────────────────────────────
// 8. KanbanColumn — board column
// ─────────────────────────────────────────────
type ColumnStatus = "todo" | "in_progress" | "review" | "done";

const COLUMN_DOT: Record<ColumnStatus, string> = {
  todo: "bg-text-muted",
  in_progress: "bg-info",
  review: "bg-warning",
  done: "bg-success",
};

const COLUMN_LABEL: Record<ColumnStatus, string> = {
  todo: "Todo",
  in_progress: "In progress",
  review: "Review",
  done: "Done",
};

interface KanbanColumnProps {
  status: ColumnStatus;
  count?: number;
  onAdd?: () => void;
  children: React.ReactNode;
}

function KanbanColumn({ status, count, onAdd, children }: KanbanColumnProps) {
  return (
    <div className="flex-shrink-0 w-[220px] flex flex-col gap-1.5">
      <div className="flex items-center justify-between px-0.5 mb-1">
        <div className="flex items-center gap-[5px]">
          <span
            className={["w-1.5 h-1.5 rounded-full", COLUMN_DOT[status]].join(
              " ",
            )}
          />
          <span className="text-[11px] font-medium text-text-muted uppercase tracking-[.06em]">
            {COLUMN_LABEL[status]}
          </span>
        </div>
        {count != null && (
          <span className="text-[10px] text-text-disabled bg-surface-2 px-[5px] py-px rounded-full">
            {count}
          </span>
        )}
      </div>
      {children}
      <button
        onClick={onAdd}
        className="flex items-center gap-[5px] px-1 py-1.5 text-[12px] text-text-disabled hover:text-text-muted hover:bg-surface-1 rounded-[4px] transition-colors duration-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
      >
        <Plus size={14} />
        Add task
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────
// 9. MemberRow — members table row
// ─────────────────────────────────────────────
type MemberRole = "owner" | "admin" | "member" | "viewer";

const ROLE_CLASS: Record<MemberRole, string> = {
  owner: "bg-danger/12 text-danger",
  admin: "bg-info/12 text-info",
  member: "bg-surface-3 text-text-muted border border-border",
  viewer: "bg-surface-2 text-text-disabled border border-border",
};

interface MemberRowProps {
  name: string;
  username: string;
  role: MemberRole;
  joinedDate: string;
  avatarColor?: string;
  onAction?: () => void;
}

function MemberRow({
  name,
  username,
  role,
  joinedDate,
  avatarColor,
  onAction,
}: MemberRowProps) {
  return (
    <div
      className="grid items-center gap-2 px-2.5 py-[7px] rounded-[5px] hover:bg-surface-1 transition-colors"
      style={{ gridTemplateColumns: "1fr 100px 80px 40px" }}
    >
      <div className="flex items-center gap-2 min-w-0">
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-medium text-white flex-shrink-0"
          style={{ background: avatarColor ?? "var(--accent)" }}
        >
          {name[0].toUpperCase()}
        </div>
        <div className="min-w-0">
          <p className="text-[12px] font-medium text-text truncate">{name}</p>
          <p className="text-[11px] text-text-muted">@{username}</p>
        </div>
      </div>
      <div>
        <span
          className={[
            "text-[10px] font-medium px-2 py-0.5 rounded-full",
            ROLE_CLASS[role],
          ].join(" ")}
        >
          {role}
        </span>
      </div>
      <p className="text-[11px] text-text-muted">{joinedDate}</p>
      <button
        onClick={onAction}
        aria-label={`Actions for ${name}`}
        className="text-text-muted hover:text-text-secondary transition-colors p-1 rounded focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="5" r="1.5" />
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="12" cy="19" r="1.5" />
        </svg>
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────
// 10. SettingsRow — label + control pair
// ─────────────────────────────────────────────
interface SettingsRowProps {
  label: string;
  description?: string;
  danger?: boolean;
  children: React.ReactNode;
}

function SettingsRow({
  label,
  description,
  danger,
  children,
}: SettingsRowProps) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-surface-1 last:border-none gap-4">
      <div className="min-w-0">
        <p
          className={[
            "text-[12px]",
            danger ? "text-danger" : "text-text-secondary",
          ].join(" ")}
        >
          {label}
        </p>
        {description && (
          <p className="text-[11px] text-text-muted mt-px">{description}</p>
        )}
      </div>
      <div className="flex-shrink-0">{children}</div>
    </div>
  );
}

// ─────────────────────────────────────────────
// 11. MessageBubble — chat message
// ─────────────────────────────────────────────
interface TaskEmbed {
  title: string;
  status: string;
  priority: string;
}

interface MessageBubbleProps {
  authorName: string;
  authorColor?: string;
  timestamp: string;
  content: string;
  taskEmbed?: TaskEmbed;
  isTyping?: boolean;
  compact?: boolean;
}

function MessageBubble({
  authorName,
  authorColor,
  timestamp,
  content,
  taskEmbed,
  compact = false,
}: MessageBubbleProps) {
  return (
    <div className="flex gap-2.5 group">
      {compact ? (
        <div className="w-7 flex-shrink-0" aria-hidden="true" />
      ) : (
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-medium text-white flex-shrink-0 mt-0.5"
          style={{ background: authorColor ?? "var(--accent)" }}
        >
          {authorName[0].toUpperCase()}
        </div>
      )}
      <div className="flex-1 min-w-0">
        {!compact && (
          <div className="flex items-baseline gap-1.5 mb-0.5">
            <span className="text-[12px] font-medium text-text">
              {authorName}
            </span>
            <span className="text-[11px] text-text-disabled opacity-0 group-hover:opacity-100 transition-opacity">
              {timestamp}
            </span>
          </div>
        )}
        {compact && (
          <span className="text-[11px] text-text-disabled opacity-0 group-hover:opacity-100 transition-opacity float-right ml-2">
            {timestamp}
          </span>
        )}
        <p
          className="text-[13px] text-text-secondary leading-[1.55]"
          dangerouslySetInnerHTML={{
            __html: content.replace(
              /`([^`]+)`/g,
              '<code style="background:var(--surface-2);border:0.5px solid var(--border);padding:1px 4px;border-radius:3px;font-size:11px;color:var(--accent-soft);font-family:var(--font-mono)">$1</code>',
            ),
          }}
        />
        {taskEmbed && (
          <div className="mt-1.5 bg-surface-1 border-l-2 border-l-accent rounded-none rounded-r-[4px] px-2.5 py-[7px]">
            <p className="text-[10px] text-text-muted mb-0.5">Task</p>
            <p className="text-[12px] font-medium text-text">
              {taskEmbed.title}
            </p>
            <div className="flex gap-1.5 mt-[5px]">
              <span className="text-[10px] px-[7px] py-px rounded-full bg-info/10 text-info">
                {taskEmbed.status}
              </span>
              <span className="text-[10px] px-[7px] py-px rounded-full bg-danger/10 text-danger">
                {taskEmbed.priority}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// 12. TypingIndicator — animated dots
// ─────────────────────────────────────────────
function TypingIndicator({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-1.5 px-2 py-1">
      <div className="flex gap-0.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1 h-1 rounded-full bg-text-muted animate-bounce"
            style={{
              animationDelay: `${i * 0.15}s`,
              animationDuration: "0.8s",
            }}
          />
        ))}
      </div>
      <span className="text-[11px] text-text-muted italic">
        {name} is typing...
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────
// 13. ChatInput — message compose bar
// ─────────────────────────────────────────────
interface ChatInputProps {
  channelName: string;
  onSend?: (value: string) => void;
}

function ChatInput({ channelName, onSend }: ChatInputProps) {
  const [value, setValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey && value.trim()) {
      e.preventDefault();
      onSend?.(value.trim());
      setValue("");
    }
  };

  return (
    <div className="px-3.5 py-2 border-t border-border">
      <div className="flex items-center gap-1.5 bg-surface-2 border border-border rounded-[6px] px-2.5 py-1.5">
        <button
          aria-label="Attach file"
          className="text-text-muted hover:text-text-secondary transition-colors p-0.5 flex-shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded"
        >
          <Plus size={15} />
        </button>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={`Message #${channelName}`}
          className="flex-1 bg-transparent outline-none text-[13px] text-text placeholder:text-text-disabled min-w-0"
        />
        <button
          aria-label="Send message"
          onClick={() => {
            if (value.trim()) {
              onSend?.(value.trim());
              setValue("");
            }
          }}
          className={[
            "text-text-muted transition-colors p-0.5 flex-shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded",
            value.trim() ? "text-accent hover:text-accent-hover" : "",
          ].join(" ")}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// 14. MainHeader — top bar of main content area
// ─────────────────────────────────────────────
interface MainHeaderProps {
  icon: React.ElementType;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

function MainHeader({
  icon: Icon,
  title,
  subtitle,
  children,
}: MainHeaderProps) {
  return (
    <div className="flex items-center gap-2 px-3.5 py-[9px] border-b border-border min-h-[40px]">
      <Icon
        size={15}
        className="text-text-muted flex-shrink-0"
        aria-hidden="true"
      />
      <span className="text-[13px] font-medium text-text">{title}</span>
      {subtitle && (
        <>
          <span className="text-[12px] text-border-strong">·</span>
          <span className="text-[12px] text-text-muted truncate">
            {subtitle}
          </span>
        </>
      )}
      {children && (
        <div className="ml-auto flex items-center gap-2 flex-shrink-0">
          {children}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// 15. UserFooter — bottom of sidebar
// ─────────────────────────────────────────────
interface UserFooterProps {
  name: string;
  avatarColor?: string;
  online?: boolean;
}

function UserFooter({ name, avatarColor, online = true }: UserFooterProps) {
  return (
    <div className="mt-auto px-2 py-2 border-t border-border flex items-center gap-2">
      <div className="relative flex-shrink-0">
        <div
          className="w-[26px] h-[26px] rounded-full flex items-center justify-center text-[10px] font-medium text-white"
          style={{ background: avatarColor ?? "var(--accent)" }}
        >
          {name[0].toUpperCase()}
        </div>
        <span
          className={[
            "absolute bottom-[-1px] right-[-1px] w-2 h-2 rounded-full border-2 border-surface-0",
            online ? "bg-success" : "bg-surface-3",
          ].join(" ")}
        />
      </div>
      <span className="text-[12px] text-text-secondary flex-1 truncate">
        {name}
      </span>
      <div className="flex gap-1">
        <button
          aria-label="Mute microphone"
          className="text-text-muted hover:text-text-secondary transition-colors p-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" y1="19" x2="12" y2="23" />
            <line x1="8" y1="23" x2="16" y2="23" />
          </svg>
        </button>
        <button
          aria-label="User settings"
          className="text-text-muted hover:text-text-secondary transition-colors p-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// EXPORTS
// ─────────────────────────────────────────────
export {
  Toggle,
  TextDivider,
  CampIconButton,
  CampAddButton,
  ChannelItem,
  SidebarSection,
  SidebarNavItem,
  TaskCard,
  KanbanColumn,
  MemberRow,
  SettingsRow,
  MessageBubble,
  TypingIndicator,
  ChatInput,
  MainHeader,
  UserFooter,
};

export type {
  ToggleProps,
  CampIconButtonProps,
  ChannelItemProps,
  ChannelType,
  SidebarSectionProps,
  SidebarNavItemProps,
  TaskCardProps,
  KanbanColumnProps,
  ColumnStatus,
  MemberRowProps,
  MemberRole,
  SettingsRowProps,
  MessageBubbleProps,
  ChatInputProps,
  MainHeaderProps,
  UserFooterProps,
  Priority,
  TaskStatus,
};
