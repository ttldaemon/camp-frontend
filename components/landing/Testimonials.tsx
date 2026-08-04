import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { Card, CardContent } from "../ui/Card";

export function Testimonials() {
  return (
    <Section className="bg-surface-1 border-y border-border">
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text mb-4">
            Loved by engineering teams.
          </h2>
          <p className="text-lg text-text-secondary">
            Don't just take our word for it. See what other developers are saying about Camp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder Testimonials */}
          {[1, 2, 3].map((i) => (
            <Card key={i} className="bg-surface p-6 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-3 border border-border" />
                <div>
                  <div className="font-bold text-text">Developer Name</div>
                  <div className="text-sm text-text-secondary">Senior Engineer</div>
                </div>
              </div>
              <p className="text-text-secondary italic">
                "Camp has completely transformed how our engineering team collaborates. We were able to replace three different tools with just one. It's incredibly fast and intuitive."
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
