import styled from 'styled-components';

export const PickerWrapper = styled.div`
  width: 208px;

  .react-datepicker-wrapper,
  .react-datepicker__input-container {
    width: 100%;
  }
`;

export const CalendarStyles = styled.div`
  /* ===== POPPER ===== */
  .react-datepicker-popper {
    margin-top: 8px;
  }

  /* ===== КАЛЕНДАРЬ ===== */
  .react-datepicker {
    width: 280px;
    padding: 0;
    background: var(--color-bg-card);
    border: 1px solid var(--color-text-main);
    border-radius: var(--radius-md);
    box-shadow: none;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
  }

  /* убираем стандартную навигацию */
  .react-datepicker__navigation,
  .react-datepicker__triangle,
  .react-datepicker__current-month {
    display: none;
  }

  /* ===== HEADER ===== */
  .react-datepicker__header {
    background: transparent;
    border-bottom: none;
    padding: var(--space-md) var(--space-md) var(--space-sm);
  }

  /* ===== МЕСЯЦ / ГОД ===== */
  .react-datepicker__month-dropdown-container--select,
  .react-datepicker__year-dropdown-container--select {
    display: inline-flex;
    align-items: center;
  }

  .react-datepicker__month-dropdown-container,
  .react-datepicker__year-dropdown-container {
    margin: 0 var(--space-sm);
  }

  .react-datepicker__month-select,
  .react-datepicker__year-select {
    appearance: none;
    border: none;
    background: transparent;

    font-family: var(--font-main);
    font-size: var(--font-size-md);
    font-weight: 500;
    color: var(--color-text-main);
    cursor: pointer;
  }

  /* ===== СЕТКА ===== */
  .react-datepicker__month-container {
    padding: 0 var(--space-md);
    box-sizing: border-box;
  }

  .react-datepicker__day-names,
  .react-datepicker__week {
    display: flex;
    justify-content: space-between;
  }

  .react-datepicker__day-name,
  .react-datepicker__day {
    width: 36px;
    text-align: center;
    box-sizing: border-box;
  }

  /* ===== ДНИ ===== */
  .react-datepicker__day {
    height: 36px;
    line-height: 36px;
    margin: 0;

    border-radius: 50%;
    font-size: var(--font-size-sm);
    color: var(--color-text-main);
    cursor: pointer;
  }

  .react-datepicker__day:hover {
    background-color: var(--color-accent);
    border-radius: 50%;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background-color: var(--color-accent);
    font-weight: 500;
  }

  .react-datepicker__day--outside-month {
    color: var(--color-text-secondary);
    opacity: 0.6;
  }

  /* ===== FOOTER ===== */
  .react-datepicker__children-container {
    padding: var(--space-md);
    margin-top: var(--space-sm);
  }

  /* ===== СТРЕЛКИ ДЛЯ МЕСЯЦА / ГОДА ===== */

  .react-datepicker__month-dropdown-container--select,
  .react-datepicker__year-dropdown-container--select {
    position: relative;
  }
  .react-datepicker__month-dropdown-container--select::after,
  .react-datepicker__year-dropdown-container--select::after {
    content: '⌵';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);

    font-size: 14px;
    color: var(--color-text-main);

    pointer-events: none;
  }
  .react-datepicker__month-select,
  .react-datepicker__year-select {
    padding-right: 16px;
  }
`;

export const Footer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-sm);

  button {
    height: 48px;
    padding: 12px 24px;
    box-sizing: border-box;
  }
`;
