import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Compass, Palette, Code2, Zap, Wrench, Rocket, RefreshCw, CheckCircle2, ArrowRight, Sparkles, AlertTriangle } from 'lucide-react';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../motion/ScrollReveal';

export interface ProcessStage {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  quote: string;
  description: string;
  tools: string[];
  icon: React.ReactNode;
  accent: string;
  isGlitch?: boolean;
}

export const ProcessSection: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>('build');

  const stages: ProcessStage[] = [
    {
      id: 'idea',
      number: '01',
      title: 'IDEA',
      subtitle: 'The Questioning Phase',
      tagline: 'EVERYTHING STARTS WITH A QUESTION',
      quote: "“Most things start as a simple: 'What if...?'”",
      description: 'Everything begins with an unsolved problem, a random thought, or a curiosity to build something better. No generic specs—just raw creative momentum.',
      tools: ['Problem Framing', 'Concept Sketches', 'Feature Scoping'],
      icon: <Lightbulb className="w-5 h-5 text-amber-400" />,
      accent: 'amber',
    },
    {
      id: 'explore',
      number: '02',
      title: 'EXPLORE',
      subtitle: 'Testing Assumptions',
      tagline: 'FIGURING OUT CONSTRAINTS',
      quote: '“Testing boundaries before writing permanent code.”',
      description: 'Exploring reference designs, inspecting existing solutions, testing tech capabilities, and figuring out what is technically realistic.',
      tools: ['Tech Spikes', 'Visual References', 'Constraint Mapping'],
      icon: <Compass className="w-5 h-5 text-sky-400" />,
      accent: 'sky',
    },
    {
      id: 'design',
      number: '03',
      title: 'DESIGN',
      subtitle: 'Experience & Layout Architecture',
      tagline: 'THINKING BEFORE WRITING CODE',
      quote: '“Layout, hierarchy, and interaction design come first.”',
      description: 'Establishing grid systems, editorial typography scales, color token themes, and user interaction flows before diving into code components.',
      tools: ['Figma / Layouts', 'CSS Tokens', 'Typography Hierarchy'],
      icon: <Palette className="w-5 h-5 text-indigo-400" />,
      accent: 'indigo',
    },
    {
      id: 'build',
      number: '04',
      title: 'BUILD',
      subtitle: 'Systems Engineering',
      tagline: 'TURNING IDEAS INTO CODE',
      quote: '“IDEA → COMPONENTS → LOGIC → DATA → WORKING PRODUCT”',
      description: 'Building modular React components, establishing type-safe TypeScript interfaces, and wiring state logic into working digital artifacts.',
      tools: ['React', 'TypeScript', 'Tailwind / CSS', 'State Logic'],
      icon: <Code2 className="w-5 h-5 text-sky-400" />,
      accent: 'sky',
    },
    {
      id: 'break',
      number: '05',
      title: 'BREAK',
      subtitle: 'The Glitch Moment',
      tagline: 'THEN SOMETHING BREAKS',
      quote: '“Layout breaks. APIs error out. Mobile looks terrible.”',
      description: 'Pushing code until edge cases, rendering lags, or layout glitches reveal themselves. Breaking things on purpose to discover systemic weak points.',
      tools: ['Log Tracing', 'Edge Case Stress', 'Mobile Testing'],
      icon: <AlertTriangle className="w-5 h-5 text-rose-400" />,
      accent: 'rose',
      isGlitch: true,
    },
    {
      id: 'fix',
      number: '06',
      title: 'FIX',
      subtitle: 'Debugging & Refactoring',
      tagline: 'RESTORING STRUCTURE & CLARITY',
      quote: '“Breaking things is annoying. Understanding why they broke is where learning starts.”',
      description: 'Isolating root causes, refactoring component logic, fixing state bugs, and optimizing render performance for smooth 60 FPS execution.',
      tools: ['Root Cause Analysis', 'Refactoring', 'Perf Profiling'],
      icon: <Wrench className="w-5 h-5 text-emerald-400" />,
      accent: 'emerald',
    },
    {
      id: 'ship',
      number: '07',
      title: 'SHIP',
      subtitle: 'Deployment & Completion',
      tagline: 'FROM IDEA TO REAL THING',
      quote: '“Moving from a local experiment into a deployed artifact.”',
      description: 'Finalizing production builds, checking WCAG accessibility standards, verifying build outputs, and publishing to live environments.',
      tools: ['Vite Build', 'A11y Checks', 'Production Deploy'],
      icon: <Rocket className="w-5 h-5 text-cyan-400" />,
      accent: 'cyan',
    },
    {
      id: 'learn',
      number: '08',
      title: 'LEARN',
      subtitle: 'Continuous Growth Loop',
      tagline: 'EVERY PROJECT FEEDS THE NEXT',
      quote: '“I\'m not trying to know everything. I\'m trying to get better at the next thing.”',
      description: 'Documenting lessons, analyzing what worked and what didn\'t, and feeding new knowledge directly into the next project build cycle.',
      tools: ['Post-Mortem', 'Code Retrospective', 'Next Loop'],
      icon: <RefreshCw className="w-5 h-5 text-amber-400" />,
      accent: 'amber',
    },
  ];

  const currentStage = stages.find((s) => s.id === activeStageId) || stages[3];

  const scrollToSkills = () => {
    const el = document.getElementById('skills');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = 'skills';
    }
  };

  const technicalConsiderations = [
    {
      id: 'perf',
      title: 'PERFORMANCE',
      question: 'Does it stay fast?',
      desc: 'Optimizing render cycles, asset loading, and frame rates for smooth 60 FPS execution.',
    },
    {
      id: 'responsive',
      title: 'RESPONSIVENESS',
      question: 'Does it work everywhere?',
      desc: 'Designing intentional layouts for mobile touch targets, tablets, and wide desktop displays.',
    },
    {
      id: 'maintain',
      title: 'MAINTAINABILITY',
      question: 'Can I understand it later?',
      desc: 'Writing self-documenting type-safe code without convoluted magic numbers or unreadable hacks.',
    },
    {
      id: 'ux',
      title: 'UX & CLARITY',
      question: 'Does it make sense?',
      desc: 'Ensuring the visual hierarchy and interactive feedback feel natural and intuitive.',
    },
    {
      id: 'a11y',
      title: 'ACCESSIBILITY',
      question: 'Can everyone use it?',
      desc: 'Enforcing WCAG contrast compliance, keyboard focus states, and screen reader labels.',
    },
  ];

  return (
    <section id="process" className="py-24 lg:py-32 relative z-10 bg-slate-950/80 overflow-hidden">
      {/* Background Radial Glow */}
      <div
        className="absolute top-1/3 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container size="wide" className="flex flex-col gap-20 sm:gap-28">

        {/* =====================================================================
            1. SECTION OPENING & HEADLINE
           ===================================================================== */}
        <ScrollReveal className="flex flex-col items-start gap-4 border-b border-white/10 pb-12">
          <div className="flex items-center gap-3">
            <span className="text-mono text-xs font-semibold px-2.5 py-1 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
              // 04
            </span>
            <span className="text-caption font-mono tracking-widest uppercase text-text-muted">
              HOW I BUILD // CREATION & EXECUTION PIPELINE
            </span>
          </div>

          <h2 className="text-[clamp(2.5rem,5.5vw,4.75rem)] font-display font-black text-white tracking-tighter leading-[0.95] uppercase">
            FROM “WHAT IF?” <span className="text-gradient-accent">TO “IT WORKS.”</span>
          </h2>

          <p className="text-body-lg sm:text-h4 text-text-secondary max-w-3xl font-normal leading-relaxed">
            How an idea moves from an abstract thought through exploration, build, chaos, refactoring, and final deployment.
          </p>
        </ScrollReveal>

        {/* =====================================================================
            2. THE 8-STAGE PROCESS PATH & INTERACTIVE PIPELINE
           ===================================================================== */}
        <div className="flex flex-col gap-10">
          <ScrollReveal className="flex items-center justify-between font-mono text-xs text-sky-400 font-bold uppercase tracking-wider">
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              THE 8-STAGE MENTAL MODEL // SELECT STAGE TO EXPLORE
            </span>
            <span className="text-text-muted text-[11px] hidden sm:inline">STAGE ({currentStage.number} / 08)</span>
          </ScrollReveal>

          {/* Process Timeline Bar Tabs */}
          <ScrollReveal className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            {stages.map((st) => {
              const isActive = st.id === activeStageId;
              return (
                <button
                  key={st.id}
                  onClick={() => setActiveStageId(st.id)}
                  className={`p-3.5 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between gap-3 ${
                    st.isGlitch
                      ? isActive
                        ? 'bg-rose-500/15 border-rose-400 text-rose-300 shadow-lg shadow-rose-500/20 scale-[1.03]'
                        : 'bg-slate-900/60 border-rose-500/30 text-rose-400/80 hover:border-rose-400'
                      : isActive
                      ? 'bg-sky-500/15 border-sky-400 text-sky-300 shadow-lg shadow-sky-500/20 scale-[1.03]'
                      : 'bg-slate-900/50 border-white/10 text-text-muted hover:text-white hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-[10px]">
                    <span className="font-bold">{st.number}</span>
                    {st.icon}
                  </div>
                  <span className={`text-xs font-display font-bold uppercase tracking-tight ${st.isGlitch ? 'tracking-widest animate-pulse' : ''}`}>
                    {st.title}
                  </span>
                </button>
              );
            })}
          </ScrollReveal>

          {/* Active Stage Detailed Display Panel */}
          <ScrollReveal>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStage.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className={`glass-panel p-8 sm:p-12 rounded-3xl border bg-slate-950/90 relative overflow-hidden shadow-2xl ${
                  currentStage.isGlitch
                    ? 'border-rose-500/40 bg-gradient-to-br from-slate-950 via-rose-950/20 to-slate-950'
                    : 'border-sky-500/30'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  {/* Left Main Information (8 cols) */}
                  <div className="lg:col-span-8 flex flex-col gap-5">
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded border ${
                        currentStage.isGlitch
                          ? 'bg-rose-500/10 text-rose-400 border-rose-500/30'
                          : 'bg-sky-500/10 text-sky-400 border-sky-500/30'
                      }`}>
                        STAGE {currentStage.number} // {currentStage.title}
                      </span>
                      <span className="text-xs font-mono text-text-muted uppercase">
                        {currentStage.subtitle}
                      </span>
                    </div>

                    <h3 className={`text-2xl sm:text-4xl font-display font-bold text-white tracking-tight ${
                      currentStage.isGlitch ? 'text-rose-100' : ''
                    }`}>
                      {currentStage.tagline}
                    </h3>

                    <p className={`text-lg sm:text-xl font-display font-bold italic ${
                      currentStage.isGlitch ? 'text-rose-300' : 'text-sky-300'
                    }`}>
                      {currentStage.quote}
                    </p>

                    <p className="text-body text-text-secondary leading-relaxed font-normal">
                      {currentStage.description}
                    </p>

                    {/* Tools / Artifacts Chips */}
                    <div className="flex items-center gap-2 flex-wrap pt-2">
                      <span className="text-xs font-mono text-text-muted uppercase mr-2">TOOLS & FOCUS:</span>
                      {currentStage.tools.map((t) => (
                        <span
                          key={t}
                          className={`px-3 py-1 rounded-lg font-mono text-xs ${
                            currentStage.isGlitch
                              ? 'bg-rose-500/10 border border-rose-500/30 text-rose-300'
                              : 'bg-sky-500/10 border border-sky-500/30 text-sky-300'
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Stage Visual Representation (4 cols) */}
                  <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-900/90 border border-white/10 font-mono text-xs flex flex-col justify-between gap-6 min-h-[220px]">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="text-text-muted text-[10px]">PIPELINE STATUS</span>
                      <span className="text-sky-400 font-bold text-[11px]">{currentStage.number} / 08</span>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-3 py-4 text-center">
                      <div className={`p-4 rounded-full border ${
                        currentStage.isGlitch
                          ? 'bg-rose-500/10 border-rose-500/40 text-rose-400 animate-pulse'
                          : 'bg-sky-500/10 border-sky-500/40 text-sky-400'
                      }`}>
                        {currentStage.icon}
                      </div>
                      <span className="text-sm font-bold text-white uppercase tracking-wider">
                        {currentStage.title} PHASE
                      </span>
                    </div>

                    <div className="pt-3 border-t border-white/10 text-[10px] text-text-muted text-center uppercase">
                      MENTAL MODEL // FAIZ PAES
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </ScrollReveal>
        </div>

        {/* =====================================================================
            3. TECHNICAL THINKING (THINGS I THINK ABOUT)
           ===================================================================== */}
        <div className="flex flex-col gap-8">
          <ScrollReveal className="flex flex-col gap-2">
            <span className="text-xs font-mono text-sky-400 uppercase tracking-widest font-semibold">
              // TECHNICAL THINKING
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              THINGS I THINK ABOUT WHEN BUILDING
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {technicalConsiderations.map((item, idx) => (
              <ScrollReveal key={item.id} delay={idx * 0.1}>
                <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-sky-500/30 transition-all duration-300 h-full flex flex-col justify-between gap-4 group">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-mono text-sky-400 font-bold px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20 w-fit">
                      0{idx + 1} // {item.title}
                    </span>
                    <h4 className="text-sm font-display font-bold text-white mt-1 group-hover:text-sky-300 transition-colors">
                      {item.question}
                    </h4>
                    <p className="text-caption text-text-secondary leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-text-muted pt-3 border-t border-white/5 uppercase">
                    CONSIDERATION 0{idx + 1}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* =====================================================================
            4. AI AS A TOOL (COLLABORATION MODEL)
           ===================================================================== */}
        <ScrollReveal>
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-indigo-500/15 via-slate-950 to-slate-900 border border-indigo-500/30 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 flex flex-col gap-4">
                <span className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-widest flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> AI AS AN EXECUTION ACCELERATOR
                </span>
                <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight leading-tight">
                  “AI helps me explore ideas, brainstorm, debug, and experiment faster.”
                </h3>
                <p className="text-body text-text-secondary leading-relaxed font-normal">
                  AI tools accelerate prototyping and problem solving, but architectural decisions, type-safety boundaries, and visual craft require human judgment.
                </p>
              </div>

              <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-900/90 border border-indigo-500/20 font-mono text-xs flex flex-col gap-3">
                <span className="text-indigo-400 font-bold border-b border-white/10 pb-2">AI TOOLING MODEL</span>
                <div className="flex flex-col gap-1.5 text-slate-300">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" /> Brainstorming & Spikes
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" /> Log Trace Debugging
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" /> Rapid Code Experimentation
                  </span>
                </div>
                <span className="text-[10px] text-text-muted pt-2 border-t border-white/10 italic">
                  “I still decide what is worth building.”
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* =====================================================================
            5. DESIGN × CODE CROSSOVER
           ===================================================================== */}
        <ScrollReveal>
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-sky-500/20 bg-slate-950/90 relative overflow-hidden">
            <div className="flex flex-col gap-2 mb-8 text-center max-w-2xl mx-auto">
              <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-widest">
                // THE CREATIVE FEEDBACK LOOP
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                IDEA ↔ DESIGN ↔ CODE
              </h3>
              <p className="text-sm text-text-secondary">
                Process isn't a rigid one-way handoff. Design decisions inform code architecture, and technical capabilities unlock new design possibilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-sky-500/20 flex flex-col gap-3">
                <span className="text-sky-400 font-bold flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" /> 01 // IDEA & PROBLEM
                </span>
                <p className="text-text-muted text-caption leading-relaxed">
                  Establishing what needs to be solved and mapping core feature intent.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-indigo-500/20 flex flex-col gap-3">
                <span className="text-indigo-400 font-bold flex items-center gap-2">
                  <Palette className="w-4 h-4" /> 02 // DESIGN & LAYOUT
                </span>
                <p className="text-text-muted text-caption leading-relaxed">
                  Crafting grid systems, typography scales, and tactile visual feedback.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-emerald-500/20 flex flex-col gap-3">
                <span className="text-emerald-400 font-bold flex items-center gap-2">
                  <Code2 className="w-4 h-4" /> 03 // CODE & EXECUTION
                </span>
                <p className="text-text-muted text-caption leading-relaxed">
                  Building type-safe React components and performant state logic.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* =====================================================================
            6. SECTION ENDING TRANSITION TO SKILLS
           ===================================================================== */}
        <ScrollReveal>
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-sky-500/30 bg-slate-950 text-center flex flex-col items-center justify-center gap-4">
            <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
              // NEXT STEP
            </span>

            <h3 className="text-2xl sm:text-4xl font-display font-black text-white tracking-tight">
              “Ready to explore the tools behind the execution?”
            </h3>

            <button
              onClick={scrollToSkills}
              className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 text-slate-950 font-mono text-xs font-bold hover:bg-sky-400 transition-all duration-300 cursor-pointer shadow-lg shadow-sky-500/20"
            >
              <span>EXPLORE MY TECH STACK</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>

      </Container>
    </section>
  );
};
