"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
 const { ref } = useSectionInView("Contact");

 return (
  <motion.section
   id="contact"
   ref={ref}
   className="mb-20 w-[min(100%,38rem)] scroll-mt-28 text-center sm:mb-28"
   initial={{
    opacity: 0,
   }}
   whileInView={{
    opacity: 1,
   }}
   transition={{
    duration: 1,
   }}
   viewport={{
    once: true,
   }}
  >
   <SectionHeading>Contact me</SectionHeading>

   <p className="-mt-6 text-gray-700 dark:text-white/80">
    Please contact me directly at{" "}
    <a className="underline" href="mailto:irfantayyib07@gmail.com" draggable={false}>
     irfantayyib07@gmail.com
    </a>{" "}
    or through this form.
   </p>

   <form
    className="mt-10 flex flex-col dark:text-black"
    action={async (formData) => {
     const { data, error } = await sendEmail(formData);

     if (error) {
      toast.error(error);
      return;
     }

     toast.success("Email sent successfully!");
    }}
   >
    <input
     className="h-14 rounded-xl border border-black/5  px-4 text-[15px] outline-none transition-all dark:border-white/10 dark:bg-black/10 dark:bg-opacity-80 dark:text-white/70 dark:outline-none"
     name="senderEmail"
     type="email"
     required
     maxLength={500}
     placeholder="Your email"
    />
    <textarea
     className="my-3 h-52 rounded-xl border border-black/5 p-4  text-sm outline-none transition-all dark:border-white/10 dark:bg-black/10 dark:bg-opacity-80 dark:text-white/70 dark:outline-none"
     name="message"
     placeholder="Your message"
     required
     maxLength={5000}
    />
    <SubmitBtn />
   </form>
  </motion.section>
 );
}
