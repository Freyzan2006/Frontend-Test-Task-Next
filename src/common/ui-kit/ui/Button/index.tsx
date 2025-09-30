"use client";

import React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { buttonVariants } from './variants';



interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void | Promise<void>;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = (
  ({ 
    className, 
    variant, 
    size, 
    loading = false, 
    icon, 
    children, 
    disabled,
    ...props 
  }) => {
    return (
      <button
        type="button"
        className={buttonVariants({ variant, size, className })}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg 
            className="animate-spin h-4 w-4" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        
        {!loading && icon && (
          <span className="flex-shrink-0">{icon}</span>
        )}
        
        <span>{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };