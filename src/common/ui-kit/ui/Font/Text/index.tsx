"use client";

import { VariantProps } from "class-variance-authority";
import { textVariants } from "./variants";
import React from "react";


interface TextProps 
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    VariantProps<typeof textVariants> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ 
    className,
    size = 'base',
    weight,
    align,
    variant,
    leading,
    as = 'p',
    children,
    ...props 
  }, ref) => {
    const Comp = as;
    
    return (
      <Comp
        ref={ref as React.Ref<HTMLElement>}
        className={textVariants({ 
          size, 
          weight, 
          align, 
          variant, 
          leading, 
          className 
        })}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Text.displayName = 'Text';

export { Text };
export type { TextProps };