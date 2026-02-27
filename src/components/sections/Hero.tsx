"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";
import TextScramble from "@/components/ui/TextScramble";
import dynamic from "next/dynamic";

const WordCloud = dynamic(() => import("@/components/canvas/WordGlobe"), { ssr: false });

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0A0C10]">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="z-10"
                >
                    <h2 className="text-cyan font-mono mb-4 tracking-widest uppercase text-sm">
                        Terminal Inicializado
                    </h2>
                    <h1
                        className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6 leading-tight"
                        aria-label="Engenharia de Software & Ciência de Dados"
                    >
                        <TextScramble text="Engenharia de" />
                        <br />
                        <TextScramble text="Software &" />
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-purple inline-block mt-2">
                            <TextScramble text="Ciência de Dados" />
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/70 font-sans max-w-xl mb-8">
                        Construo pontes entre a engenharia de software e a inteligência de dados com interfaces modernas e alta performance.
                    </p>
                    <div className="flex flex-wrap items-center gap-6">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-cyan/10 border border-cyan text-cyan font-mono rounded-sm hover:bg-cyan/20 transition-all shadow-[0_0_15px_rgba(0,255,194,0.3)] hover:shadow-[0_0_25px_rgba(0,255,194,0.5)]"
                        >
                            Explorar.Projetos()
                        </a>

                        <div className="flex gap-5 text-foreground/50">
                            <a href="https://github.com/fescarvalho" target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors transform hover:scale-110">
                                <Github size={24} />
                            </a>
                            <a href="https://linkedin.com/in/fecarvalhodev" target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors transform hover:scale-110">
                                <Linkedin size={24} />
                            </a>
                            <a href="https://instagram.com/fescarv" target="_blank" rel="noopener noreferrer" className="hover:text-cyan transition-colors transform hover:scale-110">
                                <Instagram size={24} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                <div className="hidden lg:block h-[500px] w-full relative z-10">
                    <WordCloud />
                </div>
            </div>
        </section>
    );
}
