"use client";

import React from 'react';
import { Button } from '@ui-kit/ui/Button';

import { LinkApp } from '@ui-kit/ui/LinkApp';
import { Text } from '@ui-kit/ui/Font/Text';
import { ISideBarItem } from '@core/config/config.core';




interface SideBarItemProps {
  item: ISideBarItem;
  collapsed: boolean;
  onItemClick?: () => void;
}



const SideBarItem: React.FC<SideBarItemProps> = ({ 
  item, 
  collapsed, 
}) => {
  const { label, icon, href, active, badge } = item;

  


  const content = (
    <div className={`
      relative flex items-center gap-3 w-full
      ${collapsed ? 'justify-center' : 'justify-start'}
      transition-all duration-200 p-1
    `}>
      {/* Иконка */}
      {icon && (
        <div className={`
          flex-shrink-0 transition-colors duration-200
          ${active ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}
          ${collapsed ? 'w-5 h-5' : 'w-4 h-4'}
        `}>
          {item.icon && <item.icon />}
        </div>
      )}

      {/* Текст (скрывается при collapsed) */}
      {!collapsed && (
        <Text 
          className={`
            flex-1 truncate transition-colors duration-200
            ${active 
              ? 'text-blue-600 dark:text-blue-400 font-semibold' 
              : 'text-gray-700 dark:text-gray-300'
            }
          `}
        >
          {label}
        </Text>
      )}

      {/* Бейдж */}
      {badge && !collapsed && (
        <span className={`
          inline-flex items-center justify-center px-2 py-1 rounded-full text-xs font-medium
          ${active 
            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' 
            : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
          }
        `}>
          {badge}
        </span>
      )}

      {/* Активный индикатор */}
      {active && (
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-blue-600 dark:bg-blue-400 rounded-r-full" />
      )}
    </div>
  );



  if (href) {
    return (
      <LinkApp href={href} >
        {content}
      </LinkApp>
    );
  }

  return (
    <Button variant={active ? 'primary' : 'ghost'}>
      {content}
    </Button>
  );
};

export { SideBarItem };