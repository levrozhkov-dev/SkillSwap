import React, { useState } from 'react';
import { Button } from '../../../shared/ui/button';
import {
  AuthBlock,
  AuthContainer,
  AuthWrapper,
  DecorativeImage,
  DecorativeText,
  Divider,
  SocialButton,
  PasswordHint,
} from './AuthForm.styled';
import { Input } from '../../../shared/ui/input';
import { LoginDecorativeBlock } from '../../../shared/ui/AuthCard/DecorativeBlock';
import lightBulb from '../../../shared/img/illustration/light-bulb.svg';

// компонент формы авторизации
export const AuthForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginViaGoogle = () => {
    console.log('Login via Google clicked');
  };

  const handleLoginViaApple = () => {
    console.log('Login via Apple clicked');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена');
  };

  return (
    <AuthContainer>
      <AuthWrapper>
        <AuthBlock>
          <form onSubmit={handleSubmit}>
            <SocialButton
              type="button"
              className="social-button"
              variant="white"
              onClick={handleLoginViaGoogle}
            >
              <img
                src="src/shared/img/icon/Google.svg"
                alt="Google"
                width={24}
                height={24}
              />
              Продолжить с Google
            </SocialButton>

            <SocialButton
              type="button"
              variant="white"
              onClick={handleLoginViaApple}
            >
              <img
                src="src/shared/img/icon/Apple.svg"
                alt="Apple"
                width={24}
                height={24}
              />
              Продолжить с Apple
            </SocialButton>

            <Divider>
              <span>или</span>
            </Divider>

            <Input
              type="email"
              nameLabel="Email"
              placeholder="Введите email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Input
              type="password"
              nameLabel="Пароль"
              placeholder="Придумайте надёжный пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <PasswordHint>
              Пароль должен содержать не менее 8 знаков
            </PasswordHint>

            <Button type="submit" variant="green">
              Далее
            </Button>
          </form>
        </AuthBlock>
        <LoginDecorativeBlock>
          <DecorativeImage src={lightBulb} alt="Изображение лампочки" />
          <DecorativeText>
            <h2>Добро пожаловать в SkillSwap!</h2>
            <p>
              Присоединяйтесь к SkillSwap и обменивайтесь знаниями и навыками
              с другими людьми
            </p>
          </DecorativeText>
        </LoginDecorativeBlock>
      </AuthWrapper>
    </AuthContainer>
  );
};
