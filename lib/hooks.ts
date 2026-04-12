import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
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
