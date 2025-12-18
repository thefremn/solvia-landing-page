
"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState, Children, cloneElement } from "react";

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function AnimatedSection({ children, className, ...props }: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Filter out `inView` from props that are passed to the `section`
  const { ...rest } = props;

  return (
    <section
      ref={ref}
      className={cn(
        "py-20 sm:py-28 transition-opacity duration-500 ease-out",
        inView ? "opacity-100" : "opacity-0",
        className
      )}
      {...rest}
    >
      <div
        className={cn(
          "container mx-auto px-4 transition-transform duration-500 ease-out",
          inView ? "translate-y-0" : "translate-y-4"
        )}
      >
        {Children.map(children, (child) => {
          if (React.isValidElement(child)) {
             // Check if the child type is a string (a DOM element)
            if (typeof child.type === 'string') {
              return child;
            }
            // Pass inView to child component if it's a React component
            return cloneElement(child as React.ReactElement<any>, { inView });
          }
          return child;
        })}
      </div>
    </section>
  );
}
