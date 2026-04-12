import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import portfolioimg from "@/public/Portfolio.png";
// import henrysrepairsimg from "@/public/Henry S Repairs.png";
import newsoftheworldimg from "@/public/News of the World.png";
import responsivewebpages from "@/public/Responsive Webpages.png";
import tailwindfilterformimg from "@/public/Tailwind Filter Form.png";

export const LINKS = [
 {
  name: "Home",
  hash: "#home",
 },
 {
  name: "About",
  hash: "#about",
 },
 {
  name: "Projects",
  hash: "#projects",
 },
 {
  name: "Skills",
  hash: "#skills",
 },
 {
  name: "Experience",
  hash: "#experience",
 },
 {
  name: "Contact",
  hash: "#contact",
 },
] as const;

export const INTRO_DATA = {
 headline: (
  <>
   <p className="text-lg font-light">Irfan Tayyab</p>
   Proud <span className="font-semibold">software engineer</span> with{" "}
   <span className="font-semibold">two years</span> of proven experience. Specialising in{" "}
   <span className="underline underline-offset-8">Next.js, MERN, SQL & NoSQL</span>.
  </>
 ),
};

export const ABOUT_DATA = {
 p1: (
  <>
   <p className="mb-3">
    I&apos;m a <span className="font-medium">full-stack web developer</span> who thrives on turning complex
    problems into clean, elegant solutions — that moment of clarity when everything clicks is what keeps me
    going. My core stack is <span className="font-medium">Next.js, MERN, SQL & NoSQL</span>, with strong
    proficiency in <span className="font-medium">TypeScript</span>. I&apos;m always exploring new technologies
    and pushing the boundaries of what I can build.
   </p>
  </>
 ),
 p2: (
  <>
   <p>
    <span className="italic">When I&apos;m not coding</span>, I enjoy playing video games, watching movies,
    and playing with cats 🐱. I enjoy <span className="font-medium">learning new things</span>. I am currently
    into <span className="font-medium">writing and public speaking</span>.
   </p>
  </>
 ),
};

export const PROJECTS_DATA = [
 {
  title: "Irfan Tayyab - Portfolio",
  description: "The project is the portfolio you are currently visiting.",
  tags: ["React", "Next.js", "Tailwind", "TypeScript", "Framer Motion", "Intersection Observer"],
  imageUrl: portfolioimg,
  liveUrl: undefined,
 },
 {
  title: "Tailwind Filter Form",
  description:
   "This is a filter form made in Vanilla JS. The features include range selection, custom radio-buttons, custom select component, and custom checkboxes and more.",
  tags: ["HTML", "JavaScript", "TailwindCSS", "DOM Manipulation", "UI Development"],
  imageUrl: tailwindfilterformimg,
  liveUrl: "https://tailwind-filter-form.vercel.app",
 },
 // {
 //  title: "Henry S. Repairs",
 //  description:
 //   "This application lets the admin manage their employees. Employees can keep track of their daily tasks, which can be supervised by the admin.",
 //  tags: ["React", "Redux Toolkit", "TypeScript", "SCSS", "Node.js", "MongoDB", "JWT"],
 //  imageUrl: henrysrepairsimg,
 //  liveUrl: "https://henrysrepairs.vercel.app"
 // },
 {
  title: "News of the World",
  description:
   "This application converges news from all over the world to a single place. You can filter the news by country and category.",
  tags: ["React", "Bootstrap", "Node.js", "MongoDB"],
  imageUrl: newsoftheworldimg,
  liveUrl: "https://news-of-the-world-fe.vercel.app",
 },
 {
  title: "Responsive Webpages",
  description: "HTML and CSS only, responsive, cross-browser compatible web pages.",
  tags: ["HTML", "CSS", "PSD to HTML", "Cross-browser Compatibility"],
  imageUrl: responsivewebpages,
  liveUrl: "https://responsive-webpages-it.firebaseapp.com",
 },
] as const;

export const SKILLS_DATA = [
 "HTML",
 "CSS",
 "Tailwind",
 "JavaScript",
 "TypeScript",
 "React",
 "Next.js",
 "Redux Toolkit",
 "Node.js",
 "Express",
 "MongoDB",
 "Redis",
 "SQL",
 "Firebase",
 "Supabase",
 "Prisma",
 "Framer Motion",
 "Socket.io",
 "GraphQL/Apollo",
 "Git",
 "API Integration",
 "AI Integration",
] as const;

export const EXPERIENCE_DATA = [
 {
  title: "Bachelor's in Computer Science",
  location: "@ Virtual University of Pakistan",
  description:
   "My university gave me a strong foundation in full-stack development and taught me how to think like a programmer. They also contributed to developing my research skills and my ability to deliver timely solutions to problems.",
  icon: React.createElement(LuGraduationCap),
  date: undefined,
 },
 {
  title: "MERN Stack Developer",
  location: "@ CodeFlamme Pvt Ltd",
  description:
   "Developed and maintained full-stack web applications using the MERN stack, building responsive UIs, RESTful APIs, and backend logic with database integration. Worked closely with designers and developers to deliver scalable, secure, and high-performing solutions with smooth frontend-backend data flow.",
  icon: React.createElement(CgWorkAlt),
  date: undefined,
 },
 {
  title: "Full-Stack Developer (Ai Focused)",
  location: "@ Sprouto Group",
  description:
   "Led full-stack development using the MERN stack, guiding a team through code reviews, architecture decisions, and deployment. Coordinated cross-functional efforts, ensured timely feature delivery, and made key technical decisions around performance, scalability, and security.",
  icon: React.createElement(FaReact),
  date: undefined,
 },
 {
  title: "Software Engineer",
  location: "@ AmentoTech Pvt Ltd",
  description:
   "Built multi-step form systems with dynamic schemas and resolvers, keeping the frontend clean and maintainable. Designed modular REST APIs with NestJS and handled incremental database migrations using Prisma, while following structured Git workflows across a collaborative team.",
  icon: React.createElement(FaReact),
  date: undefined,
 },
] as const;
