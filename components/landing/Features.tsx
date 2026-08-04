import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { Users, KanbanSquare, MessageSquare, Bot, GitBranch, LayoutGrid } from "lucide-react";
import { Card } from "../ui/Card";

const FEATURES = [
  {
    title: "Community Management",
    description: "Create public or private communities, manage roles, and organize members effortlessly. Scale from a small team to a global open-source project without changing tools.",
    icon: <Users className="text-white" size={20} />,
    colSpan: "md:col-span-2 lg:col-span-2",
  },
  {
    title: "Real-time Chat",
    description: "Lightning-fast messaging with threads, channels, and rich media support.",
    icon: <MessageSquare className="text-white" size={20} />,
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "Kanban Boards",
    description: "Visualize tasks with flexible Kanban boards built for modern engineering workflows.",
    icon: <KanbanSquare className="text-white" size={20} />,
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "AI Assistant",
    description: "Generate tasks, summarize long threads, and automatically document code.",
    icon: <Bot className="text-white" size={20} />,
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "GitHub Integration",
    description: "Sync PRs, issues, and commits seamlessly directly into your workflow.",
    icon: <GitBranch className="text-white" size={20} />,
    colSpan: "md:col-span-1 lg:col-span-1",
  }
];

export function Features() {
  return (
    <Section id="features" className="relative">
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-text mb-6">
            Everything your team needs. <br className="hidden md:block" />
            <span className="text-text-secondary">Nothing it doesn't.</span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Powerful features built intentionally for developers, makers, and engineering teams. No bloat, just speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {FEATURES.map((feature, index) => (
            <Card key={index} className={`p-8 flex flex-col gap-6 group ${feature.colSpan}`}>
              <div className="w-12 h-12 rounded-xl bg-linear-to-b from-surface-3 to-surface-1 border border-border flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:border-accent/50 transition-all duration-300">
                {feature.icon}
              </div>
              <div className="mt-auto">
                <h3 className="font-bold text-xl tracking-tight text-text mb-3">{feature.title}</h3>
                <p className="text-text-secondary leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
