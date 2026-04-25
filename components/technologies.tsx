"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { TECHNOLOGIES_DATA } from "@/lib/data";
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

export default function Technologies() {
 const { ref } = useSectionInView("Technologies");

 return (
  <section
   id="technologies"
   ref={ref}
   className="mb-28 w-full max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
  >
   <SectionHeading>Additional Technologies</SectionHeading>
   <ul className="flex select-none flex-wrap justify-center gap-2 text-[15px] text-gray-800">
    {TECHNOLOGIES_DATA.map((technology) => (
     <motion.li
      className="rounded-full border border-black/10 bg-white px-6 py-1 dark:bg-[#292f3d] dark:text-white/80"
      key={technology.id}
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
       once: true,
      }}
      custom={technology.id}
     >
      {technology.name}
     </motion.li>
    ))}
   </ul>
  </section>
 );
}
