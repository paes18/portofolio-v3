import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, ArrowRight } from 'lucide-react';
import { siteData } from '../../../data/site';

export const PhilosophyLoop: React.FC = () => {
  const steps = siteData.philosophy; // ['BUILD', 'BREAK', 'LEARN', 'FIX', 'REPEAT']
  const [activeStep, setActiveStep] = useState<number>(0);

  const stepDescriptions = [
    '01. BUILD — Start by crafting an ambitious initial prototype from scratch.',
    '02. BREAK — Push boundaries until errors, edge cases, and limits reveal themselves.',
    '03. LEARN — Analyze log traces, stack traces, and core mechanisms to uncover root causes.',
    '04. FIX — Refactor architecture with robust code, type safety, and clean engineering.',
    '05. REPEAT — Cycle forward to the next level of complexity with newfound mastery.',
  ];

  return (
    <div className="w-full glass-panel p-8 sm:p-12 rounded-3xl border border-sky-500/20 bg-slate-950/90 relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/10">
        <div>
          <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-widest block mb-2">
            // PERSONAL PHILOSOPHY
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
            THE ITERATIVE GROWTH CYCLE
          </h3>
        </div>

        <button
          onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-sky-500/30 text-sky-400 font-mono text-xs hover:bg-sky-500 hover:text-slate-950 transition-all duration-300 cursor-pointer w-fit"
        >
          <RefreshCw className="w-3.5 h-3.5 animate-spin-slow" />
          <span>CYCLE STEP ({activeStep + 1} / 5)</span>
        </button>
      </div>

      {/* Typography Step Flow */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 my-6">
        {steps.map((step, idx) => {
          const isActive = idx === activeStep;
          return (
            <motion.button
              key={step}
              onClick={() => setActiveStep(idx)}
              whileHover={{ y: -2 }}
              className={`p-4 sm:p-6 rounded-2xl border text-center transition-all duration-300 cursor-pointer flex flex-col items-center justify-center gap-2 ${
                isActive
                  ? 'bg-sky-500/10 border-sky-400 text-sky-300 shadow-lg shadow-sky-500/20 scale-[1.02]'
                  : 'bg-slate-900/40 border-white/5 text-text-muted hover:text-white hover:border-white/20'
              }`}
            >
              <span className="text-[10px] font-mono text-text-muted">STEP 0{idx + 1}</span>
              <span className="text-lg sm:text-xl md:text-2xl font-display font-black tracking-tight uppercase">
                {step}
              </span>
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse mt-1" />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Active Step Context Box */}
      <div className="mt-8 p-5 rounded-xl bg-slate-900/80 border border-sky-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="text-sm font-mono text-slate-200 flex items-center gap-3">
          <ArrowRight className="w-4 h-4 text-sky-400 flex-shrink-0" />
          <span>{stepDescriptions[activeStep]}</span>
        </p>

        <span className="text-caption font-mono text-text-muted flex-shrink-0">
          CLICK OR TAP ANY STEP TO EXPLORE
        </span>
      </div>
    </div>
  );
};
