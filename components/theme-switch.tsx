"use client";

import { useTheme } from "next-themes";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
 const { setTheme, resolvedTheme } = useTheme();

 return (
  <button
   className="fixed bottom-5 right-5 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-2xl backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] active:scale-105 dark:bg-gray-950"
   aria-label="Toggle theme"
   onClick={() => {
    resolvedTheme === "light" ? setTheme("dark") : setTheme("light");
   }}
  >
   {/* Both icons are rendered and toggled via the `dark` class so server and client HTML match */}
   <BsMoon className="dark:hidden" />
   <BsSun className="hidden dark:block" />
  </button>
 );
}
