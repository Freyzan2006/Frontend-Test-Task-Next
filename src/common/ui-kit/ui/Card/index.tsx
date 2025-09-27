// "use client";




// import React from 'react';
// import { cva, type VariantProps } from 'class-variance-authority';

// const cardVariants = cva(
//   [
//     'rounded-xl',
//     'border',
//     'bg-white',
//     'dark:bg-gray-900',
//     'transition-all',
//     'duration-200',
//     'ease-in-out',
//     'shadow-sm',
//     'hover:shadow-md',
//     "shadow-gray-500/20",
//   ],
//   {
//     variants: {
//       variant: {
//         primary: [
//           'border-gray-200',
//           'dark:border-gray-700'
//         ],
//         elevated: [
//           'border-transparent',
//           'shadow-lg',
//           'hover:shadow-xl',
//           'dark:shadow-gray-900/50'
//         ],
//         outline: [
//           'border-gray-300',
//           'dark:border-gray-600',
//           'bg-transparent',
//           'dark:bg-transparent'
//         ],
//         ghost: [
//           'border-transparent',
//           'bg-gray-50',
//           'dark:bg-gray-800/50',
//           'shadow-none',
//           'hover:bg-gray-100',
//           'dark:hover:bg-gray-800'
//         ]
//       },
//       padding: {
//         none: ['p-0'],
//         sm: ['p-4'],
//         md: ['p-6'],
//         lg: ['p-8'],
//         xl: ['p-10']
//       },
//       hover: {
//         true: ['cursor-pointer', 'hover:-translate-y-0.5'],
//         false: ['cursor-default']
//       }
//     },
//     defaultVariants: {
//       variant: 'primary',
//       padding: 'md',
//       hover: false
//     }
//   }
// );

// const cardHeaderVariants = cva(
//   ['space-y-1'],
//   {
//     variants: {
//       padding: {
//         none: ['px-0', 'pt-0'],
//         sm: ['px-4', 'pt-4'],
//         md: ['px-6', 'pt-6'],
//         lg: ['px-8', 'pt-8'],
//         xl: ['px-10', 'pt-10']
//       }
//     },
//     defaultVariants: {
//       padding: 'md'
//     }
//   }
// );

// const cardBodyVariants = cva(
//   [''],
//   {
//     variants: {
//       padding: {
//         none: ['px-0', 'py-0'],
//         sm: ['px-4', 'py-4'],
//         md: ['px-6', 'py-6'],
//         lg: ['px-8', 'py-8'],
//         xl: ['px-10', 'py-10']
//       }
//     },
//     defaultVariants: {
//       padding: 'md'
//     }
//   }
// );

// const cardFooterVariants = cva(
//   ['flex', 'items-center', 'justify-between'],
//   {
//     variants: {
//       padding: {
//         none: ['px-0', 'pb-0'],
//         sm: ['px-4', 'pb-4'],
//         md: ['px-6', 'pb-6'],
//         lg: ['px-8', 'pb-8'],
//         xl: ['px-10', 'pb-10']
//       }
//     },
//     defaultVariants: {
//       padding: 'md'
//     }
//   }
// );

// interface CardProps 
//   extends React.HTMLAttributes<HTMLDivElement>,
//     VariantProps<typeof cardVariants> {
//   className?: string;
// }

// interface CardHeaderProps 
//   extends React.HTMLAttributes<HTMLDivElement>,
//     VariantProps<typeof cardHeaderVariants> {
//   className?: string;
// }

// interface CardBodyProps 
//   extends React.HTMLAttributes<HTMLDivElement>,
//     VariantProps<typeof cardBodyVariants> {
//   className?: string;
// }

// interface CardFooterProps 
//   extends React.HTMLAttributes<HTMLDivElement>,
//     VariantProps<typeof cardFooterVariants> {
//   className?: string;
// }

// const Card = React.forwardRef<HTMLDivElement, CardProps>(
//   ({ className, variant, padding, hover, ...props }, ref) => {
//     return (
//       <div
//         ref={ref}
//         className={cardVariants({ variant, padding, hover, className })}
//         {...props}
//       />
//     );
//   }
// );

// Card.displayName = 'Card';

// const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
//   ({ className, padding, ...props }, ref) => {
//     return (
//       <div
//         ref={ref}
//         className={cardHeaderVariants({ padding, className })}
//         {...props}
//       />
//     );
//   }
// );

// CardHeader.displayName = 'CardHeader';

// const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
//   ({ className, padding, ...props }, ref) => {
//     return (
//       <div
//         ref={ref}
//         className={cardBodyVariants({ padding, className })}
//         {...props}
//       />
//     );
//   }
// );

// CardBody.displayName = 'CardBody';

// const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
//   ({ className, padding, ...props }, ref) => {
//     return (
//       <div
//         ref={ref}
//         className={cardFooterVariants({ padding, className })}
//         {...props}
//       />
//     );
//   }
// );

// CardFooter.displayName = 'CardFooter';

// export { Card, CardHeader, CardBody, CardFooter };
// export type { CardProps, CardHeaderProps, CardBodyProps, CardFooterProps };


"use client";

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva(
  [
    'rounded-xl',
    'border',
    'bg-background', // Используем CSS variable вместо фиксированных цветов
    'text-foreground', // Используем CSS variable для текста
    'transition-all',
    'duration-200',
    'ease-in-out',
    'shadow-sm',
    'hover:shadow-md',
    'shadow-gray-500/20',
  ],
  {
    variants: {
      variant: {
        primary: [
          'border-border', // Используем CSS variable для границы
        ],
        elevated: [
          'border-transparent',
          'shadow-lg',
          'hover:shadow-xl',
          'shadow-gray-900/10', // Более светлая тень для светлой темы
          'dark:shadow-gray-900/50' // Более тёмная тень для тёмной темы
        ],
        outline: [
          'border-gray-300',
          'dark:border-gray-600',
          'bg-transparent',
        ],
        ghost: [
          'border-transparent',
          'bg-muted', // Используем muted background
          'shadow-none',
          'hover:bg-muted/50', // Полупрозрачный вариант при hover
        ]
      },
      padding: {
        none: ['p-0'],
        sm: ['p-4'],
        md: ['p-6'],
        lg: ['p-8'],
        xl: ['p-10']
      },
      hover: {
        true: ['cursor-pointer', 'hover:-translate-y-0.5'],
        false: ['cursor-default']
      }
    },
    defaultVariants: {
      variant: 'primary',
      padding: 'md',
      hover: false
    }
  }
);

// Остальные компоненты (CardHeader, CardBody, CardFooter) остаются без изменений
const cardHeaderVariants = cva(
  ['space-y-1'],
  {
    variants: {
      padding: {
        none: ['px-0', 'pt-0'],
        sm: ['px-4', 'pt-4'],
        md: ['px-6', 'pt-6'],
        lg: ['px-8', 'pt-8'],
        xl: ['px-10', 'pt-10']
      }
    },
    defaultVariants: {
      padding: 'md'
    }
  }
);

const cardBodyVariants = cva(
  [''],
  {
    variants: {
      padding: {
        none: ['px-0', 'py-0'],
        sm: ['px-4', 'py-4'],
        md: ['px-6', 'py-6'],
        lg: ['px-8', 'py-8'],
        xl: ['px-10', 'py-10']
      }
    },
    defaultVariants: {
      padding: 'md'
    }
  }
);

const cardFooterVariants = cva(
  ['flex', 'items-center', 'justify-between'],
  {
    variants: {
      padding: {
        none: ['px-0', 'pb-0'],
        sm: ['px-4', 'pb-4'],
        md: ['px-6', 'pb-6'],
        lg: ['px-8', 'pb-8'],
        xl: ['px-10', 'pb-10']
      }
    },
    defaultVariants: {
      padding: 'md'
    }
  }
);

interface CardProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  className?: string;
}

interface CardHeaderProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardHeaderVariants> {
  className?: string;
}

interface CardBodyProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardBodyVariants> {
  className?: string;
}

interface CardFooterProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardFooterVariants> {
  className?: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, hover, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cardVariants({ variant, padding, hover, className })}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, padding, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cardHeaderVariants({ padding, className })}
        {...props}
      />
    );
  }
);

CardHeader.displayName = 'CardHeader';

const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, padding, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cardBodyVariants({ padding, className })}
        {...props}
      />
    );
  }
);

CardBody.displayName = 'CardBody';

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, padding, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cardFooterVariants({ padding, className })}
        {...props}
      />
    );
  }
);

CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardBody, CardFooter };
export type { CardProps, CardHeaderProps, CardBodyProps, CardFooterProps };