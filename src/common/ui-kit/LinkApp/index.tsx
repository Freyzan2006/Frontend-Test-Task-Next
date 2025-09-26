"use client";

import React from 'react';
import { type VariantProps } from 'class-variance-authority';

import Link from 'next/link';
import { linkVariants } from './variants';



interface LinkProps 
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  external?: boolean;
  href: string;
}

const LinkApp = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ 
    className,
    variant,
    size,
    underline,
    active,
    icon,
    iconPosition = 'left',
    children,
    external = false,
    href,
    ...props 
  }, ref) => {
    
    const linkClasses = linkVariants({ 
      variant, 
      size, 
      underline,
      active,
      className 
    });

    return (
      <Link
        ref={ref}
        href={href}
        className={linkClasses}
        {...(external && {
          target: "_blank",
          rel: "noopener noreferrer"
        })}
        {...props}
      >
        {/* Левая иконка */}
        {icon && iconPosition === 'left' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
        
        {/* Текст ссылки */}
        <span>{children}</span>
        
        {/* Правая иконка */}
        {icon && iconPosition === 'right' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
        
        {/* Иконка внешней ссылки */}
        {external && (
          <svg 
            className="w-3 h-3 flex-shrink-0" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
            />
          </svg>
        )}
      </Link>
    );
  }
);

LinkApp.displayName = 'Link';

export { LinkApp };
