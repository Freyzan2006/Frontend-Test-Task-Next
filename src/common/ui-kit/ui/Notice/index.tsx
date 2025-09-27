"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { type VariantProps } from 'class-variance-authority';
import { Button } from '@ui-kit/ui/Button';
import { noticeVariants, progressBarVariants } from './variants';




interface NoticeProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof noticeVariants> {
  title?: string;
  message: string;
  duration?: number;
  autoClose?: boolean;
  showClose?: boolean;
  onClose?: () => void;
  action?: {
    label: string;
    onClick: () => void;
  };
  icon?: React.ReactNode;
}

const Notice = React.forwardRef<HTMLDivElement, NoticeProps>(
  ({ 
    className,
    variant = 'info',
    position = 'top-right',
    title,
    message,
    duration = 5000,
    autoClose = true,
    showClose = true,
    onClose,
    action,
    icon,
    ...props 
  }, ref) => {
    const [isVisible, setIsVisible] = useState(true);
    const [progress, setProgress] = useState(100);
    const [isPaused, setIsPaused] = useState(false);

    const handleClose = useCallback(() => {
      setIsVisible(false);
      setTimeout(() => {
        onClose?.();
      }, 300);
    }, [onClose]);

    // Авто-закрытие и прогресс-бар
    useEffect(() => {
      if (!autoClose || isPaused) return;

      const totalTime = duration;
      const intervalTime = 50;
      const steps = totalTime / intervalTime;
      const decrement = 100 / steps;

      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev <= 0) {
            clearInterval(progressInterval);
            handleClose();
            return 0;
          }
          return prev - decrement;
        });
      }, intervalTime);

      return () => clearInterval(progressInterval);
    }, [autoClose, duration, isPaused, handleClose]);

    // Иконки по умолчанию для каждого типа
    const getDefaultIcon = () => {
      const iconClass = "w-5 h-5 flex-shrink-0";
      
      switch (variant) {
        case 'success':
          return (
            <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          );
        case 'warning':
          return (
            <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          );
        case 'error':
          return (
            <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          );
        default:
          return (
            <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          );
      }
    };

    if (!isVisible) return null;

    return (
      <div
        ref={ref}
        className={noticeVariants({ variant, position, className })}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        {...props}
      >
        {/* Прогресс-бар */}
        {autoClose && (
          <div className={progressBarVariants({ variant })} style={{ width: `${progress}%` }} />
        )}

        {/* Контент */}
        <div className="flex items-start gap-3">
          {/* Иконка */}
          <div className="flex-shrink-0 mt-0.5">
            {icon || getDefaultIcon()}
          </div>

          {/* Текст */}
          <div className="flex-1 min-w-0">
            {title && (
              <h4 className="font-semibold text-sm mb-1">{title}</h4>
            )}
            <p className="text-sm leading-5">{message}</p>
            
            {/* Кнопка действия */}
            {action && (
              <div className="mt-3">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={action.onClick}
                  className="!p-0 !h-auto text-current hover:bg-current/10"
                >
                  {action.label}
                </Button>
              </div>
            )}
          </div>

          {/* Кнопка закрытия */}
          {showClose && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="absolute top-2 right-2 !p-1 !h-6 !w-6 opacity-70 hover:opacity-100"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Button>
          )}
        </div>
      </div>
    );
  }
);

Notice.displayName = 'Notice';



export { Notice };
export type { NoticeProps };