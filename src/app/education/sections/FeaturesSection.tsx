"use client";

import { AnimatedSection } from "./AnimatedSection";
import { WobbleCard } from "./../../../../src/components/ui/wobble-card";
import { cn } from "@/lib/utils";

/* ===================================================== */
/* FEATURE CONTENT SOURCE */
/* ===================================================== */
function getFeaturesContent() {
  return {
    header: {
      title: "Features",
      subtitle: "Everything you need to know",
    },
    cards: {
      primary: {
        title: "Plug-and-Play Integration",
        description:
          "Go live in minutes with instant setup across chat, voice, and dashboard—no engineering required.",
        image: "/img/pnp.png",
      },
      secondary: {
        title: "Built for Schools, Colleges & Universities",
        description:
          "Enterprise-grade AI automation designed to remain simple, affordable, and accessible for education institutions of all sizes.",
      },
      wide: {
        title: "Unified Dashboard & Knowledge Base",
        description:
          "Manage institutional queries, administrators, and knowledge resources from one real-time control center.",
        image: "/img/chat.png",
      },
    },
  };
}

/* ===================================================== */
/* FEATURES CONTENT */
/* ===================================================== */
function FeaturesContent() {
  const content = getFeaturesContent();

  return (
    <>
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-3">
          {content.header.title}
        </h2>
        <p className="text-lg text-muted-foreground">
          {content.header.subtitle}
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        
        {/* CARD 1 */}
        <WobbleCard
          containerClassName={cn(
            "col-span-1 lg:col-span-2",
            "min-h-[420px] lg:min-h-[260px]",
            "bg-pink-800",
            "transition-transform duration-300 hover:-translate-y-1"
          )}
        >
          <div className="max-w-xs animate-in fade-in slide-in-from-left-3 duration-700">
            <h3 className="text-white text-base md:text-xl lg:text-2xl font-semibold tracking-tight">
              {content.cards.primary.title}
            </h3>
            <p className="mt-3 text-sm text-neutral-200 leading-relaxed">
              {content.cards.primary.description}
            </p>
          </div>

          <img
            src={content.cards.primary.image}
            alt="feature preview"
            className="absolute -right-6 -bottom-8 w-[420px] grayscale rounded-xl opacity-90"
          />
        </WobbleCard>

        {/* CARD 2 */}
        <WobbleCard
          containerClassName={cn(
            "col-span-1",
            "min-h-[260px]",
            "bg-neutral-900",
            "transition-transform duration-300 hover:-translate-y-1"
          )}
        >
          <div className="animate-in fade-in slide-in-from-bottom-3 duration-700 delay-100">
            <h3 className="text-white text-base md:text-xl lg:text-2xl font-semibold tracking-tight">
              {content.cards.secondary.title}
            </h3>
            <p className="mt-3 text-sm text-neutral-200 leading-relaxed">
              {content.cards.secondary.description}
            </p>
          </div>
        </WobbleCard>

        {/* CARD 3 */}
        <WobbleCard
          containerClassName={cn(
            "col-span-1 lg:col-span-3",
            "min-h-[460px] lg:min-h-[520px] xl:min-h-[280px]",
            "bg-blue-900",
            "transition-transform duration-300 hover:-translate-y-1"
          )}
        >
          <div className="max-w-sm animate-in fade-in slide-in-from-right-3 duration-700 delay-150">
            <h3 className="text-white text-base md:text-xl lg:text-2xl font-semibold tracking-tight">
              {content.cards.wide.title}
            </h3>
            <p className="mt-3 text-sm text-neutral-200 leading-relaxed">
              {content.cards.wide.description}
            </p>
          </div>

          <img
            src={content.cards.wide.image}
            alt="feature preview"
            className="absolute -right-8 -bottom-8 w-[420px] rounded-xl opacity-90 size-auto"
          />
        </WobbleCard>
      </div>
    </>
  );
}

/* ===================================================== */
/* SECTION */
/* ===================================================== */
export function FeaturesSection({ id }: { id: string }) {
  return (
    <AnimatedSection id={id} className="bg-background">
      <FeaturesContent />
    </AnimatedSection>
  );
}
