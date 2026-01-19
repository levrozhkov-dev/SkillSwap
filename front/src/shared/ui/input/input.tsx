import React, { type InputHTMLAttributes, type ReactNode } from 'react';
import {
  InputWrapper,
  InputLabel,
  InputField,
  InputContainer,
  InputIcon,
  InputErrorText,
} from './input.styled';

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
    <InputWrapper error={error}>
      {nameLabel && <InputLabel htmlFor={inputId}>{nameLabel}</InputLabel>}

      <InputContainer>
        {hasIcon && iconPosition === 'left' && (
          <InputIcon iconPosition="left">{icon}</InputIcon>
        )}

        <InputField
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
          <InputIcon iconPosition="right">{icon}</InputIcon>
        )}
      </InputContainer>

      {error && errorText && <InputErrorText>{errorText}</InputErrorText>}
    </InputWrapper>
  );
};
