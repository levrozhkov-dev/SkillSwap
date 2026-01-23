import { forwardRef } from 'react';
import styled from 'styled-components';
import calendar from '../../img/icon/calendar.svg';

const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 44px 0 16px;

  border-radius: var(--radius-sm);
  border: 1px solid var(--color-text-secondary);
  background-color: var(--color-bg-card);
  color: var(--color-text-main);

  font-size: var(--font-size-sm);
  cursor: pointer;

  background-image: url(${calendar});
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 20px;

  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: var(--color-button-pressed);
  }
`;

type Props = {
  value?: string;
  onClick?: () => void;
};

export const DateInput = forwardRef<HTMLInputElement, Props>(
  ({ value, onClick }, ref) => (
    <Input
      ref={ref}
      value={value}
      onClick={onClick}
      placeholder="дд.мм.гггг"
      readOnly
    />
  ),
);

DateInput.displayName = 'DateInput';
