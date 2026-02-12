import React, { useState, useRef, useEffect } from 'react';
import * as Styled from '../shared.styled';
import {
  Container,
  Trigger,
  Value,
  Icon,
  Dropdown,
  Option,
  OptionText,
  Input,
} from './autoComplete.styled';
import chevronDownIcon from '../../../img/icon/chevron-down.svg';

export interface Option {
  value: string;
  label: string;
}

export interface AutoCompleteProps {
  nameLabel?: string;
  error?: boolean;
  errorText?: string;
  placeholder?: string;
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  searchable?: boolean;
  onSearchChange?: (value: string) => void;
  isLoading?: boolean;
  allowCustomValue?: boolean;
}

export const AutoComplete = ({
  nameLabel,
  error,
  errorText,
  placeholder,
  options,
  value,
  onChange,
  disabled = false,
  searchable = false,
  onSearchChange,
  isLoading = false,
  allowCustomValue = false,
}: AutoCompleteProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);
  const selectRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const selectId = nameLabel || React.useId();

  // для сброса activeIndex при открытии/закрытии дропдауна
  useEffect(() => {
    if (!isOpen) {
      setActiveIndex(-1);
    } else {
      // При открытии сбрасываем активный индекс
      setActiveIndex(-1);
    }
  }, [isOpen]);

  // для синхронизации searchQuery с value при закрытом дропдауне
  useEffect(() => {
    if (!isOpen) {
      if (value && options.some((opt) => opt.value === value)) {
        const label = options.find((opt) => opt.value === value)?.label || '';
        setSearchQuery(label);
      } else if (allowCustomValue && value) {
        setSearchQuery(value);
      } else {
        setSearchQuery('');
      }
    }
  }, [value, options, allowCustomValue, isOpen]);

  // для фильтрации опций на основе searchQuery
  useEffect(() => {
    const query = searchQuery.trim();
    if (!query) {
      setFilteredOptions(options);
      return;
    }

    const filtered = options.filter((opt) =>
      opt.label.toLowerCase().includes(query.toLowerCase()),
    );

    // Проверяем, есть ли точное совпадение, чтобы не предлагать "Добавить"
    const hasExactMatch = options.some(
      (opt) => opt.value.toLowerCase() === query.toLowerCase(),
    );

    if (allowCustomValue && !hasExactMatch) {
      setFilteredOptions(
        filtered.length > 0
          ? filtered
          : [{ value: query, label: `Добавить: "${query}"` }],
      );
    } else {
      setFilteredOptions(filtered);
    }
  }, [options, searchQuery, allowCustomValue]);

  // для фокуса на инпут при открытии
  useEffect(() => {
    if (isOpen && searchable && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, searchable]);

  // для закрытия при клике вне компонента
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
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Управление клавиатурой
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;

    // Открываем при стрелке вниз, если закрыто
    if (!isOpen && event.key === 'ArrowDown') {
      event.preventDefault();
      setIsOpen(true);
      return;
    }

    if (!isOpen) return;

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex((prev) => {
        let next = prev;
        if (event.key === 'ArrowDown') {
          next = prev < filteredOptions.length - 1 ? prev + 1 : 0;
        } else {
          next = prev > 0 ? prev - 1 : filteredOptions.length - 1;
        }
        return next;
      });
      return;
    }

    if (event.key === 'Enter') {
      if (activeIndex >= 0 && activeIndex < filteredOptions.length) {
        event.preventDefault();
        const selectedOption = filteredOptions[activeIndex];
        const isCustom =
          allowCustomValue &&
          !options.some((opt) => opt.value === selectedOption.value);
        handleOptionClick(selectedOption.value, isCustom);
        setIsOpen(false);
        setActiveIndex(-1);
        return;
      }
      // Если Enter, но нет активной опции — просто открываем/закрываем
      event.preventDefault();
      setIsOpen(!isOpen);
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      setIsOpen(false);
      setActiveIndex(-1);
      setSearchQuery(
        value ? options.find((opt) => opt.value === value)?.label || value : '',
      );
    }
  };

  const handleOptionClick = (optionValue: string, isCustomOption: boolean) => {
    const finalValue = isCustomOption ? searchQuery.trim() : optionValue;
    onChange?.(finalValue);
    setIsOpen(false);
    setSearchQuery(finalValue);
  };

  const handleOptionKeyDown = (
    event: React.KeyboardEvent,
    optionValue: string,
    isCustom: boolean,
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleOptionClick(optionValue, isCustom);
    }
  };

  const displayText = value
    ? options.find((opt) => opt.value === value)?.label || value
    : placeholder;

  const hasValue = !!value;

  return (
    <Styled.FormFieldWrapper
      error={error}
      role="group"
      aria-labelledby={`${selectId}-label`}
    >
      {nameLabel && (
        <Styled.FormFieldLabel htmlFor={selectId} id={`${selectId}-label`}>
          {nameLabel}
        </Styled.FormFieldLabel>
      )}

      <Container ref={selectRef} onKeyDown={handleKeyDown}>
        <Trigger
          type="button"
          onClick={() => !disabled && !isOpen && setIsOpen(true)}
          disabled={disabled}
          error={error}
          $isOpen={isOpen}
          role="combobox"
          aria-expanded={isOpen}
          aria-controls={isOpen ? `${selectId}-dropdown` : undefined}
          aria-haspopup="listbox"
          aria-label={nameLabel || 'Выберите значение'}
          tabIndex={0}
        >
          {isOpen && searchable ? (
            <Input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => {
                const value = e.target.value;
                setSearchQuery(value);
                onSearchChange?.(value);
              }}
              onKeyDown={(e) => {
                handleKeyDown(e);
              }}
              onClick={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
              placeholder={placeholder}
              aria-autocomplete="list"
              aria-controls={`${selectId}-dropdown`}
            />
          ) : (
            <Value
              $hasValue={hasValue}
              $isPlaceholder={!hasValue}
              aria-hidden="true"
            >
              {displayText}
            </Value>
          )}
          <Icon $isOpen={isOpen} aria-hidden="true">
            <img src={chevronDownIcon} alt="" width={16} height={8} />
          </Icon>
        </Trigger>

        {isOpen && !disabled && (
          <Dropdown role="listbox">
            {isLoading ? (
              <Option
                role="option"
                aria-disabled="true"
                $isActive={false}
                aria-label="Загрузка..."
              >
                Идёт загрузка...
              </Option>
            ) : filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => {
                const isCustom =
                  allowCustomValue &&
                  !options.some((opt) => opt.value === option.value);
                const isSelected = value === option.value;
                const isActive = activeIndex === index;
                return (
                  <Option
                    key={option.value}
                    role="option"
                    aria-selected={isSelected}
                    $isActive={isActive}
                    tabIndex={0}
                    onClick={() => handleOptionClick(option.value, isCustom)}
                    onKeyDown={(e) =>
                      handleOptionKeyDown(e, option.value, isCustom)
                    }
                  >
                    <OptionText $isSelected={value === option.value}>
                      {option.label}
                    </OptionText>
                  </Option>
                );
              })
            ) : (
              <Option
                role="option"
                aria-disabled="true"
                $isActive={false}
                aria-label="Нет результатов"
              >
                Не найдено
              </Option>
            )}
          </Dropdown>
        )}
      </Container>

      {error && errorText && (
        <Styled.FormFieldErrorText>{errorText}</Styled.FormFieldErrorText>
      )}
    </Styled.FormFieldWrapper>
  );
};
