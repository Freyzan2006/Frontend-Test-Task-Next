"use client";

import React from 'react';
import { Card } from '@ui-kit/ui/Card';

import { LinkApp } from '@ui-kit/ui/LinkApp';
import { Title } from '@ui-kit/ui/Font/Title';
import { Text } from '@ui-kit/ui/Font/Text';
import { FooterSection } from './FooterSection';


interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  company?: {
    name: string;
    description?: string;
    logo?: React.ReactNode;
    copyright?: string;
  };
  sections?: FooterSection[];
  social: {
    label: string;
    href: string;
    icon: React.ReactNode;
  }[];
  subscription?: {
    title: string;
    description?: string;
    buttonText?: string;
    onSubscribe?: (email: string) => void;
  };
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  items: FooterLink[]
}

const variantStyles = {
    primary: 'bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800',
    secondary: 'bg-gray-50 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700',
    ghost: 'bg-transparent border-t border-gray-200 dark:border-gray-800'
};

const sizeStyles = {
    sm: 'py-6',
    md: 'py-8',
    lg: 'py-12'
};

const Footer: React.FC<FooterProps> = ({
  company,
  sections = [],
  social = [],
  subscription,
  variant = 'primary',
  size = 'md',
  className,
}) => {
  const currentYear = new Date().getFullYear();



  return (
    <Card 
      variant="ghost"
      className={`
        w-full mt-auto
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
      hover={false}
    >
      <div className="container mx-auto px-4">
        {/* Основной контент */}
        <div className={`
          grid gap-8
          ${sections.length > 0 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2'}
        `}>
          {/* Блок компании */}
          {company && (
            <div className="lg:col-span-2 space-y-4">
              {company.logo && (
                <div className="flex items-center gap-3">
                  {company.logo}
                  <Title level="h3" className="text-lg font-semibold">
                    {company.name}
                  </Title>
                </div>
              )}
              
              {!company.logo && (
                <Title level="h3" className="text-lg font-semibold">
                  {company.name}
                </Title>
              )}
              
              {company.description && (
                <Text variant="muted" className="max-w-md">
                  {company.description}
                </Text>
              )}

              {/* Социальные сети */}
              {social.length > 0 && (
                <div className="flex gap-4">
                  {social.map((item, index) => (
                    <LinkApp
                      key={index}
                      href={item.href}
                      external
                      variant="ghost"
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      title={item.label}
                    >
                      {item.icon}
                    </LinkApp>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Секции с ссылками */}
          {sections.map((section, index) => (
            <FooterSection
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}

          {/* Блок подписки */}
          {subscription && (
            <div className="lg:col-span-2 space-y-4">
              <Title level="h4" className="text-lg font-semibold">
                {subscription.title}
              </Title>
              
              {subscription.description && (
                <Text variant="muted">
                  {subscription.description}
                </Text>
              )}

              <div className="flex gap-2 max-w-md">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={() => subscription.onSubscribe?.('email')}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
                >
                  {subscription.buttonText || 'Подписаться'}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Нижняя часть с копирайтом */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <Text variant="muted" size="sm">
            {company?.copyright || `© ${currentYear} ${company?.name || 'Компания'}. Все права защищены.`}
          </Text>
          
          {/* Дополнительные ссылки */}
          <div className="flex gap-6">
            <LinkApp href="/privacy" variant="ghost" size="sm">
              Политика конфиденциальности
            </LinkApp>
            <LinkApp href="/terms" variant="ghost" size="sm">
              Условия использования
            </LinkApp>
          </div>
        </div>
      </div>
    </Card>
  );
};

export { Footer };
export type { FooterProps, FooterSection, FooterLink };