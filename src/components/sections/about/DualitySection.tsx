import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Palette, Sparkles, Layers, Cpu, Database, Compass, Zap } from 'lucide-react';

export const DualitySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'technical' | 'creative'>('all');

  const technicalItems = [
    { name: 'Development', desc: 'Type-safe frontend & system code', icon: Code2 },
    { name: 'Problem Solving', desc: 'Logical algorithm & state flow optimization', icon: Cpu },
    { name: 'Databases', desc: 'Structured data schemas & persistence', icon: Database },
    { name: 'APIs', desc: 'REST & GraphQL service interfaces', icon: Zap },
    { name: 'Architecture', desc: 'Scalable component design systems', icon: Layers },
    { name: 'Debugging', desc: 'Root cause profiling & error isolation', icon: Compass },
  ];

  const creativeItems = [
    { name: 'UI Design', desc: 'Editorial typography & fluid layouts', icon: Palette },
    { name: 'Visual Design', desc: 'Curated color theory & visual balance', icon: Sparkles },
    { name: '3D Elements', desc: 'WebGL, Three.js & physical canvas assets', icon: Code2 },
    { name: 'Motion', desc: 'Fluid micro-interactions & frame timing', icon: Zap },
    { name: 'Interaction', desc: 'Tactile cursor & gesture responsiveness', icon: Compass },
    { name: 'AI Experimentation', desc: 'Prompt engineering & AI tools workflow', icon: Cpu },
  ];

  return (
    <div className="w-full glass-panel p-6 sm:p-10 rounded-3xl border border-sky-500/20 bg-slate-950/80 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header & Mode Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10 relative z-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-2">
            <Sparkles className="w-4 h-4" />
            <span className="uppercase tracking-widest">// THE DUAL ENGINE</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            CODE × CREATIVE DUALITY
          </h3>
          <p className="text-sm text-text-secondary mt-1 max-w-xl">
            I don't choose between technical engineering and creative design. I thrive in the space where both collide.
          </p>
        </div>

        {/* Interactive Mode Filter */}
        <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-900 border border-white/10 font-mono text-xs">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer font-medium ${
              activeTab === 'all'
                ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20 font-bold'
                : 'text-text-muted hover:text-white'
            }`}
          >
            SYNTHESIS
          </button>
          <button
            onClick={() => setActiveTab('technical')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer font-medium ${
              activeTab === 'technical'
                ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20 font-bold'
                : 'text-text-muted hover:text-white'
            }`}
          >
            TECHNICAL
          </button>
          <button
            onClick={() => setActiveTab('creative')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer font-medium ${
              activeTab === 'creative'
                ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20 font-bold'
                : 'text-text-muted hover:text-white'
            }`}
          >
            CREATIVE
          </button>
        </div>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 relative z-10">
        {/* Technical Spectrum Column */}
        <AnimatePresence mode="wait">
          {(activeTab === 'all' || activeTab === 'technical') && (
            <motion.div
              key="tech-col"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className={`${
                activeTab === 'all' ? 'lg:col-span-6' : 'lg:col-span-12'
              } flex flex-col gap-4`}
            >
              <div className="flex items-center justify-between pb-2 border-b border-sky-500/20">
                <span className="text-xs font-mono text-sky-400 font-bold tracking-wider flex items-center gap-2">
                  <Code2 className="w-4 h-4" />
                  01 // TECHNICAL ARCHITECTURE
                </span>
                <span className="text-[10px] font-mono text-text-muted">6 MODULES</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {technicalItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      className="p-4 rounded-xl bg-slate-900/60 border border-white/5 hover:border-sky-500/40 hover:bg-slate-900 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white font-mono">
                            {item.name}
                          </h4>
                          <p className="text-caption text-text-muted mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Creative Spectrum Column */}
        <AnimatePresence mode="wait">
          {(activeTab === 'all' || activeTab === 'creative') && (
            <motion.div
              key="creative-col"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className={`${
                activeTab === 'all' ? 'lg:col-span-6' : 'lg:col-span-12'
              } flex flex-col gap-4`}
            >
              <div className="flex items-center justify-between pb-2 border-b border-indigo-500/20">
                <span className="text-xs font-mono text-indigo-400 font-bold tracking-wider flex items-center gap-2">
                  <Palette className="w-4 h-4" />
                  02 // CREATIVE EXPERIENCE
                </span>
                <span className="text-[10px] font-mono text-text-muted">6 MODULES</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {creativeItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      className="p-4 rounded-xl bg-slate-900/60 border border-white/5 hover:border-indigo-500/40 hover:bg-slate-900 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-500 group-hover:text-slate-950 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white font-mono">
                            {item.name}
                          </h4>
                          <p className="text-caption text-text-muted mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Synthesis Footer Tag */}
      <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-text-muted">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
          <span>SYNTHESIS COMPLETE // SYSTEM INTEGRATED</span>
        </span>
        <span className="text-sky-300/80 font-medium">CODE + DESIGN = PRODUCT</span>
      </div>
    </div>
  );
};
