"use client";

import { VariantProps } from "class-variance-authority";
import { modalFooterVariants } from "./variants";

interface ModalFooterProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalFooterVariants> {
  children: React.ReactNode;
}


const ModalFooter = ({
  children,
  withDivider = true,
  alignment = 'right',
  className,
  ...props
}: ModalFooterProps) => {
  return (
    <div className={modalFooterVariants({ withDivider, alignment, className })} {...props}>
      {children}
    </div>
  );
};

export { ModalFooter };
export type { ModalFooterProps };