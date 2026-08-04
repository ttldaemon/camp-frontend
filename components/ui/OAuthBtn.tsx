import { ReactNode } from "react";
import { Button } from "./Button";
import Github from "@/assets/Github";

export default function OAuthBtn({ children }: { children: ReactNode }) {
  return (
    <Button
      variant="secondary"
      className="w-full flex gap-3 items-center justify-center bg-white text-black hover:bg-white/80"
      type="button"
    >
      {children}
    </Button>
  );
}
