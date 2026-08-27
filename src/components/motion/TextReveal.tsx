import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { EASING, DURATION } from '../../lib/animations/motion';

export interface TextRevealProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  delay?: number;
  className?: string;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  as: Component = 'h1',
  delay = 0,
  className,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(' ');

  if (shouldReduceMotion) {
    return <Component className={className}>{text}</Component>;
  }

  return (
    <Component className={`inline-flex flex-wrap gap-x-[0.25em] ${className || ''}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.05em]">
          <motion.span
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              duration: DURATION.slow,
              delay: delay + i * 0.05,
              ease: EASING.outExpo,
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
};
