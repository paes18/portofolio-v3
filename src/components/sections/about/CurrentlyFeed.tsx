import React from 'react';
import { Activity, Heart, Sparkles } from 'lucide-react';
import { siteData } from '../../../data/site';

export const CurrentlyFeed: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
      {/* Live Status Terminal (7 Cols) */}
      <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-emerald-500/20 bg-slate-950/80 relative overflow-hidden flex flex-col justify-between">
        {/* Terminal Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-white/10 font-mono text-xs text-text-muted">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white font-bold tracking-wider">CURRENTLY // LIVE STATUS</span>
            </div>
            <span className="text-emerald-400 font-mono text-[11px]">UPDATED AUG 2026</span>
          </div>

          {/* Feed Items */}
          <div className="py-6 flex flex-col gap-3 font-mono">
            {siteData.currently.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 text-sm text-slate-200 hover:text-emerald-300 transition-colors group cursor-default"
              >
                <span className="text-emerald-400 font-bold group-hover:translate-x-1 transition-transform">
                  →
                </span>
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal Footnote */}
        <div className="pt-4 border-t border-white/5 flex items-center justify-between text-caption font-mono text-text-muted">
          <span className="flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span>REAL-TIME FOCUS FEED</span>
          </span>
          <span className="text-emerald-400/80">HONEST & TRANSPARENT</span>
        </div>
      </div>

      {/* Personal Details / Likes & Hobbies (5 Cols) */}
      <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-2xl border border-sky-500/20 bg-slate-900/60 relative overflow-hidden flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-white/10 font-mono text-xs text-text-muted">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-sky-400" />
              <span className="text-white font-bold tracking-wider">PERSONAL DETAILS</span>
            </div>
            <span className="text-sky-400 font-mono text-[11px]">HUMAN PROFILE</span>
          </div>

          <div className="py-6 flex flex-col gap-5">
            {/* Likes */}
            <div>
              <span className="text-xs font-mono text-text-muted uppercase tracking-wider block mb-2.5">
                LIKES
              </span>
              <div className="flex flex-wrap gap-2">
                {siteData.likes.map((like) => (
                  <span
                    key={like}
                    className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 font-mono text-xs hover:border-sky-400 transition-colors"
                  >
                    #{like}
                  </span>
                ))}
              </div>
            </div>

            {/* Hobbies */}
            <div>
              <span className="text-xs font-mono text-text-muted uppercase tracking-wider block mb-2.5">
                HOBBIES
              </span>
              <div className="flex flex-wrap gap-2">
                {siteData.hobbies.map((hobby) => (
                  <span
                    key={hobby}
                    className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-mono text-xs hover:border-indigo-400 transition-colors"
                  >
                    ⚡ {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footnote */}
        <div className="pt-4 border-t border-white/5 flex items-center justify-between text-caption font-mono text-text-muted">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>OUTSIDE THE CODE</span>
          </span>
          <span className="text-slate-400">FAIZ / PAES</span>
        </div>
      </div>
    </div>
  );
};
