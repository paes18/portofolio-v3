import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const AmbientGeometry: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const wireframeRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x += delta * 0.15;
      wireframeRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Dark physical mesh */}
      <mesh ref={meshRef} scale={1.8}>
        <icosahedronGeometry args={[1.5, 2]} />
        <meshPhysicalMaterial
          color="#0f172a"
          roughness={0.2}
          metalness={0.8}
          clearcoat={0.5}
          clearcoatRoughness={0.1}
          wireframe={false}
        />
      </mesh>

      {/* Subtle outer wireframe grid glow */}
      <mesh ref={wireframeRef} scale={1.82}>
        <icosahedronGeometry args={[1.5, 2]} />
        <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.15} />
      </mesh>
    </group>
  );
};
