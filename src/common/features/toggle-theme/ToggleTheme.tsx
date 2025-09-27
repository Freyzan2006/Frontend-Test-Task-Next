"use client";

import React, { useState, useEffect } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const toggleThemeVariants = cva(
  [
    'relative',
    'inline-flex',
    'items-center',
    'justify-center',
    'rounded-full',
    'border',
    'transition-all',
    'duration-300',
    'ease-in-out',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'focus:ring-offset-white',
    'dark:focus:ring-offset-gray-950',
    'cursor-pointer',
    'overflow-hidden'
  ],
  {
    variants: {
      variant: {
        primary: [
          'border-gray-300',
          'bg-gray-100',
          'hover:bg-gray-200',
          'dark:border-gray-600',
          'dark:bg-gray-800',
          'dark:hover:bg-gray-700',
          'focus:ring-blue-500',
          'dark:focus:ring-blue-400'
        ],
        ghost: [
          'border-transparent',
          'bg-transparent',
          'hover:bg-gray-100',
          'dark:hover:bg-gray-800',
          'focus:ring-gray-500',
          'dark:focus:ring-gray-400'
        ],
        outline: [
          'border-gray-400',
          'bg-transparent',
          'hover:bg-gray-50',
          'dark:border-gray-500',
          'dark:hover:bg-gray-800',
          'focus:ring-gray-500',
          'dark:focus:ring-gray-400'
        ]
      },
      size: {
        sm: ['w-12', 'h-6', 'p-0.5'],
        md: ['w-14', 'h-7', 'p-1'],
        lg: ['w-16', 'h-8', 'p-1']
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
);

const toggleHandleVariants = cva(
  [
    'absolute',
    'rounded-full',
    'transition-all',
    'duration-300',
    'ease-in-out',
    'flex',
    'items-center',
    'justify-center',
    'shadow-sm',
    'border'
  ],
  {
    variants: {
      size: {
        sm: ['w-4', 'h-4', 'border-gray-300'],
        md: ['w-5', 'h-5', 'border-gray-300'],
        lg: ['w-6', 'h-6', 'border-gray-300']
      },
      isDark: {
        true: [
          'bg-gray-800',
          'border-gray-700',
          'translate-x-full',
          'dark:bg-yellow-400',
          'dark:border-yellow-500'
        ],
        false: [
          'bg-white',
          'border-gray-300',
          'translate-x-0',
          'dark:bg-gray-300',
          'dark:border-gray-400'
        ]
      }
    },
    defaultVariants: {
      size: 'md',
      isDark: false
    }
  }
);

const iconVariants = cva(
  [
    'absolute',
    'transition-all',
    'duration-300',
    'ease-in-out',
    'flex',
    'items-center',
    'justify-center'
  ],
  {
    variants: {
      size: {
        sm: ['w-3', 'h-3'],
        md: ['w-3.5', 'h-3.5'],
        lg: ['w-4', 'h-4']
      },
      position: {
        left: ['left-1', 'opacity-100'],
        right: ['right-1', 'opacity-100'],
        hidden: ['opacity-0']
      }
    },
    defaultVariants: {
      size: 'md',
      position: 'left'
    }
  }
);

type Theme = 'light' | 'dark' | 'system';

interface ToggleThemeProps 
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'>,
    VariantProps<typeof toggleThemeVariants> {
  defaultTheme?: Theme;
  onChange?: (theme: Theme) => void;
  showIcons?: boolean;
  showLabels?: boolean;
  storageKey?: string;
}

const ToggleTheme = React.forwardRef<HTMLButtonElement, ToggleThemeProps>(
  ({ 
    className,
    variant = 'primary',
    size = 'md',
    defaultTheme = 'system',
    onChange,
    showIcons = true,
    showLabels = false,
    storageKey = 'ui-theme',
    ...props 
  }, ref) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    // Функция применения темы через CSS variables
    const applyTheme = (theme: Theme, systemTheme: 'light' | 'dark' = 'light') => {
      const root = document.documentElement;
      const effectiveTheme = theme === 'system' ? systemTheme : theme;
      
      // Устанавливаем класс dark на html элемент
      if (effectiveTheme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      
      // Также обновляем CSS variables для consistency
      if (effectiveTheme === 'dark') {
        root.style.setProperty('--background', '#0a0a0a');
        root.style.setProperty('--foreground', '#ededed');
      } else {
        root.style.setProperty('--background', '#ffffff');
        root.style.setProperty('--foreground', '#171717');
      }
      
      localStorage.setItem(storageKey, theme);
      onChange?.(theme);
      setIsDark(effectiveTheme === 'dark');
    };

    // Инициализация темы
    useEffect(() => {
      if (!mounted) return;

      const stored = localStorage.getItem(storageKey) as Theme;
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      
      const initialTheme = stored || defaultTheme;
      setTheme(initialTheme);
      applyTheme(initialTheme, systemTheme);
    }, [mounted, defaultTheme, storageKey]);

    // Обработчик изменения системной темы
    useEffect(() => {
      if (!mounted) return;

      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const handleChange = (e: MediaQueryListEvent) => {
        if (theme === 'system') {
          applyTheme('system', e.matches ? 'dark' : 'light');
        }
      };
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }, [mounted, theme]);

    const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light';
      setTheme(newTheme);
      
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      applyTheme(newTheme, systemTheme);
    };

    const getNextThemeLabel = () => {
      switch (theme) {
        case 'light': return 'Переключить на тёмную тему';
        case 'dark': return 'Переключить на системную тему';
        case 'system': return 'Переключить на светлую тему';
        default: return 'Переключить тему';
      }
    };

    if (!mounted) {
      return (
        <div className={toggleThemeVariants({ variant, size, className })}>
          <div className={toggleHandleVariants({ size, isDark: false })} />
        </div>
      );
    }

    return (
      <div className="inline-flex items-center gap-3">
        {showLabels && (
          <span className={`
            text-sm font-medium transition-colors duration-200
            text-gray-700 dark:text-gray-300
            ${size === 'sm' ? 'text-xs' : ''}
            ${size === 'lg' ? 'text-base' : ''}
          `}>
            {theme === 'light' && 'Светлая'}
            {theme === 'dark' && 'Тёмная'}
            {theme === 'system' && 'Системная'}
          </span>
        )}
        
        <button
          ref={ref}
          type="button"
          onClick={toggleTheme}
          className={toggleThemeVariants({ variant, size, className })}
          aria-label={getNextThemeLabel()}
          title={getNextThemeLabel()}
          {...props}
        >
          {/* Фоновый градиент */}
          <div className={`
            absolute inset-0 rounded-full transition-opacity duration-300
            ${isDark 
              ? 'bg-gradient-to-r from-gray-800 to-gray-900 opacity-100' 
              : 'bg-gradient-to-r from-blue-100 to-yellow-100 opacity-0'
            }
          `} />
          
          {/* Иконки */}
          {showIcons && (
            <>
              <div className={iconVariants({ 
                size, 
                position: isDark ? 'hidden' : 'left' 
              })}>
                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              </div>
              
              <div className={iconVariants({ 
                size, 
                position: isDark ? 'right' : 'hidden' 
              })}>
                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </div>
            </>
          )}
          
          <div className={toggleHandleVariants({ size, isDark })}>
            {theme === 'system' && (
              <svg className="w-2/3 h-2/3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.308 1.757a1 1 0 01-1.94.348L10.22 15H9.78l-.308 1.757a1 1 0 01-1.94-.348L7.22 15H5a2 2 0 01-2-2V5zm5.77 7.5a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zM15 7a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
              </svg>
            )}
          </div>
        </button>
      </div>
    );
  }
);

ToggleTheme.displayName = 'ToggleTheme';

export { ToggleTheme };
export type { ToggleThemeProps, Theme };