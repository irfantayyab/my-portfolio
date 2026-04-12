import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Technologies from "@/components/technologies";

export default function Home() {
 return (
  <main className="flex flex-col items-center px-4">
   <Intro />
   <SectionDivider orientation="vertical" />
   <About />
   <Projects />
   <Skills />
   <Technologies />
   <Experience />
   <Contact />
  </main>
 );
}
