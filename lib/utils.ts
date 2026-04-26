import { EXPERIENCE_DATA } from "@/constants/experience-data";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
 return twMerge(clsx(inputs));
}

export const validateString = (value: unknown, maxLength: number): value is string => {
 if (!value || typeof value !== "string" || value.length > maxLength) {
  return false;
 }

 return true;
};

export const getErrorMessage = (error: unknown): string => {
 let message: string;

 if (error instanceof Error) {
  message = error.message;
 } else if (error && typeof error === "object" && "message" in error) {
  message = String(error.message);
 } else if (typeof error === "string") {
  message = error;
 } else {
  message = "Something went wrong";
 }

 return message;
};

export function calcDuration(startDate: string, endDate?: string | null): string {
 const parse = (str: string): Date => {
  const [month, year] = str.trim().split(" ");
  const monthIndex = new Date(`${month} 1, ${year}`).getMonth();
  return new Date(parseInt(year), monthIndex, 1);
 };

 const start = parse(startDate);
 const end = endDate ? parse(endDate) : new Date();

 let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;

 if (end.getDate() < start.getDate()) months--;

 const years = Math.floor(months / 12);
 const rem = months % 12;

 if (years && rem) return `${years} yr ${rem} mo`;
 if (years) return `${years} yr`;

 return `${rem} mo`;
}

export function getTotalExperience(): string {
 const jobs = EXPERIENCE_DATA.filter((exp) => exp.startDate);

 let totalMonths = 0;

 for (const job of jobs) {
  const parse = (str: string): Date => {
   const [month, year] = str.trim().split(" ");
   const monthIndex = new Date(`${month} 1, ${year}`).getMonth();
   return new Date(parseInt(year), monthIndex, 1);
  };

  const start = parse(job.startDate!);
  const end = job.endDate ? parse(job.endDate) : new Date();

  totalMonths += (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;
 }

 const years = Math.floor(totalMonths / 12);

 const rem = totalMonths % 12;

 if (years && rem) return `${years} yr ${rem} mo`;
 if (years) return `${years} yr`;

 return `${rem} mo`;
}
