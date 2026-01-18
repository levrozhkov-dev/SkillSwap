import React from 'react';
import { StyledButton } from './styled';

export type ButtonVariant = 'primary' | 'secondary' | 'danger';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  onClick,
  ...props
}) => {
  return (
    <StyledButton $variant={variant} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};
