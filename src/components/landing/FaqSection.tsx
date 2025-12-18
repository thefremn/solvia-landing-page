
"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AnimatedSection } from "./AnimatedSection";

const faqs = [
  {
    question: "What is Solvia?",
    answer:
      "Solvia is an AI-powered customer support and operations platform that helps businesses handle customer queries across chat, with optional human escalation through a real-time dashboard."
  },
  {
    question: "Who is Solvia for?",
    answer:
      "Solvia is built for small and medium organizations such as educational institutions, clinics, real estate agencies, hospitality businesses, and ecommerce brands that receive repetitive customer queries."
  },
  {
    question: "Does Solvia replace human agents?",
    answer:
      "No. Solvia automates repetitive queries and tasks. Human agents can step in at any time through the dashboard for complex or sensitive conversations."
  },
  {
    question: "What channels does Solvia support?",
    answer:
      "Currently, Solvia supports website and in-app chat. WhatsApp support is coming soon."
  },
  {
    question: "How does Solvia provide accurate answers?",
    answer:
      "Solvia uses AI combined with a knowledge base (RAG) where businesses can upload FAQs, documents, and content. This ensures responses are accurate and context-aware."
  },
  {
    question: "Can Solvia perform actions like checking status or booking appointments?",
    answer:
      "Solvia currently focuses on support automation. Business Tools Integration (MCP) is coming soon, which will allow Solvia to securely connect with business systems to perform actions such as status checks, bookings, and updates."
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. Each organization’s data is isolated, encrypted, and securely managed. Solvia does not use customer data to train AI models."
  },
  {
    question: "Do I need technical knowledge to use Solvia?",
    answer:
      "No. Solvia is designed to be simple and easy to set up. Most organizations can get started within minutes."
  },
  {
    question: "What are the pricing plans?",
    answer:
      "Solvia offers a free plan for manual operator-based support and a paid plan with full AI automation. Pricing is kept simple for early adopters."
  },
  {
    question: "Is Solvia production-ready?",
    answer:
      "Solvia is currently in MVP and early-access stage. We are actively onboarding early users and improving the product based on real feedback."
  },
  {
    question: "How can I get access?",
    answer:
      "You can request access through our website or contact the team directly for early onboarding."
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
