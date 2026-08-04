"use client";

import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import Link from "next/link";
import { Tent } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/utils/cn";

const NAV_LINKS = [
  { name: "Features", href: "#features" },
  { name: "About", href: "#about" },
  { name: "Pricing", href: "#pricing", badge: "Coming Soon" },
  { name: "Community", href: "#community" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border py-4"
          : "bg-transparent py-6"
      )}
    >
      <Container className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-text hover:text-accent transition-colors">
          <Tent size={24} className="text-accent" />
          <span className="font-bold text-xl tracking-tight">Camp</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-text transition-colors flex items-center gap-2"
            >
              {link.name}
              {link.badge && (
                <span className="text-[10px] uppercase tracking-wider font-bold bg-surface-2 text-text-muted px-2 py-0.5 rounded-full border border-border">
                  {link.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-text-secondary hover:text-text hidden sm:block">
            Sign In
          </Link>
          <Button variant="primary" size="sm">
            Get Started
          </Button>
        </div>
      </Container>
    </header>
  );
}
