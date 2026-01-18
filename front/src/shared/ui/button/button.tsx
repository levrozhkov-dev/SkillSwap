import React from 'react';
import styled from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const StyledButton = styled.button<{ $variant: ButtonVariant }>`
  font-family: var(--font-main);
  font-size: var(--font-size-md);
  padding: var(--space-sm) var(--space-md);
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-weight: 500;

  ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return `
          background-color: var(--color-primary);
          color: var(--color-text-main);
          
          &:hover {
            background-color: var(--color-border);
            transform: translateY(-1px);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          
          &:active {
            background-color: var(--color-primary);
            transform: translateY(0);
            box-shadow: none;
          }
        `;
      case 'secondary':
        return `
          background-color: var(--color-bg-card);
          color: var(--color-text-main);
          border: 1px solid var(--color-border);
          
          &:hover {
            background-color: var(--color-bg-main);
            border-color: var(--color-primary);
            transform: translateY(-1px);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          
          &:active {
            background-color: var(--color-bg-card);
            transform: translateY(0);
            box-shadow: none;
          }
        `;
      case 'danger':
        return `
          background-color: var(--color-danger);
          color: #ffffff;
          
          &:hover {
            background-color: #c82333;
            transform: translateY(-1px);
            box-shadow: 0 2px 4px rgba(220, 53, 69, 0.3);
          }
          
          &:active {
            background-color: var(--color-danger);
            transform: translateY(0);
            box-shadow: none;
          }
        `;
      default:
        return '';
    }
  }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;

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
