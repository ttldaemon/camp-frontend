import { Channel } from "@/features/camp/types/camp.types";


export const CHANNELS: Channel[] = [
  {
    id: "general",
    name: "general",
    type: "text",
    description: "Team-wide updates and async standups",
    unreadCount: 3,
  },
  {
    id: "dev-chat",
    name: "dev-chat",
    type: "text",
    description: "Implementation details and PR reviews",
  },
  {
    id: "voice-lounge",
    name: "voice-lounge",
    type: "voice",
  },
  {
    id: "announcements",
    name: "announcements",
    type: "announcement",
  },
];

export const PROJECT_CHANNELS: Channel[] = [
  { id: "camp-frontend", name: "camp-frontend", type: "text" },
  { id: "camp-api", name: "camp-api", type: "text", unreadCount: 1 },
];

export const DISCOVER_CAMPS = [
  {
    id: "d1",
    slug: "backend-guild",
    name: "Backend Guild",
    description: "Rust, Go, and distributed systems builders shipping open tooling together.",
    tags: ["Backend", "Open Source"],
    members: 142,
    joined: true,
    color: "#5282FF",
    initials: "BG",
  },
  {
    id: "d2",
    slug: "frontend-friends",
    name: "Frontend Friends",
    description: "Design systems, React, and performance nerds from college hackathons.",
    tags: ["Frontend", "Hackathon"],
    members: 89,
    joined: false,
    color: "#FF4D2E",
    initials: "FF",
  },
  {
    id: "d3",
    slug: "ml-lab",
    name: "ML Lab",
    description: "Fine-tuning, evals, and shipping small models to production.",
    tags: ["ML/AI"],
    members: 56,
    joined: false,
    color: "#A78BFA",
    initials: "ML",
  },
  {
    id: "d4",
    slug: "kiit-devs",
    name: "KIIT Devs",
    description: "Campus dev community — projects, internships, and weekend builds.",
    tags: ["Hackathon", "Frontend"],
    members: 210,
    joined: true,
    color: "#34D399",
    initials: "KD",
  },
  {
    id: "d5",
    slug: "nit-rourkela-oss",
    name: "NIT Rourkela OSS",
    description: "Contributors coordinating GSoC and semester-long open source sprints.",
    tags: ["Open Source", "Backend"],
    members: 74,
    joined: false,
    color: "#FFBE32",
    initials: "NR",
  },
  {
    id: "d6",
    slug: "camp-builders",
    name: "Camp Builders",
    description: "Dogfooding Camp itself — feedback, bugs, and feature requests.",
    tags: ["Frontend", "Open Source"],
    members: 33,
    joined: false,
    color: "#FF6B4A",
    initials: "CB",
  },
];
