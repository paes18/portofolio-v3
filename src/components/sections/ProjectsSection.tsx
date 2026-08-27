import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles, Filter, Layers, ChevronRight } from 'lucide-react';
import type { Project } from '../../data/projects';
import { projectsData } from '../../data/projects';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../motion/ScrollReveal';
import { useCursor } from '../../hooks/useCursor';
import { ProjectVisual } from './projects/ProjectVisual';
import { CaseStudyView } from './projects/CaseStudyView';

export const ProjectsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const { bindCursorEvents } = useCursor('project', 'VIEW');

  // Handle direct hash navigation e.g. #work/reception-admin or #projects/reception-admin
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#work/') || hash.startsWith('#projects/')) {
        const slug = hash.split('/')[1];
        const match = projectsData.find((p) => p.slug === slug);
        if (match) {
          setActiveProject(match);
        }
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const openProject = (proj: Project) => {
    setActiveProject(proj);
    window.history.pushState(null, '', `#work/${proj.slug}`);
  };

  const closeProject = () => {
    setActiveProject(null);
    if (window.location.hash.startsWith('#work/') || window.location.hash.startsWith('#projects/')) {
      window.history.pushState(null, '', '#projects');
    }
  };

  // Filtering Logic
  const filteredProjects = projectsData.filter((project) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'featured') return project.featured;
    return project.categorySlug === selectedFilter;
  });

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const secondaryProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 lg:py-32 relative z-10 bg-slate-950/70 overflow-hidden">
      {/* Background Radial Glow */}
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container size="wide" className="flex flex-col gap-16 sm:gap-24">
        {/* =====================================================================
            1. SECTION HEADING & CATEGORY FILTER TABS
           ===================================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
          <ScrollReveal className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <span className="text-mono text-xs font-semibold px-2.5 py-1 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                // 01
              </span>
              <span className="text-caption font-mono tracking-widest uppercase text-text-muted">
                SELECTED WORKS // PROJECT UNIVERSE
              </span>
            </div>

            <h2 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-display font-black text-white tracking-tighter leading-none uppercase">
              SELECTED <span className="text-gradient-accent">WORKS.</span>
            </h2>

            <p className="text-body-lg text-text-secondary max-w-2xl font-normal leading-relaxed">
              “Things I've built while figuring things out.” Real artifacts across web applications, creative technology, and management systems.
            </p>
          </ScrollReveal>

          {/* Category Filter Tabs */}
          <ScrollReveal delay={0.15} className="flex items-center gap-2 flex-wrap font-mono text-xs p-1.5 rounded-2xl bg-slate-900/90 border border-white/10">
            <div className="flex items-center gap-1.5 px-3 py-1 text-text-muted text-[11px] hidden sm:flex">
              <Filter className="w-3.5 h-3.5" />
              <span>FILTER:</span>
            </div>
            {[
              { id: 'all', label: 'ALL (7)' },
              { id: 'featured', label: 'FEATURED (3)' },
              { id: 'system', label: 'SYSTEM' },
              { id: 'creative', label: 'CREATIVE' },
              { id: 'web-app', label: 'WEB APP' },
              { id: 'productivity', label: 'PRODUCTIVITY' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer font-medium text-xs ${
                  selectedFilter === tab.id
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
            2. FEATURED PROJECTS SECTION (ASYMMETRIC COMPOSITIONS)
           ===================================================================== */}
        {featuredProjects.length > 0 && (
          <div className="flex flex-col gap-12 sm:gap-16">
            <div className="flex items-center gap-3 font-mono text-xs text-sky-400 font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span>FEATURED ARTIFACTS // PRIMARY FOCUS</span>
            </div>

            <div className="flex flex-col gap-12 sm:gap-20">
              {featuredProjects.map((project) => {
                // Layout Composition Variations for featured projects
                if (project.id === 'reception-admin') {
                  // COMPOSITION 01: 7/5 Split (Large Left Visual + Right Metadata)
                  return (
                    <ScrollReveal key={project.id}>
                      <div
                        onClick={() => openProject(project)}
                        className="glass-panel rounded-3xl border border-cyan-500/30 bg-slate-950/90 overflow-hidden hover:border-cyan-400 transition-all duration-500 cursor-pointer group shadow-2xl"
                        {...bindCursorEvents()}
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                          {/* Visual Left (7 cols) */}
                          <div className="lg:col-span-7 h-72 sm:h-96 lg:h-full border-b lg:border-b-0 lg:border-r border-white/10">
                            <ProjectVisual project={project} className="h-full" />
                          </div>

                          {/* Details Right (5 cols) */}
                          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between gap-8">
                            <div className="flex flex-col gap-4">
                              <div className="flex items-center justify-between font-mono text-xs">
                                <span className="text-cyan-400 font-bold px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                                  FEATURED 01
                                </span>
                                <span className="text-text-muted">{project.year}</span>
                              </div>

                              <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                                {project.title}
                              </h3>

                              <p className="text-xs font-mono text-cyan-300 font-medium italic">
                                “{project.tagline}”
                              </p>

                              <p className="text-sm text-text-secondary leading-relaxed">
                                {project.description}
                              </p>

                              {/* Tech Stack */}
                              <div className="flex flex-wrap gap-2 pt-2">
                                {project.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-2.5 py-1 rounded bg-slate-900 border border-white/10 text-xs font-mono text-text-secondary"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* CTA Trigger */}
                            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                              <span className="text-caption font-mono text-text-muted uppercase">ROLE: {project.role}</span>
                              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400 group-hover:translate-x-1 transition-transform">
                                <span>VIEW CASE STUDY</span>
                                <ArrowUpRight className="w-4 h-4" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                }

                if (project.id === 'portfolio') {
                  // COMPOSITION 02: Full-Width Hero Container
                  return (
                    <ScrollReveal key={project.id}>
                      <div
                        onClick={() => openProject(project)}
                        className="glass-panel rounded-3xl border border-sky-500/40 bg-gradient-to-br from-slate-950 via-slate-900/90 to-sky-950/40 overflow-hidden hover:border-sky-400 transition-all duration-500 cursor-pointer group shadow-2xl p-6 sm:p-12 relative"
                        {...bindCursorEvents()}
                      >
                        <div className="flex flex-col gap-8">
                          {/* Header Metadata */}
                          <div className="flex items-center justify-between font-mono text-xs">
                            <div className="flex items-center gap-3">
                              <span className="text-sky-400 font-bold px-2.5 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
                                FEATURED 02
                              </span>
                              <span className="text-caption font-mono uppercase text-text-muted">{project.category}</span>
                            </div>
                            <span className="text-sky-400 font-bold">{project.year}</span>
                          </div>

                          {/* Hero Title & Quote */}
                          <div className="flex flex-col gap-4 max-w-3xl">
                            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white tracking-tight group-hover:text-sky-400 transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-body-lg text-sky-200 font-normal leading-relaxed">
                              “{project.tagline}”
                            </p>
                          </div>

                          {/* Visual Showcase Box */}
                          <div className="h-64 sm:h-80 w-full rounded-2xl border border-sky-500/20 overflow-hidden">
                            <ProjectVisual project={project} />
                          </div>

                          {/* Footer Tech Bar & CTA */}
                          <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-300 font-mono text-xs font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>

                            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 text-slate-950 font-mono text-xs font-bold hover:bg-sky-400 transition-colors shadow-lg shadow-sky-500/20 w-fit">
                              <span>EXPLORE PORTFOLIO CASE STUDY</span>
                              <ArrowUpRight className="w-4 h-4" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                }

                if (project.id === 'nexora') {
                  // COMPOSITION 03: 5/7 Reversed Split (Left Typography + Right Visual)
                  return (
                    <ScrollReveal key={project.id}>
                      <div
                        onClick={() => openProject(project)}
                        className="glass-panel rounded-3xl border border-indigo-500/30 bg-slate-950/90 overflow-hidden hover:border-indigo-400 transition-all duration-500 cursor-pointer group shadow-2xl"
                        {...bindCursorEvents()}
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                          {/* Details Left (5 cols) */}
                          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between gap-8 order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-white/10">
                            <div className="flex flex-col gap-4">
                              <div className="flex items-center justify-between font-mono text-xs">
                                <span className="text-indigo-400 font-bold px-2.5 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">
                                  FEATURED 03
                                </span>
                                <span className="text-text-muted">{project.year}</span>
                              </div>

                              <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight group-hover:text-indigo-400 transition-colors">
                                {project.title}
                              </h3>

                              <p className="text-xs font-mono text-indigo-300 font-medium italic">
                                “{project.tagline}”
                              </p>

                              <p className="text-sm text-text-secondary leading-relaxed">
                                {project.description}
                              </p>

                              {/* Tech Stack */}
                              <div className="flex flex-wrap gap-2 pt-2">
                                {project.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-2.5 py-1 rounded bg-slate-900 border border-white/10 text-xs font-mono text-text-secondary"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* CTA Trigger */}
                            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                              <span className="text-caption font-mono text-text-muted uppercase">ROLE: {project.role}</span>
                              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-indigo-400 group-hover:translate-x-1 transition-transform">
                                <span>EXPLORE NEXORA</span>
                                <ArrowUpRight className="w-4 h-4" />
                              </span>
                            </div>
                          </div>

                          {/* Visual Right (7 cols) */}
                          <div className="lg:col-span-7 h-72 sm:h-96 lg:h-full order-1 lg:order-2">
                            <ProjectVisual project={project} className="h-full" />
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                }

                return null;
              })}
            </div>
          </div>
        )}

        {/* =====================================================================
            3. SECONDARY PROJECTS GRID (04–07)
           ===================================================================== */}
        {secondaryProjects.length > 0 && (
          <div className="flex flex-col gap-8 pt-6 border-t border-white/10">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-text-muted font-bold uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-sky-400" />
                SECONDARY ARTIFACTS & EXPERIMENTS ({secondaryProjects.length})
              </span>
              <span className="text-caption text-text-muted">SELECT TO EXPAND</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {secondaryProjects.map((project, idx) => (
                <ScrollReveal key={project.id} delay={idx * 0.1}>
                  <div
                    onClick={() => openProject(project)}
                    className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-sky-500/30 transition-all duration-300 h-full flex flex-col justify-between group cursor-pointer"
                    {...bindCursorEvents()}
                  >
                    <div className="flex flex-col gap-6">
                      {/* Visual Header */}
                      <div className="h-48 w-full rounded-xl border border-white/5 overflow-hidden">
                        <ProjectVisual project={project} />
                      </div>

                      {/* Info & Title */}
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between font-mono text-xs">
                          <span className="text-sky-400 font-semibold px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20 text-[11px]">
                            {project.number} // {project.category}
                          </span>
                          <span className="text-text-muted">{project.year}</span>
                        </div>

                        <h4 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight group-hover:text-sky-400 transition-colors">
                          {project.title}
                        </h4>

                        <p className="text-sm text-text-secondary leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded bg-slate-900 border border-white/5 text-[11px] font-mono text-text-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Trigger */}
                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs">
                      <span className="text-text-muted text-[11px] uppercase">STATUS: {project.status}</span>
                      <span className="inline-flex items-center gap-1 text-sky-400 font-semibold group-hover:translate-x-1 transition-transform">
                        <span>EXPLORE</span>
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

        {/* =====================================================================
            4. PROJECT SECTION ENDING TRANSITION
           ===================================================================== */}
        <ScrollReveal className="pt-8">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-sky-500/20 bg-slate-950/80 text-center flex flex-col items-center justify-center gap-4 relative overflow-hidden">
            <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
              // EXPERIMENTATION CONTINUES
            </span>

            <h3 className="text-2xl sm:text-4xl font-display font-black text-white tracking-tight">
              “THAT'S NOT EVERYTHING.”
            </h3>

            <p className="text-sm sm:text-body text-text-secondary max-w-xl font-normal leading-relaxed">
              Some experiments are still in the lab—being tested, refactored, and iterated until ready for deployment.
            </p>

            <div className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-sky-500/30 text-sky-300 font-mono text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>MORE COMING SOON →</span>
            </div>
          </div>
        </ScrollReveal>
      </Container>

      {/* Full 10-Section Case Study Experience View */}
      <CaseStudyView
        project={activeProject}
        onClose={closeProject}
        onSelectProject={(p) => openProject(p)}
      />
    </section>
  );
};
