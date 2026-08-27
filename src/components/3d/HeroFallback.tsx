import React from 'react';

export const HeroFallback: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={`w-full h-full flex items-center justify-center relative overflow-hidden select-none ${className || ''}`}
      aria-hidden="true"
    >
      {/* Outer subtle glow */}
      <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-sky-500/20 via-indigo-500/10 to-transparent blur-3xl opacity-70 animate-pulse" />

      {/* Decorative Technical Ring 1 */}
      <div className="absolute w-64 h-64 rounded-full border border-sky-500/20 border-dashed animate-[spin_40s_linear_infinite]" />

      {/* Decorative Technical Ring 2 */}
      <div className="absolute w-52 h-52 rounded-full border border-indigo-500/25 border-dotted animate-[spin_25s_linear_infinite_reverse]" />

      {/* Inner Translucent Diamond Core */}
      <div className="relative w-36 h-36 rotate-45 rounded-2xl bg-gradient-to-br from-slate-800/80 via-slate-900/90 to-slate-950/95 border border-white/15 backdrop-blur-xl shadow-2xl flex items-center justify-center">
        {/* Core glow */}
        <div className="w-16 h-16 rounded-full bg-sky-400/20 blur-md" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400/15 via-transparent to-transparent rounded-2xl" />
        <span className="font-mono text-[10px] text-sky-400/80 -rotate-45 tracking-widest uppercase font-semibold">
          PAES18
        </span>
      </div>

      {/* Subtle Coordinate Crosshair */}
      <div className="absolute top-4 right-4 font-mono text-[10px] text-slate-500 tracking-wider">
        SYS.01 // STATIC
      </div>
    </div>
  );
};
