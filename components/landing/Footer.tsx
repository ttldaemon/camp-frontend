import { Container } from "../ui/Container";
import Link from "next/link";
import { Tent } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface-1 border-t border-border py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 text-text hover:text-accent transition-colors">
              <Tent size={20} className="text-accent" />
              <span className="font-bold tracking-tight">Camp</span>
            </Link>
            <p className="text-sm text-text-muted max-w-xs">
              The modern collaboration platform built specifically for developer communities.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-text mb-4 text-sm">Product</h4>
            <ul className="space-y-3">
              <li><Link href="#features" className="text-sm text-text-secondary hover:text-text transition-colors">Features</Link></li>
              <li><Link href="#pricing" className="text-sm text-text-secondary hover:text-text transition-colors">Pricing</Link></li>
              <li><Link href="#" className="text-sm text-text-secondary hover:text-text transition-colors">Changelog</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-text mb-4 text-sm">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-text-secondary hover:text-text transition-colors">Documentation</Link></li>
              <li><Link href="#" className="text-sm text-text-secondary hover:text-text transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-sm text-text-secondary hover:text-text transition-colors">Community</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-text mb-4 text-sm">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-text-secondary hover:text-text transition-colors">Privacy</Link></li>
              <li><Link href="#" className="text-sm text-text-secondary hover:text-text transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} Camp Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-text-muted hover:text-text transition-colors">Twitter</a>
            <a href="#" className="text-text-muted hover:text-text transition-colors">GitHub</a>
            <a href="#" className="text-text-muted hover:text-text transition-colors">Discord</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
