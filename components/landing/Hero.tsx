import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden selection:bg-accent selection:text-white">
      {/* Absolute positioning background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] max-w-[1000px] opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--color-accent)_0%,transparent_50%)]" />
      </div>

      <Container>
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl lg:text-[80px] leading-[1.1] font-bold tracking-tighter text-text mb-8">
            The collaboration OS for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-text to-text-muted">
              developer communities
            </span>
          </h1>

          <p className="text-xl text-text-secondary leading-relaxed mb-12 max-w-2xl mx-auto tracking-tight">
            Camp unifies chat, issues, kanban boards, and documentation into a single, lightning-fast workspace. Built specifically for engineers.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-base shadow-[0_0_20px_rgba(255,77,46,0.3)] border border-accent-soft hover:shadow-[0_0_30px_rgba(255,77,46,0.5)] transition-all">
              Start building for free
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto h-12 px-8 text-base bg-surface-1 hover:bg-surface-2">
              Book a Demo
            </Button>
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div className="mt-24 relative max-w-6xl mx-auto perspective-1000">
          {/* Outer glow */}
          <div className="absolute -inset-1 bg-linear-to-b from-accent/20 to-transparent rounded-2xl blur-xl opacity-50" />

          <div className="relative rounded-2xl border border-border/50 bg-background shadow-2xl overflow-hidden flex flex-col h-[600px] ring-1 ring-white/5">
            {/* macOS-style Window controls */}
            <div className="bg-surface-1/80 backdrop-blur-md border-b border-border/50 h-12 flex items-center px-4 justify-between relative z-20">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF605C] transition-colors cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD44] transition-colors cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-[#00CA4E] transition-colors cursor-pointer" />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 bg-surface-2/50 border border-border/50 rounded-md text-xs font-medium text-text-muted">
                <span className="opacity-50">🔒</span> camp.dev/workspace
              </div>
              <div className="w-16" /> {/* Spacer for centering */}
            </div>

            <div className="flex flex-1 overflow-hidden relative z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]">
              {/* Sidebar */}
              <div className="w-64 border-r border-border/50 bg-surface-1/95 backdrop-blur flex flex-col pt-4">
                <div className="px-4 mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-accent rounded text-white flex items-center justify-center font-bold text-xs">C</div>
                    <span className="font-semibold text-sm">Frontend Team</span>
                  </div>
                </div>

                <div className="px-4 text-[11px] font-bold text-text-muted uppercase tracking-wider mb-2">Favorites</div>
                <div className="px-2 space-y-0.5 mb-6">
                  <div className="px-2 py-1.5 bg-surface-2 rounded-md text-sm font-medium text-text flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-success" /> Issues
                  </div>
                  <div className="px-2 py-1.5 text-sm font-medium text-text-secondary hover:text-text hover:bg-surface-2 rounded-md flex items-center gap-2 transition-colors">
                    <span className="w-2 h-2 rounded-full bg-info" /> Discussions
                  </div>
                </div>

                <div className="px-4 text-[11px] font-bold text-text-muted uppercase tracking-wider mb-2">Channels</div>
                <div className="px-2 space-y-0.5">
                  <div className="px-2 py-1.5 text-sm font-medium text-text-secondary hover:text-text hover:bg-surface-2 rounded-md flex items-center gap-2 transition-colors">
                    <span className="text-text-muted">#</span> general
                  </div>
                  <div className="px-2 py-1.5 text-sm font-medium text-text-secondary hover:text-text hover:bg-surface-2 rounded-md flex items-center gap-2 transition-colors">
                    <span className="text-text-muted">#</span> announcements
                  </div>
                  <div className="px-2 py-1.5 text-sm font-medium text-text-secondary hover:text-text hover:bg-surface-2 rounded-md flex items-center gap-2 transition-colors">
                    <span className="text-text-muted">#</span> random
                  </div>
                </div>
              </div>

              {/* Main Content Pane */}
              <div className="flex-1 flex flex-col bg-background/50 backdrop-blur-sm">
                <div className="h-14 border-b border-border/50 flex items-center px-6 justify-between">
                  <div className="font-semibold text-text flex items-center gap-2">
                    Active Sprint <span className="text-text-muted font-normal text-xs px-2 py-0.5 border border-border/50 rounded-full">v2.4.0</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-surface-3 border border-border ring-2 ring-background z-10" />
                    <div className="w-6 h-6 rounded-full bg-surface-2 border border-border ring-2 ring-background -ml-2 z-20" />
                    <div className="w-6 h-6 rounded-full bg-surface-1 border border-border ring-2 ring-background -ml-2 z-30 flex items-center justify-center text-[10px] text-text-muted">+3</div>
                  </div>
                </div>

                <div className="flex-1 p-6 overflow-hidden flex gap-4">
                  {/* Kanban Column */}
                  <div className="flex-1 max-w-sm flex flex-col gap-3">
                    <div className="text-xs font-bold text-text-muted uppercase tracking-wider px-1">To Do</div>
                    <div className="bg-surface-1 border border-border/50 rounded-xl p-4 shadow-sm hover:border-border transition-colors cursor-pointer">
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-text-muted text-xs font-mono">CAMP-101</span>
                        <div className="w-5 h-5 rounded-full bg-surface-3" />
                      </div>
                      <p className="text-sm font-medium text-text mb-3">Implement dark mode toggle in navbar</p>
                      <div className="flex gap-2">
                        <span className="text-[10px] px-2 py-1 bg-surface-2 border border-border/50 rounded text-text-secondary">Frontend</span>
                      </div>
                    </div>
                    <div className="bg-surface-1 border border-border/50 rounded-xl p-4 shadow-sm hover:border-border transition-colors cursor-pointer">
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-text-muted text-xs font-mono">CAMP-102</span>
                        <div className="w-5 h-5 rounded-full bg-surface-3" />
                      </div>
                      <p className="text-sm font-medium text-text mb-3">Fix authentication race condition</p>
                      <div className="flex gap-2">
                        <span className="text-[10px] px-2 py-1 bg-danger/10 border border-danger/20 rounded text-danger">Bug</span>
                        <span className="text-[10px] px-2 py-1 bg-surface-2 border border-border/50 rounded text-text-secondary">Backend</span>
                      </div>
                    </div>
                  </div>

                  {/* Kanban Column */}
                  <div className="flex-1 max-w-sm flex flex-col gap-3">
                    <div className="text-xs font-bold text-text-muted uppercase tracking-wider px-1 flex items-center gap-2">
                      In Progress <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    </div>
                    <div className="bg-surface-1 border border-border/50 rounded-xl p-4 shadow-sm hover:border-border transition-colors cursor-pointer ring-1 ring-accent/20 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-text-muted text-xs font-mono">CAMP-098</span>
                        <div className="w-5 h-5 rounded-full bg-accent/20 text-accent flex items-center justify-center text-[10px] font-bold">You</div>
                      </div>
                      <p className="text-sm font-medium text-text mb-3">Revise landing page UI for premium SaaS look</p>
                      <div className="flex gap-2">
                        <span className="text-[10px] px-2 py-1 bg-info/10 border border-info/20 rounded text-info">Design</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
