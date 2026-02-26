"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Text, TrackballControls } from "@react-three/drei";
import * as THREE from "three";

const skills = [
    "TypeScript", "Next.js", "React", "Node.js", "Prisma",
    "SQL", "Python", "Tailwind CSS", "Git", "PostgreSQL",
    "Statistics", "Machine Learning", "Framer Motion", "Three.js",
    "Pandas", "Scikit-Learn", "FastAPI", "Docker"
];

function Word({ position, word }: { position: THREE.Vector3, word: string }) {
    const ref = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);
    const color = new THREE.Color();

    useFrame((state) => {
        if (ref.current) {
            // Billboard effect: text always faces the camera
            ref.current.quaternion.copy(state.camera.quaternion);

            // Interaction: smoothly transition color
            const targetColor = hovered ? "#00FFC2" : "#E0E2E7";
            const targetOpacity = hovered ? 1 : 0.6;

            (ref.current.material as any).color.lerp(color.set(targetColor), 0.1);
            (ref.current.material as any).opacity = THREE.MathUtils.lerp((ref.current.material as any).opacity, targetOpacity, 0.1);
        }
    });

    return (
        <Text
            ref={ref}
            position={position}
            fontSize={0.4}
            anchorX="center"
            anchorY="middle"
            material-transparent={true}
            material-opacity={0.8}
            onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer'; }}
            onPointerOut={() => { setHovered(false); document.body.style.cursor = 'auto'; }}
        >
            {word}
        </Text>
    );
}

function Cloud() {
    const groupRef = useRef<THREE.Group>(null);

    const coords = useMemo(() => {
        const numPoints = skills.length;
        const pts = [];
        const phi = Math.PI * (3 - Math.sqrt(5));

        for (let i = 0; i < numPoints; i++) {
            const y = 1 - (i / (numPoints - 1)) * 2;
            const radius = Math.sqrt(1 - y * y);
            const theta = phi * i;

            const x = Math.cos(theta) * radius;
            const z = Math.sin(theta) * radius;

            pts.push(new THREE.Vector3(x, y, z).multiplyScalar(4));
        }
        return pts;
    }, []);

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.15;
            groupRef.current.rotation.x += delta * 0.08;
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

export default function WordCloud() {
    return (
        <div className="w-full h-full bg-[#0A0C10]">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 35 }}
                dpr={[1, 2]} // Performance optimization
                gl={{
                    antialias: true,
                    alpha: false,
                    powerPreference: "high-performance"
                }}
            >
                <color attach="background" args={["#0A0C10"]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />

                <TrackballControls
                    noPan
                    noZoom
                    rotateSpeed={2}
                    staticMoving={true}
                />

                <Cloud />
            </Canvas>
        </div>
    );
}
