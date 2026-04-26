import portfolioimg from "@/public/Portfolio.png";
import tailwindfilterformimg from "@/public/Tailwind Filter Form.png";

export const PROJECTS_DATA = [
 {
  title: "Irfan Tayyab - Portfolio",
  description: "You are currently visiting it.",
  tags: ["Next.js", "Tailwind", "TypeScript", "Framer Motion", "Intersection Observer"],
  imageUrl: portfolioimg,
  liveUrl: undefined,
 },
 {
  title: "Sprouto's Official Site",
  description:
   "Corporate website with animations, a 3D model, Stripe integration, and SEO-optimized server-rendered pages.",
  tags: ["TypeScript", "Next.js", "Stripe", "Server Side Rendering"],
  imageUrl: tailwindfilterformimg,
  liveUrl: "https://sprouto.vercel.app",
 },
 {
  title: "Brandably",
  description: "UK-based e-commerce store offering custom-printed products across all categories.",
  tags: ["TypeScript", "Next.js", "Supabase", "Stripe", "Excel to SQL", "Drizzle ORM"],
  imageUrl: tailwindfilterformimg,
  liveUrl: "https://brandably.com",
 },
 {
  title: "The Ai Detective",
  description: "AI chatbot that detects plagiarism in research papers and assignment documents.",
  tags: ["TypeScript", "React.js", "Node.js", "Mongodb"],
  imageUrl: tailwindfilterformimg,
  liveUrl: "https://the-ai-detective-fe.vercel.app",
 },
 {
  title: "Hamilton Black",
  description: "Funding agency website with sophisticated animations including parallax effects.",
  tags: ["HTML", "CSS", "GSAP"],
  imageUrl: tailwindfilterformimg,
  liveUrl: "https://hamilton-black.webflow.io",
 },
 {
  title: "Smart Energi Hub",
  description: "Energy advisory company website with polished UI animations.",
  tags: ["HTML", "CSS", "GSAP"],
  imageUrl: tailwindfilterformimg,
  liveUrl: "https://www.smartenergihub.co.uk",
 },
 {
  title: "Emprenur",
  description: "Freelancer marketplace connecting independent professionals with business clients.",
  tags: ["React.js", "Node.js", "Mongodb", "Bootstrap"],
  imageUrl: tailwindfilterformimg,
  liveUrl: "https://emprenur.com",
 },
 {
  title: "Gatsby.tv",
  description: "Movie and TV show discovery site with a sleek, minimal interface.",
  tags: ["TypeScript", "React.js", "Shadcn UI"],
  imageUrl: tailwindfilterformimg,
  liveUrl: "https://gatsby.tv",
 },
 // {
 //  title: "Custom Filter Form",
 //  description:
 //   "A JavaScript filter form featuring range selection, custom radio buttons, a custom select component, and styled checkboxes.",
 //  tags: ["HTML", "JavaScript", "Tailwind", "DOM Manipulation", "UI Development"],
 //  imageUrl: tailwindfilterformimg,
 //  liveUrl: "https://tailwind-filter-form.vercel.app",
 // },
 // {
 //  title: "News of the World",
 //  description:
 //   "An application aggregating global news into one place, with filtering by country and category.",
 //  tags: ["React", "Bootstrap", "Node.js", "MongoDB"],
 //  imageUrl: newsoftheworldimg,
 //  liveUrl: "https://news-of-the-world-fe.vercel.app",
 // },
 // {
 //  title: "Responsive Webpages",
 //  description: "HTML and CSS only, responsive, cross-browser compatible web pages.",
 //  tags: ["HTML", "CSS", "PSD to HTML", "Cross-browser Compatibility", "Responsive Design"],
 //  imageUrl: responsivewebpages,
 //  liveUrl: "https://responsive-webpages-it.firebaseapp.com",
 // },
] as const;
