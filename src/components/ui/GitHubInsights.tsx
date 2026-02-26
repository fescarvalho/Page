"use client";

import { motion } from "framer-motion";
import { GitBranch, Star, Activity, Code2 } from "lucide-react";

export default function GitHubInsights() {
    // Mock data based on user profile
    const stats = [
        { label: "Commits 2026", value: "342", icon: Activity, color: "text-cyan" },
        { label: "Projetos Ativos", value: "12", icon: GitBranch, color: "text-purple-400" },
        { label: "Stars Totais", value: "89", icon: Star, color: "text-yellow-400" },
        { label: "Top Lang", value: "TypeScript", icon: Code2, color: "text-blue-400" },
    ];

    return (
        <div className="h-full w-full p-8 rounded-2xl bg-surface border border-white/5 flex flex-col group hover:border-cyan/50 hover:shadow-[0_0_30px_rgba(0,255,194,0.1)] transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <GitBranch size={80} />
            </div>

            <div className="relative z-10">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    GitHub Live Insights
                </h3>

                <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-background/40 p-3 rounded-lg border border-white/5 hover:bg-background/60 transition-colors"
                        >
                            <div className={`p-1.5 rounded-md w-fit mb-2 bg-background ${stat.color} border border-white/5`}>
                                <stat.icon size={16} />
                            </div>
                            <div className="text-xl font-mono font-bold text-foreground">
                                {stat.value}
                            </div>
                            <div className="text-[10px] text-foreground/40 uppercase tracking-widest font-mono">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="mt-auto pt-6 relative z-10">
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-cyan"
                        initial={{ width: 0 }}
                        whileInView={{ width: "75%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                </div>
                <div className="flex justify-between mt-2 text-[10px] font-mono text-foreground/30 uppercase">
                    <span>Yearly Goal</span>
                    <span>75% Complete</span>
                </div>
            </div>
        </div>
    );
}
