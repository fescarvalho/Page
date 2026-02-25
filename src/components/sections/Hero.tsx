"use client";

import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, Environment } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

function TextScramble({ text }: { text: string }) {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let iteration = 0;
        let interval: NodeJS.Timeout;

        const startAnimation = () => {
            interval = setInterval(() => {
                setDisplayText((prev) =>
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

                if (iteration >= text.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3;
            }, 30);
        };

        startAnimation();
        return () => clearInterval(interval);
    }, [text]);

    return <span>{displayText}</span>;
}

function AbstractObject() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.3;
        }
    });

    return (
        <mesh ref={meshRef}>
            <icosahedronGeometry args={[2, 0]} />
            <MeshTransmissionMaterial
                backside
                samples={4}
                thickness={1}
                chromaticAberration={0.5}
                anisotropy={0.1}
                distortion={0.5}
                distortionScale={0.5}
                temporalDistortion={0.1}
                color="#00FFC2"
            />
        </mesh>
    );
}

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
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
                    <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6 leading-tight">
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
                    <div className="flex gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-cyan/10 border border-cyan text-cyan font-mono rounded-sm hover:bg-cyan/20 transition-all shadow-[0_0_15px_rgba(0,255,194,0.3)] hover:shadow-[0_0_25px_rgba(0,255,194,0.5)]"
                        >
                            Explorar.Projetos()
                        </a>
                    </div>
                </motion.div>

                <div className="hidden lg:block h-[500px] w-full relative z-10">
                    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[10, 10, 10]} intensity={1} />
                        <Environment preset="city" />
                        <AbstractObject />
                    </Canvas>
                </div>
            </div>
        </section>
    );
}
