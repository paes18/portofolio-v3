import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const AmbientBackground: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* SVG Grain Noise Overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Primary Ambient Floating Cyan/Sky Orb (Top Right) */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, 40, -20, 0],
                y: [0, -30, 20, 0],
                scale: [1, 1.15, 0.95, 1],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="ambient-glow w-[650px] h-[650px] -top-48 -right-48 opacity-40"
        style={{
          background:
            'radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, rgba(129, 140, 248, 0.06) 50%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Secondary Ambient Floating Indigo/Violet Orb (Bottom Left) */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, -50, 30, 0],
                y: [0, 40, -30, 0],
                scale: [1, 1.1, 0.9, 1],
              }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="ambient-glow w-[850px] h-[850px] top-1/3 -left-64 opacity-25"
        style={{
          background:
            'radial-gradient(circle, rgba(129, 140, 248, 0.15) 0%, rgba(34, 211, 238, 0.04) 60%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      {/* Tertiary Ambient Floating Emerald Pulse Orb (Center Bottom) */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [0, -40, 0],
                opacity: [0.15, 0.25, 0.15],
              }
        }
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="ambient-glow w-[700px] h-[700px] bottom-0 right-1/4 opacity-20"
        style={{
          background:
            'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(56, 189, 248, 0.03) 65%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle Top & Bottom Vignette Transitions */}
      <div
        className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-slate-950/80 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-slate-950/80 to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
};
