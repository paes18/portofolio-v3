import React from 'react';
import { cn } from '../../lib/utils/cn';

export interface SectionHeadingProps {
  indexNumber: string; // e.g. "01"
  title: string;
  subtitle?: string;
  tagline?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  indexNumber,
  title,
  subtitle,
  tagline,
  align = 'left',
  className,
}) => {
  return (
    <div
      className={cn(
        'mb-12 sm:mb-16',
        align === 'center' ? 'text-center items-center' : 'text-left',
        className
      )}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-mono text-xs font-semibold px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
          // {indexNumber}
        </span>
        {tagline && (
          <span className="text-caption font-mono tracking-wider uppercase text-text-muted">
            {tagline}
          </span>
        )}
      </div>

      <h2 className="text-h2 font-bold text-gradient tracking-tight mb-3">
        {title}
      </h2>

      {subtitle && (
        <p className="text-body-lg text-text-secondary max-w-2xl font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
