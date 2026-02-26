"use client";

import { motion } from "framer-motion";
import { User, Coffee, Code, Brain, MapPin } from "lucide-react";

export default function AboutMe() {
    const stats = [
        { label: "Anos de Exp", value: "3+", icon: Code },
        { label: "Cafés/Dia", value: "∞", icon: Coffee },
        { label: "Projetos", value: "40+", icon: Brain },
        { label: "Local", value: "Brasil", icon: MapPin },
    ];

    return (
        <section id="about" className="py-24 relative z-10 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center gap-16">
                    {/* Visual Element: Profile Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative w-full max-w-md aspect-square"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan/20 to-purple/20 rounded-3xl blur-2xl" />
                        <div className="relative h-full w-full rounded-3xl border border-white/10 bg-surface/50 backdrop-blur-sm overflow-hidden flex items-center justify-center group">
                            <User size={160} className="text-cyan opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />

                            {/* Floating Stats */}
                            <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
                                {stats.slice(0, 2).map((stat, i) => (
                                    <div key={i} className="bg-background/80 backdrop-blur-md p-3 rounded-xl border border-white/5">
                                        <div className="flex items-center gap-2 text-cyan mb-1 font-mono text-xs uppercase opacity-70 justify-center">
                                            <stat.icon size={12} />
                                            <span>{stat.label}</span>
                                        </div>
                                        <div className="text-xl font-heading font-bold text-foreground">{stat.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl"
                    >
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
                            Sobre Mim
                        </h2>
                        <div className="h-1 w-20 bg-cyan rounded-full shadow-[0_0_10px_rgba(0,255,194,0.5)] mb-8 mx-auto"></div>

                        <div className="space-y-6 text-foreground/80 leading-relaxed font-sans text-lg">
                            <p>
                                Sou um <span className="text-cyan font-mono">Software Engineer & Data Scientist</span> apaixonado por transformar dados complexos em experiências digitais impactantes.
                            </p>
                            <p>
                                Minha trajetória é marcada pela união de rigidez matemática e criatividade técnica. Trabalho no desenvolvimento de aplicações robustas e escaláveis, sempre com um olhar atento à análise de dados para otimizar processos e decisões.
                            </p>
                            <p>
                                Acredito que o código é uma ferramenta para resolver problemas reais e a ciência de dados é o que nos permite medir e potencializar essas soluções.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
                            {stats.map((stat, i) => (
                                <div key={i} className="text-center p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan/30 transition-colors group">
                                    <div className="text-cyan mx-auto mb-2 flex justify-center group-hover:scale-110 transition-transform">
                                        <stat.icon size={20} />
                                    </div>
                                    <div className="text-lg font-bold text-foreground">{stat.value}</div>
                                    <div className="text-[10px] text-foreground/40 uppercase tracking-widest font-mono font-bold mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
