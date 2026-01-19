import React from 'react';
import { Button } from '../../shared/ui/button/button';
import {
  ButtonsWrapper,
  LoginButtonContainer,
  RegisterButtonContainer,
  ThemeButtonContainer,
  ThemeIcon,
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
  const themeButtonToggle = () => {
    if (onThemeToggle) {
      onThemeToggle();
    } else {
      // кнопка-заглушка
      console.log('Toggle theme button clicked');
    }
  };
  return (
    <ButtonsWrapper className={className}>
      <ThemeButtonContainer>
        <button onClick={themeButtonToggle} type="button">
          <ThemeIcon>
            <img
              src={moonIcon}
              alt="Иконка переключения темы"
              width="20"
              height="20"
            />
          </ThemeIcon>
        </button>
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
