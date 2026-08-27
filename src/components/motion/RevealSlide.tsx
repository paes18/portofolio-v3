import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { EASING, DURATION } from '../../lib/animations/motion';

export interface RevealSlideProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  distance?: number;
  delay?: number;
  once?: boolean;
  className?: string;
}

export const RevealSlide: React.FC<RevealSlideProps> = ({
  children,
  direction = 'left',
  distance = 36,
  delay = 0,
  once = true,
  className,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const offset = direction === 'left' ? -distance : distance;

  return (
    <motion.div
      initial={{ x: offset, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once, margin: '-60px' }}
      transition={{
        duration: DURATION.slow,
        delay,
        ease: EASING.outExpo,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
