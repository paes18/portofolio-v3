import React, { useState, useRef, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Sparkles, Code2, Compass } from 'lucide-react';
import { Button } from '../ui/Button';
import { Container } from '../layout/Container';
import { HeroScene } from '../3d/HeroScene';
import { useCursor } from '../../hooks/useCursor';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [pointer, setPointer] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [is3DHovered, setIs3DHovered] = useState<boolean>(false);
  const shouldReduceMotion = useReducedMotion();
  const { bindCursorEvents } = useCursor('project', 'Genesis Core');

  // Native Scroll-linked transforms (smooth exit transition into next section without scroll-jacking)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const typographyY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const typographyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const sceneY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  // Smooth Pointer Tracking for 3D Reaction
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Normalize coordinates to [-1, 1]
    const normX = (clientX / innerWidth) * 2 - 1;
    const normY = -(clientY / innerHeight) * 2 + 1;
    setPointer({ x: normX, y: normY });
  }, [shouldReduceMotion]);

  const handleMouseLeave = useCallback(() => {
    setPointer({ x: 0, y: 0 });
    setIs3DHovered(false);
  }, []);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden select-none"
    >
      {/* Background Radial Atmosphere behind 3D Object */}
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-br from-sky-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10 my-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* =================================================================
              LEFT / UPPER AREA: IDENTITY & DOMINANT EDITORIAL TYPOGRAPHY
             ================================================================= */}
          <motion.div
            style={shouldReduceMotion ? {} : { y: typographyY, opacity: typographyOpacity }}
            className="lg:col-span-7 flex flex-col items-start gap-6 z-20"
          >
            {/* Top Identity Metadata Label */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-text-secondary">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white font-semibold tracking-wider">FAIZ PATIOGI KITTA</span>
                <span className="text-text-muted">/</span>
                <span className="text-sky-400 font-bold">PAES18</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 font-mono text-[11px] font-bold">
                ⚡ 19 Y.O. // GEN Z CREATIVE DEV
              </span>
            </div>

            {/* Dominant Headline: HEY, I'M FAIZ. */}
            <div className="w-full flex flex-col">
              <span className="text-body-lg sm:text-h3 font-display font-medium text-text-secondary tracking-tight">
                HEY,
              </span>
              <h1 className="text-[clamp(3rem,6vw+1rem,5.5rem)] font-display font-black text-white tracking-tighter leading-[0.95] uppercase">
                <span className="text-text-muted/80 font-light block sm:inline">I'M </span>
                <span className="text-gradient-accent drop-shadow-sm">FAIZ.</span>
              </h1>
            </div>

            {/* Supporting Statement (Concise, Confident) */}
            <p className="text-body-lg sm:text-h4 text-text-secondary max-w-xl font-normal leading-relaxed">
              “I build things that start as an idea and end up working.”
            </p>

            {/* Micro Coordinate / Status Detail */}
            <div className="flex items-center gap-4 text-xs font-mono text-text-muted pt-1">
              <div className="flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-sky-400" />
                <span>08° / 2026</span>
              </div>
              <span className="text-slate-700">•</span>
              <div className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-indigo-400" />
                <span>JAKARTA, ID</span>
              </div>
              <span className="text-slate-700">•</span>
              <span className="text-emerald-400/90 font-medium">● CURRENTLY BUILDING</span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex items-center gap-4 flex-wrap pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={scrollToProjects}
                icon={<Sparkles className="w-4 h-4" />}
              >
                Explore Selected Work
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={scrollToAbout}
                icon={<ArrowDown className="w-4 h-4" />}
              >
                About Faiz
              </Button>
            </div>
          </motion.div>

          {/* =================================================================
              RIGHT / CENTER: SIGNATURE 3D GENESIS CORE ARTIFACT
             ================================================================= */}
          <motion.div
            style={shouldReduceMotion ? {} : { y: sceneY, scale: sceneScale }}
            onMouseEnter={() => setIs3DHovered(true)}
            onMouseLeave={() => setIs3DHovered(false)}
            className="lg:col-span-5 h-[360px] sm:h-[480px] lg:h-[600px] w-full relative flex items-center justify-center cursor-grab active:cursor-grabbing"
            {...bindCursorEvents()}
          >
            {/* Ambient Glass Housing backdrop for depth */}
            <div className="absolute inset-4 sm:inset-6 rounded-3xl bg-slate-900/30 border border-white/5 backdrop-blur-xs pointer-events-none -z-10 shadow-2xl" />

            {/* Signature 3D Scene */}
            <HeroScene
              pointer={pointer}
              scrollProgress={scrollYProgress.get()}
              isHovered={is3DHovered}
            />

            {/* Subtle Overlay State Badge */}
            <div className="absolute bottom-6 right-6 px-2.5 py-1 rounded-md bg-slate-950/80 border border-white/10 text-[10px] font-mono text-sky-400/90 backdrop-blur-md pointer-events-none">
              {is3DHovered ? 'STATE 02 // AWAKE' : 'STATE 01 // DORMANT'}
            </div>
          </motion.div>

        </div>
      </Container>

      {/* =====================================================================
          BOTTOM METADATA BAR & SCROLL EXPLORE INDICATOR
         ===================================================================== */}
      <Container size="wide" className="relative z-10 w-full pt-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5 text-caption font-mono text-text-muted">
          {/* Left Metadata Chips */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center sm:justify-start">
            <span className="hover:text-text-secondary transition-colors">[01] WEB DEVELOPER</span>
            <span className="text-slate-800 hidden sm:inline">/</span>
            <span className="hover:text-text-secondary transition-colors">[02] CREATIVE TECHNOLOGY</span>
            <span className="text-slate-800 hidden sm:inline">/</span>
            <span className="hover:text-text-secondary transition-colors">[03] INDONESIA</span>
          </div>

          {/* Right Scroll Indicator */}
          <button
            onClick={scrollToProjects}
            className="flex items-center gap-2 text-text-secondary hover:text-sky-400 transition-colors cursor-pointer group"
          >
            <span className="tracking-widest uppercase text-xs">SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform duration-200" />
          </button>
        </div>
      </Container>
    </section>
  );
};
