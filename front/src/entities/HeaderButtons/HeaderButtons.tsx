import React from 'react';
import { Button } from '../../shared/ui/button/button';
import * as Styled from './styled';

interface HeaderButtonsProps {
  onLoginClick?: () => void;
  onRegisterClick?: () => void;
  className?: string;
}

// компонент кнопок для Header (авторизация, регистрация)
export const HeaderButtons: React.FC<HeaderButtonsProps> = ({
  onLoginClick,
  onRegisterClick,
  className,
}) => {
  return (
    <Styled.ButtonsWrapper className={className}>
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
