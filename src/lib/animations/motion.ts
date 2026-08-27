import type { Variants } from 'framer-motion';

/**
 * Standardized Global Motion Tokens & Easing Curves
 */
export const EASING = {
  // Soft, weighted deceleration curve (High-end editorial aesthetic)
  outExpo: [0.16, 1, 0.3, 1] as const,
  inOutCubic: [0.65, 0, 0.35, 1] as const,
  gentleSpring: { type: 'spring', stiffness: 220, damping: 24 },
  snappySpring: { type: 'spring', stiffness: 350, damping: 28 },
};

export const DURATION = {
  fast: 0.18,
  normal: 0.35,
  slow: 0.65,
  relaxed: 0.95,
};

// 1. REVEAL-UP: Weighted upward elevation
export const revealUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASING.outExpo,
    },
  },
};

// 2. REVEAL-SLIDE: Subtle directional lateral slide
export const revealSlideVariants = (direction: 'left' | 'right' = 'left'): Variants => ({
  hidden: {
    opacity: 0,
    x: direction === 'left' ? -36 : 36,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASING.outExpo,
    },
  },
});

// 3. REVEAL-CLIP: Editorial mask clip unveil
export const revealClipVariants: Variants = {
  hidden: {
    clipPath: 'inset(100% 0% 0% 0%)',
    opacity: 0,
  },
  visible: {
    clipPath: 'inset(0% 0% 0% 0%)',
    opacity: 1,
    transition: {
      duration: DURATION.slow,
      ease: EASING.outExpo,
    },
  },
};

// 4. REVEAL-SCALE: Focused focal scale-in
export const revealScaleVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATION.slow,
      ease: EASING.outExpo,
    },
  },
};

// 5. REVEAL-STAGGER: Orchestrated parent-child sequencing
export const revealStaggerVariants = (staggerDelay = 0.08, delayChildren = 0.05): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
});
