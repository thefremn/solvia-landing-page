"use client";

import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "@/hooks/use-toast";
import { Tooltip } from "@/components/ui/tooltip-card";

/* ===================================================== */
/* CENTRALIZED LINKS */
/* ===================================================== */
const FOOTER_LINKS = {
  brand: {
    home: "#home",
    tagline: "FREMN- Future Ready Enterprise Management Network ",
  },
  social: {
    twitter: "https://x.com/thefremn",
    github: "https://github.com/thefremn",
    email: "mailto:thefremn@gmail.com",
  },
  product: {
    features: "#features",
    seeInAction: "#video",
  },
  company: {
    about: "#about",
    careers: "careers", // handled via toast
    getStarted: "#get-started",
  },
  legal: {
    privacy: "#",
    terms: "#",
  },
};

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto py-12 px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* BRAND */}
          <div className="space-y-4">
            <Link
              href={FOOTER_LINKS.brand.home}
              className="flex items-center gap-2 font-bold text-xl font-headline tracking-tighter"
            >
              <Image
                src="/img/logo.png"
                alt="Solvia Logo"
                width={24}
                height={24}
              />
              <span>SOLVIA</span>
              <span className="text-xs text-muted-foreground">Supporting SDG 4 – Quality Education</span>
            </Link>

            <p className="text-xs text-muted-foreground">
              Powered by <span className="font-medium">FREMN</span>
            </p>

            <p className="text-muted-foreground text-sm">
              {FOOTER_LINKS.brand.tagline}
            </p>

            <div className="flex gap-4">
              <Link
                href={FOOTER_LINKS.social.twitter}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href={FOOTER_LINKS.social.github}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href={FOOTER_LINKS.social.email}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-2">
            {/* PRODUCT */}
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href={FOOTER_LINKS.product.features}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href={FOOTER_LINKS.product.seeInAction}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    See in Action
                  </Link>
                </li>
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href={FOOTER_LINKS.company.about}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() =>
                      toast({
                        title: "Sorry, but we are also jobless 😔",
                      })
                    }
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Careers
                  </button>
                </li>
                <li>
                  <Link
                    href={FOOTER_LINKS.company.getStarted}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>

            {/* LEGAL */}
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>

              <ul className="space-y-2">
                <li>
                  <Tooltip
                    containerClassName="text-neutral-600 dark:text-neutral-400"
                    content="By accessing or using our services, you agree to comply with these Terms & Conditions and all applicable laws. We reserve the right to update or modify these terms at any time without prior notice."
                  >
                    <span className="text-sm font-medium cursor-help hover:text-primary transition-colors">
                      Terms and Conditions
                    </span>
                  </Tooltip>
                </li>

                <li>
                  <Tooltip
                    containerClassName="text-neutral-600 dark:text-neutral-400"
                    content="We value your privacy and are committed to protecting your personal information. Any data collected is used solely to provide, improve, and secure our services in accordance with applicable laws."
                  >
                    <span className="text-sm font-medium cursor-help hover:text-primary transition-colors">
                      Privacy Policy
                    </span>
                  </Tooltip>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Fremn Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
