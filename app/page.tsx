import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <TechStack />
      <Contact />
    </main>
  );
}
