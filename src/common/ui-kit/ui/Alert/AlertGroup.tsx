"use client";


interface AlertGroupProps {
  children: React.ReactNode;
  spacing?: 'sm' | 'md' | 'lg';
  className?: string;
}

const AlertGroup: React.FC<AlertGroupProps> = ({ 
  children, 
  spacing = 'md',
  className 
}) => {
  const spacingClass = {
    sm: 'space-y-2',
    md: 'space-y-4',
    lg: 'space-y-6'
  };

  return (
    <div className={`${spacingClass[spacing]} ${className || ''}`}>
      {children}
    </div>
  );
};

export { AlertGroup };
export type { AlertGroupProps };