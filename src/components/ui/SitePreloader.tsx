"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOADING_STEPS = [
    "INITIALIZING_CORE_SYSTEM",
    "LOADING_BLUEPRINT_MODELS",
    "ESTABLISHING_DATA_STREAMS",
    "CALIBRATING_INTERFACE",
    "SYSTEM_READY_V2.0.4"
];

export default function SitePreloader() {
    const [progress, setProgress] = useState(0);
    const [stepIndex, setStepIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Progress interval
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    // Fade out after a Small delay
                    setTimeout(() => setIsVisible(false), 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 12); // Faster loading (approx 1.2s total)

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Step messages interval
        setStepIndex(Math.floor((progress / 100) * LOADING_STEPS.length));
    }, [progress]);

    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isVisible]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        y: "-100%",
                        transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] }
                    }}
                    className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center p-6"
                >
                    {/* Background Grids for consistency */}
                    <div className="absolute inset-0 bg-grid-blueprint-fine opacity-20 pointer-events-none"></div>

                    <div className="w-full max-w-md space-y-8 relative">
                        {/* Shifting Text */}
                        <div className="h-6">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={stepIndex}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="font-mono text-cyan text-xs tracking-widest text-center"
                                >
                                    {LOADING_STEPS[Math.min(stepIndex, LOADING_STEPS.length - 1)]}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Progress Container */}
                        <div className="relative">
                            {/* Main Frame */}
                            <div className="module-frame p-6 bg-black/40 backdrop-blur-sm flex flex-col items-center">
                                <motion.div
                                    className="text-6xl md:text-8xl font-heading font-black tracking-tighter text-white tabular-nums"
                                >
                                    {progress}<span className="text-cyan text-4xl md:text-5xl">%</span>
                                </motion.div>

                                <div className="absolute -top-3 left-6 blueprint-label uppercase">SYS_LOAD_SEQUENCE</div>
                                <div className="absolute -bottom-3 right-6 blueprint-label uppercase">FERNANDO_CARVALHO_V2</div>
                            </div>

                            {/* Progress bar line */}
                            <div className="mt-8 h-[2px] w-full bg-cyan/10 relative overflow-hidden">
                                <motion.div
                                    className="absolute top-0 left-0 h-full bg-cyan shadow-[0_0_15px_#00FFC2]"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ type: "tween", duration: 0.012, ease: "linear" }}
                                />
                            </div>
                        </div>

                        {/* Decoration Labels */}
                        <div className="flex justify-between items-center px-2">
                            <span className="blueprint-label text-[8px]">ARCHITECTURE: BLUEPRINT</span>
                            <span className="blueprint-label text-[8px]">LATENCY: 0.001ms</span>
                        </div>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-12 left-12 hidden md:block">
                        <div className="module-frame p-2 h-16 w-16 opacity-30 flex items-center justify-center">
                            <div className="w-1 h-full bg-cyan/20 animate-pulse"></div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
