import React, { useState } from 'react';
import { ShieldCheck, Calendar, MapPin, Users, Award, Cpu, ArrowRight, Activity, Layers, CheckCircle2, Sparkles } from 'lucide-react';
import { verifiedExperience } from '../../data/experience';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../motion/ScrollReveal';

export const ExperienceSection: React.FC = () => {
  const [activePillar, setActivePillar] = useState<string | null>(null);

  const scrollToProcess = () => {
    const el = document.getElementById('process');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = 'process';
    }
  };

  return (
    <section id="experience" className="py-24 lg:py-32 relative z-10 bg-slate-950 overflow-hidden">
      {/* Ambient Atmospheric Emerald Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container size="wide" className="flex flex-col gap-20 sm:gap-28">

        {/* =====================================================================
            1. SECTION OPENING & HEADLINE
           ===================================================================== */}
        <ScrollReveal className="flex flex-col items-start gap-4 border-b border-white/10 pb-12">
          <div className="flex items-center gap-3">
            <span className="text-mono text-xs font-semibold px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              // 03
            </span>
            <span className="text-caption font-mono tracking-widest uppercase text-text-muted">
              LEADERSHIP & OPERATIONS // BEYOND THE SCREEN
            </span>
          </div>

          <h2 className="text-[clamp(2.5rem,5.5vw,4.75rem)] font-display font-black text-white tracking-tighter leading-[0.95] uppercase">
            NOT JUST CODE. <span className="text-gradient-accent">I LEARNED TO LEAD.</span>
          </h2>

          <p className="text-body-lg sm:text-h4 text-text-secondary max-w-3xl font-normal leading-relaxed">
            “{verifiedExperience.introduction}”
          </p>
        </ScrollReveal>

        {/* =====================================================================
            2. VERIFIED EXPERIENCE TIMELINE CARD
           ===================================================================== */}
        <ScrollReveal>
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-emerald-500/30 bg-slate-950/90 relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left Details (8 cols) */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    VERIFIED RESPONSIBILITY
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-text-muted">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    <span>{verifiedExperience.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-text-muted">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{verifiedExperience.location}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-xs font-mono text-emerald-400 font-semibold tracking-widest uppercase">
                    {verifiedExperience.company}
                  </span>
                  <h3 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
                    {verifiedExperience.role}
                  </h3>
                </div>

                <p className="text-body text-text-secondary leading-relaxed max-w-2xl font-normal">
                  Managing quality control operations and leading people taught Faiz human systems engineering, operational discipline, and real-world problem solving.
                </p>
              </div>

              {/* Right System Node Schematic (4 cols) */}
              <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-900/90 border border-emerald-500/20 font-mono text-xs flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <Activity className="w-4 h-4" /> CORE OPERATIONAL SPECTRUM
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2.5 rounded bg-slate-950 border border-emerald-500/30 text-emerald-300">
                    <span className="block text-text-muted text-[9px]">01</span>
                    <span className="font-bold">QUALITY</span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-950 border border-emerald-500/30 text-emerald-300">
                    <span className="block text-text-muted text-[9px]">02</span>
                    <span className="font-bold">OPERATIONS</span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-950 border border-emerald-500/30 text-emerald-300">
                    <span className="block text-text-muted text-[9px]">03</span>
                    <span className="font-bold">PEOPLE</span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-950 border border-emerald-500/30 text-emerald-300">
                    <span className="block text-text-muted text-[9px]">04</span>
                    <span className="font-bold">DECISIONS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* =====================================================================
            3. VISUAL METAPHOR: REAL WORLD × DIGITAL WORLD
           ===================================================================== */}
        <ScrollReveal>
          <div className="w-full glass-panel p-8 sm:p-12 rounded-3xl border border-sky-500/20 bg-slate-950/90 relative overflow-hidden">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-widest block mb-2">
                // THE DUAL-WORLD METAPHOR
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                DIFFERENT ENVIRONMENTS. SAME MINDSET.
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left World: REAL WORLD (5 cols) */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900/80 border border-emerald-500/30 flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3">
                  <span className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-2">
                    <Users className="w-4 h-4" /> REAL WORLD ENVIRONMENT
                  </span>
                  <span className="text-[10px] font-mono text-text-muted">OPERATIONS</span>
                </div>
                <div className="flex flex-col gap-2 font-mono text-xs">
                  {['PEOPLE // Leading team operations', 'QUALITY // Rigorous standards & checks', 'LOGISTICS // Process workflow timing', 'DECISIONS // Real-time problem solving'].map((item) => (
                    <div key={item} className="p-2.5 rounded bg-slate-950/70 border border-white/5 text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Center Connector (2 cols) */}
              <div className="lg:col-span-2 flex flex-col items-center justify-center gap-2 py-4">
                <div className="p-3 rounded-full bg-slate-900 border border-sky-500/40 text-sky-400 animate-pulse">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono text-sky-300 font-bold text-center uppercase tracking-wider">
                  SHARED CORE:
                  <br />
                  SYSTEM THINKING
                </span>
              </div>

              {/* Right World: DIGITAL WORLD (5 cols) */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900/80 border border-sky-500/30 flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-sky-500/20 pb-3">
                  <span className="text-xs font-mono text-sky-400 font-bold flex items-center gap-2">
                    <Layers className="w-4 h-4" /> DIGITAL WORLD ENVIRONMENT
                  </span>
                  <span className="text-[10px] font-mono text-text-muted">SOFTWARE</span>
                </div>
                <div className="flex flex-col gap-2 font-mono text-xs">
                  {['LOGIC // Type-safe code architecture', 'SYSTEMS // Component state & data flows', 'INTERFACES // Editorial UX & visual craft', 'DEBUGGING // Root-cause problem solving'].map((item) => (
                    <div key={item} className="p-2.5 rounded bg-slate-950/70 border border-white/5 text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Authentic Team Photo Artifact Banner */}
            <div className="mt-10 relative rounded-2xl border border-emerald-500/30 bg-slate-950/80 overflow-hidden h-72 sm:h-96 group/team shadow-2xl">
              <img
                src="/team.jpg"
                alt="Faiz and Team - CV. Multazam / Gilo Water Operational Team"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover/team:scale-105"
                loading="lazy"
              />

              {/* Dark Gradient Atmosphere Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-85 group-hover/team:opacity-70 transition-opacity duration-300" />

              {/* Matrix Grid Lines */}
              <div
                className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:18px_18px] opacity-[0.06] pointer-events-none"
                aria-hidden="true"
              />

              {/* Bottom Metadata Bar */}
              <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-slate-950/90 backdrop-blur-md border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <div className="flex flex-col">
                    <span className="text-white font-bold tracking-wider">OPERATIONAL TEAM & LEADERSHIP ARTIFACT</span>
                    <span className="text-text-muted text-[11px]">CV. Multazam / Gilo Water (2024–2026)</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-wrap text-[11px]">
                  <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold">
                    PEOPLE & QUALITY
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-sky-500/10 border border-sky-500/20 text-sky-300 font-semibold">
                    REAL WORLD EXPERIENCE
                  </span>
                </div>
              </div>

              {/* HUD Accents */}
              <span className="absolute top-3 left-3 text-[10px] font-mono text-emerald-400/80 px-2 py-0.5 bg-slate-950/70 rounded backdrop-blur-xs">
                + TEAM // 01
              </span>
              <span className="absolute top-3 right-3 text-[10px] font-mono text-emerald-400/80 px-2 py-0.5 bg-slate-950/70 rounded backdrop-blur-xs">
                + RESPONSIBILITY
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* =====================================================================
            4. FOUR RESPONSIBILITY PILLARS
           ===================================================================== */}
        <div className="flex flex-col gap-8">
          <ScrollReveal className="flex flex-col gap-2">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">
              // FOUR RESPONSIBILITY PILLARS
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              HOW RESPONSIBILITY WAS HANDLED
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {verifiedExperience.pillars.map((pillar) => {
              const isHovered = activePillar === pillar.id;
              return (
                <ScrollReveal key={pillar.id}>
                  <div
                    onMouseEnter={() => setActivePillar(pillar.id)}
                    onMouseLeave={() => setActivePillar(null)}
                    className={`glass-panel p-6 sm:p-8 rounded-2xl border transition-all duration-300 h-full flex flex-col justify-between cursor-default group ${
                      isHovered
                        ? 'border-emerald-400 bg-slate-900 shadow-xl shadow-emerald-500/10 scale-[1.02]'
                        : 'border-white/10 bg-slate-950/80 hover:border-emerald-500/30'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono text-emerald-400 font-bold px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                          {pillar.number}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-emerald-400 transition-colors" />
                      </div>

                      <h4 className="text-xl font-display font-bold text-white tracking-tight mb-3">
                        {pillar.title}
                      </h4>

                      <p className="text-sm text-text-secondary leading-relaxed font-normal">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/5 text-[10px] font-mono text-text-muted uppercase">
                      PILLAR {pillar.number} // CV. MULTAZAM
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* =====================================================================
            5. LEADERSHIP PHILOSOPHY BLOCK
           ===================================================================== */}
        <ScrollReveal>
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-emerald-500/15 via-slate-950 to-slate-900 border border-emerald-500/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 text-emerald-500/10 pointer-events-none">
              <Award className="w-32 h-32" />
            </div>

            <div className="flex flex-col gap-4 relative z-10 max-w-3xl">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest">
                // LEADERSHIP PHILOSOPHY
              </span>
              <p className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight leading-snug">
                “{verifiedExperience.philosophy}”
              </p>
              <p className="text-sm text-text-muted font-mono mt-2">
                Leadership = Responsibility + Communication + Direction.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* =====================================================================
            6. LEADERSHIP × DEVELOPMENT CROSSOVER
           ===================================================================== */}
        <ScrollReveal>
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-sky-500/20 bg-slate-950/90 relative overflow-hidden">
            <div className="flex flex-col gap-2 mb-8">
              <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-widest">
                // CROSSOVER MATRIX
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                LEADERSHIP × DEVELOPMENT
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Leading a Team */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-emerald-500/20 flex flex-col gap-4">
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-2">
                  <Users className="w-4 h-4" /> LEADING A TEAM
                </span>
                <div className="flex flex-col gap-2 font-mono text-xs">
                  {verifiedExperience.crossover.leadership.map((step, i) => (
                    <div key={step} className="flex items-center gap-2 text-slate-200">
                      <span className="text-emerald-400 font-bold">0{i + 1}.</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Building Software */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-sky-500/20 flex flex-col gap-4">
                <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-wider flex items-center gap-2">
                  <Cpu className="w-4 h-4" /> BUILDING SOFTWARE
                </span>
                <div className="flex flex-col gap-2 font-mono text-xs">
                  {verifiedExperience.crossover.development.map((step, i) => (
                    <div key={step} className="flex items-center gap-2 text-slate-200">
                      <span className="text-sky-400 font-bold">0{i + 1}.</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Shared Core Banner */}
            <div className="mt-8 p-4 rounded-xl bg-slate-900 border border-white/10 text-center font-mono text-xs text-sky-300 font-bold tracking-widest uppercase flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span>SHARED CORE: {verifiedExperience.crossover.sharedCore}</span>
            </div>
          </div>
        </ScrollReveal>

        {/* =====================================================================
            7. "BEFORE / NOW / NEXT" EVOLUTION
           ===================================================================== */}
        <div className="flex flex-col gap-8">
          <ScrollReveal className="flex flex-col gap-2">
            <span className="text-xs font-mono text-sky-400 uppercase tracking-widest font-semibold">
              // CAREER TRAJECTORY
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              EVOLUTION OF RESPONSIBILITY
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* BEFORE */}
            <ScrollReveal delay={0.1}>
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 bg-slate-950/80 h-full flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-text-muted font-bold block mb-3">
                    {verifiedExperience.evolution.before.title}
                  </span>
                  <div className="flex flex-col gap-2 font-mono text-xs">
                    {verifiedExperience.evolution.before.items.map((item) => (
                      <span key={item} className="text-slate-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-[10px] font-mono text-text-muted mt-6 pt-4 border-t border-white/5 uppercase">
                  FOUNDATION
                </span>
              </div>
            </ScrollReveal>

            {/* NOW */}
            <ScrollReveal delay={0.2}>
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-sky-500/40 bg-slate-900/90 h-full flex flex-col justify-between shadow-xl">
                <div>
                  <span className="text-xs font-mono text-sky-400 font-bold block mb-3">
                    {verifiedExperience.evolution.now.title}
                  </span>
                  <div className="flex flex-col gap-2 font-mono text-xs">
                    {verifiedExperience.evolution.now.items.map((item) => (
                      <span key={item} className="text-white font-semibold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-[10px] font-mono text-sky-400 mt-6 pt-4 border-t border-white/5 uppercase font-bold">
                  ACTIVE FOCUS
                </span>
              </div>
            </ScrollReveal>

            {/* NEXT */}
            <ScrollReveal delay={0.3}>
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-indigo-500/30 bg-slate-950/80 h-full flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-indigo-400 font-bold block mb-3">
                    {verifiedExperience.evolution.next.title}
                  </span>
                  <div className="flex flex-col gap-2 font-mono text-xs">
                    {verifiedExperience.evolution.next.items.map((item) => (
                      <span key={item} className="text-slate-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-[10px] font-mono text-text-muted mt-6 pt-4 border-t border-white/5 uppercase">
                  TRAJECTORY
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* =====================================================================
            8. LEARNED OUTSIDE THE BROWSER (TRANSFERABLE SKILLS)
           ===================================================================== */}
        <div className="flex flex-col gap-8">
          <ScrollReveal className="flex flex-col gap-2">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">
              // TRANSFERABLE CAPABILITIES
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              LEARNED OUTSIDE THE BROWSER
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {verifiedExperience.transferableSkills.map((skill) => (
              <ScrollReveal key={skill.id}>
                <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-emerald-500/30 transition-colors h-full flex flex-col justify-between gap-3">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-emerald-400 font-bold">{skill.number}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <h4 className="text-base font-display font-bold text-white font-mono">
                    {skill.title}
                  </h4>
                  <p className="text-caption text-text-muted leading-relaxed font-normal">
                    {skill.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* =====================================================================
            9. SECTION ENDING TRANSITION TO PROCESS
           ===================================================================== */}
        <ScrollReveal>
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-emerald-500/30 bg-slate-950 text-center flex flex-col items-center justify-center gap-4">
            <h3 className="text-2xl sm:text-4xl font-display font-black text-white tracking-tight">
              “Turns out, leading people and building systems have more in common than I expected.”
            </h3>

            <button
              onClick={scrollToProcess}
              className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-mono text-xs font-bold hover:bg-emerald-400 transition-all duration-300 cursor-pointer shadow-lg shadow-emerald-500/20"
            >
              <span>SEE HOW I BUILD</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>

      </Container>
    </section>
  );
};
