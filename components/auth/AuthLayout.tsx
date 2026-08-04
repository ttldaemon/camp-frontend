import Link from "next/link";
import { Check, Tent } from "lucide-react";
import { ReactNode } from "react";
import clsx from "clsx";

const FEATURES = [
  "Real-time chat per camp",
  "Task board with AI generation",
  "GitHub integration",
];

export function AuthBrandPanel({
  tagline,
  footer,
  children,
}: {
  tagline: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="hidden md:flex w-[240px] shrink-0 bg-surface-1 border-r border-border flex-col justify-between p-6">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <Tent size={20} className="text-accent shrink-0" aria-hidden />
          <span className="text-[15px] font-medium text-text">Camp</span>
        </div>
        <div className="text-[13px] text-text-muted leading-relaxed mb-6">
          {tagline}
        </div>
        {children ? (
          <div>{children}</div>
        ) : (
          <ul className="space-y-2.5">
            {FEATURES.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check size={14} className="text-accent shrink-0 mt-0.5" />
                <span className="text-[13px] text-text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <p className="text-[11px] text-text-disabled">
        {footer ?? "© 2025 Camp"}
      </p>
    </div>
  );
}

export function AuthFormPanel({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div className="flex-1 flex items-center justify-center p-4 bg-background min-h-screen md:min-h-0">
      <div className="w-full max-w-[360px]">{children}</div>
    </div>
  );
}

export function AuthFooterLink({
  className,
  children,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`${clsx("text-center text-[12px] text-text-muted mt-4", className)}`}
    >
      {children}
    </p>
  );
}

export function AuthLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-accent hover:text-accent-hover transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xs"
    >
      {children}
    </Link>
  );
}
