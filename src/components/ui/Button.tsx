import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils/cn';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  children,
  className,
  disabled,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      'bg-accent-primary text-slate-950 font-semibold hover:bg-accent-primary-hover shadow-sm border border-transparent',
    secondary:
      'bg-surface-hover text-text-primary hover:bg-surface border border-border-subtle hover:border-border-medium',
    outline:
      'bg-transparent text-text-primary border border-border-medium hover:border-accent-primary hover:text-accent-primary',
    text:
      'bg-transparent text-text-secondary hover:text-text-primary p-0 border-none hover:underline',
  };

  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'text-caption py-1.5 px-3 rounded-md gap-1.5',
    md: 'text-body py-2.5 px-5 rounded-md gap-2',
    lg: 'text-body-lg py-3.5 px-7 rounded-lg gap-2.5',
  };

  const isTextVariant = variant === 'text';

  return (
    <motion.button
      whileHover={shouldReduceMotion || disabled ? {} : { scale: 1.02 }}
      whileTap={shouldReduceMotion || disabled ? {} : { scale: 0.98 }}
      transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'inline-flex items-center justify-center font-medium cursor-pointer transition-colors duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400',
        variantStyles[variant],
        !isTextVariant && sizeStyles[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
    </motion.button>
  );
};
