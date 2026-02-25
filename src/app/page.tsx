import GlobalBackground from "@/components/canvas/GlobalBackground";
import Hero from "@/components/sections/Hero";
import ProjectsBentoGrid from "@/components/sections/ProjectsBentoGrid";
import SkillsGlobe from "@/components/sections/SkillsGlobe";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-cyan/30 selection:text-cyan">
      <GlobalBackground />
      <Hero />
      <ProjectsBentoGrid />
      <SkillsGlobe />

      <footer className="py-8 text-center border-t border-white/5 relative z-10 bg-background/80 backdrop-blur-md">
        <p className="text-foreground/50 font-mono text-sm">
          [ {new Date().getFullYear()} ] Desenvolvido com TypeScript e Next.js
        </p>
      </footer>
    </main>
  );
}
