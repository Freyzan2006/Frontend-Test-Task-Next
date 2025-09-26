import { cva } from "class-variance-authority";



export const linkVariants = cva(
  [
    'inline-flex',
    'items-center',
    'gap-2',
    'font-medium',
    'transition-all',
    'duration-200',
    'ease-in-out',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-offset-2',
    'focus-visible:ring-offset-white',
    'dark:focus-visible:ring-offset-gray-950',
    'cursor-pointer',
    'whitespace-nowrap'
  ],
  {
    variants: {
      variant: {
        primary: [
          'text-blue-600',
          'hover:text-blue-700',
          'dark:text-blue-400',
          'dark:hover:text-blue-300',
          'focus-visible:ring-blue-500',
          'dark:focus-visible:ring-blue-400'
        ],
        secondary: [
          'text-gray-600',
          'hover:text-gray-800',
          'dark:text-gray-400',
          'dark:hover:text-gray-200',
          'focus-visible:ring-gray-500',
          'dark:focus-visible:ring-gray-400'
        ],
        success: [
          'text-green-600',
          'hover:text-green-700',
          'dark:text-green-500',
          'dark:hover:text-green-400',
          'focus-visible:ring-green-500',
          'dark:focus-visible:ring-green-400'
        ],
        danger: [
          'text-red-600',
          'hover:text-red-700',
          'dark:text-red-500',
          'dark:hover:text-red-400',
          'focus-visible:ring-red-500',
          'dark:focus-visible:ring-red-400'
        ],
        ghost: [
          'text-gray-500',
          'hover:text-gray-700',
          'hover:bg-gray-100',
          'rounded-md',
          'px-2',
          'py-1',
          'dark:text-gray-400',
          'dark:hover:text-gray-200',
          'dark:hover:bg-gray-800',
          'focus-visible:ring-gray-500',
          'dark:focus-visible:ring-gray-400'
        ],
        underline: [
          'text-blue-600',
          'underline',
          'underline-offset-4',
          'decoration-2',
          'hover:text-blue-700',
          'hover:decoration-blue-700',
          'dark:text-blue-400',
          'dark:hover:text-blue-300',
          'dark:hover:decoration-blue-300',
          'focus-visible:ring-blue-500',
          'dark:focus-visible:ring-blue-400'
        ]
      },
      size: {
        sm: ['text-sm', 'gap-1.5'],
        md: ['text-base', 'gap-2'],
        lg: ['text-lg', 'gap-2.5'],
        xl: ['text-xl', 'gap-3']
      },
      underline: {
        true: ['underline', 'underline-offset-4'],
        false: ['no-underline']
      },
      active: {
        true: ['text-blue-600', 'dark:text-blue-400', 'font-semibold'],
        false: []
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      underline: false,
      active: false
    }
  }
);