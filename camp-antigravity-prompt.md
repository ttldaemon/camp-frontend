# Camp — Frontend Generation Prompt

## Project Overview

You are building the frontend for **Camp** — a developer community collaboration platform. Think Discord's layout density + Notion's clean surfaces + a dark developer tool aesthetic. Camp is where small dev teams (hackathon squads, college project groups, open source contributors) chat, manage tasks, and ship together.

The product has these core entities:
- **Camp** — a community (like a Discord server or a Slack workspace)
- **Channel** — a text channel inside a camp (like Discord channels)
- **Task** — a work item inside a camp project (like a Jira issue)
- **Member** — a user inside a camp, with a role (OWNER, ADMIN, MEMBER, VIEWER)

---

## Tech Stack

- **Framework:** Next.js 16 App Router (`app/` folder)
- **Styling:** Tailwind CSS v4 with custom CSS variables (see design tokens below)
- **Icons:** `lucide-react` — use the `Camp` icon from lucide-react for the logo everywhere
- **Animation:** `motion/react` (Framer Motion v11+) — subtle only, no over-animation
- **State:** Zustand
- **HTTP:** Axios

---

## Design Tokens (globals.css — already set up, use these everywhere)

```css
--background: #000000;       /* OLED black page base */
--surface: #080808;          /* section backgrounds */
--surface-1: #0d0d0d;        /* card / input backgrounds */
--surface-2: #131313;        /* hover states, secondary surfaces */
--surface-3: #1c1c1c;        /* borders active, selected items */
--border: #2a2a2a;           /* all border colors */

--accent: #FF4D2E;           /* primary coral — CTAs, active states */
--accent-hover: #FF6B4A;
--accent-soft: #FF8C73;
--accent-vivid: #FF2200;
--accent-tint: rgba(255,77,46,0.15);

--text: #F1F1F1;             /* primary text */
--text-secondary: #AAAAAA;   /* body / descriptions */
--text-muted: #555555;       /* labels, placeholders */
--text-disabled: #333333;    /* disabled states */

--success: #34D399;
--warning: #FFBE32;
--danger: #FF4D2E;
--info: #5282FF;
--purple: #A78BFA;
```

**Tailwind usage:** `bg-background`, `bg-surface`, `bg-surface-1`, `bg-surface-2`, `bg-surface-3`, `border-border`, `text-text`, `text-text-secondary`, `text-text-muted`, `bg-accent`, `text-accent`, `text-success`, `text-danger`, `text-warning`, `text-info`.

---

## Typography Rules

- **Font:** Inter (already loaded via `next/font/google`)
- **Body text:** 13px, `text-text-secondary`, line-height 1.55
- **Labels:** 11px, uppercase, `tracking-[.06em]`, `text-text-muted`
- **Component labels:** 12px, `text-text-secondary`
- **Headings inside app:** 13–14px, `font-medium`, `text-text`
- **Auth headings:** 20px, `font-medium`
- **Never** use default browser 16px for body text inside the app shell
- **Monospace:** `font-mono` for code snippets, timestamps in terminal views

---

## Existing Components (already built, import from `@/components/ui`)

```ts
Button         // variants: primary, secondary, ghost, danger, link | sizes: xs, sm, md, lg, icon
Input          // props: label, hint, error, leftIcon, rightIcon | sizes: sm, md, lg
Textarea       // props: label, hint, error
Badge          // variants: default, accent, danger, warning, success, info, purple
               // shorthand props: status="in progress" | priority="high"
Card           // variants: default, elevated, flat, accent, ghost
CardHeader, CardTitle, CardDescription, CardFooter, CardStat
Avatar         // props: name, src, presence, size | auto-generates color from name
AvatarGroup    // props: users[], max, size
```

## New Components (already built, import from `@/components/ui/camp-components`)

```ts
Toggle              // props: checked, onChange, disabled — on/off switch
TextDivider         // props: label — "or" divider for auth forms
CampIconButton      // props: label, initials, color, active, hasNotification, onClick
CampAddButton       // no props — "+" button at bottom of camp rail
ChannelItem         // props: name, type (text|voice|announcement), active, unreadCount, onClick
SidebarSection      // props: label, onAdd, children — collapsible group header
SidebarNavItem      // props: icon, label, active, danger, onClick
TaskCard            // props: title, priority, status, assigneeName, assigneeColor, dueDate, dueSoon, linked, onClick
KanbanColumn        // props: status (todo|in_progress|review|done), count, onAdd, children
MemberRow           // props: name, username, role, joinedDate, avatarColor, onAction
SettingsRow         // props: label, description, danger, children
MessageBubble       // props: authorName, authorColor, timestamp, content, taskEmbed
TypingIndicator     // props: name
ChatInput           // props: channelName, onSend
MainHeader          // props: icon, title, subtitle, children (right slot)
UserFooter          // props: name, avatarColor, online
```

---

## App Shell Layout

**Every page inside the app (after login) uses this 4-column layout:**

```
┌──────┬─────────────┬──────────────────────────┬─────────────┐
│ 56px │   200px     │         flex-1            │   180px     │
│ Camp │  Sidebar    │      Main content          │   Aside     │
│ rail │  (channels) │                            │  (members   │
│      │             │                            │  + tasks)   │
└──────┴─────────────┴──────────────────────────┴─────────────┘
```

**Column 1 — Camp rail (56px, `bg-[#050505]`):**
- Vertical stack of `CampIconButton` components (one per camp the user belongs to)
- A divider line
- `CampAddButton` at the bottom to create/discover camps
- All items center-aligned

**Column 2 — Sidebar (200px, `bg-surface`):**
- Top: camp name (13px, `font-medium`) + member count + chevron (for camp switcher dropdown)
- `SidebarSection` groups: "Channels" (with + button), "Projects" (with + button), "Camp"
- `ChannelItem` list inside each section
- Bottom: `UserFooter`

**Column 3 — Main content (`flex-1`, `bg-[#0a0a0a]`):**
- Top: `MainHeader` with icon, title, subtitle, right actions
- Body: page-specific content (chat messages, kanban board, members table, settings)

**Column 4 — Aside (180px, `bg-surface`):**
- Online members list (label "Online — N", then `member-row` items with presence dots)
- Offline members (dimmed)
- Recent tasks list (3 mini task cards)
- **Hide this column** on: Settings page, Members page (use full width for main content instead)

**Shell must:**
- Never re-mount between page navigations (layout persists, only main + aside swaps)
- Be implemented as `app/(app)/layout.tsx`
- Use Zustand store for `activeCamp`, `activeChannel`, `activePage`

---

## File Structure

```
app/
  (auth)/
    login/
      page.tsx
    register/
      page.tsx
  (app)/
    layout.tsx              ← 4-column shell
    discover/
      page.tsx              ← camp discovery
    camps/
      [slug]/
        layout.tsx          ← sets active camp
        chat/
          [channelId]/
            page.tsx        ← chat view
        tasks/
          page.tsx          ← kanban board
        members/
          page.tsx          ← members table
        settings/
          page.tsx          ← settings

components/
  ui/
    Button.tsx
    Input.tsx
    Badge.tsx
    Card.tsx
    Avatar.tsx
    index.ts
    camp-components.tsx     ← all new components above

store/
  useCampStore.ts           ← Zustand store
```

---

## Page 1 — Login (`app/(auth)/login/page.tsx`)

**Layout:** Full screen, centered, two-column card on desktop, single column on mobile.

**Left panel (240px, `bg-surface-1`, hidden on mobile):**
- Top: Camp logo (lucide-react `Camp` icon, 20px, coral) + "Camp" wordmark (15px, `font-medium`)
- Tagline: "Where dev teams sync, build, and ship together." (13px, `text-text-muted`)
- Three feature bullets with coral checkmarks:
  - "Real-time chat per camp"
  - "Task board with AI generation"
  - "GitHub integration"
- Bottom: copyright "© 2025 Camp" (11px, `text-text-disabled`)

**Right panel (flex-1, `bg-background`):**
- Title: "Welcome back" (20px, `font-medium`, `text-text`)
- Subtitle: "Sign in to your Camp account" (12px, `text-text-muted`)
- GitHub OAuth button using `Button` variant="secondary" full-width with `Github` lucide icon
- `TextDivider` with label "or"
- `Input` label="Email" type="email" placeholder="you@example.com"
- `Input` label="Password" type="password" placeholder="••••••••"
- `Button` variant="primary" full-width text="Sign in"
- Footer: "No account? Create one · Forgot password?" (12px, links in `text-accent`)

**Motion:** Card fades up on mount (`initial: {opacity:0, y:16}`, `animate: {opacity:1, y:0}`, duration 0.4s)

---

## Page 2 — Register (`app/(auth)/register/page.tsx`)

Same two-column layout as Login.

**Left panel:**
- Same Camp logo + wordmark
- "Join 2,000+ developers already building on Camp." (13px)
- "Used by teams at" label + list: "KIIT · NIT Rourkela · GSSoC Orgs"

**Right panel:**
- Title: "Create your account"
- Subtitle: "Free forever for individuals"
- GitHub OAuth button (same as login)
- `TextDivider`
- Two-column grid (gap-2): `Input` label="Full name" + `Input` label="Username"
- `Input` label="Email"
- `Input` label="Password" hint="Minimum 8 characters"
- `Button` variant="primary" full-width text="Create account"
- Footer: "Already have an account? Sign in"

---

## Page 3 — Camp Discovery (`app/(app)/discover/page.tsx`)

Uses app shell but **no aside column** — main content takes full remaining width.

**MainHeader:** `Compass` icon, title="Discover camps", right slot has search input + "New camp" Button variant="primary" size="sm"

**Below header:**
- Filter pills row (horizontal scroll on mobile): "All", "Backend", "Frontend", "ML/AI", "Open Source", "Hackathon" — pill style: selected = `bg-accent text-white`, unselected = `bg-surface-2 border border-border text-text-muted`

**Camp grid (3 cols desktop, 2 cols tablet, 1 col mobile, gap-2):**
Each camp card is a `Card` variant="default" hoverable=true with:
- Top row: colored initial avatar (32px, rounded-[8px]) + joined/join button right-aligned
  - Joined: `Badge` variant="accent" text="joined"
  - Not joined: `Button` variant="ghost" size="xs" text="Join"
- Camp name: 12px, `font-medium`, `text-text`
- Description: 11px, `text-text-muted`, 2 lines max, truncated
- Bottom row: tag pills (10px, `bg-surface-2 border-border`) left + member count with `Users` icon right

**Empty state:** If no results, centered illustration (just a `Camp` lucide icon, 48px, `text-text-disabled`) + "No camps found" (14px) + "Try a different filter" (12px, muted)

---

## Page 4 — Chat View (`app/(app)/camps/[slug]/chat/[channelId]/page.tsx`)

Full app shell with all 4 columns.

**Sidebar active item:** The current channel's `ChannelItem` has `active=true`

**MainHeader:** `Hash` icon, title=channelName, subtitle="channel description", right slot has `Search`, divider, `Users`, `Bell` icon buttons (all `text-text-muted`, 15px, hover to `text-text`)

**Messages area (flex-1, overflow-y-auto, padding 12px 14px):**
- Render `MessageBubble` components stacked vertically, gap-3
- If a message has a linked task, pass `taskEmbed` prop to `MessageBubble`
- Group consecutive messages from same author (within 5 minutes): hide avatar + name for follow-up messages, show time on hover only
- Date separator between days: centered line with date label (11px, `text-text-muted`, `bg-background` pill)
- Pinned message bar (if exists): coral left-border card at very top of messages area

**Typing indicator:** `TypingIndicator` component shown at bottom of messages area when someone is typing

**Bottom:** `ChatInput` component with channelName prop

**Aside column for chat:**
- "Online — N" section with member rows (22px avatar, presence dot, 12px name)
- "Offline — N" section (dimmed names)
- "Recent tasks" section with 3 mini task cards (11px title, status badge)

---

## Page 5 — Kanban Board (`app/(app)/camps/[slug]/tasks/page.tsx`)

Full app shell. **No aside column** — board needs full horizontal space.

**MainHeader:** `LayoutKanban` icon, title="Task board", subtitle="project name", right slot has:
- `AvatarGroup` of assigned members (size="sm", max=4)
- Vertical divider
- `Button` variant="primary" size="sm" text="+ Task"
- `Filter` icon button
- `MoreHorizontal` icon button

**Board area (flex-1, overflow-x-auto, padding 10px 14px):**
- Horizontal flex, gap-2.5
- Four `KanbanColumn` components: `todo`, `in_progress`, `review`, `done`
- Each column contains `TaskCard` components stacked, gap-1.5
- `KanbanColumn` has onAdd handler that opens a quick-add input inline at the bottom
- `TaskCard` with `linked=true` gets coral left border (currently active/highlighted task)
- Done column: cards rendered at 60% opacity

**Quick-add input (inline, no modal):**
When "+ Add task" clicked inside a column, an inline input appears at the bottom of that column:
- `Input` size="sm" placeholder="Task title..." autoFocus
- Press Enter to create, Escape to cancel
- Uses `Button` size="xs" variant="primary" text="Add" + `Button` size="xs" variant="ghost" text="Cancel"

---

## Page 6 — Members (`app/(app)/camps/[slug]/members/page.tsx`)

Full app shell. **No aside column** — table uses full main width.

**MainHeader:** `Users` icon, title="Members", subtitle="N total", right slot has `Button` variant="primary" size="sm" text="Invite member" with `UserPlus` icon

**Below header (padding 14px):**

**Toolbar row:**
- Search: `Input` size="sm" leftIcon={Search} placeholder="Search members..." (flex-1)
- Role filter: native `<select>` styled with `bg-surface-1 border border-border rounded-sm text-[12px] text-text-secondary px-2 py-[5px]` options: All roles, Owner, Admin, Member, Viewer

**Table header row:**
- `grid-template-columns: 1fr 100px 80px 40px`
- Labels: "Member", "Role", "Joined", "" — all 10px uppercase `text-text-muted`
- `border-b border-border mb-1`

**Member rows:** `MemberRow` component for each member

**Pending invitations section (below table, margin-top 16px):**
- Label: "Pending invitations" (11px, uppercase, `text-text-muted`)
- Each pending invite: `bg-surface-1 border border-dashed border-border rounded-md` card with:
  - `Mail` icon (16px, `text-text-muted`)
  - Email address (12px, `text-text-secondary`)
  - "Sent N days ago" (11px, `text-text-muted`)
  - "Resend" `Button` variant="ghost" size="xs" margin-left auto

---

## Page 7 — Settings (`app/(app)/camps/[slug]/settings/page.tsx`)

Full app shell. **No aside column.**

**MainHeader:** `Settings` icon, title="Camp settings"

**Content area splits into two columns:**
```
┌─────────────┬──────────────────────────────┐
│   150px     │          flex-1              │
│  Settings   │       Settings body          │
│    nav      │                              │
└─────────────┴──────────────────────────────┘
```

**Settings nav (150px, border-right border-border):**
- Section label "General": `SidebarNavItem` for Overview (active), Permissions, Notifications
- Section label "Integrations": `SidebarNavItem` for GitHub (`Github` icon), Webhooks (`Webhook` icon)
- Section label "Danger zone": `SidebarNavItem` icon=`Trash2` label="Delete camp" danger=true

**Settings body (flex-1, padding 14px 16px, overflow-y-auto):**

Section: "Camp profile" (12px title, border-bottom border-border, mb-2.5)
- Avatar row: 52px circle avatar + two `Button` variant="secondary" size="xs" ("Upload image", "Remove")
- `SettingsRow` label="Camp name" → `Input` size="sm" value=campName
- `SettingsRow` label="Slug" description="camp.dev/c/[slug]" → `Input` size="sm" value=slug
- `SettingsRow` label="Visibility" description="Who can find and join" → `<select>` Public/Private/Invite only
- `Button` variant="primary" size="sm" text="Save changes" (right-aligned, margin-top 12px)

Section: "Notifications"
- `SettingsRow` label="Task assignments" description="Notify when assigned" → `Toggle`
- `SettingsRow` label="Mentions" description="Notify on @mention in chat" → `Toggle`
- `SettingsRow` label="Daily digest" description="AI summary of camp activity" → `Toggle`

Section: "Danger zone"
- `SettingsRow` label="Archive camp" description="Read-only, retains all data" → `Button` variant="danger" size="sm" text="Archive"
- `SettingsRow` label="Delete camp" description="Permanent, cannot be undone" danger=true → `Button` variant="danger" size="sm" text="Delete camp"

---

## Zustand Store (`store/useCampStore.ts`)

```ts
interface CampStore {
  activeCamp: Camp | null
  activeChannel: Channel | null
  activePage: 'chat' | 'tasks' | 'members' | 'settings' | 'discover'
  sidebarCollapsed: boolean
  setActiveCamp: (camp: Camp) => void
  setActiveChannel: (channel: Channel) => void
  setActivePage: (page: string) => void
  toggleSidebar: () => void
}
```

---

## Styling Rules (follow these strictly)

1. **No hard-coded hex colors** anywhere in component files — always use CSS variables via Tailwind tokens (`bg-accent` not `bg-[#FF4D2E]`)
2. **Exception:** Avatar background colors are JS-generated from name hash — inline `style` is acceptable only there
3. **All borders** use `border-border` — never custom border colors except accent borders (left-border on active/linked items)
4. **Font sizes** inside the app shell: never exceed 14px for UI chrome. Page headings in auth: max 20px
5. **Spacing:** 4px base unit. Use Tailwind spacing scale (p-1=4px, p-2=8px, p-3=12px, p-4=16px, p-5=20px, p-6=24px, p-8=32px)
6. **Border radius:** chips/pills=`rounded-xs` (4px), buttons=`rounded-sm` (6px), inputs=`rounded-md` (8px), cards=`rounded-lg` (10px), panels=`rounded-xl` (12px), avatars=`rounded-full`
7. **Scrollbars:** `scrollbar-thin` or custom CSS — 4px width, `bg-surface-3` thumb, transparent track
8. **Focus states:** All interactive elements must have `focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 focus-visible:ring-offset-background`
9. **Transitions:** `transition-colors duration-150` on all interactive color changes. No layout-affecting transitions except deliberate slide animations
10. **Motion:** Only use `motion/react` for: page entry fades (opacity+y, once), accordion expand/collapse (height), mobile menu (height). Never animate colors or borders

---

## API Integration Notes

- Base URL: `https://api.camp.dev/v1` (from env `NEXT_PUBLIC_API_URL`)
- All requests: `Authorization: Bearer {accessToken}` header
- Auth tokens stored: `accessToken` in memory (Zustand), `refreshToken` in HttpOnly cookie
- On 401: call `POST /auth/refresh`, retry original request once, then redirect to `/login`
- WebSocket: connect to `wss://api.camp.dev/ws` with STOMP protocol (`@stomp/stompjs`)

---

## Do Not

- Do not use any external component library (MUI, Chakra, shadcn, Radix) — only the custom components listed above
- Do not use `localStorage` or `sessionStorage` — tokens go in memory/cookies only
- Do not add gradients except where explicitly specified (auth left panel subtle gradient is fine)
- Do not add drop shadows — use borders for depth, not shadows
- Do not make the UI feel "web 2.0" — no heavy card shadows, no blue links, no rounded-2xl on everything
- Do not use emoji in the UI — use lucide-react icons only
- Do not add loading spinners everywhere — use skeleton loaders for data, inline spinner on buttons only
