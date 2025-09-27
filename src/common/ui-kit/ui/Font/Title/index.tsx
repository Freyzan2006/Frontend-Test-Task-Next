"use client";

import React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { titleVariants } from './variants';



interface TitleProps 
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'color'>,
    VariantProps<typeof titleVariants> {
  children: React.ReactNode;
  className?: string;
}

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
  ({ 
    className,
    level = 'h1',
    weight,
    align,
    gradient,
    gradientVariant = 'primary',
    children,
    ...props 
  }, ref) => {
    const Comp = level || 'h1';
    
    return (
      <Comp
        ref={ref}
        className={titleVariants({ 
          level, 
          weight, 
          align, 
          gradient, 
          gradientVariant: gradient ? gradientVariant : undefined,
          className 
        })}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Title.displayName = 'Title';



export { Title };
export type { TitleProps };