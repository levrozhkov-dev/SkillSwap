import { useState } from 'react';
import DatePickerLib, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ru } from 'date-fns/locale/ru';

import { PickerWrapper, CalendarStyles, Footer } from './date-picker.styled';
import { DateInput } from './date-input';
import { Button } from '../button';

registerLocale('ru', ru);

export function DatePicker() {
  const [value, setValue] = useState<Date | null>(null);
  const [draftDate, setDraftDate] = useState<Date | null>(null);

  const handleChange = (date: Date | null) => {
    setDraftDate(date);
  };

  const handleCancel = () => {
    setDraftDate(null);
    setValue(null);
  };

  const handleApply = () => {
    setValue(draftDate);
  };

  return (
    <PickerWrapper>
      <CalendarStyles>
        <DatePickerLib
          selected={draftDate}
          onChange={handleChange}
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
          <Footer>
            <Button variant="white" onClick={handleCancel}>
              Отменить
            </Button>

            <Button variant="green" onClick={handleApply} disabled={!draftDate}>
              Выбрать
            </Button>
          </Footer>
        </DatePickerLib>
      </CalendarStyles>
    </PickerWrapper>
  );
}
