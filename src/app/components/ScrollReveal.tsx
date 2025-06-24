"use client";

import { useEffect, ReactNode } from "react";

export default function ScrollReveal({ children, delay = 0 }: { children: ReactNode, delay?: number }) {
  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.remove("opacity-0");
              entry.target.classList.add("opacity-100");
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    // Target the wrapper div
    const element = document.querySelector(".scroll-reveal-wrapper");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div className="scroll-reveal-wrapper opacity-0 transition-opacity duration-700">
      {children}
    </div>
  );
}