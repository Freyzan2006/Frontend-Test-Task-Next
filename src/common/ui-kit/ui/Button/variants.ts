import { cva } from "class-variance-authority";


export const buttonVariants = cva(
  [
    "cursor-pointer",
    'inline-flex',
    'items-center',
    'justify-center',
    'whitespace-nowrap',
    'rounded-lg',
    'font-medium',
    'transition-all',
    'duration-200',
    'ease-in-out',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-offset-2',
    'focus-visible:ring-offset-white',
    'dark:focus-visible:ring-offset-gray-950',
    'disabled:pointer-events-none',
    'disabled:opacity-50',
    'hover:scale-105',
    'active:scale-95',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-blue-600',
          'text-white',
          'shadow-lg',
          'hover:bg-blue-700',
          'dark:bg-blue-500',
          'dark:hover:bg-blue-600',
          'focus-visible:ring-blue-500',
          'dark:focus-visible:ring-blue-400',
          'shadow-blue-500/25',
          'dark:shadow-blue-400/25'
        ],
        secondary: [
          'bg-gray-100',
          'text-gray-900',
          'border',
          'border-gray-200',
          'shadow-md',
          'hover:bg-gray-200',
          'hover:border-gray-300',
          'dark:bg-gray-800',
          'dark:text-gray-100',
          'dark:border-gray-700',
          'dark:hover:bg-gray-700',
          'dark:hover:border-gray-600',
          'focus-visible:ring-gray-500',
          'dark:focus-visible:ring-gray-400',
          'shadow-gray-500/10',
          'dark:shadow-gray-400/10'
        ],
        success: [
          'bg-green-500',
          'text-white',
          'shadow-lg',
          'hover:bg-green-600',
          'dark:bg-green-600',
          'dark:hover:bg-green-700',
          'focus-visible:ring-green-500',
          'dark:focus-visible:ring-green-400',
          'shadow-green-500/25',
          'dark:shadow-green-400/25'
        ],
        danger: [
          'bg-red-500',
          'text-white',
          'shadow-lg',
          'hover:bg-red-600',
          'dark:bg-red-600',
          'dark:hover:bg-red-700',
          'focus-visible:ring-red-500',
          'dark:focus-visible:ring-red-400',
          'shadow-red-500/25',
          'dark:shadow-red-400/25'
        ],
        ghost: [
          'bg-transparent',
          'text-gray-700',
          'hover:bg-gray-100',
          'hover:text-gray-900',
          'dark:text-gray-300',
          'dark:hover:bg-gray-800',
          'dark:hover:text-gray-100',
          'focus-visible:ring-gray-500',
          'dark:focus-visible:ring-gray-400'
        ],
        outline: [
          'bg-transparent',
          'border-2',
          'border-blue-600',
          'text-blue-600',
          'hover:bg-blue-600',
          'hover:text-white',
          'dark:border-blue-400',
          'dark:text-blue-400',
          'dark:hover:bg-blue-400',
          'dark:hover:text-white',
          'focus-visible:ring-blue-500',
          'dark:focus-visible:ring-blue-400'
        ]
      },
      size: {
        sm: ['text-sm', 'px-3', 'py-1.5', 'gap-1.5'],
        md: ['text-base', 'px-4', 'py-2', 'gap-2'],
        lg: ['text-lg', 'px-6', 'py-3', 'gap-2.5'],
        xl: ['text-xl', 'px-8', 'py-4', 'gap-3']
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
);