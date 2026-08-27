import React from 'react';
import { ArrowRight, Sparkles, Terminal, Compass, Flame } from 'lucide-react';
import { siteData } from '../../data/site';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../motion/ScrollReveal';
import { IdentityCard } from './about/IdentityCard';
import { DualitySection } from './about/DualitySection';
import { CurrentlyFeed } from './about/CurrentlyFeed';
import { HobbyGallery } from './about/HobbyGallery';
import { PhilosophyLoop } from './about/PhilosophyLoop';
import { LeadershipTeaser } from './about/LeadershipTeaser';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 relative z-10 bg-slate-950 overflow-hidden"
    >
      {/* Ambient Subtle Atmospheric Glow */}
      <div
        className="absolute top-1/3 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container size="wide" className="flex flex-col gap-20 sm:gap-28">
        
        {/* ===================================================================
            1. SECTION OPENING & GIANT HEADLINE
           =================================================================== */}
        <ScrollReveal className="flex flex-col items-start gap-4 border-b border-white/10 pb-12">
          {/* Section Index Tag */}
          <div className="flex items-center gap-3">
            <span className="text-mono text-xs font-semibold px-2.5 py-1 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
              // 02
            </span>
            <span className="text-caption font-mono tracking-widest uppercase text-text-muted">
              ABOUT // WHO TF IS PAES?
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-[clamp(2.75rem,6vw,5.5rem)] font-display font-black text-white tracking-tighter leading-[0.95] uppercase">
            SO... <span className="text-gradient-accent">WHO TF IS PAES?</span>
          </h2>

          <p className="text-body-lg sm:text-h4 text-text-secondary max-w-3xl font-normal leading-relaxed">
            The person behind the screen—turning raw ideas into working digital realities.
          </p>
        </ScrollReveal>

        {/* ===================================================================
            2. PERSONAL INTRODUCTION & CORE STATEMENT + IDENTITY METADATA BADGE
           =================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: First-Person Bio & Dominant Core Statement (7 cols) */}
          <ScrollReveal className="lg:col-span-7 flex flex-col gap-8">
            {/* First-Person Bio Paragraph */}
            <div className="flex flex-col gap-5 text-body-lg text-text-secondary leading-relaxed">
              <p>
                Gue <span className="text-white font-semibold">Faiz</span> (known online as <span className="text-sky-400 font-mono font-semibold">PAES</span>). A 19-year-old developer based in Indonesia who loves taking raw ideas and turning them into real, interactive digital products.
              </p>
              <p className="text-base text-text-muted">
                I enjoy <span className="text-slate-200 font-medium">coding, technology, visual design, AI experimentation, building projects,</span> and <span className="text-slate-200 font-medium">solving complex problems</span>. For me, nothing beats that exact moment when an idea evolves into a working prototype, and finally becomes a product people actually use.
              </p>
            </div>

            {/* Idea Evolution Micro-Flow */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 font-mono text-xs text-text-muted flex items-center justify-between gap-2 overflow-x-auto">
              <span className="text-sky-400 font-semibold flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" /> AN IDEA
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-text-muted flex-shrink-0" />
              <span className="text-indigo-400 font-semibold flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" /> PROTOTYPE
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-text-muted flex-shrink-0" />
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5" /> WORKING PRODUCT
              </span>
            </div>

            {/* Core Personal Statement Card (Visually Dominant) */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-sky-500/15 via-slate-900/90 to-indigo-500/10 border border-sky-500/30 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 text-sky-500/10 group-hover:text-sky-500/20 transition-colors pointer-events-none">
                <Sparkles className="w-24 h-24" />
              </div>

              <span className="text-[10px] font-mono text-sky-400 uppercase tracking-widest block mb-3 font-semibold">
                // CORE STATEMENT
              </span>

              <p className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight leading-snug">
                “{siteData.coreStatement}”
              </p>

              <p className="text-xs font-mono text-sky-300/80 mt-3 pt-3 border-t border-sky-500/20 italic">
                “{siteData.coreStatementEn}”
              </p>
            </div>
          </ScrollReveal>

          {/* Right Column: Identity Card (5 cols) */}
          <ScrollReveal delay={0.2} className="lg:col-span-5 w-full">
            <IdentityCard />
          </ScrollReveal>
        </div>

        {/* ===================================================================
            3. THREE CORE TRAITS
           =================================================================== */}
        <div className="flex flex-col gap-8">
          <ScrollReveal className="flex flex-col gap-2">
            <span className="text-xs font-mono text-sky-400 uppercase tracking-widest font-semibold">
              // DISCIPLINE & CHARACTER
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              THREE CORE TRAITS
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteData.traits.map((trait, i) => (
              <ScrollReveal key={trait.id} delay={i * 0.15}>
                <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-sky-500/30 transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-mono text-sky-400 font-bold px-2.5 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
                        {trait.id}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-sky-400 transition-colors" />
                    </div>

                    <h4 className="text-xl font-display font-bold text-white tracking-tight mb-3">
                      {trait.title}
                    </h4>

                    <p className="text-sm text-text-secondary leading-relaxed font-normal">
                      {trait.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-text-muted uppercase tracking-wider">
                    FAIZ // TRAIT {trait.id}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* ===================================================================
            4. TECHNICAL + CREATIVE DUALITY (CODE × CREATIVE)
           =================================================================== */}
        <ScrollReveal>
          <DualitySection />
        </ScrollReveal>

        {/* ===================================================================
            5. "CURRENTLY" LIVE STATUS SYSTEM & PERSONAL DETAILS
           =================================================================== */}
        <ScrollReveal>
          <CurrentlyFeed />
        </ScrollReveal>

        {/* ===================================================================
            5B. HOBBIES & OUTDOOR DISCIPLINE GALLERY
           =================================================================== */}
        <ScrollReveal>
          <HobbyGallery />
        </ScrollReveal>

        {/* ===================================================================
            6. PERSONAL PHILOSOPHY LOOP
           =================================================================== */}
        <ScrollReveal>
          <PhilosophyLoop />
        </ScrollReveal>

        {/* ===================================================================
            7. LEADERSHIP TEASER
           =================================================================== */}
        <ScrollReveal>
          <LeadershipTeaser />
        </ScrollReveal>

      </Container>
    </section>
  );
};
