import { Container } from "../ui/Container";

const STATS = [
  { value: "500+", label: "Communities" },
  { value: "10k+", label: "Projects" },
  { value: "50k+", label: "Members" },
  { value: "1M+", label: "Tasks" },
];

export function TrustedBy() {
  return (
    <div className="border-y border-border/40 bg-surface-1/30 py-8 backdrop-blur-sm relative z-10">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 max-w-5xl mx-auto">
          <p className="text-[11px] font-bold text-text-muted uppercase tracking-widest text-center md:text-left">
            Powering the next generation <br className="hidden md:block" /> of software teams
          </p>

          <div className="flex items-center gap-8 md:gap-16 w-full md:w-auto overflow-x-auto pb-4 md:pb-0 hide-scrollbar">
            {STATS.map((stat, index) => (
              <div key={index} className="flex items-baseline gap-2 shrink-0">
                <span className="text-2xl md:text-3xl font-bold text-text tracking-tighter">{stat.value}</span>
                <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
