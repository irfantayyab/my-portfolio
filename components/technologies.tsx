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
   <SectionHeading>Technologies I&apos;ve worked with</SectionHeading>
   <ul className="text-md flex select-none flex-wrap justify-start gap-2 text-gray-800">
    {TECHNOLOGIES_DATA.map((technology, index) => (
     <motion.li
      className="rounded-full border border-black/10 bg-white px-6 py-1 dark:bg-white/10 dark:text-white/80"
      key={technology + index}
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
       once: true,
      }}
      custom={index}
     >
      {technology}
     </motion.li>
    ))}
   </ul>
  </section>
 );
}
