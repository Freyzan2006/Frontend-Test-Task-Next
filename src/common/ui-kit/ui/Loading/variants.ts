import { cva } from "class-variance-authority";

export const loadingVariants = cva(
  [
    'flex',
    'items-center',
    'justify-center',
    'rounded-full',
    'border-2',
    'border-transparent',
    'animate-spin'
  ],
  {
    variants: {
      variant: {
        primary: [
          'border-t-blue-600',
          'border-r-blue-600',
          'border-b-blue-600/30',
          'border-l-blue-600/30',
          'dark:border-t-blue-400',
          'dark:border-r-blue-400',
          'dark:border-b-blue-400/30',
          'dark:border-l-blue-400/30'
        ],
        secondary: [
          'border-t-gray-600',
          'border-r-gray-600',
          'border-b-gray-600/30',
          'border-l-gray-600/30',
          'dark:border-t-gray-400',
          'dark:border-r-gray-400',
          'dark:border-b-gray-400/30',
          'dark:border-l-gray-400/30'
        ],
        success: [
          'border-t-green-600',
          'border-r-green-600',
          'border-b-green-600/30',
          'border-l-green-600/30',
          'dark:border-t-green-400',
          'dark:border-r-green-400',
          'dark:border-b-green-400/30',
          'dark:border-l-green-400/30'
        ],
        danger: [
          'border-t-red-600',
          'border-r-red-600',
          'border-b-red-600/30',
          'border-l-red-600/30',
          'dark:border-t-red-400',
          'dark:border-r-red-400',
          'dark:border-b-red-400/30',
          'dark:border-l-red-400/30'
        ],
        ghost: [
          'border-t-gray-400',
          'border-r-gray-400',
          'border-b-gray-400/20',
          'border-l-gray-400/20',
          'dark:border-t-gray-500',
          'dark:border-r-gray-500',
          'dark:border-b-gray-500/20',
          'dark:border-l-gray-500/20'
        ]
      },
      size: {
        xs: ['w-4', 'h-4', 'border-2'],
        sm: ['w-6', 'h-6', 'border-2'],
        md: ['w-8', 'h-8', 'border-2'],
        lg: ['w-12', 'h-12', 'border-3'],
        xl: ['w-16', 'h-16', 'border-4'],
        xxl: ['w-50', 'h-50', 'border-4']
      },
      speed: {
        slow: ['animate-spin-slow'],
        normal: ['animate-spin'],
        fast: ['animate-spin-fast']
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      speed: 'normal'
    }
  }
);