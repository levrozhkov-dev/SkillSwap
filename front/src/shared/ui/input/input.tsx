import React, { type InputHTMLAttributes, type ReactNode } from 'react';
import * as Styled from './input.styled';

export interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> {
  type?: string;
  nameLabel?: string;
  error?: boolean;
  errorText?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  nameLabel,
  error,
  errorText,
  placeholder,
  icon,
  iconPosition = 'right',
  ...rest
}) => {
  const inputId = nameLabel || React.useId();
  const hasIcon = !!icon; // Флаг: есть ли иконка?

  return (
    <Styled.InputWrapper error={error}>
      {nameLabel && <Styled.InputLabel htmlFor={inputId}>{nameLabel}</Styled.InputLabel>}

      <Styled.InputContainer>
        {hasIcon && iconPosition === 'left' && (
          <Styled.InputIcon iconPosition="left">{icon}</Styled.InputIcon>
        )}

        <Styled.InputField
          id={inputId}
          type={type}
          placeholder={placeholder}
          aria-invalid={error}
          error={error}
          iconPosition={iconPosition}
          hasIcon={hasIcon}
          {...rest}
        />

        {icon && iconPosition === 'right' && (
          <Styled.InputIcon iconPosition="right">{icon}</Styled.InputIcon>
        )}
      </Styled.InputContainer>

      {error && errorText && <Styled.InputErrorText>{errorText}</Styled.InputErrorText>}
    </Styled.InputWrapper>
  );
};
