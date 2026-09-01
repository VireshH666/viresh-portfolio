"use client";

import { useEffect, useState } from "react";

export function useScrollSpy(
  sectionIds: string[],
  options: { offset?: number } = {}
): string {
  const [activeId, setActiveId] = useState<string>("");
  const offset = options.offset ?? 100;

  useEffect(() => {
    if (typeof window === "undefined" || sectionIds.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      let currentActive = "";
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentActive = id;
            break;
          }
        }
      }

      setActiveId(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds, offset]);

  return activeId;
}
