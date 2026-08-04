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
import { useLogin } from "@/features/auth/hooks/auth.hooks";
import OAuthBtn from "@/components/ui/OAuthBtn";

export default function LoginPage() {
  const router = useRouter();
  const { mutate, isPending } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    mutate({ email, password }, {
      onSuccess: () => {
        router.replace("/discover")
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background">
      <AuthBrandPanel tagline="Where dev teams sync, build, and ship together." />

      <div className="flex-1 flex items-center justify-center p-4 bg-background">
        <motion.div
          className="w-full"
          style={{ maxWidth: 360 }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-[20px] font-medium text-text mb-1">Welcome back</h1>
          <p className="text-[12px] text-text-muted mb-4">
            Sign in to your Camp account
          </p>

          <OAuthBtn>
            <Github />
            Continue with GitHub
          </OAuthBtn>

          <TextDivider label="or" />

          <form onSubmit={handleSubmit} className="space-y-3">
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
              Sign in
            </Button>
          </form>

          <AuthFooterLink className="flex justify-between">
            <span>
            No account? <AuthLink href="/register">Create one</AuthLink>
            </span>
             <AuthLink href="/forgot-password">Forgot password?</AuthLink>
          </AuthFooterLink>
        </motion.div>
      </div>
    </div>
  );
}
