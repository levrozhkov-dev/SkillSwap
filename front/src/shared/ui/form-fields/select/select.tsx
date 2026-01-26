import React, { useState, useRef, useEffect } from 'react';
import {
  FormFieldWrapper,
  FormFieldLabel,
  FormFieldErrorText,
} from '../shared.styled';
import {
  SelectContainer,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectDropdown,
  SelectOption,
  SelectOptionText,
  SelectCheckboxWrapper,
} from './select.styled';
import chevronDownIcon from '../../../img/icon/chevron-down.svg';
import { Checkbox } from '../../checkbox/checkbox';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  nameLabel?: string;
  error?: boolean;
  errorText?: string;
  placeholder?: string;
  options: SelectOption[];
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
  multiple?: boolean;
  disabled?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  nameLabel,
  error,
  errorText,
  placeholder,
  options,
  value,
  onChange,
  multiple = false,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const selectId = nameLabel || React.useId();

  // Закрытие при клике вне компонента
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      // Удаляем обработчик клика вне компонента
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Единый формат массива для проверки выбора
  const selectedValues = multiple
    ? Array.isArray(value)
      ? value
      : []
    : value
      ? [value]
      : [];

  // Функция возвращает строку, которая отображается в триггере (в закрытом состоянии).
  // 0 выбранных - плейсхолдер;
  // 1 выбранное - показывает label этой опции;
  // 2+ - показывает "Выбрано: n".
  const getDisplayText = (): string => {
    if (multiple) {
      if (selectedValues.length === 0) {
        return placeholder || '';
      }
      if (selectedValues.length === 1) {
        const option = options.find((opt) => opt.value === selectedValues[0]);
        return option?.label || '';
      }
      return `Выбрано: ${selectedValues.length}`;
    } else {
      if (!value) {
        return placeholder || '';
      }
      const option = options.find((opt) => opt.value === value);
      return option?.label || '';
    }
  };

  // Обработка выбора опции
  const handleOptionClick = (optionValue: string) => {
    if (disabled) return;

    if (multiple) {
      const currentValues = Array.isArray(value) ? value : [];
      const isSelected = currentValues.includes(optionValue);

      let newValues: string[];
      if (isSelected) {
        newValues = currentValues.filter((v) => v !== optionValue);
      } else {
        newValues = [...currentValues, optionValue];
      }

      onChange?.(newValues);
      // Не закрываем dropdown при multi-select
    } else {
      // Если multiple=false закрываем список
      onChange?.(optionValue);
      setIsOpen(false);
    }
  };

  // Обработка для работы с клавиатурой при выборе опции
  const handleOptionKeyDown = (
    event: React.KeyboardEvent,
    optionValue: string,
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleOptionClick(optionValue);
    }
  };

  // Проверка, выбрана ли опция
  const isOptionSelected = (optionValue: string): boolean => {
    if (multiple) {
      return selectedValues.includes(optionValue);
    }
    return value === optionValue;
  };

  const displayText = getDisplayText();
  const hasValue = multiple
    ? selectedValues.length > 0
    : !!value && value !== '';

  return (
    <FormFieldWrapper error={error}>
      {nameLabel && (
        <FormFieldLabel htmlFor={selectId}>{nameLabel}</FormFieldLabel>
      )}

      <SelectContainer ref={selectRef}>
        <SelectTrigger
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          error={error}
          $isOpen={isOpen}
        >
          <SelectValue $hasValue={hasValue} $isPlaceholder={!hasValue}>
            {displayText}
          </SelectValue>
          <SelectIcon $isOpen={isOpen}>
            <img src={chevronDownIcon} alt="" width={16} height={8} />
          </SelectIcon>
        </SelectTrigger>

        {isOpen && !disabled && (
          <SelectDropdown role="listbox">
            {options.map((option) => {
              const isSelected = isOptionSelected(option.value);

              return (
                <SelectOption
                  key={option.value}
                  role="option"
                  aria-selected={isSelected}
                  $isSelected={isSelected}
                  $multiple={multiple}
                  tabIndex={0}
                  onClick={() => handleOptionClick(option.value)}
                  onKeyDown={(e) => handleOptionKeyDown(e, option.value)}
                >
                  {multiple && (
                    <SelectCheckboxWrapper
                      data-checkbox-wrapper
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      onMouseDown={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <Checkbox
                        label=""
                        checked={isSelected}
                        onChange={() => handleOptionClick(option.value)}
                      />
                    </SelectCheckboxWrapper>
                  )}

                  <SelectOptionText $isSelected={isSelected}>
                    {option.label}
                  </SelectOptionText>
                </SelectOption>
              );
            })}
          </SelectDropdown>
        )}
      </SelectContainer>

      {error && errorText && (
        <FormFieldErrorText>{errorText}</FormFieldErrorText>
      )}
    </FormFieldWrapper>
  );
};
