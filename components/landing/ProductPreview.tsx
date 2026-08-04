import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { MessageSquare, KanbanSquare, FileText, Settings, Hash, Search, Plus, Bell, GitBranch } from "lucide-react";

export function ProductPreview() {
  return (
    <Section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 blur-[120px] rounded-[100%] pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center rounded-full bg-surface-2 border border-border px-3 py-1 text-xs font-semibold tracking-wider text-text-secondary w-fit uppercase mb-6">
            The Experience
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-text mb-6 leading-[1.1]">
            A workspace you actually want to use.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
            Carefully crafted down to the pixel. Camp is designed to be lightning fast, fully keyboard accessible, and visually stunning.
          </p>
        </div>

        <div className="relative rounded-2xl border border-border/40 bg-surface/50 shadow-2xl p-2 md:p-3 overflow-hidden backdrop-blur-sm max-w-6xl mx-auto">
          {/* Inner window */}
          <div className="rounded-xl border border-border bg-background overflow-hidden shadow-inner flex flex-col h-[600px] md:h-[800px] relative">

            {/* Topbar */}
            <div className="h-14 border-b border-border bg-surface-1/90 backdrop-blur flex items-center justify-between px-4 sticky top-0 z-20">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-linear-to-br from-accent to-accent-hover rounded-md text-white font-bold flex items-center justify-center text-sm shadow-sm">C</div>
                  <div className="text-sm font-semibold text-text tracking-tight">Camp HQ</div>
                </div>
                <div className="h-4 w-px bg-border hidden md:block" />
                <div className="hidden md:flex items-center gap-1 bg-surface-2 hover:bg-surface-3 transition-colors px-2 py-1 rounded-md text-xs font-medium text-text-secondary cursor-pointer">
                  <KanbanSquare size={14} /> Roadmap
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-48 h-8 bg-surface-2 border border-border rounded-lg hidden md:flex items-center px-3 justify-between group cursor-pointer hover:border-border/80 transition-colors">
                  <div className="flex items-center gap-2 text-text-muted">
                    <Search size={14} />
                    <span className="text-xs">Search...</span>
                  </div>
                  <div className="flex gap-1">
                    <kbd className="text-[10px] px-1.5 py-0.5 bg-background rounded border border-border text-text-muted group-hover:text-text-secondary transition-colors">⌘</kbd>
                    <kbd className="text-[10px] px-1.5 py-0.5 bg-background rounded border border-border text-text-muted group-hover:text-text-secondary transition-colors">K</kbd>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-surface-2 border border-border flex items-center justify-center text-text-muted hover:text-text transition-colors cursor-pointer">
                  <Bell size={16} />
                </div>
              </div>
            </div>

            <div className="flex flex-1 overflow-hidden relative">
              {/* Sidebar */}
              <div className="w-64 border-r border-border bg-surface-1/50 flex flex-col p-4 shrink-0 overflow-y-auto">
                <div className="space-y-6">
                  {/* Section */}
                  <div>
                    <div className="text-[11px] font-bold text-text-muted uppercase tracking-wider mb-2 px-2 flex items-center justify-between">
                      Projects <Plus size={12} className="cursor-pointer hover:text-text" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="px-2 py-1.5 bg-surface-2/80 rounded-md text-sm font-medium text-text flex items-center justify-between group cursor-pointer">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-accent" /> App Rewrite
                        </div>
                        <span className="text-[10px] font-mono text-text-muted">2</span>
                      </div>
                      <div className="px-2 py-1.5 text-sm font-medium text-text-secondary hover:text-text hover:bg-surface-2 rounded-md flex items-center gap-2 transition-colors cursor-pointer">
                        <div className="w-2 h-2 rounded-full bg-success" /> API v2.0
                      </div>
                      <div className="px-2 py-1.5 text-sm font-medium text-text-secondary hover:text-text hover:bg-surface-2 rounded-md flex items-center gap-2 transition-colors cursor-pointer">
                        <div className="w-2 h-2 rounded-full bg-info" /> Design System
                      </div>
                    </div>
                  </div>

                  {/* Section */}
                  <div>
                    <div className="text-[11px] font-bold text-text-muted uppercase tracking-wider mb-2 px-2 flex items-center justify-between">
                      Channels <Plus size={12} className="cursor-pointer hover:text-text" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="px-2 py-1.5 text-sm font-medium text-text-secondary hover:text-text hover:bg-surface-2 rounded-md flex items-center justify-between group transition-colors cursor-pointer">
                        <div className="flex items-center gap-2">
                          <Hash size={14} className="text-text-muted" /> general
                        </div>
                      </div>
                      <div className="px-2 py-1.5 text-sm font-medium text-text-secondary hover:text-text hover:bg-surface-2 rounded-md flex items-center justify-between group transition-colors cursor-pointer">
                        <div className="flex items-center gap-2">
                          <Hash size={14} className="text-text-muted" /> engineering
                        </div>
                        <div className="w-4 h-4 bg-accent rounded text-[9px] text-white flex items-center justify-center font-bold">4</div>
                      </div>
                      <div className="px-2 py-1.5 text-sm font-medium text-text-secondary hover:text-text hover:bg-surface-2 rounded-md flex items-center gap-2 transition-colors cursor-pointer">
                        <Hash size={14} className="text-text-muted" /> design-critique
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-6">
                  <div className="flex items-center gap-3 px-2 py-2 hover:bg-surface-2 rounded-md cursor-pointer transition-colors">
                    <div className="w-8 h-8 rounded-full bg-linear-to-tr from-purple to-info" />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-text">Alex Chen</span>
                      <span className="text-xs text-text-muted">alex@camp.dev</span>
                    </div>
                    <Settings size={14} className="ml-auto text-text-muted" />
                  </div>
                </div>
              </div>

              {/* Main Chat/Docs Area */}
              <div className="flex-1 flex flex-col bg-background relative">
                {/* Channel Header */}
                <div className="h-14 border-b border-border flex items-center px-6 justify-between shrink-0">
                  <div className="flex items-center gap-3">
                    <Hash size={18} className="text-text-muted" />
                    <div className="font-semibold text-text">engineering</div>
                    <div className="h-4 w-px bg-border mx-2" />
                    <div className="text-sm text-text-muted hidden sm:block">Technical discussions and PR reviews</div>
                  </div>
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 rounded-full bg-surface-3 border-2 border-background z-10" />
                    <div className="w-7 h-7 rounded-full bg-surface-2 border-2 border-background z-20" />
                    <div className="w-7 h-7 rounded-full bg-surface-1 border-2 border-background z-30" />
                  </div>
                </div>

                {/* Chat content */}
                <div className="flex-1 p-6 overflow-y-auto flex flex-col justify-end gap-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface-3 shrink-0 mt-1" />
                    <div className="flex flex-col gap-1">
                      <div className="flex items-baseline gap-2">
                        <span className="font-semibold text-text">Sarah Smith</span>
                        <span className="text-xs text-text-muted">10:24 AM</span>
                      </div>
                      <p className="text-text-secondary leading-relaxed text-sm">
                        Just pushed the new caching layer to staging. It should reduce load times by about 40%. Could someone take a look at the PR?
                      </p>
                      <div className="mt-2 flex gap-2">
                        <div className="inline-flex items-center gap-2 px-3 py-2 bg-surface-1 border border-border rounded-lg text-xs font-medium cursor-pointer hover:bg-surface-2 transition-colors">
                          <GitBranch size={14} className="text-success" />
                          <span className="text-text">feat/redis-cache-layer</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-linear-to-tr from-purple to-info shrink-0 mt-1" />
                    <div className="flex flex-col gap-1">
                      <div className="flex items-baseline gap-2">
                        <span className="font-semibold text-text">Alex Chen</span>
                        <span className="text-xs text-text-muted">10:28 AM</span>
                      </div>
                      <p className="text-text-secondary leading-relaxed text-sm">
                        Looking right now. The benchmark results look incredibly solid. I'll approve once the e2e tests pass.
                      </p>
                      <div className="mt-1 flex items-center gap-1">
                        <div className="px-2 py-0.5 bg-surface-2 rounded-full text-xs flex items-center gap-1 border border-border">
                          🚀 <span className="text-text-muted">2</span>
                        </div>
                        <div className="px-2 py-0.5 bg-surface-2 rounded-full text-xs flex items-center gap-1 border border-border">
                          👀 <span className="text-text-muted">1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input Area */}
                <div className="p-4 shrink-0">
                  <div className="bg-surface-1 border border-border rounded-xl p-3 shadow-sm focus-within:border-accent/50 focus-within:ring-1 focus-within:ring-accent/50 transition-all">
                    <textarea
                      placeholder="Message #engineering..."
                      className="w-full bg-transparent resize-none text-sm text-text placeholder:text-text-muted focus:outline-none"
                      rows={1}
                    />
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-border/50">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 text-text-muted hover:text-text hover:bg-surface-2 rounded cursor-pointer transition-colors">
                          <Plus size={16} />
                        </div>
                        <div className="p-1.5 text-text-muted hover:text-text hover:bg-surface-2 rounded cursor-pointer transition-colors">
                          <MessageSquare size={16} />
                        </div>
                      </div>
                      <button className="px-3 py-1.5 bg-accent text-white text-xs font-semibold rounded-md hover:bg-accent-hover transition-colors shadow-sm">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
