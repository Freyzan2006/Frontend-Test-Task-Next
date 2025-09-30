import { cva } from "class-variance-authority";

export const uploadVariants = cva(
  [
    'w-full',
    'border-2',
    'border-dashed',
    'rounded-lg',
    'transition-all',
    'duration-200',
    'ease-in-out',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2'
  ],
  {
    variants: {
      variant: {
        primary: [
          'border-gray-300',
          'bg-white',
          'text-gray-700',
          'hover:border-gray-400',
          'hover:bg-gray-50',
          'dark:border-gray-600',
          'dark:bg-gray-800',
          'dark:text-gray-300',
          'dark:hover:border-gray-500',
          'dark:hover:bg-gray-700',
          'focus:ring-blue-500',
          'focus:ring-offset-white',
          'dark:focus:ring-offset-gray-900'
        ],
        success: [
          'border-green-300',
          'bg-green-50',
          'text-green-700',
          'hover:border-green-400',
          'dark:border-green-600',
          'dark:bg-green-900/20',
          'dark:text-green-300',
          'focus:ring-green-500'
        ],
        error: [
          'border-red-300',
          'bg-red-50',
          'text-red-700',
          'hover:border-red-400',
          'dark:border-red-600',
          'dark:bg-red-900/20',
          'dark:text-red-300',
          'focus:ring-red-500'
        ]
      },
      size: {
        sm: ['text-sm'],
        md: ['text-base'],
        lg: ['text-lg']
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
);