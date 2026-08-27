import React from 'react';
import { Cpu, Terminal, Database, Sun, DollarSign, Activity, Smile, Layers } from 'lucide-react';
import type { Project } from '../../../data/projects';

interface ProjectVisualProps {
  project: Project;
  className?: string;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ project, className = '' }) => {
  // If an image URL is supplied, use it
  if (project.image && project.image.trim() !== '') {
    return (
      <div className={`relative w-full h-full overflow-hidden bg-slate-950 ${className}`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
      </div>
    );
  }

  // Otherwise, render custom, high-fidelity technical placeholder schematic matching project accent & identity
  return (
    <div className={`relative w-full h-full min-h-[220px] bg-slate-950 p-6 flex flex-col justify-between overflow-hidden group/visual select-none ${className}`}>
      {/* Background Matrix Grid Pattern */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:18px_18px] opacity-[0.05] pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Bar Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 relative z-10 text-[11px] font-mono text-text-muted">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          <span className="text-white font-bold tracking-wider">PROJECT Visual // {project.number}</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-slate-900 border border-white/10 text-sky-400 font-mono text-[10px]">
          {project.status.toUpperCase()}
        </span>
      </div>

      {/* Center Schematic Art based on Project ID */}
      <div className="relative z-10 my-auto py-4 flex flex-col items-center justify-center">
        {project.id === 'reception-admin' && (
          <div className="w-full flex flex-col gap-3 font-mono">
            <div className="flex items-center justify-between text-xs text-cyan-400 font-semibold border-b border-cyan-500/20 pb-2">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-4 h-4" /> HOTEL FRONT-DESK ENGINE
              </span>
              <span className="text-[10px] text-text-muted">LIVE SYNC</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-[10px]">
              <div className="p-2 rounded bg-slate-900 border border-cyan-500/30 text-cyan-300">
                <span className="block text-text-muted">ROOM 101</span>
                <span className="font-bold text-emerald-400">CHECKED IN</span>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-white/10 text-slate-300">
                <span className="block text-text-muted">ROOM 102</span>
                <span className="font-bold text-amber-400">CLEANING</span>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-white/10 text-slate-300">
                <span className="block text-text-muted">ROOM 103</span>
                <span className="font-bold text-cyan-400">AVAILABLE</span>
              </div>
            </div>
            <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-white/5">
              <div className="h-full bg-cyan-400 w-3/4 animate-pulse" />
            </div>
          </div>
        )}

        {project.id === 'portfolio' && (
          <div className="w-full flex flex-col items-center gap-3 font-mono">
            <div className="relative p-5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 group-hover/visual:scale-110 transition-transform duration-500">
              <Cpu className="w-10 h-10 animate-spin-slow" />
              <div className="absolute inset-0 rounded-full border border-dashed border-sky-400/40 animate-spin" />
            </div>
            <span className="text-xs text-sky-300 font-bold tracking-widest uppercase">
              GENESIS 3D ARTIFACT
            </span>
          </div>
        )}

        {project.id === 'nexora' && (
          <div className="w-full flex flex-col gap-3 font-mono">
            <div className="flex items-center justify-between text-xs text-indigo-400 font-semibold border-b border-indigo-500/20 pb-2">
              <span className="flex items-center gap-1.5">
                <Database className="w-4 h-4" /> RELATIONAL SCHEMA GRAPH
              </span>
              <span className="text-[10px] text-text-muted">SQL MODEL</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[10px]">
              <div className="p-2 rounded bg-slate-900 border border-indigo-500/30 text-indigo-300">
                <span className="font-bold block">TABLE: USERS</span>
                <span className="text-text-muted">id (PK) • role • auth</span>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-indigo-500/30 text-indigo-300">
                <span className="font-bold block">TABLE: COURSES</span>
                <span className="text-text-muted">id (PK) • dept • credits</span>
              </div>
            </div>
          </div>
        )}

        {project.id === 'weather-app' && (
          <div className="w-full flex flex-col items-center gap-3 font-mono">
            <div className="flex items-center gap-3 text-amber-400">
              <Sun className="w-10 h-10 animate-pulse" />
              <div>
                <span className="text-2xl font-bold font-display text-white">28°C</span>
                <span className="block text-[10px] text-amber-300 uppercase tracking-wider">CLEAR SKY // API LIVE</span>
              </div>
            </div>
            <div className="w-full h-1 bg-gradient-to-r from-amber-500 via-sky-400 to-indigo-500 rounded-full" />
          </div>
        )}

        {project.id === 'money-tracker' && (
          <div className="w-full flex flex-col gap-3 font-mono">
            <div className="flex items-center justify-between text-xs text-emerald-400 font-semibold">
              <span className="flex items-center gap-1.5">
                <DollarSign className="w-4 h-4" /> FINANCIAL LOG
              </span>
              <span className="text-emerald-300 font-bold">+100% BALANCE</span>
            </div>
            <div className="flex items-end gap-1.5 h-12 pt-2 border-b border-emerald-500/20">
              <div className="flex-1 bg-emerald-500/30 h-1/2 rounded-t" />
              <div className="flex-1 bg-emerald-500/60 h-3/4 rounded-t" />
              <div className="flex-1 bg-emerald-400 h-full rounded-t" />
              <div className="flex-1 bg-emerald-500/40 h-2/3 rounded-t" />
            </div>
          </div>
        )}

        {project.id === 'workout-tracker' && (
          <div className="w-full flex flex-col gap-3 font-mono">
            <div className="flex items-center justify-between text-xs text-violet-400 font-semibold">
              <span className="flex items-center gap-1.5">
                <Activity className="w-4 h-4" /> SET & REP TELEMETRY
              </span>
              <span className="text-violet-300">PROGRESSIVE LOG</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[10px]">
              <div className="p-2 rounded bg-slate-900 border border-violet-500/30 text-violet-300">
                <span className="block text-text-muted">SET 01</span>
                <span className="font-bold">12 REPS • 80KG</span>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-violet-500/30 text-violet-300">
                <span className="block text-text-muted">SET 02</span>
                <span className="font-bold">10 REPS • 85KG</span>
              </div>
            </div>
          </div>
        )}

        {project.id === 'daily-moodie' && (
          <div className="w-full flex flex-col items-center gap-3 font-mono">
            <div className="p-4 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400">
              <Smile className="w-8 h-8" />
            </div>
            <span className="text-xs font-bold text-rose-300 tracking-wider">
              DAILY MOOD SPECTRUM // CALM
            </span>
          </div>
        )}

        {!['reception-admin', 'portfolio', 'nexora', 'weather-app', 'money-tracker', 'workout-tracker', 'daily-moodie'].includes(project.id) && (
          <div className="flex flex-col items-center gap-2 font-mono text-xs text-text-muted">
            <Layers className="w-8 h-8 text-sky-400" />
            <span>{project.title}</span>
          </div>
        )}
      </div>

      {/* Bottom Bar Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-white/5 relative z-10 text-[10px] font-mono text-text-muted">
        <span>{project.category}</span>
        <span className="text-sky-400 font-medium">EXPLORE ARTIFACT →</span>
      </div>

      {/* Decorative Corner Marks */}
      <span className="absolute top-2 left-2 text-[9px] font-mono text-white/20">+ 01</span>
      <span className="absolute top-2 right-2 text-[9px] font-mono text-white/20">+ 02</span>
      <span className="absolute bottom-2 left-2 text-[9px] font-mono text-white/20">+ 03</span>
      <span className="absolute bottom-2 right-2 text-[9px] font-mono text-white/20">+ 04</span>
    </div>
  );
};
