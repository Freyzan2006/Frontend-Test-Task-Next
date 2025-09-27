"use client";

import { VariantProps } from "class-variance-authority";
import { modalBodyVariants } from "./variants";

interface ModalBodyProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalBodyVariants> {
  children: React.ReactNode;
}

const ModalBody = ({
  children,
  padding = 'md',
  className,
  ...props
}: ModalBodyProps) => {
  return (
    <div className={modalBodyVariants({ padding, className })} {...props}>
      {children}
    </div>
  );
};

export { ModalBody };
export type { ModalBodyProps };