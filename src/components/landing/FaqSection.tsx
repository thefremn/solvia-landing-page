
"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AnimatedSection } from "./AnimatedSection";

const faqs = [
  {
    question: "What is Solvia?",
    answer: "Solvia is a comprehensive SaaS platform designed to help businesses streamline operations, analyze data, and foster collaboration. It combines powerful analytics and reporting with an intuitive user interface."
  },
  {
    question: "Who is Solvia for?",
    answer: "Solvia is built for teams of all sizes, from startups to large enterprises. Our scalable architecture and flexible pricing plans ensure that there's a fit for every organization looking to become more data-driven."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We prioritize security above all else. Our platform is built with enterprise-grade security features, including role-based access control and data encryption, to ensure your information is always protected."
  },
  {
    question: "Can I integrate Solvia with other tools?",
    answer: "Yes! Solvia is designed to fit into your existing ecosystem. We offer a range of integrations with popular tools for CRM, project management, and communication. We are also constantly expanding our integration library."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer comprehensive support to all our customers. Our Professional plan includes standard email support, while our Enterprise plan provides a dedicated account manager and priority support channels."
  }
];

function FaqContent({ inView }: { inView?: boolean }) {
  return (
    <>
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-muted-foreground">
          Find quick answers to common questions about Solvia.
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="glass-card rounded-lg mb-2 px-4 border-b-0">
            <AccordionTrigger className="text-left font-medium hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

export function FaqSection({ id }: { id: string }) {
  return (
    <AnimatedSection id={id}>
      <FaqContent />
    </AnimatedSection>
  );
}
