import React from 'react';
import { ArrowLeft, Compass } from 'lucide-react';
import { Container } from '../layout/Container';

export const NotFoundVoid: React.FC = () => {
  const handleBack = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center relative overflow-hidden p-6">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="narrow" className="text-center relative z-10 flex flex-col items-center justify-center gap-6">
        <div className="p-4 rounded-full bg-slate-900 border border-sky-500/30 text-sky-400 animate-pulse">
          <Compass className="w-10 h-10" />
        </div>

        <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
          // ERROR 404 // ROUTE OUT OF BOUNDS
        </span>

        <h1 className="text-4xl sm:text-6xl font-display font-black text-white tracking-tight">
          YOU FOUND THE VOID.
        </h1>

        <p className="text-body-lg text-text-secondary max-w-md">
          This page doesn't exist in the current build. The rest of the FAIZ / PAES portfolio is fully active.
        </p>

        <button
          onClick={handleBack}
          className="mt-4 px-6 py-3 rounded-xl bg-sky-500 text-slate-950 font-mono text-xs font-bold hover:bg-sky-400 transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-sky-500/20"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO PAES UNIVERSE</span>
        </button>

        <div className="mt-8 pt-6 border-t border-white/5 font-mono text-caption text-text-muted">
          [ FAIZ PATIOGI KITTA // PAES18 ]
        </div>
      </Container>
    </div>
  );
};
