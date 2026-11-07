"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Universal Scroll Animator for Brau Mitraa
 *
 * Observes every section, card, and image across all pages.
 * When elements enter the viewport, it triggers their pure CSS keyframe animations.
 */
export function ScrollAnimator() {
  const pathname = usePathname();

  useEffect(() => {
    const selector =
      ".anim-enter-left, .anim-enter-right, .anim-enter-up, .anim-enter-zoom, .editorial-card, .scroll-reveal, .scroll-reveal-image, article.person";

    const targets = document.querySelectorAll(selector);

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
