import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { ArrowRight, MessageSquare, CheckCircle, FileText, Zap } from "lucide-react";

export function WhyCamp() {
  return (
    <Section className="relative border-y border-border overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:48px_48px]" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="flex flex-col gap-8 max-w-xl">
            <div className="inline-flex items-center rounded-full bg-surface-2 border border-border px-3 py-1 text-xs font-semibold tracking-wider text-text-secondary w-fit uppercase">
              The problem
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-text leading-[1.1]">
              Context switching is killing your team's momentum.
            </h2>
            <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
              <p>
                Managing a community or shipping a project shouldn't require duct-taping five different tools together.
              </p>
              <p>
                With Camp, you don't have to chat in Discord, track issues in GitHub, plan in Trello, and write docs in Notion. It's all unified in one fast, beautiful interface built specifically for engineers.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-2 text-text font-medium hover:text-accent cursor-pointer transition-colors w-fit group">
              Read our manifesto <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div className="relative h-[400px] w-full max-w-lg mx-auto">
            {/* The fragmented tools visualization */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="absolute top-0 right-10 w-48 p-4 rounded-xl border border-border bg-surface shadow-2xl transform rotate-6 animate-float" style={{ animationDelay: '0s' }}>
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquare className="text-info" size={16} />
                  <div className="h-2 w-16 bg-surface-3 rounded" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-surface-2 rounded" />
                  <div className="h-2 w-3/4 bg-surface-2 rounded" />
                </div>
              </div>

              <div className="absolute bottom-10 left-0 w-48 p-4 rounded-xl border border-border bg-surface shadow-2xl transform -rotate-6 animate-float" style={{ animationDelay: '-2s', animationDuration: '8s' }}>
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="text-success" size={16} />
                  <div className="h-2 w-16 bg-surface-3 rounded" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-surface-2 rounded" />
                  <div className="h-2 w-5/6 bg-surface-2 rounded" />
                </div>
              </div>

              <div className="absolute top-1/4 left-10 w-48 p-4 rounded-xl border border-border bg-surface shadow-2xl transform -rotate-12 animate-float" style={{ animationDelay: '-4s', animationDuration: '7s' }}>
                <div className="flex items-center gap-3 mb-3">
                  <FileText className="text-warning" size={16} />
                  <div className="h-2 w-16 bg-surface-3 rounded" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-surface-2 rounded" />
                  <div className="h-2 w-full bg-surface-2 rounded" />
                  <div className="h-2 w-2/3 bg-surface-2 rounded" />
                </div>
              </div>

              {/* The "Camp" unified orb in the center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulse" />
                <div className="relative w-32 h-32 rounded-full border border-border/50 bg-background/50 backdrop-blur-xl flex items-center justify-center shadow-2xl">
                  <div className="w-16 h-16 rounded-full bg-linear-to-br from-accent to-accent-hover flex items-center justify-center shadow-[0_0_30px_rgba(255,77,46,0.5)]">
                    <Zap className="text-white fill-white" size={24} />
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
