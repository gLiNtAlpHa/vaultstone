"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <Accordion.Root type="single" collapsible className="space-y-3">
      {items.map((item, i) => (
        <Accordion.Item
          key={i}
          value={`item-${i}`}
          className="overflow-hidden rounded-2xl bg-white"
          style={{ boxShadow: "var(--shadow-neumorphic)" }}
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between px-6 py-5 text-left text-base font-semibold text-foreground transition-colors hover:text-primary-600">
              {item.question}
              <ChevronDown className="h-5 w-5 shrink-0 text-foreground-muted transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="px-6 pb-5 leading-relaxed text-foreground-muted">{item.answer}</div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
