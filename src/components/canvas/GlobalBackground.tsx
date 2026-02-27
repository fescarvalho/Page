"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Helper to generate static background data outside render component
const generateBackgroundData = () => {
    const particleCount = 150;
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 15;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }

    const lines = [];
    for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
            const dx = pos[i * 3] - pos[j * 3];
            const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
            const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
            if (dist < 2.5) {
                lines.push(
                    pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2],
                    pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]
                );
            }
        }
    }
    return { positions: pos, linePositions: new Float32Array(lines) };
};

function DataNodes() {
    const groupRef = useRef<THREE.Group>(null);

    const { positions, linePositions } = useMemo(() => generateBackgroundData(), []);

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.05;
            groupRef.current.rotation.x += delta * 0.02;

            const targetX = (state.pointer.x * Math.PI) / 10;
            const targetY = (state.pointer.y * Math.PI) / 10;

            groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.02;
            groupRef.current.rotation.x += (-targetY - groupRef.current.rotation.x) * 0.02;
        }
    });

    return (
        <group ref={groupRef}>
            <points>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={positions.length / 3}
                        array={positions}
                        itemSize={3}
                        args={[positions, 3]}
                    />
                </bufferGeometry>
                <pointsMaterial size={0.05} color="#00FFC2" transparent opacity={0.6} />
            </points>
            <lineSegments>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={linePositions.length / 3}
                        array={linePositions}
                        itemSize={3}
                        args={[linePositions, 3]}
                    />
                </bufferGeometry>
                <lineBasicMaterial color="#7C3AED" transparent opacity={0.15} />
            </lineSegments>
        </group>
    );
}

export default function GlobalBackground() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    if (isMobile) return null;

    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-background">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <DataNodes />
            </Canvas>
        </div>
    );
}
