

import { cva } from "class-variance-authority";

// Title Component для Tailwind CSS v4
export const titleVariants = cva(
  [
    'font-bold',
    'text-foreground', // Используем CSS variable вместо фиксированных цветов
    'transition-colors',
    'duration-200',
    // Data attributes для Tailwind v4
    'data-[theme=light]:text-gray-900',
    'data-[theme=dark]:text-white'
  ],
  {
    variants: {
      level: {
        h1: ['text-4xl', 'lg:text-5xl', 'font-extrabold'],
        h2: ['text-3xl', 'lg:text-4xl', 'font-bold'],
        h3: ['text-2xl', 'lg:text-3xl', 'font-semibold'],
        h4: ['text-xl', 'lg:text-2xl', 'font-semibold'],
        h5: ['text-lg', 'lg:text-xl', 'font-medium'],
        h6: ['text-base', 'lg:text-lg', 'font-medium']
      },
      weight: {
        light: ['font-light'],
        normal: ['font-normal'],
        medium: ['font-medium'],
        semibold: ['font-semibold'],
        bold: ['font-bold'],
        extrabold: ['font-extrabold']
      },
      align: {
        left: ['text-left'],
        center: ['text-center'],
        right: ['text-right'],
        justify: ['text-justify']
      },
      gradient: {
        true: ['bg-gradient-to-r', 'bg-clip-text', 'text-transparent'],
        false: []
      },
      gradientVariant: {
        primary: [
          'from-blue-600', 'to-purple-600', 
          'dark:from-blue-400', 'dark:to-purple-400',
          // Data attributes для Tailwind v4
          'data-[theme=light]:from-blue-600', 'data-[theme=light]:to-purple-600',
          'data-[theme=dark]:from-blue-400', 'data-[theme=dark]:to-purple-400'
        ],
        success: [
          'from-green-600', 'to-emerald-600',
          'dark:from-green-400', 'dark:to-emerald-400',
          'data-[theme=light]:from-green-600', 'data-[theme=light]:to-emerald-600',
          'data-[theme=dark]:from-green-400', 'data-[theme=dark]:to-emerald-400'
        ],
        danger: [
          'from-red-600', 'to-pink-600',
          'dark:from-red-400', 'dark:to-pink-400',
          'data-[theme=light]:from-red-600', 'data-[theme=light]:to-pink-600',
          'data-[theme=dark]:from-red-400', 'data-[theme=dark]:to-pink-400'
        ],
        warning: [
          'from-yellow-600', 'to-orange-600',
          'dark:from-yellow-400', 'dark:to-orange-400',
          'data-[theme=light]:from-yellow-600', 'data-[theme=light]:to-orange-600',
          'data-[theme=dark]:from-yellow-400', 'data-[theme=dark]:to-orange-400'
        ]
      }
    },
    defaultVariants: {
      level: 'h1',
      weight: 'bold',
      align: 'left',
      gradient: false
    }
  }
);