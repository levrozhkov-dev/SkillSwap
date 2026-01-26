import React, { type TextareaHTMLAttributes, type ReactNode } from 'react';
import {
  FormFieldWrapper,
  FormFieldLabel,
  FormFieldContainer,
  FormFieldIcon,
  FormFieldErrorText,
} from '../shared.styled';
import { TextareaField } from './textarea.styled';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  nameLabel?: string;
  error?: boolean;
  errorText?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Textarea: React.FC<TextareaProps> = ({
  nameLabel,
  error,
  errorText,
  placeholder,
  icon,
  iconPosition = 'right',
  ...rest
}) => {
  const textareaId = nameLabel || React.useId();
  const hasIcon = !!icon;

  return (
    <FormFieldWrapper error={error}>
      {nameLabel && <FormFieldLabel htmlFor={textareaId}>{nameLabel}</FormFieldLabel>}

      <FormFieldContainer>
        {hasIcon && iconPosition === 'left' && (
          <FormFieldIcon iconPosition="left">{icon}</FormFieldIcon>
        )}

        <TextareaField
          id={textareaId}
          placeholder={placeholder}
          aria-invalid={error}
          error={error}
          iconPosition={iconPosition}
          hasIcon={hasIcon}
          {...rest}
        />

        {icon && iconPosition === 'right' && (
          <FormFieldIcon iconPosition="right">{icon}</FormFieldIcon>
        )}
      </FormFieldContainer>

      {error && errorText && <FormFieldErrorText>{errorText}</FormFieldErrorText>}
    </FormFieldWrapper>
  );
};