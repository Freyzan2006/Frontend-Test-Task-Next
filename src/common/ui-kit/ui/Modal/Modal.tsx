"use client";

import { useEffect, useRef } from "react";
import { modalContentVariants, modalOverlayVariants } from "./variants";
import { VariantProps } from "class-variance-authority";
import { ModalFooter } from "./ModalFooter";
import { ModalBody } from "./ModalBody";
import { ModalHeader } from "./ModalHeader";




interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: VariantProps<typeof modalContentVariants>['size'];
  animation?: VariantProps<typeof modalOverlayVariants>['animation'];
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  className?: string;
}

const Modal = ({
  isOpen,
  onClose,
  children,
  size = 'md',
  animation = 'fade',
  closeOnOverlayClick = true,
  closeOnEscape = true,
  className,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Обработка ESC клавиши
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && closeOnEscape) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeOnEscape, onClose]);

  // Фокус на модалке при открытии
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className={modalOverlayVariants({ animation, className })}
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className={modalContentVariants({ size, animation })}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </div>
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export { Modal };
export type { ModalProps };