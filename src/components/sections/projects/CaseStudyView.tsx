import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ShieldCheck, Sparkles, Code2, Layers, Cpu, Compass, CheckCircle2, X, Terminal, HelpCircle } from 'lucide-react';
import type { Project } from '../../../data/projects';
import { projectsData } from '../../../data/projects';
import { ProjectVisual } from './ProjectVisual';

interface CaseStudyViewProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (proj: Project) => void;
}

export const CaseStudyView: React.FC<CaseStudyViewProps> = ({ project, onClose, onSelectProject }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>('intro');

  useEffect(() => {
    if (!project) return;

    const handleScroll = () => {
      const el = document.getElementById('case-study-scroll-container');
      if (!el) return;
      const { scrollTop, scrollHeight, clientHeight } = el;
      const total = scrollHeight - clientHeight;
      const progress = total > 0 ? (scrollTop / total) * 100 : 0;
      setScrollProgress(progress);

      // Section spy
      const sections = ['intro', 'context', 'problem', 'thinking', 'process', 'build', 'challenges', 'lesson'];
      for (const sectionId of sections) {
        const secEl = document.getElementById(`cs-sec-${sectionId}`);
        if (secEl) {
          const rect = secEl.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    const container = document.getElementById('case-study-scroll-container');
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    document.body.style.overflow = 'hidden';

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  // Find previous and next projects
  const currentIndex = projectsData.findIndex((p) => p.id === project.id);
  const prevProject = projectsData[(currentIndex - 1 + projectsData.length) % projectsData.length];
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(`cs-sec-${sectionId}`);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'intro', label: '01. INTRO' },
    { id: 'context', label: '02. CONTEXT' },
    { id: 'problem', label: '03. PROBLEM' },
    { id: 'thinking', label: '04. THINKING' },
    { id: 'process', label: '05. PROCESS' },
    { id: 'build', label: '06. BUILD' },
    { id: 'challenges', label: '07. CHALLENGES' },
    { id: 'lesson', label: '08. LESSON' },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-slate-950 text-slate-100 flex flex-col overflow-hidden"
      >
        {/* Top Reading Progress Bar */}
        <div className="w-full h-1 bg-slate-900 z-50">
          <div
            className="h-full bg-gradient-to-r from-sky-400 via-indigo-400 to-cyan-400 transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Top Sticky Navigation Bar */}
        <header className="w-full py-4 px-6 sm:px-10 bg-slate-950/90 border-b border-white/10 backdrop-blur-md flex items-center justify-between gap-4 z-40">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-white/10 hover:border-sky-400 text-xs font-mono text-text-secondary hover:text-white transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-sky-400" />
            <span>RETURN TO UNIVERSE</span>
          </button>

          <div className="flex items-center gap-3 font-mono text-xs text-text-muted">
            <span className="text-sky-400 font-bold px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
              {project.number} / 07
            </span>
            <span className="hidden sm:inline text-white font-semibold">{project.title}</span>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <span className="text-emerald-400 text-[11px] font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              {project.status.toUpperCase()}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-900 border border-white/10 hover:border-sky-400 text-text-muted hover:text-white transition-colors cursor-pointer"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </header>

        {/* Main Content Area with Side Nav */}
        <div className="flex-1 flex overflow-hidden relative">
          {/* Desktop Sticky Side Navigation */}
          <aside className="hidden lg:flex flex-col justify-between w-64 p-8 border-r border-white/10 bg-slate-950/60 font-mono text-xs flex-shrink-0">
            <div className="flex flex-col gap-6">
              <span className="text-[10px] text-text-muted uppercase tracking-widest block font-semibold">
                // CASE STUDY SECTIONS
              </span>
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left px-3 py-2 rounded-lg transition-all cursor-pointer ${
                      activeSection === item.id
                        ? 'bg-sky-500/10 text-sky-300 border border-sky-500/30 font-bold pl-4'
                        : 'text-text-muted hover:text-white hover:bg-slate-900'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Side Nav Footer */}
            <div className="pt-4 border-t border-white/10 text-[11px] text-text-muted flex flex-col gap-1">
              <span className="text-sky-400 font-bold">FAIZ / PAES 2026</span>
              <span>CASE STUDY ARCHITECTURE</span>
            </div>
          </aside>

          {/* Main Scrollable Case Study Body */}
          <div
            id="case-study-scroll-container"
            className="flex-1 overflow-y-auto px-5 sm:px-10 lg:px-16 py-10 flex flex-col gap-20 sm:gap-28 scroll-smooth"
          >
            <div className="max-w-4xl mx-auto w-full flex flex-col gap-20 sm:gap-28">

              {/* ===============================================================
                  01 — HERO SECTION
                 =============================================================== */}
              <section id="cs-sec-intro" className="flex flex-col gap-8 pt-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-sky-400 font-bold px-2.5 py-1 rounded bg-sky-500/10 border border-sky-500/20">
                    PROJECT {project.number}
                  </span>
                  <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 font-semibold px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 ml-auto">
                    {project.status}
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black text-white tracking-tighter uppercase leading-[0.95]">
                    {project.title}
                  </h1>
                  <p className="text-xl sm:text-2xl text-sky-300 font-display font-bold leading-snug">
                    “{project.tagline}”
                  </p>
                </div>

                {/* Key Metadata Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-900/80 border border-white/10 font-mono text-xs">
                  <div>
                    <span className="text-[10px] text-text-muted uppercase block">ROLE</span>
                    <span className="font-semibold text-white mt-1 block">{project.role}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-text-muted uppercase block">YEAR</span>
                    <span className="font-semibold text-sky-400 mt-1 block">{project.year}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-text-muted uppercase block">TYPE</span>
                    <span className="font-semibold text-indigo-300 mt-1 block">{project.caseStudy.context.type}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-text-muted uppercase block">STATUS</span>
                    <span className="font-semibold text-emerald-400 mt-1 block">{project.status}</span>
                  </div>
                </div>

                {/* Visual Artifact Showcase */}
                <div className="relative rounded-3xl border border-sky-500/30 overflow-hidden h-72 sm:h-96 w-full shadow-2xl group">
                  <ProjectVisual project={project} className="h-full" />
                  {/* Subtle 3D Signature Watermark Accent */}
                  <div className="absolute bottom-4 right-4 px-3 py-1 rounded bg-slate-950/80 border border-sky-500/30 font-mono text-[10px] text-sky-400 backdrop-blur-md">
                    SYS.01 // GENESIS CORE FRAGMENT
                  </div>
                </div>
              </section>

              {/* ===============================================================
                  02 — CONTEXT (WHY I BUILT THIS)
                 =============================================================== */}
              <section id="cs-sec-context" className="flex flex-col gap-6 border-t border-white/10 pt-12">
                <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-bold uppercase tracking-wider">
                  <Compass className="w-4 h-4" />
                  <span>02 // CONTEXT & ORIGIN</span>
                </div>

                <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-white/10 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-sky-500/10 border border-sky-500/20 text-sky-300 font-mono text-xs font-bold">
                      {project.caseStudy.context.type.toUpperCase()} PROJECT
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                    {project.caseStudy.context.title}
                  </h3>
                  <p className="text-body text-text-secondary leading-relaxed font-normal">
                    {project.caseStudy.context.explanation}
                  </p>
                </div>
              </section>

              {/* ===============================================================
                  03 — THE PROBLEM
                 =============================================================== */}
              <section id="cs-sec-problem" className="flex flex-col gap-6 border-t border-white/10 pt-12">
                <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 font-bold uppercase tracking-wider">
                  <HelpCircle className="w-4 h-4" />
                  <span>03 // THE PROBLEM</span>
                </div>

                <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-indigo-500/15 via-slate-900/90 to-slate-950 border border-indigo-500/30 flex flex-col gap-4">
                  <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight leading-snug">
                    {project.caseStudy.problem.headline}
                  </h3>
                  <p className="text-body text-text-secondary leading-relaxed max-w-2xl font-normal">
                    {project.caseStudy.problem.explanation}
                  </p>
                </div>
              </section>

              {/* ===============================================================
                  04 — THE THINKING PIPELINE
                 =============================================================== */}
              <section id="cs-sec-thinking" className="flex flex-col gap-6 border-t border-white/10 pt-12">
                <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-bold uppercase tracking-wider">
                  <Cpu className="w-4 h-4" />
                  <span>04 // THE THINKING PIPELINE</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.caseStudy.thinking.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-slate-900/70 border border-sky-500/20 flex flex-col gap-2 relative overflow-hidden"
                    >
                      <div className="flex items-center justify-between font-mono text-xs">
                        <span className="text-sky-400 font-bold uppercase tracking-wider">
                          STAGE 0{idx + 1} // {step.stage}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-sky-400" />
                      </div>
                      <p className="text-sm font-semibold text-slate-100 font-mono leading-relaxed mt-1">
                        {step.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ===============================================================
                  05 — THE PROCESS
                 =============================================================== */}
              <section id="cs-sec-process" className="flex flex-col gap-6 border-t border-white/10 pt-12">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                  <Layers className="w-4 h-4" />
                  <span>05 // DEVELOPMENT PROCESS</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.caseStudy.process.map((step) => (
                    <div key={step.number} className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 flex flex-col gap-2">
                      <span className="text-xs font-mono text-cyan-400 font-bold">
                        {step.number} // {step.label}
                      </span>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ===============================================================
                  06 — TECHNICAL BUILD & DECISIONS
                 =============================================================== */}
              <section id="cs-sec-build" className="flex flex-col gap-8 border-t border-white/10 pt-12">
                <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-bold uppercase tracking-wider">
                  <Code2 className="w-4 h-4" />
                  <span>06 // TECHNICAL BUILD & ARCHITECTURE</span>
                </div>

                {/* Tech Stack List */}
                <div className="flex flex-col gap-4">
                  <span className="text-xs font-mono text-text-muted uppercase tracking-wider">TECHNOLOGIES USED</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.caseStudy.build.technologies.map((item) => (
                      <div key={item.name} className="p-4 rounded-xl bg-slate-900/80 border border-white/10 font-mono text-xs flex flex-col gap-1">
                        <span className="text-sky-400 font-bold">{item.name}</span>
                        <span className="text-text-muted">{item.roleContext}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Decisions */}
                {project.caseStudy.build.decisions.length > 0 && (
                  <div className="flex flex-col gap-4">
                    <span className="text-xs font-mono text-text-muted uppercase tracking-wider">KEY TECHNICAL DECISIONS</span>
                    <div className="flex flex-col gap-4">
                      {project.caseStudy.build.decisions.map((dec, idx) => (
                        <div key={idx} className="p-6 rounded-2xl bg-slate-900/90 border border-sky-500/30 flex flex-col gap-2">
                          <span className="text-xs font-mono text-sky-400 font-bold">{dec.question}</span>
                          <span className="text-sm font-semibold text-white font-mono">{dec.choice}</span>
                          <p className="text-sm text-text-secondary leading-relaxed font-normal mt-1">
                            {dec.reason}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Architecture Diagram Visualization */}
                {project.caseStudy.architecture?.enabled && (
                  <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-sky-500/20 flex flex-col gap-4">
                    <div className="flex items-center justify-between text-xs font-mono text-sky-400 font-bold border-b border-white/10 pb-3">
                      <span className="flex items-center gap-2">
                        <Terminal className="w-4 h-4" /> {project.caseStudy.architecture.title}
                      </span>
                      <span className="text-[10px] text-text-muted">DATA FLOW SCHEMATIC</span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 font-mono">
                      {project.caseStudy.architecture.nodes.map((node, idx) => (
                        <div key={node.id} className="p-3 rounded-xl bg-slate-900 border border-white/10 text-center flex flex-col items-center justify-center gap-1 relative">
                          <span className="text-[10px] text-sky-400 font-bold">NODE 0{idx + 1}</span>
                          <span className="text-xs font-bold text-white">{node.label}</span>
                          <span className="text-[10px] text-text-muted">{node.role}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>

              {/* ===============================================================
                  07 — CHALLENGES
                 =============================================================== */}
              <section id="cs-sec-challenges" className="flex flex-col gap-6 border-t border-white/10 pt-12">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>07 // REAL ENGINEERING CHALLENGES</span>
                </div>

                <div className="flex flex-col gap-6">
                  {project.caseStudy.challenges.map((ch, idx) => (
                    <div key={idx} className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-amber-500/30 flex flex-col gap-4">
                      <div>
                        <span className="text-xs font-mono text-amber-400 font-bold block mb-1">THE CHALLENGE</span>
                        <p className="text-sm font-mono font-semibold text-white">{ch.problem}</p>
                      </div>
                      <div>
                        <span className="text-xs font-mono text-sky-400 font-bold block mb-1">WHAT I DID</span>
                        <p className="text-sm text-text-secondary leading-relaxed">{ch.solution}</p>
                      </div>
                      <div className="pt-3 border-t border-white/5 flex items-start gap-2 text-xs font-mono text-emerald-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span><strong>WHAT I LEARNED:</strong> {ch.learned}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ===============================================================
                  08 — LESSON & REFLECTION
                 =============================================================== */}
              <section id="cs-sec-lesson" className="flex flex-col gap-6 border-t border-white/10 pt-12">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>08 // LESSON & GROWTH REFLECTION</span>
                </div>

                <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-500/15 via-slate-900/90 to-slate-950 border border-emerald-500/30 flex flex-col gap-4">
                  <p className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight italic">
                    {project.caseStudy.lesson.quote}
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed font-normal">
                    {project.caseStudy.lesson.explanation}
                  </p>
                </div>
              </section>

              {/* ===============================================================
                  09 — NEXT / PREVIOUS PROJECT NAVIGATION
                 =============================================================== */}
              <section className="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                {/* Previous Project Button */}
                <button
                  onClick={() => onSelectProject(prevProject)}
                  className="w-full sm:w-auto p-5 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-sky-400 flex items-center gap-4 text-left group cursor-pointer transition-all"
                >
                  <ArrowLeft className="w-5 h-5 text-sky-400 group-hover:-translate-x-1 transition-transform" />
                  <div>
                    <span className="text-[10px] font-mono text-text-muted block">PREVIOUS PROJECT</span>
                    <span className="text-sm font-display font-bold text-white group-hover:text-sky-300">{prevProject.title}</span>
                  </div>
                </button>

                {/* Next Project Button */}
                <button
                  onClick={() => onSelectProject(nextProject)}
                  className="w-full sm:w-auto p-5 rounded-2xl bg-slate-900/80 border border-sky-500/30 hover:border-sky-400 flex items-center justify-between gap-4 text-right group cursor-pointer transition-all"
                >
                  <div>
                    <span className="text-[10px] font-mono text-sky-400 font-bold block">NEXT PROJECT</span>
                    <span className="text-sm font-display font-bold text-white group-hover:text-sky-300">{nextProject.title}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-sky-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </section>

            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
