"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { getCampBySlug } from "@/lib/camp-mock-data";
import { useCampStore } from "@/store/useCampStore";

export default function CampSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const slug = params.slug as string;
  const setActiveCamp = useCampStore((s) => s.setActiveCamp);

  useEffect(() => {
    const camp = getCampBySlug(slug);
    if (camp) setActiveCamp(camp);
  }, [slug, setActiveCamp]);

  return children;
}
