"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
 const senderEmail = formData.get("senderEmail");
 const message = formData.get("message");

 // simple server-side validation
 if (!validateString(senderEmail, 500)) {
  return {
   error: "Invalid sender email",
  };
 }
 if (!validateString(message, 5000)) {
  return {
   error: "Invalid message",
  };
 }

 let data;
 try {
  data = await resend.emails.send({
   from: "Portfolio Contact form <onboarding@resend.dev>",
   to: "irfantayyib07@gmail.com",
   subject: "Message from Portfolio",
   replyTo: senderEmail,
   react: React.createElement(ContactFormEmail, {
    message: message,
    senderEmail: senderEmail,
   }),
  });

  // Resend returns API errors instead of throwing
  if (data.error) {
   return {
    error: data.error.message,
   };
  }
 } catch (error: unknown) {
  return {
   error: getErrorMessage(error),
  };
 }

 return {
  data,
 };
};
