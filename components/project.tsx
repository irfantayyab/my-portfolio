"use client";

import { useRef } from "react";
import { PROJECTS_DATA } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { HiOutlineExternalLink } from "react-icons/hi";
import { cn } from "@/lib/utils";

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
   className="group h-full"
  >
   <a href={liveUrl} target="_blank">
    <article
     className={cn(
      "relative h-full max-w-[42rem] overflow-hidden rounded-3xl border border-black/5 bg-gray-100 p-4 transition dark:bg-white/10 dark:text-white sm:p-8",
      liveUrl ? "hover:bg-gray-200 dark:hover:bg-white/20" : "",
     )}
    >
     <div className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-4">
       <h3 className="text-2xl font-semibold">{title}</h3>
       {liveUrl && <HiOutlineExternalLink className="size-5" />}
      </div>
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
     {/* <Image
      src={imageUrl}
      alt="Project I worked on"
      quality={100}
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
     /> */}
    </article>
   </a>
  </motion.div>
 );
}
