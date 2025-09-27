import { cva } from "class-variance-authority";


export const textVariants = cva(
  [
    'text-foreground', 
    'transition-colors',
    'duration-200'
  ],
  {
    variants: {
      size: {
        xs: ['text-xs', 'leading-4'],
        sm: ['text-sm', 'leading-5'],
        base: ['text-base', 'leading-6'],
        lg: ['text-lg', 'leading-7'],
        xl: ['text-xl', 'leading-8']
      },
      weight: {
        light: ['font-light'],
        normal: ['font-normal'],
        medium: ['font-medium'],
        semibold: ['font-semibold'],
        bold: ['font-bold']
      },
      align: {
        left: ['text-left'],
        center: ['text-center'],
        right: ['text-right'],
        justify: ['text-justify']
      },
      variant: {
        default: [], // Использует основной цвет темы
        muted: ['text-muted-foreground'], // Приглушенный цвет через CSS variable
        success: ['text-success'], // Цвет успеха через CSS variable
        warning: ['text-warning'], // Цвет предупреждения через CSS variable
        error: ['text-destructive'], // Цвет ошибки через CSS variable
        info: ['text-info'] // Информационный цвет через CSS variable
      },
      leading: {
        tight: ['leading-tight'],
        snug: ['leading-snug'],
        normal: ['leading-normal'],
        relaxed: ['leading-relaxed'],
        loose: ['leading-loose']
      }
    },
    defaultVariants: {
      size: 'base',
      weight: 'normal',
      align: 'left',
      variant: 'default',
      leading: 'normal'
    }
  }
);