
export enum Visibility {
  PUBLIC, PRIVATE, INVITE_ONLY
}

export interface NewCamp {
  name: string;
  slug: string;
  description: string;
  avatarUrl?: string;
  visibility: Visibility;
  ownerId: string;
  tags: string[];
}

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