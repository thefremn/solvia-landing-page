"use client";

import { cn } from "@/lib/utils";
import { Bot, Clock, Shield } from "lucide-react";
import React from "react";
import { AnimatedSection } from "./AnimatedSection";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const aboutFeatures = [
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "AAI That Understands Institutional Context",
    description:
      "Solvia pulls answers directly from institutional knowledge, automating 60–70% of academic and administrative queries.",
    imageId: "ai-illustration",
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "Support That Never Sleeps",
    description:
      "From admissions to results, Solvia responds in seconds — improving access, engagement, and institutional responsiveness.",
    imageId: "support-illustration",
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Built for Growing Education Institutions",
    description:
      "Whether serving 200 or 20,000 stakeholders, Solvia scales securely with institutional growth. Each institution operates in a fully isolated and protected environment.",
    imageId: "security-illustration",
  },
];

function AboutContent({ inView }: { inView?: boolean }) {
  return (
    <>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
          Education Support, Reimagined
        </h2>
        <p className="text-lg text-muted-foreground">
          Solvia replaces fragmented institutional communication with one
          intelligent platform. Administrators gain control. Stakeholders
          receive instant, consistent support. Access to information becomes
          structured and scalable
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {aboutFeatures.map((feature, index) => {
          const illustration = PlaceHolderImages.find(
            (p) => p.id === feature.imageId,
          );

          return (
            <Card
              key={feature.title}
              className={cn(
                "text-center transform-gpu transition-all duration-300 ease-out hover:-translate-y-2 border-none shadow-none bg-transparent",
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4",
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardHeader className="items-center">
                <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden bg-white border-2 border-gray-200">
                  {illustration ? (
                    <Image
                      src={illustration.imageUrl}
                      alt={illustration.description}
                      fill
                      className="object-cover"
                      data-ai-hint={illustration.imageHint}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      {feature.icon}
                    </div>
                  )}
                </div>
                <CardTitle className="text-xl mb-3">{feature.title}</CardTitle>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export function AboutSection({ id }: { id: string }) {
  return (
    <AnimatedSection id={id} className="bg-white">
      <AboutContent />
    </AnimatedSection>
  );
}
