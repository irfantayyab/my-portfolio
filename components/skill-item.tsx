"use client";
import { motion, useAnimationControls } from "framer-motion";
import React, { useEffect } from "react";
import getAnimationParams from "@/lib/get-animation-params";

function SkillItem({
 skill,
 skills,
 gap,
 gapFactor,
 scrollerHeight,
}: {
 skill: any;
 skills: any;
 gap: number;
 gapFactor: number;
 scrollerHeight: number;
}) {
 const controls = useAnimationControls();
 const pos = skill.position;
 const { xOffset, positionsAtKeyframes, yOffset, pathLength, time } = getAnimationParams({
  pos,
  total: skills.length,
  gap,
  gapFactor,
  scrollerHeight,
 });

 useEffect(() => {
  controls.start({
   x: positionsAtKeyframes,
   y: pathLength,
  });
 }, [controls, positionsAtKeyframes, pathLength]);

 return (
  <motion.div
   key={skill.title}
   initial={{ x: xOffset, y: yOffset }}
   animate={controls}
   transition={{
    duration: time,
    times: ((i) => {
     const keyframes = [];
     const part = 1 / i;
     for (let j = 0; j <= i; j++) {
      let keyframe = j * part;
      keyframes.push(keyframe);
     }
     return keyframes;
    })(positionsAtKeyframes.length),
    ease: "linear",
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

export default SkillItem;
