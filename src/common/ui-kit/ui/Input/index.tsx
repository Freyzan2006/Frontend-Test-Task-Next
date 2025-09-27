"use client";

import React, { useState, useId } from 'react';
import { type VariantProps } from 'class-variance-authority';
import { inputVariants } from './variants';



interface InputProps 
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: string;
  success?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className,
    variant,
    size,
    label,
    error,
    success,
    icon,
    iconPosition = 'left',
    helperText,
    disabled,
    id,
    value,
    defaultValue,
    ...props 
  }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const generatedId = useId();
    const inputId = id || generatedId;
    
    const finalVariant = error ? 'error' : success ? 'success' : variant;
    const hasValue = Boolean(value || defaultValue);
    const shouldLabelFloat = isFocused || hasValue;

    return (
      <div className="w-full space-y-1">
        <div className="relative">
          {icon && iconPosition === 'left' && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 text-gray-400 dark:text-gray-500">
              {icon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            className={inputVariants({ 
              variant: finalVariant, 
              size, 
              className: `
                ${className}
                ${icon && iconPosition === 'left' ? 'pl-10' : ''}
                ${icon && iconPosition === 'right' ? 'pr-10' : ''}
                ${error ? 'pr-10' : ''}
              `
            })}
            disabled={disabled}
            value={value}
            defaultValue={defaultValue}
            onFocus={(e) => {
              setIsFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              props.onBlur?.(e);
            }}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={helperText || error ? `${inputId}-helper` : undefined}
            {...props}
          />

          {label && (
            <label 
              htmlFor={inputId}
              className={`
                absolute left-4 transition-all duration-200 ease-in-out cursor-text
                pointer-events-none
                ${shouldLabelFloat 
                  ? 'top-2 text-xs text-blue-500 dark:text-blue-400' 
                  : 'top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400'
                }
                ${icon && iconPosition === 'left' ? 'left-10' : ''}
                ${error ? 'text-red-500 dark:text-red-400' : ''}
                ${success ? 'text-green-500 dark:text-green-400' : ''}
                ${isFocused && !error && !success ? 'text-blue-500 dark:text-blue-400' : ''}
                peer-disabled:text-gray-400 peer-disabled:dark:text-gray-600
                peer-disabled:cursor-not-allowed
              `}
            >
              {label}
            </label>
          )}

          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10">
            {error ? (
              <svg 
                className="w-4 h-4 text-red-500 dark:text-red-400" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" 
                  clipRule="evenodd" 
                />
              </svg>
            ) : success ? (
              <svg 
                className="w-4 h-4 text-green-500 dark:text-green-400" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                  clipRule="evenodd" 
                />
              </svg>
            ) : icon && iconPosition === 'right' ? (
              <div className="text-gray-400 dark:text-gray-500">
                {icon}
              </div>
            ) : null}
          </div>
        </div>


        {(helperText || error) && (
          <p 
            id={`${inputId}-helper`}
            className={`
              text-xs px-1
              ${error 
                ? 'text-red-600 dark:text-red-400' 
                : success 
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-gray-500 dark:text-gray-400'
              }
            `}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
