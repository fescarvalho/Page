import GlobalBackground from "@/components/canvas/GlobalBackground";
import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import ProjectsBentoGrid from "@/components/sections/ProjectsBentoGrid";
import EcosystemDashboard from "@/components/sections/SkillsGlobe";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-cyan/30 selection:text-cyan">
      <GlobalBackground />
      <Hero />
      <AboutMe />
      <ProjectsBentoGrid />
      <EcosystemDashboard />

      <footer className="py-12 border-t border-white/5 relative z-10 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-foreground/50 font-mono text-sm">
            © {new Date().getFullYear()} Fernando Carvalho. Todos os direitos reservados.
          </p>

          <div className="flex gap-6 text-foreground/50">
            <a href="https://github.com/fescarvalho" target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/fecarvalhodev" target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://instagram.com/fescarv" target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
