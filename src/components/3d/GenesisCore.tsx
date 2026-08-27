import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface GenesisCoreProps {
  pointer: { x: number; y: number };
  scrollProgress?: number;
  isHovered?: boolean;
}

export const GenesisCore: React.FC<GenesisCoreProps> = ({
  pointer,
  scrollProgress = 0,
  isHovered = false,
}) => {
  const groupRef = useRef<THREE.Group>(null!);
  const innerCoreRef = useRef<THREE.Mesh>(null!);
  const outerCageRef = useRef<THREE.Mesh>(null!);
  const ring1Ref = useRef<THREE.Group>(null!);
  const ring2Ref = useRef<THREE.Group>(null!);
  const particlesRef = useRef<THREE.Points>(null!);

  const shouldReduceMotion = useReducedMotion();

  const particlePositions = useMemo(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const count = isMobile ? 35 : 80;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = 2.2 + Math.random() * 1.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }

    return positions;
  }, []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    if (!shouldReduceMotion) {
      // Smooth Damped Pointer Tilt (Lerp interpolation)
      const targetRotX = pointer.y * 0.45 + scrollProgress * 0.8;
      const targetRotY = pointer.x * 0.55 + (isHovered ? 0.3 : 0);

      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotX,
        0.05
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotY,
        0.05
      );

      // Continuous harmonic rotations for layered structures
      if (innerCoreRef.current) {
        innerCoreRef.current.rotation.x += delta * 0.2;
        innerCoreRef.current.rotation.y += delta * 0.28;
      }

      if (outerCageRef.current) {
        outerCageRef.current.rotation.x -= delta * 0.12;
        outerCageRef.current.rotation.z += delta * 0.18;
      }

      if (ring1Ref.current) {
        ring1Ref.current.rotation.z += delta * 0.35;
        ring1Ref.current.rotation.x += delta * 0.15;
      }

      if (ring2Ref.current) {
        ring2Ref.current.rotation.y -= delta * 0.4;
        ring2Ref.current.rotation.z -= delta * 0.2;
      }

      if (particlesRef.current) {
        particlesRef.current.rotation.y += delta * 0.08;
      }
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* 1. Inner Faceted Translucent Core */}
      <mesh ref={innerCoreRef} scale={1.25}>
        <octahedronGeometry args={[1.2, 0]} />
        <meshPhysicalMaterial
          color="#0b1120"
          emissive="#0284c7"
          emissiveIntensity={isHovered ? 0.4 : 0.15}
          roughness={0.12}
          metalness={0.2}
          transmission={0.7}
          ior={1.45}
          thickness={1.5}
          reflectivity={0.9}
          transparent
          opacity={0.92}
        />
      </mesh>

      {/* 2. Outer Abstract Technical Cage (Nested Diamond Wire) */}
      <mesh ref={outerCageRef} scale={1.55}>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshStandardMaterial
          color="#38bdf8"
          wireframe
          transparent
          opacity={isHovered ? 0.35 : 0.22}
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>

      {/* 3. Primary Gyroscopic Orbital Ring */}
      <group ref={ring1Ref}>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[2.0, 0.015, 16, 64]} />
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.6} />
        </mesh>
      </group>

      {/* 4. Secondary Counter-Rotating Orbital Ring */}
      <group ref={ring2Ref}>
        <mesh rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
          <torusGeometry args={[2.3, 0.012, 16, 64]} />
          <meshBasicMaterial color="#818cf8" transparent opacity={0.45} />
        </mesh>
      </group>

      {/* 5. Ambient Micro-Particle Nebula Cloud */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.035}
          color="#7dd3fc"
          transparent
          opacity={0.65}
          sizeAttenuation
        />
      </points>

      {/* 6. Central Point Light Pulse inside Core */}
      <pointLight
        position={[0, 0, 0]}
        intensity={isHovered ? 2.5 : 1.2}
        distance={4.5}
        color="#38bdf8"
      />
    </group>
  );
};
