import React from 'react';
import { Activity, Flame } from 'lucide-react';
import { siteData } from '../../../data/site';
import { ScrollReveal } from '../../motion/ScrollReveal';

const ACCENT_MAP: Record<string, { border: string; hoverBorder: string; text: string; bg: string; badgeText: string }> = {
  amber: {
    border: 'border-amber-500/30',
    hoverBorder: 'hover:border-amber-400/60 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]',
    text: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/20',
    badgeText: 'text-amber-300',
  },
  sky: {
    border: 'border-sky-500/30',
    hoverBorder: 'hover:border-sky-400/60 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]',
    text: 'text-sky-400',
    bg: 'bg-sky-500/10 border-sky-500/20',
    badgeText: 'text-sky-300',
  },
  emerald: {
    border: 'border-emerald-500/30',
    hoverBorder: 'hover:border-emerald-400/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]',
    text: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
    badgeText: 'text-emerald-300',
  },
  indigo: {
    border: 'border-indigo-500/30',
    hoverBorder: 'hover:border-indigo-400/60 hover:shadow-[0_0_30px_rgba(129,140,248,0.2)]',
    text: 'text-indigo-400',
    bg: 'bg-indigo-500/10 border-indigo-500/20',
    badgeText: 'text-indigo-300',
  },
};

export const HobbyGallery: React.FC = () => {
  const hobbies = siteData.hobbyGalleries;
  if (!hobbies || hobbies.length === 0) return null;

  return (
    <div className="flex flex-col gap-8 w-full">
      <ScrollReveal className="flex flex-col gap-2">
        <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold flex items-center gap-2">
          <Flame className="w-4 h-4" /> // DISCIPLINE OUTSIDE THE CODE
        </span>
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
          HOBBIES & PERSONAL LIFE ARTIFACTS
        </h3>
        <p className="text-caption font-mono text-text-secondary">
          “Physical endurance, gaming focus, and lo-fi flow states recharge technical problem solving.”
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {hobbies.map((hobby, idx) => {
          const accentStyle = ACCENT_MAP[hobby.accent] || ACCENT_MAP.sky;
          return (
            <ScrollReveal key={hobby.id} delay={idx * 0.12}>
              <div className={`glass-panel p-6 sm:p-8 rounded-3xl border ${accentStyle.border} ${accentStyle.hoverBorder} transition-all duration-500 bg-slate-950/85 flex flex-col justify-between gap-6 group relative overflow-hidden shadow-2xl`}>
                {/* Header Badge Bar */}
                <div className="flex items-center justify-between font-mono text-xs pb-4 border-b border-white/10">
                  <span className={`${accentStyle.text} font-bold px-2.5 py-0.5 rounded ${accentStyle.bg} text-[11px] uppercase tracking-wider`}>
                    {hobby.category}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded ${accentStyle.bg} ${accentStyle.badgeText} font-mono text-[10px] font-semibold`}>
                    {hobby.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="flex flex-col gap-2">
                  <h4 className={`text-2xl font-display font-bold text-white tracking-tight group-hover:${accentStyle.text} transition-colors`}>
                    {hobby.title}
                  </h4>
                  <p className={`text-xs font-mono ${accentStyle.badgeText} font-medium italic`}>
                    “{hobby.tagline}”
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed font-normal mt-1">
                    {hobby.description}
                  </p>
                </div>

                {/* Photo Showcase Dual Grid */}
                <div className="grid grid-cols-2 gap-3 h-52 sm:h-64 rounded-2xl overflow-hidden border border-white/10 relative">
                  {/* Primary Image */}
                  <div className="relative w-full h-full overflow-hidden bg-slate-900 group/img">
                    <img
                      src={hobby.image}
                      alt={hobby.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover/img:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent opacity-70 group-hover/img:opacity-40 transition-opacity" />
                    <span className={`absolute bottom-2 left-2 text-[9px] font-mono ${accentStyle.badgeText} font-bold px-2 py-0.5 bg-slate-950/85 rounded backdrop-blur-xs`}>
                      ARTIFACT 01
                    </span>
                  </div>

                  {/* Secondary Image */}
                  {hobby.secondaryImage && (
                    <div className="relative w-full h-full overflow-hidden bg-slate-900 group/img2">
                      <img
                        src={hobby.secondaryImage}
                        alt={`${hobby.title} secondary`}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover/img2:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent opacity-70 group-hover/img2:opacity-40 transition-opacity" />
                      <span className={`absolute bottom-2 left-2 text-[9px] font-mono ${accentStyle.badgeText} font-bold px-2 py-0.5 bg-slate-950/85 rounded backdrop-blur-xs`}>
                        ARTIFACT 02
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-caption font-mono text-text-muted">
                  <span className="flex items-center gap-1.5 text-[11px]">
                    <Activity className={`w-3.5 h-3.5 ${accentStyle.text}`} />
                    <span>AUTHENTIC PERSONAL HOBBY</span>
                  </span>
                  <span className="text-slate-400 text-[10px]">FAIZ / PAES</span>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
};
