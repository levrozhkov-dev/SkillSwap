import { useState, useEffect, forwardRef } from 'react';
import DatePickerLib from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ru } from 'date-fns/locale/ru';
import { Input } from '../../../../src/shared/ui/form-fields/input';
import { Button } from '../button';
import * as Styled from './date-picker.styled';

interface ControlledDatePickerProps {
  selected: Date | null;
  onChange: (date: Date | null) => void;
  nameLabel?: string;
  error?: boolean;
  errorText?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

interface CustomInputProps {
  value?: string;
  onClick?: () => void;
  nameLabel?: string;
  error?: boolean;
  errorText?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

// eslint-disable-next-line react/display-name
const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  (
    props,
    ref,
  ) => {
    const { value, onClick, nameLabel, error, errorText, icon, iconPosition = 'right' } = props;
    
    return (
      <Input
        ref={ref}
        nameLabel={nameLabel || ''}
        value={value || ''}
        onClick={onClick}
        placeholder="дд.мм.гггг"
        readOnly
        error={error}
        errorText={errorText}
        icon={icon}
        iconPosition={iconPosition}
      />
    );
  },
);

CustomInput.displayName = 'CustomInput';

export function ControlledDatePicker({
  selected,
  onChange,
  nameLabel = 'Дата рождения',
  error,
  errorText,
  icon, // ✅ Добавлено
  iconPosition = 'right', // ✅ По умолчанию справа
}: ControlledDatePickerProps) {
  const [draftDate, setDraftDate] = useState<Date | null>(selected);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setDraftDate(selected);
  }, [selected]);

  const handleInputClick = () => {
    setDraftDate(selected);
    setIsOpen(true);
  };

  const handleApply = () => {
    onChange(draftDate);
    setIsOpen(false);
  };

  const handleCancel = () => {
    setDraftDate(selected);
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Styled.PickerWrapper>
      <Styled.CalendarStyles>
        <DatePickerLib
          selected={draftDate}
          onChange={(date: Date | null) => setDraftDate(date)}
          open={isOpen}
          onInputClick={handleInputClick}
          onClickOutside={handleClose}
          customInput={
            <CustomInput
              value={
                draftDate
                  ? draftDate.toLocaleDateString('ru-RU', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                    })
                  : ''
              }
              onClick={handleInputClick}
              nameLabel={nameLabel}
              error={error}
              errorText={errorText}
              icon={icon} // ✅ Передаём иконку
              iconPosition={iconPosition} // ✅ Передаём позицию
            />
          }
          locale={ru}
          dateFormat="dd.MM.yyyy"
          shouldCloseOnSelect={false}
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          showPopperArrow={false}
          disabledKeyboardNavigation
        >
          <Styled.Footer>
            <Button variant="white" onClick={handleCancel}>
              Отменить
            </Button>
            <Button variant="green" onClick={handleApply} disabled={!draftDate}>
              Выбрать
            </Button>
          </Styled.Footer>
        </DatePickerLib>
      </Styled.CalendarStyles>
    </Styled.PickerWrapper>
  );
}
