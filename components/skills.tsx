"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { BsCircleFill } from "react-icons/bs";
import { SKILLS_DATA } from "@/constants/skills-data";

export default function Skills() {
 const { ref } = useSectionInView("Skills");

 return (
  <section id="skills" ref={ref} className="mb-28 w-full max-w-[53rem] scroll-mt-28 text-center">
   <SectionHeading>Skills</SectionHeading>
   <ul className="grid grid-cols-1 justify-center gap-x-10 gap-y-2 text-left text-[15px] text-gray-800 dark:text-white/80 sm:ml-10 sm:grid-cols-[240px_240px] lg:ml-0 lg:grid-cols-[240px_240px_120px]">
    {SKILLS_DATA.map((skill) => (
     <li key={skill.id} className="flex items-center justify-center gap-2 whitespace-nowrap sm:justify-start">
      <BsCircleFill className="shrink-0 text-[6px] text-gray-500 dark:text-white/50" />
      {skill.name}
     </li>
    ))}
   </ul>
  </section>
 );
}
