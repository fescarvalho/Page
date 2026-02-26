"use client";

import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, TrackballControls } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

const skills = [
    "TypeScript", "Next.js", "React", "Node.js", "Prisma",
    "SQL", "Data Analytics", "Tailwind CSS", "Git", "PostgreSQL",
    "Statistics", "Machine Learning", "Framer Motion", "WebGL"
];

function WordGlobe() {
    const groupRef = useRef<THREE.Group>(null);

    // Distribute points on a sphere (Fibonacci sphere algorithm)
    const coords = useMemo(() => {
        const numPoints = skills.length;
        const pts = [];
        const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle

        for (let i = 0; i < numPoints; i++) {
            const y = 1 - (i / (numPoints - 1)) * 2; // y goes from 1 to -1
            const radius = Math.sqrt(1 - y * y); // radius at y

            const theta = phi * i; // golden angle increment

            const x = Math.cos(theta) * radius;
            const z = Math.sin(theta) * radius;

            pts.push(new THREE.Vector3(x, y, z).multiplyScalar(3.5));
        }
        return pts;
    }, []);

    useFrame((state, delta) => {
        if (groupRef.current) {
            // Auto-rotation
            groupRef.current.rotation.y -= delta * 0.1;
            groupRef.current.rotation.x -= delta * 0.05;
        }
    });

    return (
        <group ref={groupRef}>
            {skills.map((word, i) => (
                <Word key={i} position={coords[i]} word={word} />
            ))}
        </group>
    );
}

function Word({ position, word }: { position: THREE.Vector3, word: string }) {
    const ref = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);
    const color = new THREE.Color();

    useFrame((state) => {
        if (ref.current) {
            // Make words always face the camera
            ref.current.quaternion.copy(state.camera.quaternion);

            // Update color on hover
            (ref.current.material as any).color.lerp(
                color.set(hovered ? "#00FFC2" : "#E0E2E7"),
                0.1
            );
        }
    });

    return (
        <Text
            ref={ref}
            position={position}
            fontSize={0.4}
            characters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!."
            onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer'; }}
            onPointerOut={() => { setHovered(false); document.body.style.cursor = 'auto'; }}
        >
            {word}
        </Text>
    );
}

import GitHubInsights from "@/components/ui/GitHubInsights";

export default function EcosystemDashboard() {
    return (
        <section id="skills" className="py-24 relative z-10 bg-surface/30">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
                        Ecossistema Técnico
                    </h2>
                    <div className="h-1 w-20 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(124,58,237,0.5)] mb-8"></div>
                    <p className="text-foreground/70 font-sans text-lg mb-6">
                        Domínio completo do ecossistema <span className="text-cyan font-mono">TypeScript / Node.js</span> aplicado desde interfaces de alta performance até engenharia de dados.
                    </p>
                    <div className="flex flex-col gap-4">
                        <div className="bg-surface p-4 rounded-lg border border-white/5 hover:border-cyan/30 transition-colors">
                            <h4 className="text-cyan font-mono text-sm mb-2">Front-end Engineering</h4>
                            <p className="text-foreground/80 text-sm">React, Next.js, Framer Motion, WebGL (R3F), Tailwind CSS.</p>
                        </div>
                        <div className="bg-surface p-4 rounded-lg border border-white/5 hover:border-purple-400/30 transition-colors">
                            <h4 className="text-purple-400 font-mono text-sm mb-2">Back-end & Cloud</h4>
                            <p className="text-foreground/80 text-sm">Node.js, Express, Prisma, PostgreSQL, REST/GraphQL APIs.</p>
                        </div>
                        <div className="bg-surface p-4 rounded-lg border border-white/5 hover:border-cyan/30 transition-colors">
                            <h4 className="text-cyan font-mono text-sm mb-2">Data Intelligence</h4>
                            <p className="text-foreground/80 text-sm">Python, Statistics, SQL, Machine Learning, Data Visualization.</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="absolute -inset-4 bg-cyan/5 blur-3xl rounded-full pointer-events-none" />
                    <GitHubInsights />
                </motion.div>
            </div>
        </section>
    );
}
