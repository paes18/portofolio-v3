import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, ShieldCheck, Terminal } from 'lucide-react';
import { siteData } from '../../../data/site';
import { useReducedMotion } from '../../../hooks/useReducedMotion';

export const IdentityCard: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({ x: -(y / 20), y: x / 20 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const [showAgeNote, setShowAgeNote] = useState(false);

  return (
    <div className="w-full perspective-1000">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={
          shouldReduceMotion
            ? {}
            : { rotateX: rotate.x, rotateY: rotate.y }
        }
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="glass-panel p-6 sm:p-8 rounded-2xl border border-sky-500/20 bg-slate-900/70 shadow-2xl relative overflow-hidden group"
      >
        {/* Holographic Subtle Top Ambient Bar */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-cyan-400 opacity-80" />

        {/* Matrix Grid Blueprint Overlay */}
        <div
          className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.04] pointer-events-none"
          aria-hidden="true"
        />

        {/* Header Metadata Bar */}
        <div className="flex items-center justify-between gap-4 pb-5 border-b border-white/10 text-xs font-mono text-text-muted">
          <div className="flex items-center gap-2 text-sky-400 font-semibold tracking-wider">
            <Terminal className="w-4 h-4 text-sky-400" />
            <span>ID // PAES-2026-019</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>SYSTEM ACTIVE</span>
          </div>
        </div>

        {/* Photo / Authentic Editorial Visual Artifact */}
        <div className="my-6 relative rounded-2xl border border-sky-500/30 bg-slate-950/80 overflow-hidden h-72 sm:h-80 group/photo shadow-2xl transition-all duration-500 hover:border-sky-400/60 hover:shadow-[0_0_30px_rgba(56,189,248,0.25)]">
          {/* Real Photo Image */}
          <img
            src="/faiz.jpg"
            alt="Faiz Patiogi Kitta (PAES)"
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover/photo:scale-105"
            loading="eager"
          />

          {/* Dark Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover/photo:opacity-50 transition-opacity duration-300" />

          {/* Subtle Cyber Grid Overlay */}
          <div
            className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.08] pointer-events-none"
            aria-hidden="true"
          />

          {/* Bottom Badge Metadata Overlay */}
          <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between font-mono text-[11px]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white font-bold tracking-wider">FAIZ PATIOGI KITTA</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[9px]">
                #GENZFLOW
              </span>
              <span className="text-sky-400 font-bold px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20 text-[10px]">
                VERIFIED PORTRAIT
              </span>
            </div>
          </div>

          {/* Corner Crosshair Accents */}
          <span className="absolute top-2 left-2 text-[10px] font-mono text-sky-400/80 px-1.5 py-0.5 bg-slate-950/60 rounded backdrop-blur-xs">
            + 01 // 19 Y.O.
          </span>
          <span className="absolute top-2 right-2 text-[10px] font-mono text-sky-400/80 px-1.5 py-0.5 bg-slate-950/60 rounded backdrop-blur-xs">
            + 02 // INDONESIA
          </span>
        </div>

        {/* Identity Metadata Key-Value Grid */}
        <div className="grid grid-cols-2 gap-y-3.5 gap-x-4 pt-2 font-mono text-xs">
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] uppercase tracking-wider text-text-muted">NAME</span>
            <span className="font-semibold text-slate-100 tracking-tight truncate">{siteData.fullName}</span>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] uppercase tracking-wider text-text-muted">KNOWN AS</span>
            <span className="font-semibold text-slate-100 tracking-tight truncate">{siteData.knownAs}</span>
          </div>

          <div className="flex flex-col gap-0.5 group/handle">
            <span className="text-[10px] uppercase tracking-wider text-text-muted">HANDLE</span>
            <span className="font-semibold text-sky-400 tracking-tight truncate group-hover/handle:text-emerald-400 transition-colors">
              {siteData.handle}
            </span>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] uppercase tracking-wider text-text-muted">ROLE</span>
            <span className="font-semibold text-slate-100 tracking-tight truncate">{siteData.role}</span>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] uppercase tracking-wider text-text-muted">FOCUS</span>
            <span className="font-semibold text-slate-100 tracking-tight truncate">{siteData.focus}</span>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] uppercase tracking-wider text-text-muted">BASED IN</span>
            <span className="font-semibold text-slate-100 tracking-tight truncate">{siteData.basedIn}</span>
          </div>

          <div
            onClick={() => setShowAgeNote(!showAgeNote)}
            className="flex flex-col gap-0.5 cursor-pointer group/age"
            title="Click for a secret"
          >
            <span className="text-[10px] uppercase tracking-wider text-text-muted flex items-center gap-1">
              AGE <span className="text-[9px] text-sky-400 opacity-60 group-hover/age:opacity-100">(CLICK ME)</span>
            </span>
            <span className="font-semibold text-sky-300 tracking-tight">
              {siteData.age} Y.O. {showAgeNote && <span className="text-emerald-400 font-mono text-[11px] ml-1">“still early.”</span>}
            </span>
          </div>
        </div>

        {/* Footer Chip */}
        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-text-muted">
          <span className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-indigo-400" />
            <span>PAES // 2026 EDITION</span>
          </span>
          <span className="text-sky-400/80 font-medium">CREATIVE DEV</span>
        </div>
      </motion.div>
    </div>
  );
};
