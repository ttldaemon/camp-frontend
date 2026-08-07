"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CampSidebar } from "@/components/app/CampSidebar";
import { ChatAside } from "@/components/app/ChatAside";
import { CampIconButton, CampAddButton } from "@/components/ui/camp-components";
import { useCampStore } from "@/store/useCampStore";
import { useGetCamps } from "@/features/camp/hooks/camp.hooks";
import { Camp } from "@/features/camp/types/camp.types";
import { getInitials } from "@/features/camp/utils/camp.utils";
import { useMe } from "@/features/auth/hooks/auth.hooks";

function showAside(pathname: string): boolean {
  if (pathname.startsWith("/discover")) return false;
  if (pathname.includes("/tasks")) return false;
  if (pathname.includes("/members")) return false;
  if (pathname.includes("/settings")) return false;
  return pathname.includes("/chat/");
}

function campSlugFromPath(pathname: string): string | undefined {
  const m = pathname.match(/^\/camps\/([^/]+)/);
  return m?.[1];
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const activeCamp = useCampStore((s) => s.activeCamp);
  const slug = campSlugFromPath(pathname) ?? activeCamp?.slug;
  const aside = showAside(pathname);

  const { data: user } = useMe();
  const userId = user?.user.id;
  const { data: USER_CAMPS } = useGetCamps(userId);

  console.log(USER_CAMPS);

  return (
    <div className="h-screen flex overflow-hidden bg-background text-[13px] text-text-secondary leading-[1.55]">
      <nav
        className="w-14 shrink-0 flex flex-col items-center py-2 gap-1.5 bg-surface border-r border-border"
        aria-label="Camps"
      >
        {USER_CAMPS && USER_CAMPS.map((camp: Camp) => (
          <Link key={camp.id} href={`/camps/${camp.slug}/chat/general`}>
            <CampIconButton
              label={camp.name}
              initials={getInitials(camp.name)}
              // color={camp.color}
              active={slug === camp.slug}
              hasNotification={camp.slug === "hackathon-squad"}
            />
          </Link>
        ))}
        <div className="w-6 h-px bg-border my-1" />
        <Link href="/discover">
          <CampAddButton />
        </Link>
      </nav>

      <CampSidebar slug={slug} />

      <div className="flex-1 flex min-w-0 min-h-0">
        <main className="flex-1 flex flex-col min-w-0 min-h-0 bg-surface-1">
          {children}
        </main>
        {aside && <ChatAside />}
      </div>
    </div>
  );
}
