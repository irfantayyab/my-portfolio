"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { SKILLS_DATA } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BsCircle, BsCircleFill } from "react-icons/bs";

const fadeInAnimationVariants = {
 initial: {
  opacity: 0,
  y: 100,
 },
 animate: (index: number) => ({
  opacity: 1,
  y: 0,
  transition: {
   delay: 0.05 * index,
  },
 }),
};

export default function Skills() {
 const { ref } = useSectionInView("Skills");

 return (
  <section id="skills" ref={ref} className="mb-28 w-full max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
   <SectionHeading>My skills</SectionHeading>
   <div className="mb-8 flex items-center justify-center gap-4 sm:gap-8">
    <div className="flex items-center gap-2 whitespace-nowrap">
     <BsCircleFill className="rounded-full fill-gray-300 dark:fill-gray-700" />
     <p>Tech Stack</p>
    </div>
    <div className="flex items-center gap-2 whitespace-nowrap">
     <BsCircleFill className="rounded-full fill-[#dbd7fb] dark:fill-[#676394]" />
     <p>Hard Skills</p>
    </div>
    <div className="flex items-center gap-2 whitespace-nowrap">
     <BsCircleFill className="rounded-full fill-[#fbe2e3] dark:fill-[#946263]" />
     <p>Soft Skills</p>
    </div>
   </div>
   <ul className="text-md flex select-none flex-wrap justify-start gap-2 text-gray-800">
    {SKILLS_DATA.map((skill) => (
     <motion.li
      className={cn(
       "rounded-full bg-white px-6 py-1 dark:bg-white/10 dark:text-white/80",
       skill.type === "primary" ? "bg-[#dbd7fb] dark:bg-[#676394]" : "bg-[#fbe2e3] dark:bg-[#946263]",
       skill.type === "stack" ? "bg-gray-300 dark:bg-gray-700" : "",
      )}
      key={skill.id}
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
       once: true,
      }}
      custom={skill.id}
     >
      {skill.name}
     </motion.li>
    ))}
   </ul>
  </section>
 );
}
