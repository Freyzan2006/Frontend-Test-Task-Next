import { cva } from "class-variance-authority";



export const noticeVariants = cva(
  [
    'relative',
    'rounded-lg',
    'p-4',
    'pr-12',
    'shadow-lg',
    'border',
    'transition-all',
    'duration-300',
    'ease-in-out',
    'max-w-md',
    'w-full',
    'overflow-hidden'
  ],
  {
    variants: {
      variant: {
        info: [
          'bg-blue-50',
          'border-blue-200',
          'text-blue-900',
          'dark:bg-blue-900/20',
          'dark:border-blue-800',
          'dark:text-blue-100'
        ],
        success: [
          'bg-green-50',
          'border-green-200',
          'text-green-900',
          'dark:bg-green-900/20',
          'dark:border-green-800',
          'dark:text-green-100'
        ],
        warning: [
          'bg-yellow-50',
          'border-yellow-200',
          'text-yellow-900',
          'dark:bg-yellow-900/20',
          'dark:border-yellow-800',
          'dark:text-yellow-100'
        ],
        error: [
          'bg-red-50',
          'border-red-200',
          'text-red-900',
          'dark:bg-red-900/20',
          'dark:border-red-800',
          'dark:text-red-100'
        ]
      },
      position: {
        'top-left': ['animate-in', 'slide-in-from-left', 'fade-in'],
        'top-right': ['animate-in', 'slide-in-from-right', 'fade-in'],
        'top-center': ['animate-in', 'slide-in-from-top', 'fade-in'],
        'bottom-left': ['animate-in', 'slide-in-from-left', 'fade-in'],
        'bottom-right': ['animate-in', 'slide-in-from-right', 'fade-in'],
        'bottom-center': ['animate-in', 'slide-in-from-bottom', 'fade-in']
      }
    },
    defaultVariants: {
      variant: 'info',
      position: 'top-right'
    }
  }
);

export const progressBarVariants = cva(
  [
    'absolute',
    'bottom-0',
    'left-0',
    'h-1',
    'transition-all',
    'duration-100',
    'ease-linear'
  ],
  {
    variants: {
      variant: {
        info: ['bg-blue-500', 'dark:bg-blue-400'],
        success: ['bg-green-500', 'dark:bg-green-400'],
        warning: ['bg-yellow-500', 'dark:bg-yellow-400'],
        error: ['bg-red-500', 'dark:bg-red-400']
      }
    },
    defaultVariants: {
      variant: 'info'
    }
  }
);