import React from 'react';
import { cn } from '../../lib/utils/cn';

export interface ContainerProps {
  children: React.ReactNode;
  size?: 'default' | 'wide' | 'narrow';
  className?: string;
  as?: 'div' | 'section' | 'main' | 'article' | 'header' | 'footer';
  id?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'default',
  className,
  as: Component = 'div',
  id,
}) => {
  const sizeStyles = {
    default: 'max-w-[1320px]',
    wide: 'max-w-[1536px]',
    narrow: 'max-w-[960px]',
  };

  return (
    <Component
      id={id}
      className={cn(
        'w-full mx-auto px-5 sm:px-8 md:px-12 lg:px-16',
        sizeStyles[size],
        className
      )}
    >
      {children}
    </Component>
  );
};
