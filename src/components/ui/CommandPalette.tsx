"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X, Command, Search } from "lucide-react";

export default function CommandPalette() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<string[]>(["SISTEMA PRONTO. DIGITE 'HELP' PARA COMANDOS."]);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if ((e.ctrlKey || e.metaKey) && e.key === "k") {
            e.preventDefault();
            setIsOpen((prev) => !prev);
        }
        if (e.key === "Escape") {
            setIsOpen(false);
        }
    }, []);

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);

    const executeCommand = (cmd: string) => {
        const command = cmd.toLowerCase().trim();
        let response = "";

        switch (command) {
            case "help":
                response = "COMANDOS: HELP, GO PROJECTS, GO SKILLS, CONTACT, CLEAR, RELOAD";
                break;
            case "go projects":
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                response = "NAVEGANDO PARA 'PROJECTS'...";
                setIsOpen(false);
                break;
            case "go skills":
                document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
                response = "NAVEGANDO PARA 'SKILLS'...";
                setIsOpen(false);
                break;
            case "contact":
                response = "EMAIL: fescarvalho@email.com (EXEMPLO)";
                break;
            case "clear":
                setHistory([]);
                setInput("");
                return;
            case "reload":
                window.location.reload();
                return;
            default:
                response = `ERRO: COMANDO '${command}' NÃO RECONHECIDO.`;
        }

        setHistory((prev) => [...prev, `> ${cmd}`, response]);
        setInput("");
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4 backdrop-blur-sm bg-background/40">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="w-full max-w-2xl bg-surface border border-cyan/30 rounded-lg shadow-[0_0_50px_rgba(0,255,194,0.15)] overflow-hidden"
                    >
                        <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                            <div className="flex items-center gap-2 text-cyan font-mono text-xs uppercase tracking-tighter">
                                <Terminal size={14} />
                                <span>Terminal System v1.0</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-foreground/40 hover:text-cyan transition-colors">
                                <X size={16} />
                            </button>
                        </div>

                        <div className="p-4 h-48 overflow-y-auto font-mono text-sm space-y-2 bg-black/20">
                            {history.map((line, i) => (
                                <div key={i} className={line.startsWith(">") ? "text-foreground/50" : "text-cyan/80"}>
                                    {line}
                                </div>
                            ))}
                        </div>

                        <div className="p-4 flex items-center gap-3 bg-white/[0.03]">
                            <Search size={18} className="text-cyan" />
                            <input
                                autoFocus
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && executeCommand(input)}
                                placeholder="DIGITE UM COMANDO... (EX: HELP)"
                                className="bg-transparent border-none outline-none w-full font-mono text-cyan placeholder:text-cyan/20 px-0"
                            />
                            <div className="flex items-center gap-1 px-2 py-0.5 rounded border border-white/10 text-[10px] text-foreground/30 font-mono">
                                <Command size={10} />
                                <span>ENTER</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}

            {/* Hint Button */}
            {!isOpen && (
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-8 right-8 z-[90] p-4 bg-surface/80 border border-cyan/20 rounded-full text-cyan backdrop-blur-md shadow-lg hover:border-cyan/50 hover:shadow-[0_0_20px_rgba(0,255,194,0.3)] transition-all group"
                >
                    <Terminal size={24} className="group-hover:scale-110 transition-transform" />
                    <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-surface border border-cyan/20 rounded text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        PRESS <span className="text-white">CTRL+K</span> TO COMMAND
                    </span>
                </motion.button>
            )}
        </AnimatePresence>
    );
}
