"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  AuthBrandPanel,
  AuthFooterLink,
  AuthLink,
} from "@/components/auth/AuthLayout";
import Github from "@/assets/Github";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { TextDivider } from "@/components/ui/camp-components";
import { useRegister } from "@/features/auth/hooks/auth.hooks";
import OAuthBtn from "@/components/ui/OAuthBtn";

export default function RegisterPage() {
  const router = useRouter();
  const { mutate, isPending } = useRegister();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({ email, password, userName, displayName }, {
      onSuccess: () => {
        router.replace("/discover")
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background">
      <AuthBrandPanel
        tagline="Join 2,000+ developers already building on Camp."
        footer="© 2025 Camp"
      >
        <p className="text-[11px] uppercase tracking-[.06em] text-text-muted mb-2">
          Used by teams at
        </p>
        <p className="text-[13px] text-text-secondary">
          KIIT · NIT Rourkela · GSSoC Orgs
        </p>
      </AuthBrandPanel>

      <div className="flex-1 flex items-center justify-center p-4 bg-background">
        <motion.div
          className="w-full"
          style={{ maxWidth: 360 }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-[20px] font-medium text-text mb-1">
            Create your account
          </h1>
          <p className="text-[12px] text-text-muted mb-4">
            Free forever for individuals
          </p>

          <OAuthBtn>
            <Github />
            Continue with GitHub
          </OAuthBtn>

          <TextDivider label="or" />

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <Input
                label="Full name"
                placeholder="Alex Rivera"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                required
              />
              <Input
                label="Username"
                placeholder="alexr"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              hint="Minimum 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button
              type="submit"
              variant="primary"
              className="w-full"
              disabled={isPending}
            >
              Create account
            </Button>
          </form>

          <AuthFooterLink>
            Already have an account? <AuthLink href="/login">Sign in</AuthLink>
          </AuthFooterLink>
        </motion.div>
      </div>
    </div>
  );
}
