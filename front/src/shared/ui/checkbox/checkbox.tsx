import React from 'react';
import checkbox from '../../../shared/img/icon/checkbox.svg';
import checkboxActive from '../../../shared/img/icon/checkbox-active.svg';
import checkboxCategoryActive from '../../../shared/img/icon/checkbox-category-active.svg';

import * as Styled from './checkbox.styled';

interface CheckboxProps {
  label: string;
  name?: string;
  id?: string;
  checked: boolean;
  isCategoryActive: boolean;
  onChange: () => void;
}

// компонент Checkbox
export const Checkbox = (props: CheckboxProps) => {
  const { label, name, id, checked, isCategoryActive, onChange } = props;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation(); // Если нужно
    onChange();
  };

  return (
    <Styled.Label>
      <Styled.Input
        type="checkbox"
        name={name}
        id={id}
        checked={checked}
        onChange={handleChange}
      />

      <Styled.CheckboxIndicator checked={checked}>
        {isCategoryActive && <Styled.IconImage src={checkboxCategoryActive} alt="Check icon" />}
        {(!isCategoryActive && checked) && <Styled.IconImage src={checkboxActive} alt="Check icon" />}
        {(!isCategoryActive && !checked) && <Styled.IconImage src={checkbox} alt="Check icon" />}
      </Styled.CheckboxIndicator>
      {label}
    </Styled.Label>
  );
};
