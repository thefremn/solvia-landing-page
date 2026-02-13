"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "./AnimatedSection";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { PlayCircle, Zap, Shield, BarChart3, Workflow } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Institutional Response",
    description:
      "Deliver instant answers to student and parent queries without delays, ensuring a seamless support experience.",
  },
  {
    icon: Shield,
    title: "Secure Academic Data Protection",
    description:
      "Institution-level data isolation ensures privacy and compliance.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Institutional Insights",
    description:
      "Track engagement, response time, and query trends across stakeholders.",
  },
  {
    icon: Workflow,
    title: "Seamless LMS & Portal Integrations",
    description:
      "Integrate directly with academic systems and student platforms.",
  },
];

function VideoContent({ inView }: { inView?: boolean }) {
  const videoThumbnail = PlaceHolderImages.find(
    (p) => p.id === "video-thumbnail"
  );

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Video Side */}
      <div
        className={cn(
          "transition-all duration-700 ease-out",
          inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        )}
      >
        <Card className="overflow-hidden group glass-card cursor-pointer hover:scale-[1.02] transition-all duration-300 ease-out transform-gpu">
          <CardContent className="p-0 relative">
            {videoThumbnail && (
              <video
                src={"/vid/solvia.mp4"}
                className="w-full h-auto opacity-100 group-hover:opacity-100 transition-opacity"
                muted
                loop
                playsInline
                controls
                onMouseEnter={(e) => e.currentTarget.pause()}
                onMouseLeave={(e) => e.currentTarget.play()}
                autoPlay
              />
            )}
          </CardContent>
        </Card>
      </div>

      {/* Text Side */}
      <div
        className={cn(
          "transition-all duration-700 ease-out",
          inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
        )}
        style={{ transitionDelay: "200ms" }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline mb-4">
          See Solvia in Action
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Watch how Solvia transforms institutional communication into seamless,
accessible support experiences across education environments.

        </p>

        <div className="space-y-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={cn(
                  "flex gap-4 transition-all duration-500 ease-out",
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function VideoSection({ id }: { id: string }) {
  return (
    <AnimatedSection id={id} className="bg-background">
      <VideoContent />
    </AnimatedSection>
  );
}
