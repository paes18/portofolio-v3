import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Code2, Sparkles, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import type { Project } from '../../../data/projects';
import { ProjectVisual } from './ProjectVisual';
import { Button } from '../../ui/Button';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  // Listen for ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-slate-950/80 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          {/* Backdrop Click to Close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 cursor-pointer"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel p-6 sm:p-10 rounded-3xl border border-sky-500/30 bg-slate-950/95 shadow-2xl z-10 flex flex-col gap-8 my-auto"
          >
            {/* Header & Close Button */}
            <div className="flex items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-sky-400 font-bold px-2.5 py-1 rounded bg-sky-500/10 border border-sky-500/20">
                  // PROJECT {project.number}
                </span>
                <span className="text-caption font-mono uppercase text-text-muted">
                  {project.category}
                </span>
              </div>

              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-slate-900 border border-white/10 hover:border-sky-400 text-text-muted hover:text-white transition-colors cursor-pointer"
                aria-label="Close Case Study Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Title & Tagline */}
            <div className="flex flex-col gap-3">
              <h2 id="modal-project-title" className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-body-lg text-sky-300 font-normal leading-relaxed">
                “{project.tagline}”
              </p>
            </div>

            {/* Visual Schematic Box */}
            <div className="rounded-2xl border border-white/10 overflow-hidden h-64 sm:h-80 w-full shadow-inner">
              <ProjectVisual project={project} />
            </div>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-900/80 border border-white/5 font-mono text-xs">
              <div>
                <span className="text-[10px] text-text-muted uppercase block">ROLE</span>
                <span className="font-semibold text-white mt-1 block">{project.role}</span>
              </div>
              <div>
                <span className="text-[10px] text-text-muted uppercase block">YEAR</span>
                <span className="font-semibold text-sky-400 mt-1 block">{project.year}</span>
              </div>
              <div>
                <span className="text-[10px] text-text-muted uppercase block">STATUS</span>
                <span className="font-semibold text-emerald-400 mt-1 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {project.status}
                </span>
              </div>
              <div>
                <span className="text-[10px] text-text-muted uppercase block">CATEGORY</span>
                <span className="font-semibold text-indigo-300 mt-1 block truncate">{project.shortTitle}</span>
              </div>
            </div>

            {/* Case Study Details */}
            {project.caseStudy && (
              <div className="flex flex-col gap-6 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-bold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>CASE STUDY ARCHITECTURE</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Overview */}
                  <div className="p-5 rounded-xl bg-slate-900/50 border border-white/5 flex flex-col gap-2">
                    <span className="text-xs font-mono text-sky-400 font-bold">01 // CONTEXT & ORIGIN</span>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {project.caseStudy.context.explanation}
                    </p>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="p-5 rounded-xl bg-slate-900/50 border border-white/5 flex flex-col gap-2">
                    <span className="text-xs font-mono text-indigo-400 font-bold">02 // PROBLEM STATEMENT</span>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {project.caseStudy.problem.explanation}
                    </p>
                  </div>
                </div>

                {/* Process Steps */}
                {project.caseStudy.process && project.caseStudy.process.length > 0 && (
                  <div className="p-5 rounded-xl bg-slate-900/60 border border-sky-500/20 flex flex-col gap-3">
                    <span className="text-xs font-mono text-emerald-400 font-bold">
                      03 // DEVELOPMENT STAGES
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {project.caseStudy.process.map((step) => (
                        <div key={step.number} className="flex items-start gap-2 text-xs font-mono text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span><strong>{step.label}:</strong> {step.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Technologies */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
                TECHNOLOGY STACK
              </span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-300 font-mono text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-white/10 hover:border-white/30 text-xs font-mono text-text-secondary hover:text-white transition-colors"
                  >
                    <Code2 className="w-4 h-4" />
                    <span>SOURCE REPO</span>
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500 text-slate-950 font-bold hover:bg-sky-400 text-xs font-mono transition-colors shadow-lg shadow-sky-500/20"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>LIVE DEMO</span>
                  </a>
                )}
              </div>

              <Button variant="secondary" size="md" onClick={onClose} icon={<ArrowRight className="w-4 h-4" />}>
                CLOSE CASE STUDY
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
