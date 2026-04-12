import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect, useState } from "react";
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
 const [value, setValue] = useState<boolean | undefined>(undefined);

 useEffect(() => {
  function onChange(event: MediaQueryListEvent) {
   setValue(event.matches);
  }

  const result = matchMedia(query);
  result.addEventListener("change", onChange);
  setValue(result.matches);

  return () => result.removeEventListener("change", onChange);
 }, [query]);

 return value;
}
