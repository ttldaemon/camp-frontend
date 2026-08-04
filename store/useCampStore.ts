import { create } from "zustand";

export type ActivePage =
  | "chat"
  | "tasks"
  | "members"
  | "settings"
  | "discover";

export interface Camp {
  id: string;
  slug: string;
  name: string;
  memberCount: number;
  initials: string;
  color: string;
}

export interface Channel {
  id: string;
  name: string;
  type: "text" | "voice" | "announcement";
  description?: string;
  unreadCount?: number;
}

interface CampStore {
  activeCamp: Camp | null;
  activeChannel: Channel | null;
  activePage: ActivePage;
  sidebarCollapsed: boolean;
  setActiveCamp: (camp: Camp | null) => void;
  setActiveChannel: (channel: Channel | null) => void;
  setActivePage: (page: ActivePage) => void;
  toggleSidebar: () => void;
}

export const useCampStore = create<CampStore>((set) => ({
  activeCamp: null,
  activeChannel: null,
  activePage: "discover",
  sidebarCollapsed: false,
  setActiveCamp: (camp) => set({ activeCamp: camp }),
  setActiveChannel: (channel) => set({ activeChannel: channel }),
  setActivePage: (page) => set({ activePage: page }),
  toggleSidebar: () =>
    set((s) => ({ sidebarCollapsed: !s.sidebarCollapsed })),
}));
