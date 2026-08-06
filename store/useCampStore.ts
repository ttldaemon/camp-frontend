import { Camp, Channel } from "@/features/camp/types/camp.types";
import { create } from "zustand";

export type ActivePage =
  | "chat"
  | "tasks"
  | "members"
  | "settings"
  | "discover";



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
