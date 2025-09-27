"use client";

// Компонент для разделителя
const DropdownDivider: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`border-t border-gray-200 dark:border-gray-700 my-1 ${className || ''}`} />
);

export { DropdownDivider };