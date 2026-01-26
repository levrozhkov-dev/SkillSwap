import React, { type InputHTMLAttributes, type ReactNode } from 'react';
import { InputField } from './input.styled';
import * as Styled from '../../form-fields/shared.styled';

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
    <Styled.FormFieldWrapper error={error}>
      {nameLabel && (
        <Styled.FormFieldLabel htmlFor={inputId}>{nameLabel}</Styled.FormFieldLabel>
      )}

      <Styled.FormFieldContainer>
        {hasIcon && iconPosition === 'left' && (
          <Styled.FormFieldIcon iconPosition="left">{icon}</Styled.FormFieldIcon>
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
          <Styled.FormFieldIcon iconPosition="right">{icon}</Styled.FormFieldIcon>
        )}
      </Styled.FormFieldContainer>

      {error && errorText && (
        <Styled.FormFieldErrorText>{errorText}</Styled.FormFieldErrorText>
      )}
    </Styled.FormFieldWrapper>
  );
};
