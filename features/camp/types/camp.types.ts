export enum Visibility {
  PUBLIC,
  PRIVATE,
  INVITE_ONLY,
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
  name: string;
  slug: string;
  description: string;
  avatarUrl?: string;
  visibility: Visibility;
  ownerId: string;
  tags: string[];
  memberCount: number;
  membersIds: string[];
  createdAt: Date;
  updatedAt: Date;
  // color: string; // TODO: save color also at the time of creation of a camp
}

export interface Channel {
  id: string;
  name: string;
  type: "text" | "voice" | "announcement";
  description?: string;
  unreadCount?: number;
}
