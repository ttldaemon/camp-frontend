"use client";

import { Container } from "../ui/Container";
import { Section } from "../ui/Section";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils/cn";

const FAQS = [
  {
    question: "What makes Camp different from Discord or Slack?",
    answer: "Camp is built specifically for project-based collaboration. While Discord and Slack are great for chatting, they lack native project management, Kanban boards, and deep GitHub integrations. Camp unifies chat and tasks into a single interface."
  },
  {
    question: "Is Camp open source?",
    answer: "The core collaboration engine will be open-sourced in the future. Currently, we are in closed beta working closely with our early adopters."
  },
  {
    question: "How much does it cost?",
    answer: "Camp will always have a generous free tier for students, hackathon teams, and open-source communities. Premium features will be available for professional teams."
  },
  {
    question: "Can I self-host Camp?",
    answer: "Self-hosting options are on our roadmap for enterprise customers and privacy-conscious organizations."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section>
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text mb-4">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="bg-surface border border-border rounded-xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex items-center justify-between w-full p-6 text-left hover:bg-surface-1 transition-colors"
                  >
                    <span className="font-semibold text-text">{faq.question}</span>
                    <ChevronDown size={18} className={cn(
                      "text-text-muted transition-transform duration-200",
                      isOpen && "rotate-180"
                    )} />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-text-secondary leading-relaxed border-t border-border pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
