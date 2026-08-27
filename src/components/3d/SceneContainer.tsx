import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { checkGraphicsCapabilities } from '../../lib/3d/capabilities';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { AmbientGeometry } from './AmbientGeometry';

interface SceneContainerProps {
  className?: string;
}

export const SceneContainer: React.FC<SceneContainerProps> = ({ className }) => {
  const [shouldRender, setShouldRender] = useState<boolean>(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const caps = checkGraphicsCapabilities();
    if (caps.hasWebGL) {
      setShouldRender(true);
    }
  }, []);

  if (!shouldRender) {
    // Accessible CSS Fallback for non-WebGL / low perf environments
    return (
      <div className={`w-full h-full flex items-center justify-center relative ${className || ''}`}>
        <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-sky-500/10 via-indigo-500/5 to-transparent blur-3xl opacity-60 animate-pulse" />
      </div>
    );
  }

  return (
    <div className={`w-full h-full relative ${className || ''}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ pointerEvents: 'none' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} color="#38bdf8" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#818cf8" />
        
        <Suspense fallback={null}>
          {shouldReduceMotion ? (
            <AmbientGeometry />
          ) : (
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
              <AmbientGeometry />
            </Float>
          )}
        </Suspense>
      </Canvas>
    </div>
  );
};
