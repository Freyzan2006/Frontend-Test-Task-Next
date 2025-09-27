"use client";

import React from 'react';
import { Card } from '@ui-kit/ui/Card';
import { Button } from '@ui-kit/ui/Button';
import { Text, Title } from '@ui-kit/ui/Font';

import { Dropdown } from '@ui-kit/ui/Dropdown';
import { LinkApp } from '@ui-kit/ui/LinkApp';
import { ToggleTheme } from '@features/toggle-theme';
import { HeaderNav } from './HeaderNav';
import { usePathname } from 'next/navigation';

interface HeaderNavItem {
  label: string;
  href: string;
  active?: boolean;
  icon?: React.ReactNode;
}

interface IHeaderUser {
  name: string;
  email: string;
  avatar?: React.ReactNode;
  role?: string;
}

interface HeaderProps {
  title?: string;
  subtitle?: string;
  logo?: React.ReactNode;
  navigation?: HeaderNavItem[];
  variant?: 'primary' | 'secondary' | 'ghost';
  sticky?: boolean;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  title = "Mini Gallery",
  subtitle = "Ваша коллекция изображений",
  logo,
  navigation = [],
  variant = 'primary',
  sticky = true,
  className,
}) => {

  const user: IHeaderUser = {
    name: 'John Doe',
    email: '8QK9d@example.com',
    avatar: (
      <img
        className="w-8 h-8 rounded-full"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
    ),
    role: 'Admin'
  }


  const variantStyles = {
    primary: 'bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800',
    secondary: 'bg-gray-50 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700',
    ghost: 'bg-transparent border-b border-gray-200 dark:border-gray-800'
  };

  const stickyClass = sticky ? 'sticky top-0 z-50' : '';

  const userMenuItems = [
    { label: 'Мой профиль', value: 'profile' },
    { label: 'Настройки', value: 'settings' },
    { label: 'divider', value: 'divider' },
  ];

  const path = usePathname();

  return (
    <Card 
      variant="ghost"
      className={`
        w-full
        ${variantStyles[variant]}
        ${stickyClass}
        ${className}
      `}
      hover={false}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Левый блок - Логотип и навигация */}
          <div className="flex items-center gap-8">
            {/* Логотип и название */}
            <LinkApp href="/" variant="ghost" className="flex items-center gap-3 hover:no-underline">
              {logo || (
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  MG
                </div>
              )}
              <div className="flex flex-col">
                <Title level="h1" className="text-xl font-bold text-gray-900 dark:text-white">
                  {title}
                </Title>
                {subtitle && (
                  <Text variant="muted" size="sm" className="hidden sm:block">
                    {subtitle}
                  </Text>
                )}
              </div>
            </LinkApp>

            <HeaderNav items={[
                { label: 'Главная', href: '/', active: path === '/' },
                { label: 'Галерея', href: '/gallery', active: path === '/gallery' },
                { label: 'Контакты', href: '/contacts', active: path === '/contacts' },
            ]} />

            {/* Навигация */}
            {navigation.length > 0 && (
              <nav className="hidden md:flex items-center gap-6">
                {navigation.map((item, index) => (
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
                    {item.label}false
                  </LinkApp>
                ))}
              </nav>
            )}
          </div>

         

          {/* Правый блок - Действия */}
          <div className="flex items-center gap-4">


            {/* Пользователь или кнопка входа */}
            {user ? (
              <div className="flex items-center gap-3">
                <Dropdown
                  items={userMenuItems}
                  trigger={
                    <Button variant="ghost" className="flex items-center gap-2">
                      {user.avatar || (
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                          {user.name.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <div className="hidden sm:block text-left">
                        <Text size="sm" weight="medium" className="text-gray-900 dark:text-white">
                          {user.name}
                        </Text>
                        {user.role && (
                          <Text size="xs" variant="muted" className="text-gray-500 dark:text-gray-400">
                            {user.role}
                          </Text>
                        )}
                      </div>
                    </Button>
                  }
                  position="bottom-right"
                />
              </div>
            ) : (
              <Button  variant="primary" size="sm">
                Войти
              </Button>
            )}

          
          </div>
        </div>
      </div>
    </Card>
  );
};

export { Header };
export type { HeaderProps, HeaderNavItem, IHeaderUser };