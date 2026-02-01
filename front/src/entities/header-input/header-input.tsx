import React, { type ReactNode } from 'react';
import { Input } from '../../shared/ui/form-fields/input';
import * as Styled from './header-input.styled';

export interface HeaderInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export const HeaderInput = (props: HeaderInputProps) => {
  const { value, onChange, placeholder = 'Поиск...', icon, iconPosition = 'left' } = props;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <Styled.Input>
      <Input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        icon={icon}
        iconPosition={iconPosition}
      />
    </Styled.Input>
  );
};
