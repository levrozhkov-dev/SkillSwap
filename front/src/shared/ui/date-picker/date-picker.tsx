import { useState } from 'react';
import DatePickerLib, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ru } from 'date-fns/locale/ru';
import { DateInput } from './date-input';
import { Button } from '../button';
import * as Styled from './date-picker.styled';

registerLocale('ru', ru);

export function DatePicker() {
  const [value, setValue] = useState<Date | null>(null);
  const [draftDate, setDraftDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (date: Date | null) => {
    setDraftDate(date);
  };

  const handleCancel = () => {
    setDraftDate(null);
    setValue(null);
    setIsOpen(false);
  };

  const handleApply = () => {
    setValue(draftDate);
    setIsOpen(false);
  };

  return (
    <Styled.PickerWrapper>
      <Styled.CalendarStyles>
        <DatePickerLib
          selected={draftDate}
          onChange={handleChange}
          open={isOpen}
          onClickOutside={() => setIsOpen(false)}
          onInputClick={() => {
            setDraftDate(value);
            setIsOpen(true);
          }}
          customInput={<DateInput />}
          locale="ru"
          dateFormat="dd.MM.yyyy"
          shouldCloseOnSelect={false}
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          showPopperArrow={false}
          disabledKeyboardNavigation
          placeholderText="дд.мм.гггг"
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
