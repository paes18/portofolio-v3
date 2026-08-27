import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { EASING, DURATION } from '../../lib/animations/motion';

export interface RevealClipProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  once?: boolean;
  className?: string;
}

export const RevealClip: React.FC<RevealClipProps> = ({
  children,
  delay = 0,
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
      initial={{ clipPath: 'inset(100% 0% 0% 0%)', opacity: 0 }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
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
