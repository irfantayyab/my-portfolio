import { calcDuration } from "@/lib/utils";

const DRAFT_EXPERIENCE_DATA = [
 {
  id: 1,
  title: "Bachelor's in Computer Science",
  at: "Virtual University of Pakistan",
  location: null,
  description:
   "My university gave me a strong foundation in full-stack development and taught me how to think like a programmer. They also contributed to developing my research skills and my ability to deliver timely solutions to problems.",
  startDate: null,
  endDate: null,
 },
 {
  id: 2,
  title: "MERN Stack Developer",
  at: "CodeFlamme Pvt Ltd",
  location: "Model Town, Lahore",
  description:
   "Developed and maintained full-stack web applications using the MERN stack, building responsive UIs, RESTful APIs, and backend logic with database integration. Worked closely with designers and developers to deliver scalable, secure, and high-performing solutions with smooth frontend-backend data flow.",
  startDate: "July 2024",
  endDate: "Feb 2025",
 },
 {
  id: 3,
  title: "Full-Stack Developer (AI Focused)",
  at: "Sprouto Group",
  location: "DHA Phase 8, Lahore",
  description:
   "Led full-stack development using the MERN stack, guiding a team through code reviews, architecture decisions, and deployment. Coordinated cross-functional efforts, ensured timely feature delivery, and made key technical decisions around performance, scalability, and security.",
  startDate: "Mar 2025",
  endDate: "Nov 2025",
 },
 {
  id: 4,
  title: "Software Engineer",
  at: "AmentoTech Pvt Ltd",
  location: "Faisal Town, Lahore",
  description:
   "Built multi-step form systems with dynamic schemas and resolvers, keeping the frontend clean and maintainable. Designed modular REST APIs with NestJS and handled incremental database migrations using Prisma, while following structured Git workflows across a collaborative team.",
  startDate: "Nov 2025",
  endDate: null,
 },
];

export const EXPERIENCE_DATA = DRAFT_EXPERIENCE_DATA.map((exp) => ({
 ...exp,
 duration: exp.startDate ? calcDuration(exp.startDate, exp.endDate) : null,
}));
