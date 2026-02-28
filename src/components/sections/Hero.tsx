"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
            {/* Background Blueprint Grids */}
            <div className="fixed inset-0 bg-grid-blueprint-fine opacity-40 pointer-events-none"></div>
            <div className="fixed inset-0 bg-grid-blueprint opacity-60 pointer-events-none"></div>

            <main className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center pb-32 md:pb-0">

                {/* System Header Labels */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full flex justify-between items-end mb-6 px-2"
                >
                    <span className="blueprint-label">SYS_CORE_V2.0</span>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse shadow-[0_0_10px_#00FFC2]"></span>
                        <span className="blueprint-label">STATUS: ACTIVE</span>
                    </div>
                </motion.div>

                {/* Main Module Frame */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="module-frame w-full p-8 md:p-16 bg-black/40 backdrop-blur-sm relative"
                >
                    <span className="absolute -top-3 left-6 blueprint-label">MODULE_ID: HERO_CORE</span>
                    <span className="absolute -bottom-3 right-6 blueprint-label">LOAD_ORDER: 001</span>

                    <h1 className="text-4xl md:text-7xl lg:text-9xl font-heading font-black tracking-tighter leading-none text-white text-center uppercase">
                        Fernando <br />
                        Carvalho <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-cyan-400 to-purple text-2xl md:text-5xl lg:text-6xl block mt-4">
                            Desenvolvedor & Cientista de Dados
                        </span>
                    </h1>
                </motion.div>

                {/* Bottom Metadata & Controls */}
                <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-4xl relative">

                    {/* Description Block */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col items-start gap-4 relative"
                    >
                        <div className="absolute -top-8 left-0 connector-line-v"></div>
                        <div className="pl-4 border-l border-cyan/20">
                            <span className="blueprint-label mb-2 block">DESCRIPTION_STRING</span>
                            <p className="text-slate-400 font-mono text-sm md:text-base leading-relaxed max-w-md">
                                // Especialista em criar sistemas escaláveis e insights baseados em dados. Proficiência em arquiteturas híbridas.
                            </p>
                        </div>
                    </motion.div>

                    {/* CTA Block */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col items-start md:items-end gap-4 relative"
                    >
                        <div className="absolute -top-8 left-0 md:left-auto md:right-0 connector-line-v"></div>
                        <div className="pl-4 md:pl-0 pr-0 md:pr-4 border-l md:border-l-0 md:border-r border-cyan/20 text-left md:text-right">
                            <span className="blueprint-label mb-2 block">EXECUTION_TRIGGER</span>
                            <a className="inline-flex items-center gap-4 group" href="#projects">
                                <span className="font-mono text-cyan text-lg hover:tracking-widest transition-all duration-300">
                                    Explorar.Projetos()
                                </span>
                                <div className="w-12 h-[1px] bg-cyan group-hover:w-20 transition-all duration-300 shadow-[0_0_10px_#00FFC2]"></div>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Social Sidebar - Desktop Only */}
                <aside className="fixed left-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-start">
                    <div className="flex flex-col gap-12 ml-8">
                        <motion.div
                            whileHover={{ x: 5 }}
                            className="relative group cursor-pointer"
                        >
                            <div className="absolute left-10 top-1/2 -translate-y-1/2 w-0 group-hover:w-16 h-[1px] bg-cyan transition-all duration-300"></div>
                            <a href="https://github.com/fescarvalho" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan transition-colors block">
                                <Github size={24} />
                            </a>
                        </motion.div>

                        <motion.div
                            whileHover={{ x: 5 }}
                            className="relative group cursor-pointer"
                        >
                            <div className="absolute left-10 top-1/2 -translate-y-1/2 w-0 group-hover:w-16 h-[1px] bg-cyan transition-all duration-300"></div>
                            <a href="https://linkedin.com/in/fecarvalhodev" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan transition-colors block">
                                <Linkedin size={24} />
                            </a>
                        </motion.div>

                        <motion.div
                            whileHover={{ x: 5 }}
                            className="relative group cursor-pointer"
                        >
                            <div className="absolute left-10 top-1/2 -translate-y-1/2 w-0 group-hover:w-16 h-[1px] bg-cyan transition-all duration-300"></div>
                            <a href="https://instagram.com/fescarv" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan transition-colors block">
                                <Instagram size={24} />
                            </a>
                        </motion.div>
                    </div>
                    <div className="mt-8 ml-8 h-40 w-[1px] bg-gradient-to-b from-cyan to-transparent"></div>
                </aside>

                {/* Floating Blueprint Widgets */}
                <div className="absolute top-24 right-12 hidden lg:block">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 }}
                        className="module-frame p-3 bg-black/60"
                    >
                        <div className="flex flex-col gap-1 font-mono text-[8px] text-cyan/40">
                            <div>P_COORD: [34.2, 89.1]</div>
                            <div>S_LATENCY: 0.04ms</div>
                            <div>D_STREAM: OK</div>
                        </div>
                    </motion.div>
                </div>

                <div className="absolute bottom-12 left-12 hidden lg:block">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        className="flex items-center gap-4"
                    >
                        <div className="w-12 h-12 rounded-full border border-cyan/20 flex items-center justify-center">
                            <span className="material-symbols-outlined text-cyan text-sm">settings_input_component</span>
                        </div>
                        <div>
                            <span className="blueprint-label">HARDWARE_INTERFACE</span>
                            <div className="text-[9px] font-mono text-slate-500">I/O BRIDGE READY</div>
                        </div>
                    </motion.div>
                </div>

            </main>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:gap-4 opacity-70 md:opacity-100"
            >
                <span className="blueprint-label hidden md:block">SCROLL_DOWN</span>
                <div className="w-[1px] h-12 md:h-20 bg-gradient-to-b from-cyan via-cyan/50 to-transparent relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan rounded-full"></div>
                </div>
            </motion.div>

            {/* Version Pin */}
            <div className="absolute bottom-4 md:bottom-6 right-4 md:right-8 z-50 hidden sm:block">
                <div className="flex items-center gap-3 bg-black/80 backdrop-blur-md px-3 md:px-4 py-2 border border-cyan/20">
                    <span className="font-mono text-[10px] md:text-xs text-cyan">v2.0.4-blueprint-stable</span>
                    <div className="h-4 w-[1px] bg-cyan/20"></div>
                    <span className="material-symbols-outlined text-cyan text-xs md:text-sm">architecture</span>
                </div>
            </div>
        </section>
    );
}
