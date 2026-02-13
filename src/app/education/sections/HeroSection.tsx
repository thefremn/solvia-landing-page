"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function HeroSection({ id }: { id: string }) {
  const [loaded, setLoaded] = useState(false);
  const heroImage = PlaceHolderImages.find(p => p.id === "hero-illustration");

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id={id}
      className="min-h-screen bg-accent/30 flex items-center justify-center py-3 pt-"
    >
      <div className="container mx-auto px-4 pt-12">
        <div className="grid grid-rows-[auto_1fr] gap-0 items-center max-w-5xl mx-auto">
          
          {/* TEXT CONTENT */}
          <div className="space-y-5 max-w-3xl mx-auto text-center">
            <h1
              className={cn(
                "text-3xl md:text-4xl lg:text-5xl font-extrabold font-headline tracking-tighter transition-all duration-500 ease-out pt-1",
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
             AI That Supports Education Ecosystems — Automatically
            </h1>

            <p
              className={cn(
                "max-w-xl mx-auto text-lg md:text-xl text-muted-foreground transition-all duration-500 ease-out",
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: "200ms" }}
            >
              Solvia helps schools, colleges, and education institutions deliver instant,
reliable support to students, parents, teachers, and staff — 24/7 — without
increasing administrative burden.
            </p>

            <div
              className={cn(
                "flex flex-col sm:flex-row gap-4 justify-center transition-all duration-500 ease-out",
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: "350ms" }}
            >
              <Button asChild size="lg">
                <Link href="https://solvia-web.fremn.com/" className="flex items-center">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline">
                <Link href="#video">See it in Action</Link>
              </Button>
            </div>
          </div>

          {/* ILLUSTRATION (TIGHTLY CONNECTED) */}
          <div
            className={cn(
              "relative w-full max-w-4xl mx-auto h-[280px] md:h-[360px] lg:h-[420px] -mt-8 transition-all duration-700 ease-out",
              loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}
            style={{ transitionDelay: "150ms" }}
          >
            {heroImage && (
              <Image
                src="/img/Homepage-illustrations.png"
                alt={heroImage.description}
                fill
                priority
                className="object-contain"
              />
            )}
          </div>

        </div>
      </div>
    </section>
  );
}