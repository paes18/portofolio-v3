import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { checkGraphicsCapabilities } from '../../lib/3d/capabilities';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { GenesisCore } from './GenesisCore';
import { HeroFallback } from './HeroFallback';

interface HeroSceneProps {
  pointer: { x: number; y: number };
  scrollProgress?: number;
  isHovered?: boolean;
  className?: string;
}

export const HeroScene: React.FC<HeroSceneProps> = ({
  pointer,
  scrollProgress = 0,
  isHovered = false,
  className,
}) => {
  const [canRenderWebGL, setCanRenderWebGL] = useState<boolean | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const caps = checkGraphicsCapabilities();
    setCanRenderWebGL(caps.hasWebGL);
  }, []);

  if (canRenderWebGL === false) {
    return <HeroFallback className={className} />;
  }

  return (
    <div className={`w-full h-full relative ${className || ''}`}>
      {/* Subtle loader text if initial canvas mount is delayed */}
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        dpr={[1, 2]} // Cap DPR to 2 for crispness without mobile GPU strain
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ pointerEvents: 'none' }}
      >
        {/* Cinematic 3-Point Lighting */}
        <ambientLight intensity={0.4} />
        {/* Key Light (Cool white) */}
        <directionalLight position={[6, 8, 5]} intensity={1.4} color="#f0f9ff" />
        {/* Rim Light (Electric cyan) */}
        <directionalLight position={[-6, -4, -3]} intensity={1.8} color="#38bdf8" />
        {/* Soft Under-Fill (Violet/Indigo) */}
        <directionalLight position={[0, -6, 2]} intensity={0.8} color="#818cf8" />

        <Suspense fallback={null}>
          {shouldReduceMotion ? (
            <GenesisCore
              pointer={pointer}
              scrollProgress={scrollProgress}
              isHovered={isHovered}
            />
          ) : (
            <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.4}>
              <GenesisCore
                pointer={pointer}
                scrollProgress={scrollProgress}
                isHovered={isHovered}
              />
            </Float>
          )}
        </Suspense>
      </Canvas>
    </div>
  );
};
