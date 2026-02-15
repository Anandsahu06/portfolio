"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
    Float,
    PerspectiveCamera,
    Text,
    Points,
    PointMaterial,
    useAspect
} from "@react-three/drei";
import { Bloom, EffectComposer, Noise, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";

// --- Galaxy Particles ---
const Galaxy = () => {
    const pointsRef = useRef<THREE.Points>(null);
    const { mouse } = useThree();

    const particleCount = 15000;
    const positions = useMemo(() => {
        const pos = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount; i++) {
            const distance = Math.random() * 10;
            const angle = distance * 2.5 + (Math.random() - 0.5) * 0.5;

            const x = Math.cos(angle) * distance;
            const y = (Math.random() - 0.5) * 1.5;
            const z = Math.sin(angle) * distance;

            pos[i * 3] = x;
            pos[i * 3 + 1] = y;
            pos[i * 3 + 2] = z;

            // Galaxy color palette: Pink, Purple, Blue
            const mixedColor = new THREE.Color();
            const random = Math.random();
            if (random > 0.6) mixedColor.set("#4f46e5"); // Blue
            else if (random > 0.3) mixedColor.set("#9333ea"); // Purple
            else mixedColor.set("#ec4899"); // Pink

            colors[i * 3] = mixedColor.r;
            colors[i * 3 + 1] = mixedColor.g;
            colors[i * 3 + 2] = mixedColor.b;
        }
        return { pos, colors };
    }, []);

    useFrame(() => {
        if (!pointsRef.current) return;

        // Continuous rotation
        pointsRef.current.rotation.y += 0.001;

        // Mouse reaction: Subtle tilt and bend
        pointsRef.current.rotation.x = THREE.MathUtils.lerp(
            pointsRef.current.rotation.x,
            mouse.y * 0.15,
            0.05
        );
        pointsRef.current.rotation.z = THREE.MathUtils.lerp(
            pointsRef.current.rotation.z,
            -mouse.x * 0.15,
            0.05
        );
    });

    return (
        <Points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions.pos, 3]}
                />
                <bufferAttribute
                    attach="attributes-color"
                    args={[positions.colors, 3]}
                />
            </bufferGeometry>
            <PointMaterial
                transparent
                vertexColors
                size={0.03}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    );
};

// --- Floating Tech Objects ---
interface FloatingObjectProps {
    geometry: React.ReactNode;
    position: [number, number, number];
    speed: number;
    rotationSpeed: [number, number, number];
}

const FloatingObject = ({ geometry, position, speed, rotationSpeed }: FloatingObjectProps) => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame(() => {
        if (!meshRef.current) return;
        meshRef.current.rotation.x += rotationSpeed[0];
        meshRef.current.rotation.y += rotationSpeed[1];
        meshRef.current.rotation.z += rotationSpeed[2];
    });

    return (
        <Float speed={speed} rotationIntensity={1} floatIntensity={1}>
            <mesh position={position} ref={meshRef}>
                {geometry}
                <meshPhysicalMaterial
                    color="#ffffff"
                    emissive="#4f46e5"
                    emissiveIntensity={1.5}
                    roughness={0}
                    metalness={1}
                    transparent
                    opacity={0.3}
                    thickness={0.5}
                />
            </mesh>
        </Float>
    );
};

const Background3D = () => {
    return (
        <div className="fixed inset-0 z-0 bg-slate-950 pointer-events-none">
            <Canvas dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={45} />

                <color attach="background" args={["#020617"]} />
                <fog attach="fog" args={["#020617", 10, 25]} />

                <ambientLight intensity={0.2} />
                <pointLight position={[10, 10, 10]} intensity={2} color="#4f46e5" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#ec4899" />

                <Galaxy />

                {/* Floating Objects */}
                <FloatingObject
                    geometry={<boxGeometry args={[0.5, 0.5, 0.5]} />}
                    position={[-5, 3, -2]}
                    speed={2}
                    rotationSpeed={[0.01, 0.02, 0.01]}
                />
                <FloatingObject
                    geometry={<torusGeometry args={[0.4, 0.15, 16, 32]} />}
                    position={[6, -4, -5]}
                    speed={1.5}
                    rotationSpeed={[0.02, 0.01, 0.03]}
                />
                <FloatingObject
                    geometry={<sphereGeometry args={[0.3, 32, 32]} />}
                    position={[-7, -5, 2]}
                    speed={3}
                    rotationSpeed={[0.01, 0.01, 0.01]}
                />

                {/* Floating Code Bracket Symbol */}
                <Float speed={4} rotationIntensity={2} floatIntensity={2}>
                    <Text
                        fontSize={0.8}
                        color="#4f46e5"
                        position={[4, 5, 0]}
                    >
                        {"</>"}
                        <meshStandardMaterial emissive="#4f46e5" emissiveIntensity={5} />
                    </Text>
                </Float>

                <EffectComposer>
                    <Bloom luminanceThreshold={0.2} mipmapBlur intensity={1.5} radius={0.4} />
                    <Noise opacity={0.05} />
                    <Vignette eskil={false} offset={0.1} darkness={1.1} />
                </EffectComposer>
            </Canvas>
        </div>
    );
};

export default Background3D;
