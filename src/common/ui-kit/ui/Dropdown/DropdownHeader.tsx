"use client";


// Компонент для заголовка группы
interface DropdownHeaderProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
}
  
const DropdownHeader: React.FC<DropdownHeaderProps> = ({ children, icon, className }) => (
    <div className={`
      flex items-center gap-3 px-4 py-2 text-xs font-semibold text-gray-500 
      uppercase tracking-wider dark:text-gray-400 ${className || ''}
    `}>
      {icon && <span className="w-4 h-4 flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </div>
);
  
export { DropdownHeader };
export type { DropdownHeaderProps };
