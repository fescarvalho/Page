"use client";

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Servas — Gestão de Escalas",
        description: "Sistema completo para automação e gerenciamento de escalas com arquitetura ponta a ponta.",
        tags: ["Next.js", "Node.js", "Prisma"],
        className: "md:col-span-2 md:row-span-2",
    },
    {
        id: 2,
        title: "Soccer Data Analytics",
        description: "Plataforma de inteligência de dados esportivos (Champions/Europa League) focada em insights probabilísticos e cruzamento de variáveis.",
        tags: ["Data Science", "SQL", "Estatística"],
        className: "md:col-span-1 md:row-span-1",
    },
    {
        id: 3,
        title: "Dashboard & DataViz",
        description: "Interface focada em visualização de métricas complexas e usabilidade.",
        tags: ["React", "TypeScript", "Tailwind"],
        className: "md:col-span-1 md:row-span-1",
    }
];

export default function ProjectsBentoGrid() {
    return (
        <section id="projects" className="py-24 relative z-10">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
                        Projetos em Destaque
                    </h2>
                    <div className="h-1 w-20 bg-cyan rounded-full shadow-[0_0_10px_rgba(0,255,194,0.5)]"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-6">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={project.className}
                        >
                            <Tilt
                                tiltMaxAngleX={5}
                                tiltMaxAngleY={5}
                                scale={1.02}
                                transitionSpeed={2000}
                                className="h-full w-full"
                                glareEnable={true}
                                glareMaxOpacity={0.15}
                                glareColor="#00FFC2"
                                glarePosition="all"
                            >
                                <div className="h-full w-full p-8 rounded-2xl bg-surface border border-white/5 flex flex-col justify-between group hover:border-cyan/50 hover:shadow-[0_0_30px_rgba(0,255,194,0.1)] transition-all overflow-hidden relative">
                                    {/* Glowing background gradient on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-heading font-semibold text-foreground mb-3 group-hover:text-cyan transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-foreground/70 font-sans text-sm md:text-base line-clamp-4">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between mt-6 gap-4">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 bg-background text-cyan font-mono text-xs rounded border border-cyan/20">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex gap-3 text-foreground/50">
                                            <button className="hover:text-cyan transition-colors"><Github size={20} /></button>
                                            <button className="hover:text-cyan transition-colors"><ExternalLink size={20} /></button>
                                        </div>
                                    </div>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
