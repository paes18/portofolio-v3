import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteData } from '../../data/site';
import { Button } from '../ui/Button';
import { Container } from './Container';
import { useCursor } from '../../hooks/useCursor';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface NavItem {
  id: string;
  label: string;
  number: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'projects', label: 'WORK', number: '01', href: '#projects' },
  { id: 'about', label: 'ABOUT', number: '02', href: '#about' },
  { id: 'experience', label: 'EXPERIENCE', number: '03', href: '#experience' },
  { id: 'process', label: 'PROCESS', number: '04', href: '#process' },
  { id: 'skills', label: 'SKILLS', number: '05', href: '#skills' },
  { id: 'contact', label: 'CONTACT', number: '06', href: '#contact' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const { bindCursorEvents } = useCursor('link');
  const shouldReduceMotion = useReducedMotion();

  // Real-time active section tracking
  const activeSection = useActiveSection(
    NAV_ITEMS.map((item) => item.id),
    160
  );

  // Monitor scroll for transition from subtle top to floating glass pill
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard accessibility: Close mobile menu on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    },
    [mobileMenuOpen]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update hash without jumping
      window.history.pushState(null, '', href);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out flex justify-center ${
          isScrolled ? 'pt-3 sm:pt-4 px-3 sm:px-6' : 'pt-6 px-4 sm:px-8'
        }`}
      >
        {/* Floating Adaptive Glass Navbar Container */}
        <Container
          size="wide"
          className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled
              ? 'max-w-[1180px] py-2.5 px-4 sm:px-6 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
              : 'py-2 bg-transparent border-transparent'
          }`}
        >
          {/* Brand Identity / Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-3 focus-visible:outline-none"
            {...bindCursorEvents()}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-500 flex items-center justify-center text-slate-950 font-mono font-bold text-xs shadow-sm group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.8)] transition-all duration-300">
              {siteData.name[0]}
            </div>
            <div className="flex items-center gap-1.5 font-display font-semibold text-sm tracking-tight text-white group-hover:text-sky-400 transition-colors">
              <span>{siteData.name}</span>
              <span className="text-text-muted font-normal">/</span>
              <span className="text-sky-400 font-mono text-xs tracking-wider">PAES18</span>
            </div>
          </a>

          {/* Desktop Navigation Links with Active Indicator */}
          <nav
            className="hidden md:flex items-center gap-7 lg:gap-8"
            aria-label="Main Navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-xs font-mono tracking-wider transition-colors duration-200 relative py-1 flex items-center gap-1.5 group focus-visible:outline-none ${
                    isActive ? 'text-white font-semibold' : 'text-text-secondary hover:text-white'
                  }`}
                  {...bindCursorEvents()}
                >
                  {/* Subtle Active Indicator Dot */}
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)] scale-100'
                        : 'bg-transparent scale-0 group-hover:bg-slate-600 group-hover:scale-75'
                    }`}
                  />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Availability Status & Fast Contact CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>AVAILABLE TO BUILD</span>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const el = document.getElementById('contact');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
              className="text-xs font-mono"
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile Navigation Trigger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-surface/80 border border-border-subtle text-text-secondary hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </Container>
      </header>

      {/* =====================================================================
          CINEMATIC MOBILE NAVIGATION DRAWER
         ===================================================================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.25 }}
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-2xl md:hidden flex flex-col justify-between p-6 pt-28"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            {/* Background Ambient Spotlight for Mobile Menu */}
            <div
              className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-sky-500/10 blur-3xl pointer-events-none -z-10"
              aria-hidden="true"
            />

            {/* Staggered Navigation Items */}
            <nav className="flex flex-col gap-2">
              <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase mb-2">
                // NAVIGATION DIRECTORY
              </span>
              {NAV_ITEMS.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ x: -24, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -16, opacity: 0 }}
                    transition={{
                      delay: shouldReduceMotion ? 0 : idx * 0.05,
                      duration: 0.35,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`flex items-center justify-between py-3.5 border-b border-white/5 font-display text-2xl font-bold tracking-tight transition-colors ${
                      isActive ? 'text-sky-400' : 'text-text-primary hover:text-sky-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-text-muted font-normal">
                        {item.number}
                      </span>
                      <span>{item.label}</span>
                    </div>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                    )}
                  </motion.a>
                );
              })}
            </nav>

            {/* Bottom Personal Line & Status */}
            <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between text-xs font-mono text-text-muted">
                <span>PAES18 / 2026</span>
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  AVAILABLE
                </span>
              </div>

              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  setMobileMenuOpen(false);
                  const el = document.getElementById('contact');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                icon={<ArrowUpRight className="w-4 h-4" />}
                className="w-full justify-center"
              >
                Initiate Project
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
