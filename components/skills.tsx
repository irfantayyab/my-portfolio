"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { SKILLS_DATA } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

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
  <section id="skills" ref={ref} className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
   <SectionHeading>My skills</SectionHeading>
   <ul className="text-md flex flex-wrap justify-center gap-2 text-gray-800">
    {SKILLS_DATA.map((skill, index) => (
     <motion.li
      className="borderBlack rounded-lg bg-white px-6 py-1 dark:bg-white/10 dark:text-white/80"
      key={index}
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
       once: true,
      }}
      custom={index}
     >
      {skill}
     </motion.li>
    ))}
   </ul>
  </section>
 );
}
