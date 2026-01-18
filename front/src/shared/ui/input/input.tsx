import React, { type InputHTMLAttributes, type ReactNode } from 'react';
import styles from './input.module.css';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
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

  // Формируем классы через массив и join
  const wrapperClasses = [
    styles['input-wrapper'],
    error && styles['input-wrapper--error'],
  ]
    .filter(Boolean)
    .join(' ');

  const inputClasses = [
    styles['input-field'],
    error && styles['input-field--error'],
    icon && iconPosition === 'left' && styles['input-field--icon-left'],
    icon && iconPosition === 'right' && styles['input-field--icon-right'],
  ]
    .filter(Boolean)
    .join(' ');

  const iconClasses = (position: 'left' | 'right') => [
    styles['input-icon'],
    styles[`input-icon--${position}`],
  ].join(' ');

  return (
    <div className={wrapperClasses}>
      {nameLabel && (
        <label htmlFor={inputId} className={styles['input-label']}>
          {nameLabel}
        </label>
      )}

      <div className={styles['input-container']}>
        {icon && iconPosition === 'left' && (
          <span className={iconClasses('left')}>{icon}</span>
        )}

        <input
          id={inputId}
          type={type}
          placeholder={placeholder}
          aria-invalid={error}
          {...rest}
          className={inputClasses}
        />

        {icon && iconPosition === 'right' && (
          <span className={iconClasses('right')}>{icon}</span>
        )}
      </div>

      {error && errorText && (
        <div className={styles['input-error-text']}>{errorText}</div>
      )}
    </div>
  );
};