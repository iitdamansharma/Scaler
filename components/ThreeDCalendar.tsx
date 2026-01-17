'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Stars, Text } from '@react-three/drei';
import { useRef } from 'react';
import { Group } from 'three';

function CalendarModel() {
    const meshRef = useRef<Group>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.002;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <group ref={meshRef}>
                {/* Main Calendar Body Placeholder - Glassy Box */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[4, 3, 0.5]} />
                    <meshPhysicalMaterial
                        color="#6d28d9" // Purple-ish
                        roughness={0.1}
                        transmission={0.6} // Glass-like
                        thickness={0.5}
                        ior={1.5}
                        clearcoat={1}
                        metalness={0.2}
                    />
                </mesh>

                {/* Calendar Grid (Simple Cubes for days) */}
                {Array.from({ length: 12 }).map((_, i) => {
                    const row = Math.floor(i / 4);
                    const col = i % 4;
                    return (
                        <mesh key={i} position={[col * 0.8 - 1.2, 0.5 - row * 0.8, 0.3]}>
                            <boxGeometry args={[0.6, 0.6, 0.1]} />
                            <meshStandardMaterial color="#00d8ff" emissive="#00d8ff" emissiveIntensity={0.5} />
                        </mesh>
                    )
                })}

                {/* Header Text */}
                <Text
                    position={[0, 1.8, 0]}
                    fontSize={0.4}
                    color="#ffffff"
                    anchorX="center"
                    anchorY="middle"
                >
                    FUTURE CALENDAR
                </Text>
            </group>
        </Float>
    );
}

export default function ThreeDCalendar() {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full bg-black">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#d946ef" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#06b6d4" />

                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                <Environment preset="city" />

                <CalendarModel />
            </Canvas>
        </div>
    );
}
