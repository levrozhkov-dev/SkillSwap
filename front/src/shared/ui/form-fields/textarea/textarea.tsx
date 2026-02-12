import React, { type TextareaHTMLAttributes, type ReactNode } from 'react';
import * as Styled from '../shared.styled';
import { TextareaField } from './textarea.styled';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  nameLabel?: string;
  error?: boolean;
  errorText?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Textarea = (props: TextareaProps) => {
  const { nameLabel, error, errorText, placeholder, icon, iconPosition = 'right', ...rest } = props;
  const textareaId = nameLabel || React.useId();
  const hasIcon = !!icon;

  return (
    <Styled.FormFieldWrapper error={error}>
      {nameLabel && <Styled.FormFieldLabel htmlFor={textareaId}>{nameLabel}</Styled.FormFieldLabel>}

      <Styled.FormFieldContainer>
        {hasIcon && iconPosition === 'left' && (
          <Styled.FormFieldIcon iconPosition="left">{icon}</Styled.FormFieldIcon>
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
          <Styled.FormFieldIcon iconPosition="right">{icon}</Styled.FormFieldIcon>
        )}
      </Styled.FormFieldContainer>

      {error && errorText && <Styled.FormFieldErrorText>{errorText}</Styled.FormFieldErrorText>}
    </Styled.FormFieldWrapper>
  );
};