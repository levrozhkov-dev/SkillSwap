import React from 'react';
import * as Styled from './ButtonIcon.styled';

interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconSrc: string; // Принимаем готовый путь к иконке
  onClick?: () => void;
}

export const ButtonIcon = (props: ButtonIconProps) => {
  const { iconSrc, onClick, ...rest } = props;

  return (
    <Styled.Button onClick={onClick} {...rest}>
      <Styled.IconImage src={iconSrc} alt="Button icon" />
    </Styled.Button>
  );
};
