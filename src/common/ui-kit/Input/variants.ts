import { cva } from "class-variance-authority";



export const inputVariants = cva(
  [
    'w-full',
    'px-4',
    'pt-5',
    'pb-1',
    'border',
    'rounded-lg',
    'font-medium',
    'transition-all',
    'duration-200',
    'ease-in-out',
    'outline-none',
    'focus:ring-2',
    'focus:ring-offset-1',
    'focus:ring-offset-white',
    'dark:focus:ring-offset-gray-950',
    'disabled:pointer-events-none',
    'disabled:opacity-50',
    'placeholder-transparent',
    'peer'
  ],
  {
    variants: {
      variant: {
        primary: [
          'border-gray-300',
          'bg-white',
          'text-gray-900',
          'focus:border-blue-500',
          'focus:ring-blue-500/20',
          'dark:border-gray-600',
          'dark:bg-gray-800',
          'dark:text-gray-100',
          'dark:focus:border-blue-400',
          'dark:focus:ring-blue-400/20'
        ],
        success: [
          'border-green-300',
          'bg-white',
          'text-gray-900',
          'focus:border-green-500',
          'focus:ring-green-500/20',
          'dark:border-green-600',
          'dark:bg-gray-800',
          'dark:text-gray-100',
          'dark:focus:border-green-400',
          'dark:focus:ring-green-400/20'
        ],
        error: [
          'border-red-300',
          'bg-white',
          'text-gray-900',
          'focus:border-red-500',
          'focus:ring-red-500/20',
          'dark:border-red-600',
          'dark:bg-gray-800',
          'dark:text-gray-100',
          'dark:focus:border-red-400',
          'dark:focus:ring-red-400/20'
        ],
        ghost: [
          'border-transparent',
          'bg-gray-50',
          'text-gray-900',
          'focus:bg-white',
          'focus:border-blue-500',
          'focus:ring-blue-500/10',
          'dark:bg-gray-900',
          'dark:text-gray-100',
          'dark:focus:bg-gray-800',
          'dark:focus:border-blue-400',
          'dark:focus:ring-blue-400/10'
        ]
      },
      size: {
        sm: ['text-sm', 'pt-4', 'pb-0.5'],
        md: ['text-base', 'pt-5', 'pb-1'],
        lg: ['text-lg', 'pt-6', 'pb-1.5']
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
);