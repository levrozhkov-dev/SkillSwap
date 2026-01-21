import React from 'react';
import checkbox from '../../../shared/img/icon/checkbox.svg';
import checkboxActive from '../../../shared/img/icon/checkbox-active.svg';

import {
    StyledInput,
    StyledLabel,
    StyledCheckboxIndicator,
    IconImage,
  } from './checkbox.styled';
  

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
      <StyledLabel>
        <StyledInput
          type="checkbox"
          name={name}
          id={id}
          checked={checked}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.checked)
        }
        />
  
        <StyledCheckboxIndicator checked={checked}>
          {checked ? (
                <IconImage 
                src={checkboxActive} 
                alt="Check icon"
                />) : (<IconImage 
                src={checkbox} 
                alt="Check icon"
                />)}
        </StyledCheckboxIndicator>
        {label}
      </StyledLabel>
    );
  };
  