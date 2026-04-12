"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { PROJECTS_DATA } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
 const { ref } = useSectionInView("Projects");

 return (
  <section ref={ref} id="projects" className="mb-28 scroll-mt-28">
   <SectionHeading>My projects</SectionHeading>
   <div className="grid" style={{ gridTemplateRows: `repeat(${PROJECTS_DATA.length}, minmax(0, 1fr))` }}>
    {PROJECTS_DATA.map((project, index) => (
     <React.Fragment key={index}>
      <Project {...project} />
     </React.Fragment>
    ))}
   </div>
  </section>
 );
}
