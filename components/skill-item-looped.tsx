"use client";

import getLoopedAnimationParams from "@/lib/get-looped-animation-params";
import { motion } from "framer-motion";
import React from "react";

function SkillItemLooped({
 skill,
 skills,
 scrollerHeight,
 gap,
 itemHeight,
}: {
 skill: any;
 skills: any;
 scrollerHeight: number;
 gap: number;
 itemHeight: number;
}) {
 const pos = skill.position;
 const { xOffset, positionsAtKeyframes, time, times, delay } = getLoopedAnimationParams({
  pos,
  time: (6 * (scrollerHeight + itemHeight)) / scrollerHeight,
  total: skills.length,
  gap,
  distance: scrollerHeight + itemHeight,
 });

 return (
  <motion.div
   key={skill.title}
   initial={{ x: xOffset, y: -itemHeight }}
   animate={{
    x: positionsAtKeyframes,
    y: scrollerHeight,
   }}
   transition={{
    duration: time,
    delay: delay,
    times: times,
    ease: "linear",
    repeat: Infinity,
   }}
   className="absolute flex gap-2 md:gap-4 lg:gap-[30px]"
  >
   {React.createElement(skill.icon, {
    className: "h-6 w-6 flex-shrink-0 md:h-10 md:w-10 lg:h-14 lg:w-14",
    style: {
     flexShrink: 0,
    },
   })}
   <span className="min-w-max text-sm leading-[1.75] tracking-[-0.04em] md:text-xl md:leading-[1.65] lg:text-[32px] lg:leading-[57px]">
    {skill.title}
   </span>
  </motion.div>
 );
}

export default SkillItemLooped;
