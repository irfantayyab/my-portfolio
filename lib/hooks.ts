import { useActiveSectionContext } from "@/context/active-section-context";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName) {
 let viewMargin;

 if (typeof window !== "undefined") {
  viewMargin = window.innerHeight / 2.5;
 }

 const { ref, inView } = useInView({
  rootMargin: `-${viewMargin}px 0px -${viewMargin}px 0px`,
 });
 const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

 useEffect(() => {
  if (inView && Date.now() - timeOfLastClick > 1000) {
   setActiveSection(sectionName);
  }
 }, [inView, setActiveSection, timeOfLastClick, sectionName]);

 return {
  ref,
 };
}

export function useMediaQuery(query: string) {
 const subscribe = useCallback(
  (onChange: () => void) => {
   const result = matchMedia(query);
   result.addEventListener("change", onChange);
   return () => result.removeEventListener("change", onChange);
  },
  [query],
 );

 return useSyncExternalStore<boolean | undefined>(
  subscribe,
  () => matchMedia(query).matches,
  () => undefined,
 );
}

interface UseTimelineFillOptions {
 startOffset?: number;
 endOffset?: number;
}

export function useTimelineFill(options: UseTimelineFillOptions = {}) {
 const { startOffset = 0, endOffset = 0 } = options;
 const [state, setState] = useState({
  fillPercent: 0,
  scrolledPx: 0,
  hasEntered: false,
  hasExited: false,
 });
 const elementRef = useRef<HTMLElement | null>(null);

 useEffect(() => {
  const el = elementRef.current;
  if (!el) return;

  function handleScroll() {
   const rect = el!.getBoundingClientRect();
   const viewMargin = window.innerHeight / 2.5;
   const totalHeight = rect.height - startOffset - endOffset;
   const hasEntered = rect.top < window.innerHeight - viewMargin;
   const hasExited = rect.bottom < viewMargin;
   const scrolledPx = window.innerHeight - viewMargin - rect.top - startOffset;
   const percent = Math.min(Math.max(scrolledPx / totalHeight, 0), 1);
   setState({ fillPercent: percent, scrolledPx, hasEntered, hasExited });
  }

  const resizeObserver = new ResizeObserver(() => {
   handleScroll();
  });

  const intersectionObserver = new IntersectionObserver(([entry]) => {
   if (entry.isIntersecting) {
    window.addEventListener("scroll", handleScroll, { passive: true });
    resizeObserver.observe(el);
    handleScroll();
   } else {
    window.removeEventListener("scroll", handleScroll);
    resizeObserver.unobserve(el);
   }
  });

  intersectionObserver.observe(el);

  return () => {
   intersectionObserver.disconnect();
   resizeObserver.disconnect();
   window.removeEventListener("scroll", handleScroll);
  };
 }, [startOffset, endOffset]);

 const setRef = useCallback((node: HTMLElement | null) => {
  elementRef.current = node;
 }, []);

 return { setRef, ...state };
}
