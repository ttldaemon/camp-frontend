import { cn } from "@/utils/cn";
import { ReactNode } from "react";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn(
      "relative rounded-2xl border border-border bg-surface-1/50 backdrop-blur-sm overflow-hidden transition-colors hover:border-border/80", 
      className
    )}>
      <div className="absolute inset-0 bg-linear-to-b from-surface-3/10 to-transparent pointer-events-none" />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

export function CardHeader({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("flex flex-col space-y-2 p-6 md:p-8", className)}>{children}</div>;
}

export function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <h3 className={cn("font-semibold text-xl tracking-tight text-text", className)}>{children}</h3>;
}

export function CardDescription({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("text-base text-text-secondary leading-relaxed", className)}>{children}</p>;
}

export function CardContent({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("p-6 md:p-8 pt-0", className)}>{children}</div>;
}
