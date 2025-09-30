"use client";

import React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { loadingVariants } from './variants';



interface LoadingProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loadingVariants> {
  className?: string;
  text?: string;
  textPosition?: 'right' | 'left' | 'bottom' | 'top';
  centered?: boolean;
}

const Loading = React.forwardRef<HTMLDivElement, LoadingProps>(
  ({ 
    className,
    variant,
    size,
    speed,
    text,
    textPosition = 'right',
    centered = false,
    ...props 
  }, ref) => {
    
    const spinner = (
      <div
        ref={ref}
        className={loadingVariants({ variant, size, speed, className })}
        {...props}
      />
    );

    if (!text) {
      if (centered) {
        return (
          <div className="flex items-center justify-center w-full h-full">
            {spinner}
          </div>
        );
      }
      return spinner;
    }

    const positions = {
      right: 'flex-row items-center gap-3',
      left: 'flex-row-reverse items-center gap-3',
      bottom: 'flex-col items-center gap-2',
      top: 'flex-col-reverse items-center gap-2'
    };

    const textSizes = {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      xxl: 'text-2xl'
    };

    const containerClass = `inline-flex ${positions[textPosition]} ${centered ? 'justify-center' : ''}`;

    return (
      <div className={containerClass}>
        {spinner}
        <span className={`font-medium text-gray-700 dark:text-gray-300 ${textSizes[size || 'md']}`}>
          {text}
        </span>
      </div>
    );
  }
);

Loading.displayName = 'Loading';






export { Loading };
export type { LoadingProps };
