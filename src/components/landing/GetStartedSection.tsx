"use client";

import React from "react";
import Link from "next/link";
import { AnimatedSection } from "./AnimatedSection";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

function GettingStartedContent({ inView }: { inView?: boolean }) {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <h2
        className={cn(
          "text-4xl md:text-5xl lg:text-6xl font-bold font-headline mb-6 transition-all duration-700 ease-out",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        Get Started with Smarter Customer Support
      </h2>

      <p
        className={cn(
          "text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto transition-all duration-700 ease-out",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
        style={{ transitionDelay: "200ms" }}
      >
        Solvia helps teams automate repetitive queries, respond in real time,
        and manage conversations from one unified dashboard.
      </p>

      <div
        className={cn(
          "flex justify-center transition-all duration-700 ease-out",
          inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}
        style={{ transitionDelay: "400ms" }}
      >
        <Link href="https://solvia-web.fremn.com" target="_blank" rel="noopener noreferrer">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-white text-black flex items-center space-x-3 px-8 py-4 text-lg font-semibold"
          >
            <span>Try it Out</span>
            <ArrowRight className="h-5 w-5" />
          </HoverBorderGradient>
        </Link>
      </div>

      <p
        className={cn(
          "mt-6 text-sm text-muted-foreground transition-all duration-700 ease-out",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
        style={{ transitionDelay: "600ms" }}
      >
        Plug-and-play setup • No technical expertise required • Built for growing teams
      </p>
    </div>
  );
}

export function GettingStartedSection({ id }: { id: string }) {
  return (
    <AnimatedSection
      id={id}
      className="bg-gradient-to-b from-white to-accent/20"
    >
      <GettingStartedContent />
    </AnimatedSection>
  );
}
