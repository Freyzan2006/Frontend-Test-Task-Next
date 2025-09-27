"use client";

import { VariantProps } from "class-variance-authority";
import { modalHeaderVariants } from "./variants";

interface ModalHeaderProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalHeaderVariants> {
  children: React.ReactNode;
  showCloseButton?: boolean;
  onClose?: () => void;
}

const ModalHeader = ({
  children,
  withDivider = true,
  showCloseButton = true,
  onClose,
  className,
  ...props
}: ModalHeaderProps) => {
  return (
    <div className={modalHeaderVariants({ withDivider, className })} {...props}>
      <div className="flex-1">
        {children}
      </div>
      {showCloseButton && (
        <button
          type="button"
          onClick={onClose}
          className="
            inline-flex items-center justify-center 
            w-8 h-8 rounded-lg 
            text-gray-400 hover:text-gray-600 
            dark:text-gray-500 dark:hover:text-gray-300
            hover:bg-gray-100 dark:hover:bg-gray-800
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          "
          aria-label="Закрыть модальное окно"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
};

 

export { ModalHeader };
export type { ModalHeaderProps };