"use client";

import React from 'react';
import { LinkApp } from '@ui-kit/ui/LinkApp';
import { HeaderNavItem } from '@core/config/links';



interface HeaderNavProps {
  items: HeaderNavItem[];
  className?: string;
}

const HeaderNav: React.FC<HeaderNavProps> = ({ items, className }) => {
  return (
    <nav className={`flex items-center gap-1 ${className}`}>
      {items.map((item, index) => (
        <LinkApp
          key={index}
          href={item.href}
          variant={item.active ? 'primary' : 'ghost'}
          className={`
            flex items-center gap-2 px-3 py-2 rounded-lg transition-colors
            ${item.active 
              ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }
          `}
        >
          {item.icon}
          {item.label}
        </LinkApp>
      ))}
    </nav>
  );
};

export { HeaderNav };