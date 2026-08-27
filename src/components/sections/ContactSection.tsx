import React, { useState } from 'react';
import { Mail, ArrowUpRight, Copy, Check, Sparkles, Code2, Send } from 'lucide-react';
import { siteData } from '../../data/site';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../motion/ScrollReveal';

export const ContactSection: React.FC = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteData.email).then(
      () => {
        setCopiedText('COPIED ✓');
        setTimeout(() => {
          setCopiedText('now go build something.');
        }, 1200);
        setTimeout(() => {
          setCopiedText(null);
        }, 4000);
      },
      () => {
        // Fallback if clipboard fails
        window.location.href = `mailto:${siteData.email}`;
      }
    );
  };

  const contactReasons = [
    {
      number: '01',
      title: 'PROJECT',
      desc: 'Have an application, internal system, or portfolio to build?',
    },
    {
      number: '02',
      title: 'COLLAB',
      desc: 'Want to create interactive web experiments or design systems together?',
    },
    {
      number: '03',
      title: 'TECH',
      desc: 'Want to talk React, TypeScript, 3D WebGL, or AI workflows?',
    },
    {
      number: '04',
      title: 'JUST SAY HI',
      desc: 'No formal agenda needed—always open to connecting with fellow builders.',
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 relative z-10 bg-slate-950/90 overflow-hidden">
      {/* Ambient Atmospheric Radial Gradient */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-t from-sky-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container size="wide" className="flex flex-col gap-20 sm:gap-28">

        {/* =====================================================================
            1. SECTION OPENING & HEADLINE
           ===================================================================== */}
        <ScrollReveal className="flex flex-col items-start gap-4 border-b border-white/10 pb-12">
          <div className="flex items-center gap-3">
            <span className="text-mono text-xs font-semibold px-2.5 py-1 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
              // 06
            </span>
            <span className="text-caption font-mono tracking-widest uppercase text-text-muted">
              CONTACT & ENDING // START A CONVERSATION
            </span>
          </div>

          <h2 className="text-[clamp(2.5rem,5.5vw,4.75rem)] font-display font-black text-white tracking-tighter leading-[0.95] uppercase">
            LET'S MAKE <span className="text-gradient-accent">SOMETHING.</span>
          </h2>

          <p className="text-body-lg sm:text-h4 text-text-secondary max-w-3xl font-normal leading-relaxed">
            “If you have an idea, a project, a collaboration, or just want to talk about building digital systems—I'm listening.”
          </p>
        </ScrollReveal>

        {/* =====================================================================
            2. DOMINANT EMAIL CTA BLOCK
           ===================================================================== */}
        <ScrollReveal>
          <div className="glass-panel p-8 sm:p-14 rounded-3xl border border-sky-500/30 bg-slate-950/90 relative overflow-hidden shadow-2xl flex flex-col gap-8">
            <div className="flex items-center justify-between font-mono text-xs text-text-muted border-b border-white/10 pb-4">
              <span className="text-sky-400 font-bold uppercase tracking-wider flex items-center gap-2">
                <Mail className="w-4 h-4" /> PRIMARY DIRECT INQUIRY
              </span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5 text-[11px] px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {siteData.status}
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-xs font-mono text-text-muted uppercase tracking-widest">DIRECT EMAIL ADDRESS</span>
              <h3 className="text-2xl sm:text-5xl font-mono font-bold text-white tracking-tight break-all">
                {siteData.email}
              </h3>
            </div>

            {/* Action Buttons: Mailto CTA & Copy Email */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
              <a
                href={`mailto:${siteData.email}`}
                className="px-8 py-4 rounded-2xl bg-sky-500 text-slate-950 font-mono text-xs font-bold hover:bg-sky-400 transition-all duration-300 shadow-xl shadow-sky-500/20 flex items-center gap-2 cursor-pointer"
              >
                <span>START A CONVERSATION</span>
                <Send className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-6 py-4 rounded-2xl bg-slate-900 border border-white/10 hover:border-sky-400 text-slate-200 hover:text-white font-mono text-xs font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                {copiedText ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300 font-bold">{copiedText}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-sky-400" />
                    <span>COPY EMAIL ADDRESS</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* =====================================================================
            3. REASONS TO REACH OUT (4 CARDS)
           ===================================================================== */}
        <div className="flex flex-col gap-8">
          <ScrollReveal className="flex flex-col gap-2">
            <span className="text-xs font-mono text-sky-400 uppercase tracking-widest font-semibold">
              // REASONS TO CONNECT
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              WHAT WOULD YOU LIKE TO BUILD?
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactReasons.map((reason) => (
              <ScrollReveal key={reason.number}>
                <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-sky-500/30 transition-all duration-300 h-full flex flex-col justify-between group">
                  <div className="flex flex-col gap-3">
                    <span className="text-xs font-mono text-sky-400 font-bold px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20 w-fit">
                      {reason.number} // {reason.title}
                    </span>
                    <h4 className="text-xl font-display font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                      {reason.title}
                    </h4>
                    <p className="text-caption text-text-secondary leading-relaxed font-normal">
                      {reason.desc}
                    </p>
                  </div>

                  <span className="text-[10px] font-mono text-text-muted mt-6 pt-4 border-t border-white/5 uppercase">
                    REASON {reason.number}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* =====================================================================
            4. VERIFIED SOCIAL LINKS & GITHUB EMPHASIS
           ===================================================================== */}
        <div className="flex flex-col gap-8">
          <ScrollReveal className="flex flex-col gap-2">
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest font-semibold">
              // ONLINE PRESENCE
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              WHERE TO FIND ME
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* GITHUB FEATURED CARD (Primary Developer Emphasis) */}
            <ScrollReveal className="md:col-span-1">
              <a
                href="https://github.com/paes18"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-8 rounded-2xl border border-sky-500/40 bg-slate-900/90 hover:bg-slate-900 transition-all duration-300 h-full flex flex-col justify-between gap-6 group shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-sky-400 font-bold px-2.5 py-0.5 rounded bg-sky-500/10 border border-sky-500/20 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5" /> PRIMARY CODE HUB
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-sky-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-caption font-mono text-text-muted">@paes18</span>
                  <h4 className="text-2xl font-display font-bold text-white group-hover:text-sky-300 transition-colors">
                    GitHub Profile
                  </h4>
                  <p className="text-caption text-text-secondary mt-1">
                    Explore repositories, code experiments, and project source files.
                  </p>
                </div>

                <span className="text-xs font-mono text-sky-400 font-bold flex items-center gap-1">
                  VIEW CODE ON GITHUB →
                </span>
              </a>
            </ScrollReveal>

            {/* INSTAGRAM */}
            <ScrollReveal className="md:col-span-1">
              <a
                href="https://instagram.com/fzz1_8"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-indigo-500/40 transition-all duration-300 h-full flex flex-col justify-between gap-6 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-indigo-400 font-bold px-2.5 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">
                    INSTAGRAM
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-caption font-mono text-text-muted">@fzz1_8</span>
                  <h4 className="text-2xl font-display font-bold text-white group-hover:text-indigo-300 transition-colors">
                    Instagram
                  </h4>
                  <p className="text-caption text-text-secondary mt-1">
                    Personal updates, visual artifacts, and behind-the-scenes moments.
                  </p>
                </div>

                <span className="text-xs font-mono text-indigo-400 font-bold flex items-center gap-1">
                  VISIT PROFILE →
                </span>
              </a>
            </ScrollReveal>

            {/* TIKTOK */}
            <ScrollReveal className="md:col-span-1">
              <a
                href="https://tiktok.com/@silentera919"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 h-full flex flex-col justify-between gap-6 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 font-bold px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                    TIKTOK
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-caption font-mono text-text-muted">@silentera919</span>
                  <h4 className="text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                    TikTok
                  </h4>
                  <p className="text-caption text-text-secondary mt-1">
                    Short video clips, build snippets, and creative experiments.
                  </p>
                </div>

                <span className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-1">
                  VISIT CHANNEL →
                </span>
              </a>
            </ScrollReveal>
          </div>
        </div>

        {/* =====================================================================
            5. PERSONAL SIGNATURE & FINAL BRAND STATEMENT
           ===================================================================== */}
        <ScrollReveal>
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 bg-slate-950/90 text-center flex flex-col items-center justify-center gap-6 relative overflow-hidden">
            <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
              <Sparkles className="w-3.5 h-3.5" /> FAIZ PATIOGI KITTA // PAES18
            </div>

            <h3 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight max-w-2xl leading-snug">
              “Not finished. Just getting started.”
            </h3>

            <div className="font-mono text-xs text-text-muted flex flex-wrap items-center justify-center gap-4 pt-2">
              <span>FAIZ PATIOGI KITTA</span>
              <span>•</span>
              <span>PAES18</span>
              <span>•</span>
              <span>INDONESIA</span>
              <span>•</span>
              <span className="text-emerald-400 font-semibold">STILL BUILDING</span>
            </div>
          </div>
        </ScrollReveal>

        {/* End of Transmission Indicator */}
        <div className="text-center font-mono text-[11px] text-text-muted tracking-widest uppercase py-4">
          [ END OF TRANSMISSION // PAES18 ]
        </div>

      </Container>
    </section>
  );
};
