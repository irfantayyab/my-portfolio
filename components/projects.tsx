"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { PROJECTS_DATA } from "@/lib/data";
import Project from "./project";
import { useMediaQuery, useSectionInView } from "@/lib/hooks";

export default function Projects() {
 const { ref } = useSectionInView("Projects");
 const aboveSm = useMediaQuery("(min-width: 40em)");

 return (
  <section ref={ref} id="projects" className="mb-28 scroll-mt-28">
   <SectionHeading>My projects</SectionHeading>
   <div
    className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-8"
    style={{ gridTemplateRows: `repeat(${PROJECTS_DATA.length / (aboveSm ? 2 : 1)}, minmax(0, 1fr))` }}
   >
    {PROJECTS_DATA.map((project, index) => (
     <React.Fragment key={index}>
      <Project {...project} />
     </React.Fragment>
    ))}
   </div>
  </section>
 );
}
