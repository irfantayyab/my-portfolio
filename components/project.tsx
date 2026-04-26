"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HiOutlineExternalLink } from "react-icons/hi";
import { cn } from "@/lib/utils";
import { PROJECTS_DATA } from "@/constants/projects-data";

type ProjectProps = (typeof PROJECTS_DATA)[number];

export default function Project({ title, liveUrl }: ProjectProps) {
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
      "relative h-full max-w-[42rem] overflow-hidden rounded-3xl border border-black/5 bg-gray-100 p-6 transition dark:bg-[#292f3d] dark:text-white sm:p-8",
      liveUrl ? "hover:bg-gray-200 dark:hover:bg-white/20" : "",
     )}
    >
     <div className="flex h-full flex-col justify-center">
      <div className="flex items-center justify-between gap-4">
       <h3 className="font-lmroman text-xl sm:text-2xl">{title}</h3>
       {liveUrl && <HiOutlineExternalLink className="size-5" />}
      </div>
     </div>
    </article>
   </a>
  </motion.div>
 );
}
