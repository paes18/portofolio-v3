import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils/cn';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export interface CardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  hoverable?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverable = true,
  className,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={hoverable && !shouldReduceMotion ? { y: -4 } : {}}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'glass-panel p-6 sm:p-8 relative overflow-hidden group',
        hoverable && 'cursor-pointer hover:border-border-active',
        className
      )}
      {...props}
    >
      {/* Subtle hover gradient highlight */}
      {hoverable && (
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
      {children}
    </motion.div>
  );
};
