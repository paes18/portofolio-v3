import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Sparkles, Folder } from 'lucide-react';
import type { TechnologyItem } from '../../../data/skills';

interface TechDetailPanelProps {
  tech: TechnologyItem | null;
}

export const TechDetailPanel: React.FC<TechDetailPanelProps> = ({ tech }) => {
  if (!tech) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={tech.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="glass-panel p-6 sm:p-8 rounded-3xl border border-sky-500/30 bg-slate-950/95 shadow-2xl flex flex-col gap-6"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between font-mono text-xs pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded bg-sky-500/10 border border-sky-500/20 text-sky-400 font-bold uppercase">
              {tech.categoryLabel}
            </span>
            <span className="text-text-muted">NODE ID // {tech.id.toUpperCase()}</span>
          </div>

          <span className="text-emerald-400 font-semibold px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1 text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5" />
            {tech.status}
          </span>
        </div>

        {/* Title & Context */}
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl sm:text-4xl font-display font-black text-white tracking-tight">
            {tech.name}
          </h3>
          <p className="text-body text-text-secondary leading-relaxed font-normal">
            {tech.context}
          </p>
        </div>

        {/* Related Projects Evidence List */}
        <div className="flex flex-col gap-3 pt-2">
          <span className="text-xs font-mono text-text-muted uppercase tracking-wider flex items-center gap-1.5">
            <Folder className="w-3.5 h-3.5 text-sky-400" />
            RELATED PROJECTS USING {tech.name.toUpperCase()}:
          </span>
          <div className="flex flex-wrap gap-2">
            {tech.relatedProjects.map((proj) => (
              <span
                key={proj}
                className="px-3 py-1 rounded-xl bg-slate-900 border border-sky-500/30 text-sky-300 font-mono text-xs font-semibold flex items-center gap-1.5 cursor-default"
              >
                <span>{proj}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-white/5 flex items-center justify-between text-caption font-mono text-text-muted">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>NO ARBITRARY PERCENTAGE SKILL BARS</span>
          </span>
          <span className="text-slate-400">FAIZ / PAES STACK</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
