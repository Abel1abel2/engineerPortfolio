import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Job from "@/components/Job";
import Projects from "@/components/Projects";
import Skiils from "@/components/Skiils";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
   <div id="home">
    <Hero/>
   </div>
   <Job/>
   <div id="experience">
    <Experience/>
   </div>
   <div id="skills">
    <Skiils/>
   </div>
   <div id="projects">
    <Projects/>
   </div>
   <div id="contact">
    <Contact/>
   </div>
   </>
  );
}