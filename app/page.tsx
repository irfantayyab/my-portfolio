import Home from "@/components/home";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Technologies from "@/components/technologies";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

export default function Page() {
 return (
  <main className="flex flex-col items-center px-4">
   <Home />
   <Projects />
   <Skills />
   <Experience />
   <Technologies />
   <Contact />
  </main>
 );
}
