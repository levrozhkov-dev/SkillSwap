import React from 'react';
import { Input } from '../../shared/ui/input';
import { HeaderInputWrapper } from './header-input.styled';

export interface HeaderInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const HeaderInput: React.FC<HeaderInputProps> = ({
  value,
  onChange,
  placeholder = 'Поиск...',
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <HeaderInputWrapper>
      <Input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </HeaderInputWrapper>
  );
};
