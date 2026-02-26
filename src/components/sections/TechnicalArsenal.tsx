"use client";

import { motion } from "framer-motion";
import { Terminal, CheckCircle2 } from "lucide-react";

const skills = [
    { name: "Next.js", level: "Expert Level", icon: "https://cdn.simpleicons.org/nextdotjs/white", pos: "top-[20%] left-1/2 -translate-x-1/2" },
    { name: "Node.js", level: "Expert Level", icon: "https://cdn.simpleicons.org/nodedotjs/339933", pos: "top-[35%] left-[80%] -translate-x-1/2" },
    { name: "Tailwind", level: "Expert Level", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", pos: "top-[65%] left-[85%] -translate-x-1/2" },
    { name: "AWS", level: "Advanced", icon: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg", pos: "top-[85%] left-[65%] -translate-x-1/2" },
    { name: "Docker", level: "Intermediate", icon: "https://cdn.simpleicons.org/docker/2496ED", pos: "top-[85%] left-[35%] -translate-x-1/2" },
    { name: "PostgreSQL", level: "Intermediate", icon: "https://cdn.simpleicons.org/postgresql/4169E1", pos: "top-[65%] left-[15%] -translate-x-1/2" },
    { name: "Python", level: "Advanced", icon: "https://cdn.simpleicons.org/python/3776AB", pos: "top-[35%] left-[20%] -translate-x-1/2" },
];

export default function TechnicalArsenal() {
    return (
        <section className="relative py-24 bg-background-dark-stitch overflow-hidden font-display">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #2b8cee 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-stitch/5 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Content Left */}
                    <div className="lg:w-1/3 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-stitch/10 border border-primary-stitch/20 text-primary-stitch text-xs font-bold uppercase tracking-widest"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-stitch opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-stitch"></span>
                            </span>
                            Tech Stack
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold text-white leading-tight"
                        >
                            Arsenal <span className="text-primary-stitch">Técnico</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-slate-400 leading-relaxed"
                        >
                            Arquitetando sistemas de alta performance com stack moderna. Foco em escalabilidade e experiências fluidas.
                        </motion.p>

                        <div className="pt-4 space-y-4">
                            {[
                                "Arquiteturas prontas para produção",
                                "Especialista em Microserviços",
                                "Foco em Type-Safety & Performance"
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle2 className="text-primary-stitch" size={20} />
                                    <span className="text-slate-300 font-medium">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Map Right */}
                    <div className="lg:w-2/3 w-full relative h-[600px] flex items-center justify-center">
                        {/* SVG Connectors */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                            {skills.map((_, i) => (
                                <motion.line
                                    key={i}
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="stroke-primary-stitch/20 stroke-[1.5] dash-array-[4]"
                                    x1="50%" y1="50%"
                                    x2={skills[i].pos.includes('left-[80%]') ? '80%' :
                                        skills[i].pos.includes('left-[85%]') ? '85%' :
                                            skills[i].pos.includes('left-[65%]') ? '65%' :
                                                skills[i].pos.includes('left-[35%]') ? '35%' :
                                                    skills[i].pos.includes('left-[15%]') ? '15%' :
                                                        skills[i].pos.includes('left-[20%]') ? '20%' : '50%'}
                                    y2={skills[i].pos.includes('top-[20%]') ? '20%' :
                                        skills[i].pos.includes('top-[35%]') ? '35%' :
                                            skills[i].pos.includes('top-[65%]') ? '65%' :
                                                skills[i].pos.includes('top-[85%]') ? '85%' : '50%'}
                                />
                            ))}
                        </svg>

                        {/* Central Node */}
                        <motion.div
                            initial={{ scale: 0, rotate: -45 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            className="absolute z-20 group"
                        >
                            <div className="relative size-32 md:size-40 rounded-full bg-[#1a2632] border-2 border-primary-stitch/50 flex items-center justify-center shadow-[0_0_50px_rgba(43,140,238,0.3)] transition-transform duration-500 hover:scale-110">
                                <div className="absolute inset-0 rounded-full bg-primary-stitch/10 scale-125 animate-pulse"></div>
                                <img
                                    alt="TypeScript"
                                    className="w-20 h-20 md:w-24 md:h-24 object-contain relative z-10"
                                    src="https://cdn.simpleicons.org/typescript"
                                />
                                <div className="absolute -bottom-12 flex flex-col items-center whitespace-nowrap">
                                    <span className="text-white font-bold text-xl drop-shadow-md">TypeScript</span>
                                    <span className="text-primary-stitch text-[10px] uppercase font-bold tracking-widest bg-primary-stitch/20 px-2 rounded border border-primary-stitch/30">Advanced</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Satellite Nodes */}
                        {skills.map((skill, i) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                                className={`absolute ${skill.pos} z-10`}
                            >
                                <div className="group relative size-20 md:size-24 rounded-full bg-[#1a2632] border border-primary-stitch/30 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-primary-stitch hover:shadow-[0_0_30px_rgba(43,140,238,0.4)]">
                                    <img alt={skill.name} className="w-12 h-12 md:w-14 md:h-14 object-contain" src={skill.icon} />

                                    {/* Label Tooltip-style */}
                                    <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex flex-col items-center whitespace-nowrap -bottom-12">
                                        <span className="text-white font-bold text-sm">{skill.name}</span>
                                        <span className="text-primary-stitch text-[9px] uppercase font-bold">{skill.level}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
}
