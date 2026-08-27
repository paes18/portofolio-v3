import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Activity, X, ShieldAlert, Monitor } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface DevModeOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DevModeOverlay: React.FC<DevModeOverlayProps> = ({ isOpen, onClose }) => {
  const shouldReduceMotion = useReducedMotion();
  const [fps, setFps] = useState(60);
  const [resolution, setResolution] = useState({ w: 1920, h: 1080 });

  useEffect(() => {
    if (!isOpen) return;

    // Track viewport size
    const updateRes = () => {
      setResolution({ w: window.innerWidth, h: window.innerHeight });
    };
    updateRes();
    window.addEventListener('resize', updateRes);

    // Simple FPS counter
    let frameCount = 0;
    let lastTime = performance.now();
    let animId: number;

    const tick = () => {
      frameCount++;
      const now = performance.now();
      if (now - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;
      }
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('resize', updateRes);
      cancelAnimationFrame(animId);
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-20 right-6 z-50 glass-panel p-5 rounded-2xl border border-emerald-500/40 bg-slate-950/95 font-mono text-xs shadow-2xl text-slate-100 flex flex-col gap-4 max-w-xs select-none backdrop-blur-md"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2 text-emerald-400 font-bold tracking-wider">
              <Terminal className="w-4 h-4" />
              <span>DEV MODE // TELEMETRY HUD</span>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded bg-slate-900 border border-white/10 hover:border-emerald-400 text-text-muted hover:text-white transition-colors cursor-pointer"
              aria-label="Close Dev Mode"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Telemetry Metrics */}
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="p-2 rounded bg-slate-900 border border-emerald-500/20">
              <span className="text-text-muted text-[9px] block">FRAME RATE</span>
              <span className="font-bold text-emerald-400 text-sm flex items-center gap-1">
                <Activity className="w-3.5 h-3.5" /> {fps} FPS
              </span>
            </div>

            <div className="p-2 rounded bg-slate-900 border border-sky-500/20">
              <span className="text-text-muted text-[9px] block">3D ENGINE</span>
              <span className="font-bold text-sky-400 text-sm flex items-center gap-1">
                <Cpu className="w-3.5 h-3.5" /> R3F / GLSL
              </span>
            </div>

            <div className="p-2 rounded bg-slate-900 border border-indigo-500/20">
              <span className="text-text-muted text-[9px] block">REDUCED MOTION</span>
              <span className="font-bold text-indigo-300 text-xs">
                {shouldReduceMotion ? 'ENABLED' : 'DISABLED'}
              </span>
            </div>

            <div className="p-2 rounded bg-slate-900 border border-amber-500/20">
              <span className="text-text-muted text-[9px] block">VIEWPORT</span>
              <span className="font-bold text-amber-300 text-xs flex items-center gap-1">
                <Monitor className="w-3 h-3" /> {resolution.w}x{resolution.h}
              </span>
            </div>
          </div>

          {/* System Info */}
          <div className="p-3 rounded bg-slate-900/80 border border-white/5 text-[10px] text-text-muted flex flex-col gap-1">
            <span className="flex items-center justify-between text-slate-300">
              <span>SYSTEM:</span> <span className="text-sky-400 font-bold">FAIZ PAES v3.0</span>
            </span>
            <span className="flex items-center justify-between text-slate-300">
              <span>STATUS:</span> <span className="text-emerald-400 font-bold">ACTIVE TELEMETRY</span>
            </span>
            <span className="flex items-center justify-between text-slate-300">
              <span>KEYBOARD SECRET:</span> <span className="text-indigo-300">"PAES" LISTENING</span>
            </span>
          </div>

          {/* Footnote */}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-text-muted">
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldAlert className="w-3 h-3" /> NO SECRETS LEAKED
            </span>
            <span className="text-slate-400">PRESS ESC / CLOSE</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
