"use client";

import { useRef } from "react";
import { PROJECTS_DATA } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof PROJECTS_DATA)[number];

export default function Project({ title, description, tags, imageUrl, liveUrl }: ProjectProps) {
 const ref = useRef<HTMLDivElement>(null);
 const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["0 1", "1.33 1"],
 });
 const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
 const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

 return (
  <motion.div
   ref={ref}
   style={{
    scale: scaleProgess,
    opacity: opacityProgess,
   }}
   className="group mb-3 last:mb-0 sm:mb-8"
  >
   <a href={liveUrl} target="_blank">
    <article className="relative h-full max-w-[42rem] overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:pr-8 sm:group-even:pl-8">
     <div className="flex h-full flex-col px-5 pb-7 pt-4 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem]">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
       {tags.map((tag, index) => (
        <li
         className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70"
         key={index}
        >
         {tag}
        </li>
       ))}
      </ul>
     </div>
     <Image
      src={imageUrl}
      alt="Project I worked on"
      quality={95}
      className="absolute -right-40 top-8 hidden h-full w-[28.25rem] rounded-t-lg object-cover object-left shadow-2xl transition
         group-even:-left-40
         group-even:right-[initial]
         group-hover:-translate-x-3
         group-hover:translate-y-3
         group-hover:-rotate-2
         group-hover:scale-[1.04]
         group-even:group-hover:translate-x-3
         group-even:group-hover:translate-y-3
         group-even:group-hover:rotate-2 sm:block"
     />
    </article>
   </a>
  </motion.div>
 );
}
