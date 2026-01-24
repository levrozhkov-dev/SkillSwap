import { forwardRef } from 'react';
import { Input } from './date-input.styled';

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
