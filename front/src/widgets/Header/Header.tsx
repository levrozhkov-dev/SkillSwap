import { HeaderWrapper } from './styled';
import { HeaderButtons } from '../../entities/HeaderButtons/HeaderButtons';

export const Header = () => {
  const handleLoginClick = () => {
    // навигация на страницу входа
    console.log('Login clicked');
  };

  const handleRegisterClick = () => {
    // навигация на страницу регистрации
    console.log('Register clicked');
  };

  const handleThemeToggle = () => {
    // переключение темы
    console.log('Toggle theme clicked');
  };

  return (
    <HeaderWrapper>
      <HeaderButtons
        onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick}
        onThemeToggle={handleThemeToggle}
      />
    </HeaderWrapper>
  );
};
