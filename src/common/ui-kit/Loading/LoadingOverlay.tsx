import { Loading, LoadingProps } from ".";


// Компонент для затемнения фона
interface LoadingOverlayProps extends LoadingProps {
  overlay?: boolean;
  backdropBlur?: boolean;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  overlay = true,
  backdropBlur = true,
  ...props
}) => {
  return (
    <div className={`
      fixed inset-0 z-50 flex items-center justify-center
      ${overlay ? 'bg-black/20 dark:bg-black/40' : ''}
      ${backdropBlur ? 'backdrop-blur-sm' : ''}
    `}>
      <Loading {...props} />
    </div>
  );
};