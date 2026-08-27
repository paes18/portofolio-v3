import React from 'react';
import { cn } from '../../lib/utils/cn';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'mono' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className,
}) => {
  const variantStyles = {
    default: 'bg-surface-hover text-text-secondary border-border-subtle',
    accent: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    mono: 'bg-slate-900 text-slate-300 font-mono border-slate-800 text-xs',
    outline: 'bg-transparent text-text-muted border-border-subtle',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-caption font-medium border transition-colors',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
