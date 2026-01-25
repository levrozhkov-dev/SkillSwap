import React from 'react';
import * as Styled from './DecorativeBlock.styled';

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
    <Styled.DecorativeBlock className={className}>
      {image && (
        <Styled.DecorativeImage src={image} alt="Декоративное изображение" />
      )}
      {children}
    </Styled.DecorativeBlock>
  );
};
