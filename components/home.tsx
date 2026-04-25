"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { HOME_DATA } from "@/lib/data";

export default function Home() {
 const { ref } = useSectionInView("Home");
 const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

 return (
  <section ref={ref} id="home" className="mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0">
   <div className="flex items-center justify-center">
    <div className="relative">
     <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
       type: "tween",
       duration: 0.2,
      }}
     >
      <Image
       src="/Irfan_Tayyab.jpg"
       alt="Irfan Tayyab"
       width="192"
       height="192"
       quality="100"
       priority={true}
       className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
      />
     </motion.div>

     <motion.span
      className="absolute bottom-0 right-0 select-none text-4xl"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
       type: "tween",
       stiffness: 125,
       delay: 0.1,
       duration: 0.7,
      }}
     >
      👋
     </motion.span>
    </div>
   </div>

   <motion.h1
    className="mb-10 mt-4 max-w-[60ch] px-4 text-2xl !leading-[1.5]"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
   >
    {HOME_DATA.headline}
   </motion.h1>

   <motion.div
    className="text-md flex flex-col items-center justify-center gap-2 px-4 font-medium sm:flex-row"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
     delay: 0.1,
    }}
   >
    <Link
     href="#contact"
     className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:bg-gray-950"
     onClick={(e) => {
      e.preventDefault();
      setActiveSection("Contact");
      setTimeOfLastClick(Date.now());
      document.querySelector("#contact")?.scrollIntoView();
     }}
    >
     Contact me here <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
    </Link>

    <a
     className="group flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3 outline-none transition dark:bg-[#292f3d]"
     href="https://drive.google.com/file/d/1Qr3Mnn_NF30qAbseAubORNqlPfGA1M3P/view?usp=drive_link"
     target="_blank"
    >
     Download CV <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
    </a>

    <a
     className="active:scale-1.05 flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-gray-700 transition hover:scale-[1.05] hover:text-gray-950 focus:scale-[1.05] dark:bg-[#292f3d] dark:text-white/60"
     href="https://www.linkedin.com/in/irfan-tayyab-31b52330b/"
     target="_blank"
    >
     <BsLinkedin />
    </a>

    <a
     className="flex max-h-12 max-w-12 cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-[1.35rem] text-gray-700 transition hover:scale-[1.05] hover:text-gray-950 focus:scale-[1.05] active:scale-105 dark:bg-[#292f3d] dark:text-white/60"
     href="https://github.com/irfantayyab/"
     target="_blank"
    >
     <FaGithubSquare />
    </a>
   </motion.div>
  </section>
 );
}
