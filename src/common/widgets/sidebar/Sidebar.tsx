"use client";



import { Button } from '@ui-kit/ui/Button';
import { Card } from '@ui-kit/ui/Card';
import { Text } from '@ui-kit/ui/Font/Text';
import { Title } from '@ui-kit/ui/Font/Title';
import { Loading } from '@ui-kit/ui/Loading';
import React, { useState } from 'react';
import { SideBarItem } from './SideBarItem';
import { SideBarIcon } from '@ui-kit/icons/side-bar.icon';
import { ToggleTheme } from '@features/toggle-theme';
import { SideBarHeader } from './SideBarHeader';
import { SideBarBody } from './SidebarBody';
import { SideBarFooter } from './SideBarFooter';


export interface ISideBarItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  active?: boolean;
  disabled?: boolean;
  badge?: string | number;
}


interface SideBarProps {
  isOpen?: boolean;
  onToggle?: (isOpen: boolean) => void;
  items: ISideBarItem[];
  loading?: boolean;
  header?: {
    title: string;
    subtitle?: string;
    avatar?: React.ReactNode;
  };
  footer?: {
    label: string;
    onClick?: () => void;
    icon?: React.ReactNode;
  };
  className?: string;
  position?: 'left' | 'right';
  width?: 'sm' | 'md' | 'lg' | 'xl';
  collapsible?: boolean;
}

const SideBar: React.FC<SideBarProps> = ({
  isOpen: externalIsOpen,
  onToggle,
  items,
  loading = false,
  header,
  footer,
  className,
  position = 'left',
  width = 'md',
  collapsible = true,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(true);
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const isCollapsed = collapsible && !isOpen;

  const handleToggle = () => {
    const newState = !isOpen;
    if (externalIsOpen === undefined) {
      setInternalIsOpen(newState);
    }
    onToggle?.(newState);
  };

  const widthClasses = {
    sm: 'w-64',
    md: 'w-80',
    lg: 'w-96',
    xl: 'w-[480px]'
  };

  const collapsedWidth = 'w-16';

  const positionClasses = {
    left: 'left-0',
    right: 'right-0'
  };

  if (loading) {
    return (
      <Card 
        className={`
          fixed top-0 ${positionClasses[position]} h-screen 
          ${isCollapsed ? collapsedWidth : widthClasses[width]}
          z-40 transition-all duration-300 ease-in-out
          flex items-center justify-center
          ${className}
        `}
        variant="primary"
      >
        <Loading size="lg" text="Загрузка..." />
      </Card>
    );
  }

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => handleToggle()}
        />
      )}

      <Card 
        className={`
          fixed top-0 ${positionClasses[position]} h-screen 
          ${isCollapsed ? collapsedWidth : widthClasses[width]}
          z-40 transition-all duration-300 ease-in-out
          flex flex-col overflow-hidden 
          ${className}
        `}
        variant="primary"
        hover={false}
      >
        {/* Header */}
        {header && !isCollapsed && (
          <SideBarHeader header={header} />
        )}

        {/* Toggle Button */}
        {collapsible && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleToggle}
            className="absolute top-4 right-4 z-10 w-8 h-8 p-0"
          >
            <SideBarIcon />
          </Button>
        )}

        {/* Navigation Items */}
        <SideBarBody items={items} isCollapsed={isCollapsed} />

        {/* Footer */}
        {footer && !isCollapsed && (
         <SideBarFooter footer={footer} />
        )}

        {/* Collapsed Header Icon */}
        {header?.avatar && isCollapsed && (
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center">
              {header.avatar}
            </div>
          </div>
        )}
      </Card>
    </>
  );
};

export { SideBar };
export type { SideBarProps };