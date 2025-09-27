"use client";

import { Text, TextProps } from "../Text";
import { Title, TitleProps } from "../Title";



interface TitleTextGroupProps {
  title: string;
  titleLevel?: TitleProps['level'];
  text: string;
  textSize?: TextProps['size'];
  className?: string;
  gap?: 'sm' | 'md' | 'lg';
  align?: 'left' | 'center' | 'right';
}

const TitleTextGroup: React.FC<TitleTextGroupProps> = ({
  title,
  titleLevel = 'h2',
  text,
  textSize = 'base',
  className,
  gap = 'md',
  align = 'left'
}) => {
  const gapClass = {
    sm: 'space-y-1',
    md: 'space-y-2',
    lg: 'space-y-3'
  };

  return (
    <div className={`${gapClass[gap]} ${className || ''}`}>
      <Title level={titleLevel} align={align}>{title}</Title>
      <Text size={textSize} align={align} variant="muted">{text}</Text>
    </div>
  );
};

export { TitleTextGroup };
export type { TitleTextGroupProps };