"use client";

import React from 'react';

import { Card } from '@ui-kit/ui/Card';
import { Button } from '@ui-kit/ui/Button';
import { Text, Title, TitleTextGroup } from '@ui-kit/ui/Font';
import { LinkApp } from '@ui-kit/ui/LinkApp';
import Image from 'next/image';

interface IntroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  features?: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  primaryAction?: {
    label: string;
    onClick: () => void;
    href?: string;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
    href?: string;
  };
  stats?: {
    value: string;
    label: string;
  }[];
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Intro: React.FC<IntroProps> = ({
  title = "Mini Gallery",
  subtitle = "Ваша цифровая фотогалерея",
  description = "Откройте для себя мир красивых фотографий, делитесь своими работами и находите вдохновение в творчестве других фотографов. Загружайте, организуйте и демонстрируйте ваши лучшие снимки в одном месте.",
  image = {
    src: "/Intro.png",
    alt: "Пример фотографии из галереи"
  },
  features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Красивая галерея",
      description: "Элегантное представление ваших фотографий"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
      ),
      title: "Простая загрузка",
      description: "Drag & Drop загрузка файлов"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "Умный поиск",
      description: "Быстрый поиск по вашей коллекции"
    }
  ],
  primaryAction = {
    label: "Начать загрузку",
    onClick: () => console.log("Начать загрузку"),
    href: "/photos/upload"
  },
  secondaryAction = {
    label: "Посмотреть галерею",
    onClick: () => console.log("Посмотреть галерею"),
    href: "/photos"
  },
  stats = [
    { value: "10K+", label: "Фотографий" },
    { value: "500+", label: "Пользователей" },
    { value: "99%", label: "Довольных" }
  ],
  variant = 'primary',
  className
}) => {
  const variantStyles = {
    primary: 'bg-white dark:bg-gray-900',
    secondary: 'bg-gray-50 dark:bg-gray-800'
  };

  const ActionButton = ({ action, variant }: { action: typeof primaryAction, variant: 'primary' | 'secondary' }) => {
    if (action.href) {
      return (
        <LinkApp
          href={action.href}
          variant={variant === 'primary' ? 'primary' : 'secondary'}
          size="lg"
          onClick={action.onClick}
          className="flex items-center justify-center gap-2 w-full"
        >
          {variant === 'primary' && (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
          )}
          {action.label}
        </LinkApp>
      );
    }

    return (
      <Button
        variant={variant === 'primary' ? 'primary' : 'secondary'}
        size="lg"
        onClick={action.onClick}
        icon={variant === 'primary' ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
          </svg>
        ) : undefined}
      >
        {action.label}
      </Button>
    );
  };

  return (
    <section className={`py-16 ${variantStyles[variant]} ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Левая часть - Изображение */}
          <div className="order-2 lg:order-1">
            <Card variant="elevated" className="overflow-hidden" hover>
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden rounded-xl">
                {/* Заглушка для изображения */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Image
                      width={500}
                      height={500}
                      className="w-full h-full object-cover opacity-80"
                      src={image.src}
                      alt={image.alt}
                      property="lazy"
                    />
                    <Text size="lg" className="font-semibold">Пример фотографии</Text>
                    <Text size="sm" className="opacity-90">Из коллекции Mini Gallery</Text>
                  </div>
                </div>
                
                {/* Наложение с информацией */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <Text className="text-white font-semibold">{image.alt}</Text>
                  <Text size="sm" className="text-white/80">Автор: Фотограф</Text>
                </div>
              </div>
            </Card>

            {/* Статистика под изображением */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {stats.map((stat, index) => (
                <Card key={index} variant="ghost" className="text-center py-4">
                  <Title level="h3" className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </Title>
                  <Text variant="muted" size="sm" className="mt-1">
                    {stat.label}
                  </Text>
                </Card>
              ))}
            </div>
          </div>

          {/* Правая часть - Контент */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Заголовок и описание */}
            <div className="space-y-4">
              <TitleTextGroup
                title={title}
                text={subtitle}
                titleLevel="h1"
                textSize="xl"
                gap="sm"
              />
              <Text className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {description}
              </Text>
            </div>

            {/* Особенности */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                    {feature.icon}
                  </div>
                  <div>
                    <Title level="h4" className="text-lg font-semibold mb-1">
                      {feature.title}
                    </Title>
                    <Text variant="muted" className="leading-relaxed">
                      {feature.description}
                    </Text>
                  </div>
                </div>
              ))}
            </div>

            {/* Кнопки действий */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <ActionButton action={primaryAction} variant="primary" />
              <ActionButton action={secondaryAction} variant="secondary" />
            </div>

            {/* Дополнительная информация */}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Безопасное хранение</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Конфиденциальность</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Intro };
export type { IntroProps };