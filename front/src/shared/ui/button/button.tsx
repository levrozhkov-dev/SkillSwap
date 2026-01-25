import React from 'react';
import * as Styled from './styled';

export type ButtonVariant = 'green' | 'white';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    variant = 'green',
    children,
    onClick,
    icon,
    iconPosition,
    ...restProps
  } = props;

  switch (variant) {
    case 'green':
      return (
        <Styled.ButtonGreen onClick={onClick} {...restProps}>
          {icon && iconPosition === 'left' && (
            <Styled.IconWrapper>{icon}</Styled.IconWrapper>
          )}

          <span>{children}</span>

          {icon && iconPosition === 'right' && (
            <Styled.IconWrapper>{icon}</Styled.IconWrapper>
          )}
        </Styled.ButtonGreen>
      );
    case 'white':
      return (
        <Styled.ButtonWhite onClick={onClick} {...restProps}>
          {icon && iconPosition === 'left' && (
            <Styled.IconWrapper>{icon}</Styled.IconWrapper>
          )}

          <span>{children}</span>

          {icon && iconPosition === 'right' && (
            <Styled.IconWrapper>{icon}</Styled.IconWrapper>
          )}
        </Styled.ButtonWhite>
      );
    default:
      return (
        <Styled.ButtonGreen onClick={onClick} {...restProps}>
          {children}
        </Styled.ButtonGreen>
      );
  }
};
