import React from 'react';
import { Button } from '../../shared/ui/button/button';
import { ButtonIcon } from '../../shared/ui/buttonIcon/ButtonIcon';
import {
  ButtonsWrapper,
  LoginButtonContainer,
  RegisterButtonContainer,
  ThemeButtonContainer,
} from './styled';
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
    <ButtonsWrapper className={className}>
      <ThemeButtonContainer>
        <ButtonIcon iconSrc={moonIcon} onClick={onThemeToggle} />
      </ThemeButtonContainer>
      <LoginButtonContainer>
        <Button variant="white" onClick={onLoginClick}>
          Вход
        </Button>
      </LoginButtonContainer>
      <RegisterButtonContainer>
        <Button variant="green" onClick={onRegisterClick}>
          Регистрация
        </Button>
      </RegisterButtonContainer>
    </ButtonsWrapper>
  );
};
