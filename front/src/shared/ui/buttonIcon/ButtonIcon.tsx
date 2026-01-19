import React from 'react';
import { StyledButton, IconImage } from './ButtonIcon.styled';

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
    <StyledButton onClick={onClick} {...props}>
      <IconImage src={iconSrc} alt="Button icon" />
    </StyledButton>
  );
};