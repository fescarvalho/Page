"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Instagram, ArrowRight, Send, ChevronDown, CheckCircle2 } from "lucide-react";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        try {
            const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
            const response = await fetch(`https://formspree.io/f/${formId}`, {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setIsSuccess(true);
                form.reset();
            } else {
                alert("Ocorreu um erro ao enviar. Verifique o ID do Formspree.");
            }
        } catch (error) {
            alert("Erro de conexão. Tente novamente mais tarde.");
        } finally {
            setIsSubmitting(false);
        }

        // Resetar o estado de sucesso após 5 segundos para permitir novo envio se desejar
        setTimeout(() => setIsSuccess(false), 5000);
    };

    return (
        <section id="contact" className="py-24 bg-background-dark-stitch relative overflow-hidden font-display">
            {/* Decorative Blobs */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-stitch/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left Column: Social & Connect Info */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none"
                            >
                                VAMOS <span className="text-primary-stitch">CONVERSAR</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-lg text-slate-400 max-w-md leading-relaxed"
                            >
                                Estou disponível para projetos freelance e novas oportunidades. Se você tem uma ideia que precisa de uma execução técnica sólida, vamos bater um papo.
                            </motion.p>
                        </div>

                        {/* Direct Email Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-8 rounded-3xl bg-[#1a2632] border border-[#233648] shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group hover:border-primary-stitch/40 transition-all duration-500"
                        >
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">E-mail Direto</p>
                                <a
                                    href="mailto:fecarv_dev@outlook.com"
                                    className="text-xl md:text-2xl font-black text-white group-hover:text-primary-stitch transition-colors"
                                >
                                    fecarv_dev@outlook.com
                                </a>
                            </div>
                            <div className="h-12 w-12 rounded-2xl bg-[#101922] flex items-center justify-center text-white group-hover:bg-primary-stitch group-hover:scale-110 transition-all duration-300 shadow-xl">
                                <ArrowRight size={24} />
                            </div>
                        </motion.div>

                        {/* Social Links */}
                        <div className="space-y-6">
                            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Onde me encontrar</p>
                            <div className="flex gap-4">
                                {[
                                    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/fecarvalhodev" },
                                    { name: "GitHub", icon: Github, url: "https://github.com/fescarvalho" },
                                    { name: "Instagram", icon: Instagram, url: "https://instagram.com/fescarv" }
                                ].map((social, i) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + i * 0.1 }}
                                        className="group relative flex items-center justify-center h-16 w-16 rounded-2xl bg-[#1a2632] border border-[#233648] text-slate-400 hover:text-primary-stitch hover:border-primary-stitch/40 hover:scale-110 transition-all duration-300 shadow-lg"
                                    >
                                        <social.icon size={28} />
                                        <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold uppercase tracking-widest text-primary-stitch">
                                            {social.name}
                                        </span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#1a2632] rounded-[40px] p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-[#233648] relative min-h-[500px] flex items-center justify-center"
                    >
                        <AnimatePresence mode="wait">
                            {!isSuccess ? (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="flex flex-col gap-8 w-full"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Seu Nome</span>
                                            <input
                                                required
                                                type="text"
                                                name="name"
                                                placeholder="Ex: João Silva"
                                                className="w-full bg-[#101922] text-white border-0 border-b-2 border-[#233648] focus:border-primary-stitch focus:ring-0 px-0 py-4 transition-all placeholder:text-slate-600 bg-transparent rounded-none outline-none text-lg"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Seu E-mail</span>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                placeholder="Ex: joao@email.com"
                                                className="w-full bg-[#101922] text-white border-0 border-b-2 border-[#233648] focus:border-primary-stitch focus:ring-0 px-0 py-4 transition-all placeholder:text-slate-600 bg-transparent rounded-none outline-none text-lg"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Tipo de Projeto</span>
                                        <div className="relative">
                                            <select
                                                name="projectType"
                                                className="w-full bg-[#101922] text-white border-0 border-b-2 border-[#233648] focus:border-primary-stitch focus:ring-0 px-0 py-4 transition-all appearance-none cursor-pointer bg-transparent rounded-none outline-none text-lg"
                                            >
                                                <option className="bg-[#1a2632]">Web Development</option>
                                                <option className="bg-[#1a2632]">Data Science</option>
                                                <option className="bg-[#1a2632]">Engenharia de Software</option>
                                                <option className="bg-[#1a2632]">Outros</option>
                                            </select>
                                            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500" size={20} />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Sua Mensagem</span>
                                        <textarea
                                            required
                                            name="message"
                                            placeholder="Conte-me um pouco sobre o que você precisa..."
                                            rows={4}
                                            className="w-full bg-[#101922] text-white border-0 border-b-2 border-[#233648] focus:border-primary-stitch focus:ring-0 px-0 py-4 transition-all placeholder:text-slate-600 resize-none bg-transparent rounded-none outline-none text-lg"
                                        ></textarea>
                                    </div>

                                    <button
                                        disabled={isSubmitting}
                                        type="submit"
                                        className="group flex items-center justify-center gap-3 w-full md:w-max px-10 py-5 bg-primary-stitch hover:bg-primary-stitch/90 text-white font-bold rounded-2xl shadow-xl shadow-primary-stitch/20 transition-all hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <span className="flex items-center gap-2">
                                            {isSubmitting ? (
                                                <>
                                                    <motion.div
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                                    />
                                                    Enviando...
                                                </>
                                            ) : (
                                                "Enviar Mensagem"
                                            )}
                                        </span>
                                        {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                                    </button>
                                </motion.form>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center space-y-6"
                                >
                                    <div className="flex justify-center">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                            className="bg-primary-stitch/20 p-6 rounded-full"
                                        >
                                            <CheckCircle2 size={64} className="text-primary-stitch" />
                                        </motion.div>
                                    </div>
                                    <h3 className="text-3xl font-black text-white">Mensagem Enviada!</h3>
                                    <p className="text-slate-400 text-lg max-w-xs mx-auto">
                                        Obrigado pelo contato. Responderei o mais breve possível!
                                    </p>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className="text-primary-stitch font-bold hover:underline"
                                    >
                                        Enviar outra mensagem
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
