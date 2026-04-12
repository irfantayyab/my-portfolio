"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SectionDivider({
 orientation = "horizontal",
}: {
 orientation?: "horizontal" | "vertical";
}) {
 return (
  <motion.div
   className={cn(
    "hidden rounded-full bg-gray-200 dark:bg-opacity-20 sm:block",
    orientation === "horizontal" ? "mb-24 h-px w-1/6 min-w-16" : "my-24 h-16 w-1",
   )}
   initial={{ opacity: 0, y: 100 }}
   animate={{ opacity: 1, y: 0 }}
   transition={{ delay: 0.125 }}
  ></motion.div>
 );
}
