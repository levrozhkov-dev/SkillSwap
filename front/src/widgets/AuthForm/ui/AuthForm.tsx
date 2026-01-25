import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as Styled from './AuthForm.styled';
import { LoginDecorativeBlock } from '../../../shared/ui/AuthCard/DecorativeBlock';
import { Header } from '../../Header';
import lightBulb from '../../../shared/img/illustration/light-bulb.svg';
import googleIcon from '../../../shared/img/icon/Google.svg';
import appleIcon from '../../../shared/img/icon/Apple.svg';
import eyeVisible from '../../../shared/img/icon/eyeVisible.svg';
import eyeInvisible from '../../../shared/img/icon/eyeInvisible.svg';

interface AuthFormData {
  email: string;
  password: string;
}

// компонент формы авторизации
export const AuthForm: React.FC = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<AuthFormData>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const togglePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLoginViaGoogle = () => {
    console.log('Login via Google clicked');
  };

  const handleLoginViaApple = () => {
    console.log('Login via Apple clicked');
  };

  const onSubmit = (data: AuthFormData) => {
    console.log('Вход выполнен', data);
    navigate('/');
  };

  const PasswordIcon = (
    <Styled.EyeButton
      type="button"
      onClick={togglePasswordVisible}
      aria-label={passwordVisible ? 'Скрыть пароль' : 'Показать пароль'}
    >
      <img
        src={passwordVisible ? eyeInvisible : eyeVisible}
        alt={passwordVisible ? 'Скрыть пароль' : 'Показать пароль'}
        width={24}
        height={24}
      />
    </Styled.EyeButton>
  );

  return (
    <>
      <Header />
      <Styled.Title>Вход</Styled.Title>
      <Styled.AuthContainer>
        <Styled.AuthWrapper>
          <Styled.AuthBlock>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Styled.SocialButton
                type="button"
                className="social-button"
                variant="white"
                onClick={handleLoginViaGoogle}
              >
                <img src={googleIcon} alt="Google" width={24} height={24} />
                Продолжить с Google
              </Styled.SocialButton>

              <Styled.SocialButton
                type="button"
                variant="white"
                onClick={handleLoginViaApple}
              >
                <img src={appleIcon} alt="Apple" width={24} height={24} />
                Продолжить с Apple
              </Styled.SocialButton>

              <Styled.Divider>
                <span>или</span>
              </Styled.Divider>
              <Styled.InputWrapper>
                <Styled.AuthInput
                  type="email"
                  nameLabel="Email"
                  placeholder="Введите email"
                  error={!!errors.email}
                  errorText={errors.email?.message}
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'Введите email',
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: 'Пожалуйста, введите корректный email',
                    },
                  })}
                />

                <Styled.AuthInput
                  type={passwordVisible ? 'text' : 'password'}
                  nameLabel="Пароль"
                  placeholder="Введите ваш пароль"
                  icon={PasswordIcon}
                  iconPosition="right"
                  error={!!errors.password}
                  errorText={errors.password?.message}
                  {...register('password', {
                    required: {
                      value: true,
                      message: 'Введите пароль',
                    },
                    minLength: {
                      value: 8,
                      message: 'Пароль должен содержать не менее 8 знаков',
                    },
                  })}
                />
              </Styled.InputWrapper>
              <Styled.LoginButton
                type="submit"
                variant="green"
                disabled={!isValid}
              >
                Войти
              </Styled.LoginButton>
              <Styled.RegisterLink to="/register">
                Зарегистрироваться
              </Styled.RegisterLink>
            </form>
          </Styled.AuthBlock>
          <LoginDecorativeBlock>
            <Styled.DecorativeImage
              src={lightBulb}
              alt="Изображение лампочки"
            />
            <Styled.DecorativeText>
              <h2>С возвращением в SkillSwap!</h2>
              <p>Обменивайтесь знаниями и навыками с другими людьми</p>
            </Styled.DecorativeText>
          </LoginDecorativeBlock>
        </Styled.AuthWrapper>
      </Styled.AuthContainer>
    </>
  );
};
