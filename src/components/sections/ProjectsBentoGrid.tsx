"use client";

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/types/project";


const projects: Project[] = [
    {
        id: 1,
        title: "Servas — Gestão de Escalas",
        description: "Sistema de Gestão de Escalas e Engajamento de Servas para o Santuário Diocesano Nossa Senhora da Natividade.",
        tags: ["React 19", "TypeScript", "Node.js"],
        className: "md:col-span-2 md:row-span-2",
        githubUrl: "https://github.com/fescarvalho/ServasProjeto",
        externalUrl: "https://servasdoaltar.vercel.app/",
        image: "/projects/servas.png"
    },
    {
        id: 2,
        title: "Isa Sushi — PDV Online",
        description: "Plataforma completa no estilo E-commerce / Ponto de Venda focada em delivery, com integração ao WhatsApp e pagamento via Pix.",
        tags: ["Next.js", "TypeScript", "React"],
        className: "md:col-span-1 md:row-span-1",
        githubUrl: "https://github.com/fescarvalho/isasuhi-NEXT",
        externalUrl: "https://isasushidelivery.vercel.app/",
        image: "/projects/isasushi.png"
    },
    {
        id: 3,
        title: "Contabilidade Backend",
        description: "Fundação do sistema provendo rotas RESTful, autenticação, modelagem de banco de dados robusta e manipulação em tempo real.",
        tags: ["Node.js", "Express", "TypeScript"],
        className: "md:col-span-1 md:row-span-1",
        githubUrl: "https://github.com/fescarvalho/BACKEND-RENDER",
        externalUrl: "https://leandro-abreu-contabilidade.vercel.app/",
        image: "/projects/contabilidade.png"
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
                                <div className="h-full w-full rounded-2xl bg-surface border border-white/5 flex flex-col group hover:border-cyan/50 hover:shadow-[0_0_30px_rgba(0,255,194,0.1)] transition-all overflow-hidden relative">
                                    {/* Project Image as Background with Overlay */}
                                    {project.image && (
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 opacity-30 group-hover:opacity-40"
                                            style={{ backgroundImage: `url(${project.image})` }}
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent pointer-events-none" />

                                    <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                                        <div>
                                            <h3 className="text-2xl font-heading font-semibold text-foreground mb-3 group-hover:text-cyan transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-foreground/70 font-sans text-sm md:text-base line-clamp-4">
                                                {project.description}
                                            </p>
                                        </div>

                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-6 gap-4">
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map(tag => (
                                                    <span key={tag} className="px-3 py-1 bg-background text-cyan font-mono text-xs rounded border border-cyan/20">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="flex gap-3 text-foreground/50 items-center">
                                                {project.githubUrl && (
                                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors">
                                                        <Github size={20} />
                                                    </a>
                                                )}
                                                {project.externalUrl && (
                                                    <a href={project.externalUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors">
                                                        <ExternalLink size={20} />
                                                    </a>
                                                )}
                                            </div>
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
