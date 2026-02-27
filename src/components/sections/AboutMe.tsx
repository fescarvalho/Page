"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMe() {
    return (
        <section id="about" className="relative py-24 w-full bg-background overflow-hidden border-b border-white/5">
            {/* Grid Overlay inside the section */}
            <div className="absolute inset-0 grid-overlay opacity-60 pointer-events-none" aria-hidden="true"></div>

            <div className="container mx-auto px-6 relative z-10">
                <main className="w-full max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-10 gap-16 items-center">

                        {/* Profile Image Column */}
                        <div className="md:col-span-4 flex justify-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative group w-full max-w-sm"
                            >
                                <div className="absolute -inset-1 bg-primary-stitch/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-primary-stitch/40 neon-border bg-slate-800">
                                    <Image
                                        alt="Fernando Carvalho - Professional portrait"
                                        className="w-full h-full object-cover grayscale contrast-125 opacity-80"
                                        src="/profile.jpg"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 400px"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark-stitch via-transparent to-transparent"></div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Content Column */}
                        <div className="md:col-span-6 flex flex-col gap-10">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-stitch/10 border border-primary-stitch/20">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-stitch opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-stitch"></span>
                                    </span>
                                    <span className="text-[10px] font-bold text-primary-stitch tracking-widest uppercase">Visão de Especialista</span>
                                </div>
                                <div className="space-y-2">
                                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] font-display">
                                        Analista de Sistemas <br />
                                        <span className="text-primary-stitch">& Desenvolvedor</span>
                                    </h1>
                                    <div className="h-1.5 w-24 bg-primary-stitch rounded-full"></div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="space-y-6 max-w-2xl"
                            >
                                <p className="text-xl text-slate-300 leading-relaxed">
                                    Com uma sólida base em análise de sistemas e desenvolvimento escalável, utilizo minha expertise em <span className="text-white font-semibold">Ciência de Dados</span> para oferecer vantagens estratégicas em cada projeto. Minha abordagem combina precisão técnica com profundidade analítica para resolver desafios arquiteturais complexos.
                                </p>
                                <p className="text-slate-400">
                                    Atualmente focado em construir sistemas de alta performance com ênfase estratégica em inteligência de dados e resiliência arquitetural.
                                </p>
                            </motion.div>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                                {[
                                    { icon: "architecture", title: "Arquitetura de Sistemas", desc: "Projetando estruturas resilientes" },
                                    { icon: "layers", title: "Desenvolvimento Escalável", desc: "Construindo para crescimento massivo" },
                                    { icon: "monitoring", title: "Inteligência de Dados", desc: "Soluções guiadas por insights" }
                                ].map((skill, i) => (
                                    <motion.div
                                        key={skill.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + i * 0.1 }}
                                        className="flex flex-col gap-4 p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:border-primary-stitch/50 transition-all group"
                                    >
                                        <span className="material-symbols-outlined text-primary-stitch text-4xl group-hover:scale-110 transition-transform">
                                            {skill.icon}
                                        </span>
                                        <div>
                                            <h3 className="font-bold text-white text-lg leading-tight">{skill.title}</h3>
                                            <p className="text-slate-500 text-xs mt-1">{skill.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
}
