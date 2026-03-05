"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    category: "fullstack" | "backend";
    year: number;
    githubUrl?: string;
    externalUrl?: string;
    image?: string;
    featured?: boolean;
}

const projects: Project[] = [
    {
        id: 2,
        title: "Isa Sushi — PDV Online",
        description: "Plataforma completa no estilo E-commerce / Ponto de Venda focada em delivery, com integração ao WhatsApp e pagamento via Pix.",
        tags: ["Next.js", "TypeScript", "React"],
        category: "fullstack",
        year: 2025,
        featured: true,
        githubUrl: "https://github.com/fescarvalho/isasuhi-NEXT",
        externalUrl: "https://isasushidelivery.vercel.app/",
        image: "/projects/isasushi.png"
    },
    {
        id: 9,
        title: "Vittorya Bazeth — Psicologia Clínica",
        description: "Landing page profissional para psicóloga clínica, com foco em experiência do usuário, design humanizado e conversão através de agendamento via WhatsApp.",
        tags: ["Next.js", "React", "Tailwind CSS"],
        category: "fullstack",
        year: 2026,
        featured: true,
        githubUrl: "https://github.com/fescarvalho/site_vittorya",
        externalUrl: "https://vittoryabazeth.vercel.app",
        image: "/projects/vittorya.png"
    },
    {
        id: 1,
        title: "Servas — Gestão de Escalas",
        description: "Sistema de Gestão de Escalas e Engajamento de Servas para o Santuário Diocesano Nossa Senhora da Natividade. Arquitetura robusta para alta disponibilidade.",
        tags: ["React 19", "TypeScript", "Node.js"],
        category: "fullstack",
        year: 2026,
        githubUrl: "https://github.com/fescarvalho/ServasProjeto",
        externalUrl: "https://servasdoaltar.vercel.app/",
        image: "/projects/servas.png"
    },
    {
        id: 3,
        title: "BookClub-Api",
        description: "API robusta para o projeto Books Club. Implementa autenticação JWT, integração com PostgreSQL via Sequelize e documentação completa.",
        tags: ["Node.js", "Postgres", "Sequelize", "JWT"],
        category: "backend",
        year: 2025,
        githubUrl: "https://github.com/fescarvalho/BookClub-Api",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyJlIf7n8JCvAEix2F0iBbdlpQVdFw2BfWdeEeinogCSLAeR6c5fSepEhTvDYxvFdsBzf_3e33OGujvQu_o_dIltlFX_EUOPYjjlex7MHb1UuGJEXgohGsNk8cgRQzjkCoVxXBHRGC2nufa9JbiOuWHzsJ2YOH5ZAUY94VJwpBteCxhQXgk0DeDrgKp8Ml2-NqHTGhR8Tv0_1-SFO-PiE2Of5P3YiduQKivP4Og0U4CDgIzKRGJOuKhqNlPtGwHd1hEKpywzkaVAqQ"
    },
    {
        id: 4,
        title: "WalletAppBackend",
        description: "Backend para gerenciamento financeiro pessoal. Focado em segurança de transações e relatórios de gastos em tempo real.",
        tags: ["Node.js", "Postgres", "Express"],
        category: "backend",
        year: 2025,
        githubUrl: "https://github.com/fescarvalho/WalletAppBackend",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeRospCpa7K0o27gBOPFdepJOCHMZqC7f0hLpp9ja2D5McboJCMB4ScXHD7SOEsec5pE3n6eLC6mY2MAdatXqZZ6zCt0zjtFgm7F2MhM8_hsWg6a7yT4x2vpU3JDF4v8psf32audDp1vJaFEuF7mmAyPyORQBgaqANnDaf9PRQ51wWkoxf5OUBwAJ54blh1agc_-z19AwZDYBH-qhGnxuT865MR6HBIoq8iERiLaV8HTiKTQ9T_mHruic6AAxSappf1k7NhgLBMyIO"
    },
    {
        id: 5,
        title: "Leandro Abreu — Contabilidade",
        description: "Sistema de contabilidade profissional focado em automação financeira e gestão de processos para escritórios contábeis.",
        tags: ["React", "Node.js", "TypeScript"],
        category: "fullstack",
        year: 2025,
        githubUrl: "https://github.com/fescarvalho/leandro-abreu-contabilidade",
        externalUrl: "https://leandro-abreu-contabilidade.vercel.app",
        image: "/projects/contabilidade.png"
    },
    {
        id: 6,
        title: "API-Supermarke-List",
        description: "API escalável para gerenciamento de listas de compras, integrando MongoDB para persistência de dados flexível.",
        tags: ["Node.js", "Express", "MongoDB"],
        category: "backend",
        year: 2024,
        githubUrl: "https://github.com/fescarvalho/API-Supermarke-List",
    },
    {
        id: 7,
        title: "Dogs - Rede Social",
        description: "Rede social exclusiva para cachorros. Compartilhe fotos do seu pet e interaja com a comunidade.",
        tags: ["React", "API", "CSS"],
        category: "fullstack",
        year: 2023,
        githubUrl: "https://github.com/fescarvalho/Dogs",
        externalUrl: "https://dogs-social.vercel.app/",
        image: "/projects/dogs.png"
    },
    {
        id: 8,
        title: "Bikcraft",
        description: "Plataforma de portfólio e informações para bicicletas elétricas customizadas feitas sob medida.",
        tags: ["React", "CSS", "UI/UX"],
        category: "fullstack",
        year: 2023,
        githubUrl: "https://github.com/fescarvalho/bikcraft",
        externalUrl: "https://bikcraftmotors.netlify.app/",
        image: "/projects/bikecraft.png"
    }
];

export default function StitchProjects() {
    const [filter, setFilter] = useState<"TODOS" | "FULLSTACK" | "BACKEND - API">("TODOS");

    // Lista de projetos na ordem definida
    const sortedProjects = useMemo(() => [...projects], []);

    const filteredProjects = useMemo(() => {
        if (filter === "TODOS") return sortedProjects;
        if (filter === "FULLSTACK") return sortedProjects.filter(p => p.category === "fullstack");
        if (filter === "BACKEND - API") return sortedProjects.filter(p => p.category === "backend");
        return sortedProjects;
    }, [filter, sortedProjects]);

    return (
        <section id="projects" className="py-24 bg-background-dark-stitch font-display selection:bg-primary-stitch/30 selection:text-primary-stitch">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
                            Engenharia de Software
                        </h1>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Soluções arquitetadas para escala e performance. Priorizando inovações de 2026.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {(["TODOS", "FULLSTACK", "BACKEND - API"] as const).map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === cat ? "bg-primary-stitch text-white shadow-lg shadow-primary-stitch/25" : "bg-[#233648] text-slate-300 hover:text-white border border-transparent"}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.article
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className={`group relative rounded-2xl overflow-hidden bg-surface-dark-stitch border border-[#233648] hover:border-primary-stitch/50 transition-all duration-500 hover:-translate-y-1 shadow-xl ${project.featured && filter === "TODOS" ? "md:col-span-2 min-h-[400px]" : "min-h-[350px]"}`}
                            >
                                <div className="absolute inset-0 z-0">
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:blur-sm opacity-40"
                                            unoptimized={project.image.startsWith('http')}
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-slate-800 opacity-20" />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark-stitch via-transparent to-transparent opacity-90"></div>
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark-stitch/40 to-background-dark-stitch"></div>

                                    {/* Badge de Ano para destaque */}
                                    {project.year === 2026 && (
                                        <div className="absolute top-4 right-4 z-20">
                                            <span className="bg-primary-stitch text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-lg animate-pulse">
                                                NEW 2026
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                                    <div className="flex gap-2 mb-3">
                                        <span className="text-[10px] font-bold text-slate-500 bg-black/30 px-2 py-0.5 rounded border border-white/5 uppercase">
                                            {project.year}
                                        </span>
                                        {project.tags.map(tag => (
                                            <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-medium bg-primary-stitch/10 text-primary-stitch border border-primary-stitch/20 uppercase tracking-wider">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className={`${project.featured && filter === "TODOS" ? "text-3xl" : "text-xl"} font-bold text-white mb-2 group-hover:text-primary-stitch transition-colors`}>
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-300 text-sm mb-6 line-clamp-2 group-hover:line-clamp-none transition-all">
                                        {project.description}
                                    </p>
                                    <div className="flex gap-4">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-xs font-bold text-white bg-primary-stitch hover:bg-primary-stitch/90 px-4 py-2 rounded-lg transition-colors shadow-lg shadow-primary-stitch/20"
                                            >
                                                <Github size={14} aria-hidden="true" />
                                                GitHub
                                            </a>
                                        )}
                                        {project.externalUrl && (
                                            <a
                                                href={project.externalUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-xs font-bold text-slate-200 bg-[#233648] hover:bg-[#2d465e] px-4 py-2 rounded-lg transition-colors border border-transparent"
                                            >
                                                <ExternalLink size={14} aria-hidden="true" />
                                                Live
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <div className="flex justify-center mt-16">
                    <button className="group flex items-center gap-2 px-8 py-3 rounded-xl border border-slate-700 text-slate-300 hover:border-primary-stitch hover:text-primary-stitch transition-all bg-[#1a2632] shadow-sm">
                        <span className="font-medium outline-none">Explorar Todos no GitHub</span>
                        <Github size={20} aria-hidden="true" className="transition-transform group-hover:scale-110" />
                    </button>
                </div>
            </div>
        </section>
    );
}
