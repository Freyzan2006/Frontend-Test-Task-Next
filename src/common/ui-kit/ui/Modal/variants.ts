// import { cva } from "class-variance-authority";

// const modalOverlayVariants = cva(
//   [
//     'fixed',
//     'inset-0',
//     'z-50',
//     'flex',
//     'items-center',
//     'justify-center',
//     'p-4',
//     'bg-black/50',
//     'backdrop-blur-sm',
//     'transition-all',
//     'duration-300',
//     'ease-in-out'
//   ],
//   {
//     variants: {
//       animation: {
//         fade: ['animate-in', 'fade-in'],
//         slide: ['animate-in', 'slide-in-from-bottom-10'],
//         scale: ['animate-in', 'zoom-in-95']
//       }
//     },
//     defaultVariants: {
//       animation: 'fade'
//     }
//   }
// );

// const modalContentVariants = cva(
//   [
//     'relative',
//     'bg-white',
//     'dark:bg-gray-900',
//     'rounded-xl',
//     'shadow-2xl',
//     'border',
//     'border-gray-200',
//     'dark:border-gray-700',
//     'max-h-[90vh]',
//     'overflow-hidden',
//     'transition-all',
//     'duration-300',
//     'ease-in-out',
//     'focus:outline-none'
//   ],
//   {
//     variants: {
//       size: {
//         sm: ['max-w-md', 'w-full'],
//         md: ['max-w-lg', 'w-full'],
//         lg: ['max-w-2xl', 'w-full'],
//         xl: ['max-w-4xl', 'w-full'],
//         full: ['max-w-[95vw]', 'w-full']
//       },
//       animation: {
//         fade: ['animate-in', 'fade-in', 'duration-300'],
//         slide: ['animate-in', 'slide-in-from-bottom-10', 'duration-300'],
//         scale: ['animate-in', 'zoom-in-95', 'duration-300']
//       }
//     },
//     defaultVariants: {
//       size: 'md',
//       animation: 'fade'
//     }
//   }
// );

// const modalHeaderVariants = cva(
//   [
//     'flex',
//     'items-center',
//     'justify-between',
//     'p-6',
//     'pb-4',
//     'border-b',
//     'border-gray-100',
//     'dark:border-gray-800'
//   ],
//   {
//     variants: {
//       withDivider: {
//         true: ['border-b'],
//         false: ['border-b-0']
//       }
//     },
//     defaultVariants: {
//       withDivider: true
//     }
//   }
// );

// const modalBodyVariants = cva(
//   ['p-6'],
//   {
//     variants: {
//       padding: {
//         none: ['p-0'],
//         sm: ['p-4'],
//         md: ['p-6'],
//         lg: ['p-8']
//       }
//     },
//     defaultVariants: {
//       padding: 'md'
//     }
//   }
// );

// const modalFooterVariants = cva(
//   [
//     'flex',
//     'items-center',
//     'justify-end',
//     'gap-3',
//     'p-6',
//     'pt-4',
//     'border-t',
//     'border-gray-100',
//     'dark:border-gray-800'
//   ],
//   {
//     variants: {
//       withDivider: {
//         true: ['border-t'],
//         false: ['border-t-0']
//       },
//       alignment: {
//         left: ['justify-start'],
//         center: ['justify-center'],
//         right: ['justify-end'],
//         between: ['justify-between']
//       }
//     },
//     defaultVariants: {
//       withDivider: true,
//       alignment: 'right'
//     }
//   }
// );

// export {
//   modalOverlayVariants,
//   modalContentVariants,
//   modalHeaderVariants,
//   modalBodyVariants,
//   modalFooterVariants
// };

import { cva } from "class-variance-authority";

const modalOverlayVariants = cva(
  [
    'fixed',
    'inset-0',
    'z-50',
    'flex',
    'items-center',
    'justify-center',
    'p-4',
    'bg-black/50',
    'backdrop-blur-sm',
    'transition-all',
    'duration-300',
    'ease-in-out'
  ],
  {
    variants: {
      animation: {
        fade: ['animate-in', 'fade-in'],
        slide: ['animate-in', 'slide-in-from-bottom-10'],
        scale: ['animate-in', 'zoom-in-95']
      }
    },
    defaultVariants: {
      animation: 'fade'
    }
  }
);

const modalContentVariants = cva(
  [
    'relative',
    'rounded-xl',
    'shadow-2xl',
    'border',
    'border-gray-200',
    'dark:border-gray-700',
    'max-h-[90vh]',
    'overflow-hidden',
    'transition-all',
    'duration-300',
    'ease-in-out',
    'focus:outline-none',
    // Используем CSS variables вместо data-attributes
    'bg-background',
    'text-foreground',
    'border-border'
  ],
  {
    variants: {
      size: {
        sm: ['max-w-md', 'w-full'],
        md: ['max-w-lg', 'w-full'],
        lg: ['max-w-2xl', 'w-full'],
        xl: ['max-w-4xl', 'w-full'],
        full: ['max-w-[95vw]', 'w-full']
      },
      animation: {
        fade: ['animate-in', 'fade-in', 'duration-300'],
        slide: ['animate-in', 'slide-in-from-bottom-10', 'duration-300'],
        scale: ['animate-in', 'zoom-in-95', 'duration-300']
      }
    },
    defaultVariants: {
      size: 'md',
      animation: 'fade'
    }
  }
);

const modalHeaderVariants = cva(
  [
    'flex',
    'items-center',
    'justify-between',
    'p-6',
    'pb-4',
    'border-b',
    'border-gray-100',
    'dark:border-gray-800',
    // Data attributes для Tailwind v4
    'data-[theme=light]:border-gray-100',
    'data-[theme=dark]:border-gray-800'
  ],
  {
    variants: {
      withDivider: {
        true: ['border-b'],
        false: ['border-b-0']
      }
    },
    defaultVariants: {
      withDivider: true
    }
  }
);

const modalBodyVariants = cva(
  ['p-6'],
  {
    variants: {
      padding: {
        none: ['p-0'],
        sm: ['p-4'],
        md: ['p-6'],
        lg: ['p-8']
      }
    },
    defaultVariants: {
      padding: 'md'
    }
  }
);

const modalFooterVariants = cva(
  [
    'flex',
    'items-center',
    'justify-end',
    'gap-3',
    'p-6',
    'pt-4',
    'border-t',
    'border-gray-100',
    'dark:border-gray-800',
    // Data attributes для Tailwind v4
    'data-[theme=light]:border-gray-100',
    'data-[theme=dark]:border-gray-800'
  ],
  {
    variants: {
      withDivider: {
        true: ['border-t'],
        false: ['border-t-0']
      },
      alignment: {
        left: ['justify-start'],
        center: ['justify-center'],
        right: ['justify-end'],
        between: ['justify-between']
      }
    },
    defaultVariants: {
      withDivider: true,
      alignment: 'right'
    }
  }
);

export {
  modalOverlayVariants,
  modalContentVariants,
  modalHeaderVariants,
  modalBodyVariants,
  modalFooterVariants
};