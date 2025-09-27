

// import { cva } from "class-variance-authority";

// export const alertVariants = cva(
//   [
//     'relative',
//     'rounded-lg',
//     'p-4',
//     'shadow-sm',
//     'border',
//     'transition-all',
//     'duration-200',
//     'ease-in-out'
//   ],
//   {
//     variants: {
//       variant: {
//         info: [
//           'bg-blue-50',
//           'dark:bg-blue-900/20',
//           'border-blue-200',
//           'dark:border-blue-800',
//           'text-blue-900',
//           'dark:text-blue-100',
//         ],
//         success: [
//           'bg-green-50',
//           'dark:bg-green-900/20',
//           'border-green-200',
//           'dark:border-green-800',
//           'text-green-900',
//           'dark:text-green-100'
//         ],
//         warning: [
//           'bg-yellow-50',
//           'dark:bg-yellow-900/20',
//           'border-yellow-200',
//           'dark:border-yellow-800',
//           'text-yellow-900',
//           'dark:text-yellow-100'
//         ],
//         error: [
//           'bg-red-50',
//           'dark:bg-red-900/20',
//           'border-red-200',
//           'dark:border-red-800',
//           'text-red-900',
//           'dark:text-red-100'
//         ],
//         neutral: [
//           'bg-gray-50',
//           'dark:bg-gray-800/50',
//           'border-gray-200',
//           'dark:border-gray-700',
//           'text-gray-900',
//           'dark:text-gray-100'
//         ]
//       },
//       size: {
//         sm: ['text-sm', 'p-3'],
//         md: ['text-base', 'p-4'],
//         lg: ['text-lg', 'p-5']
//       },
//       fullWidth: {
//         true: ['w-full'],
//         false: ['max-w-2xl']
//       }
//     },
//     defaultVariants: {
//       variant: 'info',
//       size: 'md',
//       fullWidth: false
//     }
//   }
// );

import { cva } from "class-variance-authority";

export const alertVariants = cva(
  [
    'relative',
    'rounded-lg',
    'p-4',
    'shadow-sm',
    'border',
    'transition-all',
    'duration-200',
    'ease-in-out'
  ],
  {
    variants: {
      variant: {
        info: [
   
          // Тёмная тема - прозрачные
          'dark:bg-blue-900',
          'dark:border-blue-700',
          'dark:text-blue-100',
          "dark:shadow-lg dark:shadow-blue-500/25"
        ],
        success: [
   
          'dark:bg-green-900',
          'dark:border-green-700',
          'dark:text-green-100',
          "dark:shadow-lg dark:shadow-green-500/25"
        ],
        warning: [
          
          'dark:bg-yellow-900',
          'dark:border-yellow-700',
          'dark:text-yellow-100',
          "dark:shadow-lg dark:shadow-yellow-500/25"
        ],
        error: [
      
          'dark:bg-red-900',
          'dark:border-red-700',
          'dark:text-red-100',
          "dark:shadow-lg dark:shadow-red-500/25"
        ],
        neutral: [
      
          'dark:bg-gray-800',
          'dark:border-gray-600',
          'dark:text-gray-100',
          "dark:shadow-lg dark:shadow-gray-500/25"
        ]
      },
      size: {
        sm: ['text-sm', 'p-3'],
        md: ['text-base', 'p-4'],
        lg: ['text-lg', 'p-5']
      },
      fullWidth: {
        true: ['w-full'],
        false: ['max-w-2xl']
      }
    },
    defaultVariants: {
      variant: 'info',
      size: 'md',
      fullWidth: false
    }
  }
);