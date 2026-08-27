import React, { useState } from 'react';
import { Sparkles, Cpu, Filter, ArrowRight } from 'lucide-react';
import type { TechnologyItem } from '../../data/skills';
import { techUniverseData, currentlyLearningData } from '../../data/skills';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../motion/ScrollReveal';
import { TechConstellation } from './skills/TechConstellation';
import { TechDetailPanel } from './skills/TechDetailPanel';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTech, setSelectedTech] = useState<TechnologyItem | null>(techUniverseData[3]); // Default React
  const [hoveredTechId, setHoveredTechId] = useState<string | null>(null);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = 'contact';
    }
  };

  // Filtered Tech List
  const filteredTechs = techUniverseData.filter((tech) => {
    if (selectedCategory === 'all') return true;
    return tech.category === selectedCategory;
  });

  const activeInspectedTech = techUniverseData.find((t) => t.id === hoveredTechId) || selectedTech;

  return (
    <section id="skills" className="py-24 lg:py-32 relative z-10 bg-slate-950/80 overflow-hidden">
      {/* Ambient Atmospheric Radial Glow */}
      <div
        className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-0 w-[550px] h-[550px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container size="wide" className="flex flex-col gap-20 sm:gap-28">

        {/* =====================================================================
            1. SECTION OPENING & HEADLINE
           ===================================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
          <ScrollReveal className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <span className="text-mono text-xs font-semibold px-2.5 py-1 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                // 05
              </span>
              <span className="text-caption font-mono tracking-widest uppercase text-text-muted">
                TECHNICAL UNIVERSE // THE TOOLS I SPEAK
              </span>
            </div>

            <h2 className="text-[clamp(2.5rem,5.5vw,4.75rem)] font-display font-black text-white tracking-tighter leading-[0.95] uppercase">
              THE TOOLS <span className="text-gradient-accent">I SPEAK.</span>
            </h2>

            <p className="text-body-lg text-text-secondary max-w-2xl font-normal leading-relaxed">
              An evidence-based overview of core web engineering, backend systems, creative WebGL graphics, and active learning growth. No arbitrary percentage bars.
            </p>
          </ScrollReveal>

          {/* Filter Category Tabs */}
          <ScrollReveal delay={0.15} className="flex items-center gap-2 flex-wrap font-mono text-xs p-1.5 rounded-2xl bg-slate-900/90 border border-white/10">
            <div className="flex items-center gap-1.5 px-3 py-1 text-text-muted text-[11px] hidden sm:flex">
              <Filter className="w-3.5 h-3.5" />
              <span>STACK:</span>
            </div>
            {[
              { id: 'all', label: 'ALL (16)' },
              { id: 'core', label: 'CORE WEB' },
              { id: 'backend', label: 'BACKEND / DATA' },
              { id: 'creative', label: 'CREATIVE TECH' },
              { id: 'tools', label: 'TOOLS' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer font-medium text-xs ${
                  selectedCategory === tab.id
                    ? 'bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/20'
                    : 'text-text-muted hover:text-white hover:bg-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </ScrollReveal>
        </div>

        {/* =====================================================================
            2. CREATIVE TECHNOLOGY FEATURE MOMENT (WHERE CODE GETS VISUAL)
           ===================================================================== */}
        <ScrollReveal>
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-sky-500/30 bg-gradient-to-br from-slate-950 via-slate-900/90 to-sky-950/40 relative overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 flex flex-col gap-4">
                <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-widest flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> CREATIVE TECHNOLOGY FEATURE
                </span>

                <h3 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
                  WHERE CODE GETS VISUAL.
                </h3>

                <p className="text-body text-text-secondary leading-relaxed font-normal">
                  I enjoy the space where code, 3D WebGL scenes, GLSL custom shaders, and motion physics click together into interactive digital artifacts.
                </p>

                <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
                  {['Three.js', 'WebGL', 'GLSL Shaders', 'GSAP Motion', 'Web Audio API', 'MediaPipe'].map((ct) => (
                    <span key={ct} className="px-3 py-1 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-300 font-semibold">
                      ✨ {ct}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900/90 border border-sky-500/20 font-mono text-xs flex flex-col items-center justify-center text-center gap-3 min-h-[180px]">
                <div className="p-4 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400">
                  <Cpu className="w-8 h-8 animate-spin-slow" />
                </div>
                <span className="text-sm font-bold text-white uppercase tracking-wider">
                  CODE × VISUALS × INTERACTION
                </span>
                <span className="text-[10px] text-text-muted">
                  FAIZ / PAES CREATIVE MATRIX
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* =====================================================================
            3. INTERACTIVE TECH CONSTELLATION & DETAIL PANEL
           ===================================================================== */}
        <div className="flex flex-col gap-8">
          <ScrollReveal>
            <TechConstellation
              technologies={filteredTechs}
              selectedTechId={selectedTech ? selectedTech.id : null}
              hoveredTechId={hoveredTechId}
              onSelectTech={(tech) => setSelectedTech(tech)}
              onHoverTech={(id) => setHoveredTechId(id)}
            />
          </ScrollReveal>

          {/* Inline Technology Detail Inspector Panel */}
          <ScrollReveal>
            <TechDetailPanel tech={activeInspectedTech} />
          </ScrollReveal>
        </div>

        {/* =====================================================================
            4. AI AS A TOOL POSITIONING
           ===================================================================== */}
        <ScrollReveal>
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-indigo-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> AI TOOLING POSITIONING
              </span>
              <p className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                “AI helps me explore faster. It doesn't decide what is worth building.”
              </p>
            </div>

            <span className="px-4 py-2 rounded-xl bg-slate-950 border border-white/10 text-text-muted font-mono text-xs flex-shrink-0">
              FAIZ // HUMAN ARCHITECT
            </span>
          </div>
        </ScrollReveal>

        {/* =====================================================================
            5. CURRENTLY LEARNING & WHAT'S NEXT (ACTIVE GROWTH)
           ===================================================================== */}
        <div className="flex flex-col gap-8">
          <ScrollReveal className="flex flex-col gap-2">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">
              // ACTIVE GROWTH TRAJECTORY
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              WHAT I'M CURRENTLY DEEPENING & WHAT'S NEXT
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentlyLearningData.map((item, idx) => (
              <ScrollReveal key={item.title} delay={idx * 0.1}>
                <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all duration-300 h-full flex flex-col justify-between group">
                  <div className="flex flex-col gap-3">
                    <span className="text-xs font-mono text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 w-fit">
                      0{idx + 1} // ACTIVE GROWTH
                    </span>
                    <h4 className="text-lg font-display font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-caption text-text-secondary leading-relaxed font-normal">
                      {item.details}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-text-muted">
                    <span>NEXT FOCUS</span>
                    <span className="text-emerald-400 font-bold">DEEPENING →</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* =====================================================================
            6. SECTION ENDING TRANSITION TO CONTACT
           ===================================================================== */}
        <ScrollReveal>
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-sky-500/30 bg-slate-950 text-center flex flex-col items-center justify-center gap-4">
            <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
              // READY FOR COLLABORATION
            </span>

            <h3 className="text-2xl sm:text-4xl font-display font-black text-white tracking-tight">
              “Need a young developer who builds, experiments, and learns fast?”
            </h3>

            <button
              onClick={scrollToContact}
              className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 text-slate-950 font-mono text-xs font-bold hover:bg-sky-400 transition-all duration-300 cursor-pointer shadow-lg shadow-sky-500/20"
            >
              <span>GET IN TOUCH WITH FAIZ</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>

      </Container>
    </section>
  );
};
