"use client";

import { useEffect, useState, useRef } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

interface TextScrambleProps {
    text: string;
    className?: string;
}

export default function TextScramble({ text, className }: TextScrambleProps) {
    const [displayText, setDisplayText] = useState("");
    const requestRef = useRef<number>(null);
    const startTimeRef = useRef<number>(null);
    const duration = 2000; // Total duration in ms

    useEffect(() => {
        const animate = (time: number) => {
            if (!startTimeRef.current) startTimeRef.current = time;
            const progress = time - startTimeRef.current;
            const iteration = (progress / duration) * text.length;

            setDisplayText(
                text
                    .split("")
                    .map((char, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("")
            );

            if (progress < duration) {
                requestRef.current = requestAnimationFrame(animate);
            } else {
                setDisplayText(text);
            }
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [text]);

    return (
        <span className={className} aria-hidden="true">
            {displayText}
        </span>
    );
}
