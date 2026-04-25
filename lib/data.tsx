import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import portfolioimg from "@/public/Portfolio.png";
import newsoftheworldimg from "@/public/News of the World.png";
import responsivewebpages from "@/public/Responsive Webpages.png";
import tailwindfilterformimg from "@/public/Tailwind Filter Form.png";

export const LINKS = [
 {
  name: "Home",
  hash: "#home",
 },
 {
  name: "Introduction",
  hash: "#introduction",
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
  name: "Technologies",
  hash: "#technologies",
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

export const HOME_DATA = {
 headline: (
  <>
   <p className="text-lg font-light">Irfan Tayyab</p>
   Proud <span className="font-semibold">software engineer</span> with{" "}
   <span className="font-semibold">two years</span> of proven experience. Specialising in{" "}
   <span className="underline underline-offset-8">Next.js, MERN, SQL & NoSQL</span>.
  </>
 ),
};

export const INTRODUCTION_DATA = {
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
  description: "You are currently looking at it 👉👈",
  tags: ["Next.js", "Tailwind", "TypeScript", "Framer Motion", "Intersection Observer"],
  imageUrl: portfolioimg,
  liveUrl: undefined,
 },
 {
  title: "Custom Filter Form",
  description:
   "A JavaScript filter form featuring range selection, custom radio buttons, a custom select component, and styled checkboxes.",
  tags: ["HTML", "JavaScript", "Tailwind", "DOM Manipulation", "UI Development"],
  imageUrl: tailwindfilterformimg,
  liveUrl: "https://tailwind-filter-form.vercel.app",
 },
 {
  title: "News of the World",
  description:
   "An application aggregating global news into one place, with filtering by country and category.",
  tags: ["React", "Bootstrap", "Node.js", "MongoDB"],
  imageUrl: newsoftheworldimg,
  liveUrl: "https://news-of-the-world-fe.vercel.app",
 },
 {
  title: "Responsive Webpages",
  description: "HTML and CSS only, responsive, cross-browser compatible web pages.",
  tags: ["HTML", "CSS", "PSD to HTML", "Cross-browser Compatibility", "Responsive Design"],
  imageUrl: responsivewebpages,
  liveUrl: "https://responsive-webpages-it.firebaseapp.com",
 },
] as const;

export const SKILLS_DATA = [
 // Main Stack
 { id: 5, name: "TypeScript", icon: null, type: "stack" },
 { id: 7, name: "Next.js", icon: null, type: "stack" },
 { id: 11, name: "Nest.js", icon: null, type: "stack" },
 { id: 13, name: "SQL", icon: null, type: "stack" },
 { id: 6, name: "React.js", icon: null, type: "stack" },
 { id: 3, name: "Tailwind CSS", icon: null, type: "stack" },

 // Hard Skills
 { id: 1, name: "HTML5", icon: null, type: "primary" },
 { id: 2, name: "CSS/SCSS/SASS", icon: null, type: "primary" },
 { id: 4, name: "JavaScript", icon: null, type: "primary" },
 { id: 8, name: "Redux Toolkit", icon: null, type: "primary" },
 { id: 9, name: "RTK Query", icon: null, type: "primary" },
 { id: 10, name: "Node.js", icon: null, type: "primary" },
 { id: 28, name: "Express.js", icon: null, type: "primary" },
 { id: 12, name: "MongoDB", icon: null, type: "primary" },
 { id: 14, name: "API Integration", icon: null, type: "primary" },
 { id: 15, name: "AI Integration", icon: null, type: "primary" },
 { id: 16, name: "Web Sockets", icon: null, type: "primary" },
 { id: 17, name: "Git", icon: null, type: "primary" },
 { id: 18, name: "Code Testing and Debugging", icon: null, type: "primary" },
 { id: 19, name: "Code Analysis and Refactoring", icon: null, type: "primary" },

 // Soft Skills
 { id: 20, name: "Problem Solving", icon: null, type: "secondary" },
 { id: 21, name: "Project Management", icon: null, type: "secondary" },
 { id: 22, name: "Research Skills", icon: null, type: "secondary" },
 { id: 23, name: "Communication", icon: null, type: "secondary" },
 { id: 24, name: "Visual Studio Code", icon: null, type: "secondary" },
 { id: 25, name: "Microsoft Office", icon: null, type: "secondary" },
 { id: 26, name: "Inkscape", icon: null, type: "secondary" },
 { id: 27, name: "Figma", icon: null, type: "secondary" },
] as const;

export const TECHNOLOGIES_DATA = [
 { id: 1, name: "Socket.io", icon: null },
 { id: 2, name: "React Hook Form", icon: null },
 { id: 3, name: "Zod", icon: null },
 { id: 4, name: "Formik", icon: null },
 { id: 5, name: "Yup", icon: null },
 { id: 6, name: "Docker", icon: null },
 { id: 7, name: "Prisma", icon: null },
 { id: 8, name: "Drizzle", icon: null },
 { id: 9, name: "i18next", icon: null },
 { id: 10, name: "jQuery", icon: null },
 { id: 11, name: "GraphQL", icon: null },
 { id: 12, name: "Apollo Client/Server", icon: null },
 { id: 13, name: "JWT", icon: null },
 { id: 14, name: "Tanstack Query", icon: null },
 { id: 15, name: "Jest", icon: null },
 { id: 16, name: "React Testing Library", icon: null },
 { id: 17, name: "Directus CMS", icon: null },
 { id: 18, name: "Strapi", icon: null },
 { id: 19, name: "Firebase", icon: null },
 { id: 20, name: "Supabase", icon: null },
 { id: 21, name: "Material UI", icon: null },
 { id: 22, name: "MDX", icon: null },
 { id: 23, name: "Framer Motion", icon: null },
 { id: 24, name: "GSAP", icon: null },
 { id: 25, name: "Vite", icon: null },
 { id: 26, name: "Webpack", icon: null },
 { id: 27, name: "Gulp", icon: null },
 { id: 28, name: "Agile Methodology", icon: null },
] as const;

export const SCROLLER_SKILLS = [
 {
  position: 0,
  title: "Product Managers",
  icon: LuGraduationCap,
 },
 {
  position: 1,
  title: "UX/UI & Founding Designers",
  icon: LuGraduationCap,
 },
 {
  position: 2,
  title: "Full-Stack Developers",
  icon: LuGraduationCap,
 },
 {
  position: 3,
  title: "Mobile Developers",
  icon: LuGraduationCap,
 },
 {
  position: 4,
  title: "AI & Machine Learning Engineers",
  icon: LuGraduationCap,
 },
 {
  position: 5,
  title: "Foundational CTOs",
  icon: LuGraduationCap,
 },
 {
  position: 6,
  title: "Cross- Functional Pods",
  icon: LuGraduationCap,
 },
] as const;

export const EXPERIENCE_DATA = [
 {
  id: 1,
  title: "Bachelor's in Computer Science",
  location: "Virtual University of Pakistan",
  description:
   "My university gave me a strong foundation in full-stack development and taught me how to think like a programmer. They also contributed to developing my research skills and my ability to deliver timely solutions to problems.",
  startDate: null,
  endDate: null,
 },
 {
  id: 2,
  title: "MERN Stack Developer",
  location: "CodeFlamme Pvt Ltd",
  description:
   "Developed and maintained full-stack web applications using the MERN stack, building responsive UIs, RESTful APIs, and backend logic with database integration. Worked closely with designers and developers to deliver scalable, secure, and high-performing solutions with smooth frontend-backend data flow.",
  startDate: "July 2024",
  endDate: "Feb 2025",
 },
 {
  id: 3,
  title: "Full-Stack Developer (AI Focused)",
  location: "Sprouto Group",
  description:
   "Led full-stack development using the MERN stack, guiding a team through code reviews, architecture decisions, and deployment. Coordinated cross-functional efforts, ensured timely feature delivery, and made key technical decisions around performance, scalability, and security.",
  startDate: "Mar 2025",
  endDate: "Nov 2025",
 },
 {
  id: 4,
  title: "Software Engineer",
  location: "AmentoTech Pvt Ltd",
  description:
   "Built multi-step form systems with dynamic schemas and resolvers, keeping the frontend clean and maintainable. Designed modular REST APIs with NestJS and handled incremental database migrations using Prisma, while following structured Git workflows across a collaborative team.",
  startDate: "Nov 2025",
  endDate: null,
 },
] as const;
