import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { revealStaggerVariants } from '../../lib/animations/motion';

export interface RevealStaggerProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  once?: boolean;
  className?: string;
}

export const RevealStagger: React.FC<RevealStaggerProps> = ({
  children,
  staggerDelay = 0.08,
  delayChildren = 0.05,
  once = true,
  className,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={revealStaggerVariants(staggerDelay, delayChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
