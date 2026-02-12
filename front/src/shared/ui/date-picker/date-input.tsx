import { forwardRef } from 'react';
import * as Styled from './date-input.styled';

type Props = {
  value?: string;
  onClick?: () => void;
};

export const DateInput = forwardRef<HTMLInputElement, Props>(
  ( props, ref) => {
    const { value, onClick } = props;
    return (
      <Styled.Input
        ref={ref}
        value={value}
        onClick={onClick}
        placeholder="дд.мм.гггг"
        readOnly
      />
    );
  },
);

DateInput.displayName = 'DateInput';
