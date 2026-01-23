import React from 'react';
import { DecorativeBlock, DecorativeImage } from './DecorativeBlock.styled';

interface LoginDecorativeBlockProps {
  children: React.ReactNode;
  image?: string;
  className?: string;
}

export const LoginDecorativeBlock: React.FC<LoginDecorativeBlockProps> = ({
  children,
  image,
  className,
}) => {
  return (
    <DecorativeBlock className={className}>
      {image && <DecorativeImage src={image} alt="Изображение лампочки" />}
      {children}
    </DecorativeBlock>
  );
};
