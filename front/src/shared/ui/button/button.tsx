import React from 'react';
import { ButtonGreen, ButtonWhite } from './styled';

export type ButtonVariant = 'green' | 'white';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { variant = 'green', children, onClick, ...restProps } = props;

  switch (variant) {
    case 'green':
      return (
        <ButtonGreen onClick={onClick} {...restProps}>
          {children}
        </ButtonGreen>
      );
    case 'white':
      return (
        <ButtonWhite onClick={onClick} {...restProps}>
          {children}
        </ButtonWhite>
      );
    default:
      return (
        <ButtonGreen onClick={onClick} {...restProps}>
          {children}
        </ButtonGreen>
      );
  }
};
