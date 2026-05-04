"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";
import { LINKS } from "@/constants/header-links";
import { cn } from "@/lib/utils";

function Header({}) {
 const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

 return (
  <>
   <div className="relative z-50">
    <motion.div
     initial={{ x: "-50%", y: -100, opacity: 0 }}
     animate={{ x: "-50%", y: 0, opacity: 1 }}
     className="fixed left-1/2 top-0 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:border-black/40 dark:bg-gray-950 dark:bg-opacity-75 sm:top-6 sm:h-[3.25rem] sm:w-[36.5rem] sm:rounded-full"
    ></motion.div>
   </div>

   <nav className="fixed left-1/2 top-[0.15rem] z-50 flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
    <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-3">
     {LINKS.map((link) => (
      <motion.li
       className="relative flex h-3/4 min-w-fit items-center justify-center"
       key={link.hash}
       initial={{ y: -100, opacity: 0 }}
       animate={{ y: 0, opacity: 1 }}
      >
       <Link
        className={cn(
         "flex w-full items-center justify-center px-3 py-3 transition hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-300",
         activeSection === link.name ? "text-gray-950 dark:text-gray-200" : "",
        )}
        href={link.hash}
        onClick={(e) => {
         e.preventDefault();
         setActiveSection(link.name);
         setTimeOfLastClick(Date.now());
         document.querySelector(link.hash)?.scrollIntoView();
        }}
       >
        {link.name}

        {link.name === activeSection && (
         <motion.span
          className="absolute inset-0 -z-10 rounded-full bg-gray-100 dark:bg-gray-800"
          layoutId="activeSection"
          transition={{
           type: "spring",
           stiffness: 380,
           damping: 30,
          }}
         ></motion.span>
        )}
       </Link>
      </motion.li>
     ))}
    </ul>
   </nav>
  </>
 );
}

export default Header;
