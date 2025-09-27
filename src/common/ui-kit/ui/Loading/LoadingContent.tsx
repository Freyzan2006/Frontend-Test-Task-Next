import { Loading, LoadingProps } from ".";


interface LoadingContentProps extends LoadingProps {
  isLoading: boolean;
  children: React.ReactNode;
  overlay?: boolean;
}

export const LoadingContent: React.FC<LoadingContentProps> = ({
  isLoading,
  children,
  overlay = true,
  ...props
}) => {
  if (!isLoading) return <>{children}</>;

  return (
    <div className="relative">
      {overlay && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg">
          <Loading {...props} />
        </div>
      )}
      <div className={isLoading && overlay ? 'opacity-50 pointer-events-none' : ''}>
        {children}
      </div>
    </div>
  );
};