import React from 'react';
import checkbox from '../../../shared/img/icon/checkbox.svg';
import checkboxActive from '../../../shared/img/icon/checkbox-active.svg';

import * as Styled from './checkbox.styled';

interface CheckboxProps {
  label: string;
  name?: string;
  id?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

// компонент Checkbox
export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  name,
  id,
  checked,
  onChange,
}) => {
  return (
    <Styled.Label>
      <Styled.Input
        type="checkbox"
        name={name}
        id={id}
        checked={checked}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.checked)
        }
      />

      <Styled.CheckboxIndicator checked={checked}>
        {checked ? (
          <Styled.IconImage src={checkboxActive} alt="Check icon" />
        ) : (
          <Styled.IconImage src={checkbox} alt="Check icon" />
        )}
      </Styled.CheckboxIndicator>
      {label}
    </Styled.Label>
  );
};
