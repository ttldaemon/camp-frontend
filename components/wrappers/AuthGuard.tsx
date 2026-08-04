"use client";

import { useMe } from "@/features/auth/hooks/auth.hooks";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Loading from "../ui/Loading";
import { AxiosError } from "axios";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const { isPending, isError, error } = useMe();

  useEffect(() => {
    if (isPending) return;

    if (!isError) return;

    // only redirecting on 401 errors
    const axiosError = error as AxiosError

    if(axiosError.response?.status === 401) router.replace("/login")
    
    
  }, [isError, isPending, router, error]);

  if (isPending) {
    return (
      <div className="flex h-screen items-center justify-center">
        LOADING
      </div>
    );
  }

  if (isError) {
     return <div>Something went wrong.</div>;
   }

  return <div>{children}</div>;
}
