import React from 'react';
import * as Styled from './DecorativeBlock.styled';

interface LoginDecorativeBlockProps {
  children: React.ReactNode;
  image?: string;
  className?: string;
}

export const LoginDecorativeBlock = (props: LoginDecorativeBlockProps) => {
  const { children, image, className } = props;
  return (
    <Styled.DecorativeBlock className={className}>
      {image && (
        <Styled.DecorativeImage src={image} alt="Декоративное изображение" />
      )}
      {children}
    </Styled.DecorativeBlock>
  );
};
