import { AppShell } from "@/components/app/AppShell";
import { AuthGuard } from "@/components/wrappers/AuthGuard";

export default function AppGroupLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  return <AuthGuard><AppShell>{children}</AppShell></AuthGuard> ;
}
