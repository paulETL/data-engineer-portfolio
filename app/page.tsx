import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import FeaturedProjects from "@/components/FeaturedProjects";
import Certifications from "@/components/Certifications";
import ResumeCTA from "@/components/ResumeCTA";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">

      <Navbar />

      <Hero />

      

      <FeaturedProjects />
      <TechStack />
      <Certifications />
      <ResumeCTA />
      <Contact />

    </main>
  );
}

