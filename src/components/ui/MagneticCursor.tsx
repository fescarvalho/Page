"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            const target = e.target as HTMLElement;
            setIsPointer(window.getComputedStyle(target).cursor === "pointer");
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan/50 pointer-events-none z-[9999] hidden lg:block"
            animate={{
                x: position.x - 16,
                y: position.y - 16,
                scale: isPointer ? 1.5 : 1,
                backgroundColor: isPointer ? "rgba(0, 255, 194, 0.1)" : "rgba(0, 255, 194, 0)",
            }}
            transition={{
                type: "spring",
                damping: 20,
                stiffness: 150,
                mass: 0.5,
            }}
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-cyan rounded-full" />
        </motion.div>
    );
}
