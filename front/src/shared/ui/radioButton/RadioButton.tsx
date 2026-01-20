import React from 'react';
import {
  StyledInput,
  StyledLabel,
  StyledRadioIndicator,
} from './RadioButon.styled';

/* ВАЖНО: компонент контролируемый извне
    он будет корректно работать при хранении стейта в родителе и ищменении его через onChange
*/

// value типизирован как string, конкретные значения определяются в родителе

// типизируем пропсы компонента RadioButton
interface RadioButtonProps {
  text: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

// компонент RadioButton
export const RadioButton: React.FC<RadioButtonProps> = ({
  text,
  name,
  value,
  checked,
  onChange,
}) => {
  return (
    <StyledLabel>
      {/* настоящий инпут скрыт стилями */}
      <StyledInput
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
      />

      {/* стилизованная радио кнопка */}
      <StyledRadioIndicator checked={checked} />
      {text}
    </StyledLabel>
  );
};
