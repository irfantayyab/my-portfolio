"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { EXPERIENCE_DATA } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "next-themes";
import classNames from "classnames";

export default function Experience() {
 const { ref } = useSectionInView("Experience");
 const { resolvedTheme } = useTheme();
 const [resolvedThemeAfterRender, setResolvedThemeAfterRender] = useState<string>();

 useEffect(() => {
  setResolvedThemeAfterRender(resolvedTheme);
 }, [resolvedTheme]);

 return (
  <section id="experience" ref={ref} className="mb-28 scroll-mt-28 sm:mb-40">
   <SectionHeading>My experience</SectionHeading>
   <VerticalTimeline lineColor="">
    {EXPERIENCE_DATA.map((item, index) => (
     <React.Fragment key={index}>
      <VerticalTimelineElement
       visible={true}
       contentStyle={{
        background: resolvedTheme === "light" ? "rgb(242, 243, 246)" : "rgba(255, 255, 255, 0.05)",
        boxShadow: "none",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        textAlign: "left",
        padding: "1.3rem 2rem",
       }}
       contentArrowStyle={{
        borderRight:
         resolvedTheme === "light"
          ? "0.4rem solid rgb(156, 163, 175)"
          : "0.4rem solid rgba(255, 255, 255, 0.5)",
       }}
       date={item.date}
       icon={item.icon}
       iconClassName={classNames({
        "bg-[#ffffff]": resolvedThemeAfterRender === "light",
        "bg-[#111827]": resolvedThemeAfterRender === "dark",
       })}
       iconStyle={{
        fontSize: "1.5rem",
       }}
      >
       <h3 className="font-semibold capitalize">{item.title}</h3>
       <p className="!mt-0 font-normal">{item.location}</p>
       <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{item.description}</p>
      </VerticalTimelineElement>
     </React.Fragment>
    ))}
   </VerticalTimeline>
  </section>
 );
}
