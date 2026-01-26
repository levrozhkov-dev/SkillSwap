import React from 'react';
import { Button } from '../../shared/ui/button/button';
import { ButtonIcon } from '../../shared/ui/buttonIcon/ButtonIcon';
import * as Styled from './styled';
import moonIcon from '../../shared/img/icon/moon.svg';

interface HeaderButtonsProps {
  onLoginClick?: () => void;
  onRegisterClick?: () => void;
  onThemeToggle?: () => void;
  className?: string;
}

// компонент кнопок для Header (авторизация, регистрация и тема)
export const HeaderButtons: React.FC<HeaderButtonsProps> = ({
  onLoginClick,
  onRegisterClick,
  onThemeToggle,
  className,
}) => {
  return (
    <Styled.ButtonsWrapper className={className}>
      <Styled.ThemeButtonContainer>
        <ButtonIcon iconSrc={moonIcon} onClick={onThemeToggle} />
      </Styled.ThemeButtonContainer>
      <Styled.LoginButtonContainer>
        <Button variant="white" onClick={onLoginClick}>
          Войти
        </Button>
      </Styled.LoginButtonContainer>
      <Styled.RegisterButtonContainer>
        <Button variant="green" onClick={onRegisterClick}>
          Зарегистрироваться
        </Button>
      </Styled.RegisterButtonContainer>
    </Styled.ButtonsWrapper>
  );
};
