import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";

export function CTA() {
  return (
    <Section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/20 blur-[100px] rounded-full -z-10" />

      <Container>
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto border border-border bg-surface-1/50 backdrop-blur-sm rounded-3xl p-10 md:p-16 shadow-xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text mb-6">
            Ready to unite your community?
          </h2>
          <p className="text-lg text-text-secondary mb-10">
            Join thousands of developers building the future of software in Camp. No credit card required.
          </p>

          <Button size="lg" className="w-full sm:w-auto">
            Join the Waitlist
          </Button>
        </div>
      </Container>
    </Section>
  );
}
