"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { EXPERIENCE_DATA } from "@/lib/data";
import { useSectionInView, useTimelineFill } from "@/lib/hooks";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Badge } from "./ui/badge";
import { BsCircleFill } from "react-icons/bs";
import { cn } from "@/lib/utils";
import { ChevronsDownUp, ChevronsUpDown } from "lucide-react";

export default function Experience() {
 const { ref } = useSectionInView("Experience");

 const { setRef, fillPercent } = useTimelineFill();

 const allValues = EXPERIENCE_DATA.map((item) => item.title);

 const [openItems, setOpenItems] = useState<string[]>(allValues);

 const expandedAll = openItems.length === allValues.length;

 const handleAccordionChange = (values: string[]) => {
  setOpenItems(values);
 };

 const handleExpandAll = () => {
  setOpenItems(expandedAll ? [] : allValues);
 };

 return (
  <section id="experience" ref={ref} className="mb-28 w-full max-w-[53rem] scroll-mt-28 sm:mb-40">
   <SectionHeading className="relative mx-auto w-fit">
    Experience
    <button
     onClick={handleExpandAll}
     className={cn(
      "absolute left-full top-0 top-1/2 flex size-10 -translate-y-1/2 translate-x-1/2 items-center  justify-center rounded-full text-sm text-gray-500 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/10",
     )}
     title={expandedAll ? "Collapse all" : "Expand all"}
    >
     {expandedAll ? (
      <ChevronsDownUp className="size-[18px] transition-transform duration-200" />
     ) : (
      <ChevronsUpDown className="size-[18px] transition-transform duration-200" />
     )}
    </button>
   </SectionHeading>

   <div
    className="relative grid h-full grid-cols-[20px_1fr] items-start gap-x-4 xs:grid-cols-[auto_20px_1fr]"
    ref={setRef}
   >
    <div className="absolute left-2.5 col-start-1 h-full w-px bg-gray-200 dark:bg-[#3e4251] xs:col-start-2">
     <div className="w-full bg-[#3e4251] dark:bg-gray-400" style={{ height: `${fillPercent * 100}%` }} />
    </div>
    {EXPERIENCE_DATA.map((item, index) => {
     return (
      <React.Fragment key={item.id}>
       {item.startDate && (
        <Badge className="col-span-1 col-start-1 hidden w-fit justify-self-end bg-[#4a4b4b] text-white hover:bg-[#4a4b4b] dark:bg-[#292f3d] dark:text-white/70 dark:hover:bg-[#292f3d] xs:inline-flex">
         {item.startDate} - {item.endDate || "Present"}
        </Badge>
       )}
       <div
        className="relative col-span-1 col-start-1 flex h-full justify-center xs:col-start-2"
        style={{ gridRow: index + 1 }}
       >
        <BsCircleFill
         className={cn(
          "absolute left-1/2 top-0 size-5 -translate-x-1/2 rounded-full border-[3px] fill-[#4a4b4b] dark:border-gray-500 dark:fill-[#292f3d]",
          index % 2 === 0 ? "" : "",
         )}
        />
       </div>
       <div className="col-span-1 col-start-2 block xs:hidden">
        {item.startDate && (
         <Badge className="w-fit justify-self-end bg-[#4a4b4b] text-white hover:bg-[#4a4b4b] dark:bg-[#292f3d] dark:text-white/70 dark:hover:bg-[#292f3d]">
          {item.startDate} - {item.endDate || "Present"}
         </Badge>
        )}
        <Accordion
         type="multiple"
         value={openItems}
         onValueChange={handleAccordionChange}
         className="mx-auto my-4 w-full rounded-xl border"
        >
         <AccordionItem value={item.title} className="border-b px-4 last:border-b-0">
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-1">
           <Badge className="w-fit bg-[#dbd7fb] font-normal text-black hover:bg-[#dbd7fb] dark:bg-[#676394] dark:!text-white dark:hover:bg-[#676394]">
            @{item.location}
           </Badge>
           <p>{item.description}</p>
          </AccordionContent>
         </AccordionItem>
        </Accordion>
       </div>
       <Accordion
        type="multiple"
        value={openItems}
        onValueChange={handleAccordionChange}
        className="col-span-1 col-start-3 mx-auto my-4 hidden w-full rounded-xl border border-black/5 bg-gray-100 dark:bg-[#292f3d] xs:block"
       >
        <AccordionItem value={item.title} className="border-b px-4 last:border-b-0">
         <AccordionTrigger>{item.title}</AccordionTrigger>
         <AccordionContent className="flex flex-col gap-1">
          <Badge className="w-fit bg-[#dbd7fb] font-normal text-black hover:bg-[#dbd7fb] dark:bg-[#676394] dark:!text-white dark:hover:bg-[#676394]">
           @{item.location}
          </Badge>
          <p>{item.description}</p>
         </AccordionContent>
        </AccordionItem>
       </Accordion>
      </React.Fragment>
     );
    })}
   </div>
  </section>
 );
}
