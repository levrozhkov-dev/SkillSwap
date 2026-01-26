import React from 'react';
import * as Styled from './ButtonIcon.styled';

interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconSrc: string; // Принимаем готовый путь к иконке
  onClick?: () => void;
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  iconSrc,
  onClick,
  ...props
}) => {
  return (
    <Styled.Button onClick={onClick} {...props}>
      <Styled.IconImage src={iconSrc} alt="Button icon" />
    </Styled.Button>
  );
};
