import React from 'react';
import * as S from './styled';

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
        <S.ButtonGreen onClick={onClick} {...restProps}>
          {icon && iconPosition === 'left' && (
            <S.IconWrapper>{icon}</S.IconWrapper>
          )}

          <span>{children}</span>

          {icon && iconPosition === 'right' && (
            <S.IconWrapper>{icon}</S.IconWrapper>
          )}
        </S.ButtonGreen>
      );
    case 'white':
      return (
        <S.ButtonWhite onClick={onClick} {...restProps}>
          {icon && iconPosition === 'left' && (
            <S.IconWrapper>{icon}</S.IconWrapper>
          )}

          <span>{children}</span>

          {icon && iconPosition === 'right' && (
            <S.IconWrapper>{icon}</S.IconWrapper>
          )}
        </S.ButtonWhite>
      );
    default:
      return (
        <S.ButtonGreen onClick={onClick} {...restProps}>
          {children}
        </S.ButtonGreen>
      );
  }
};
