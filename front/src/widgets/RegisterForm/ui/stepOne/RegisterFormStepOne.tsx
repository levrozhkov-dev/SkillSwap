import { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../../../../shared/ui/form-fields/input';
import * as Styled from './RegisterFormStepOne.styled';
import googleIcon from '../../../../shared/img/icon/Google.svg';
import appleIcon from '../../../../shared/img/icon/Apple.svg';
import lightBulb from '../../../../shared/img/illustration/light-bulb.svg';
import eyeVisible from '../../../../shared/img/icon/eyeVisible.svg';
import eyeInvisible from '../../../../shared/img/icon/eyeInvisible.svg';
import { registerStepOneSchema, type RegisterStepOneFormData } from '../../lib';

// Проверка почты (пока только вывод в консоль)
function checkEmailOnBackend(email: string): void {
  if (!email || !email.includes('@')) return;
  console.log('Проверка почты:', email);
}

interface RegisterFormStepOneProps {
  onSubmit: (data: RegisterStepOneFormData) => void;
  defaultValues?: Partial<RegisterStepOneFormData>;
}

export const RegisterFormStepOne = (props: RegisterFormStepOneProps) => {
  const { onSubmit, defaultValues } = props;
  
  const [passwordVisible, setPasswordVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<RegisterStepOneFormData>({
    resolver: yupResolver(registerStepOneSchema),
    defaultValues,
  });

  const togglePasswordVisible = useCallback(() => {
    setPasswordVisible((v) => !v);
  }, []);

  const emailRegister = register('email');
  const handleEmailBlur = useCallback(() => {
    const email = getValues('email');
    checkEmailOnBackend(email ?? '');
  }, [getValues]);

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

  const handleGoogleClick = () => {
    console.log('Продолжить с Google');
  };

  const handleAppleClick = () => {
    console.log('Продолжить с Apple');
  };

  return (
    <Styled.FormContainer>
      <Styled.FormWrapper>
        <Styled.FormBlock>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Styled.SocialButton type="button" variant="white" onClick={handleGoogleClick}>
              <img src={googleIcon} alt="Google" width={24} height={24} />
              Продолжить с Google
            </Styled.SocialButton>

            <Styled.SocialButton type="button" variant="white" onClick={handleAppleClick}>
              <img src={appleIcon} alt="Apple" width={24} height={24} />
              Продолжить с Apple
            </Styled.SocialButton>

            <Styled.Divider>
              <span>или</span>
            </Styled.Divider>

            <Input
              type="email"
              nameLabel="Email"
              placeholder="Введите email"
              error={!!errors.email}
              errorText={errors.email?.message}
              {...emailRegister}
              onBlur={(e) => {
                emailRegister.onBlur(e);
                handleEmailBlur();
              }}
            />

            <Styled.PasswordWrapper>
              <Input
                type={passwordVisible ? 'text' : 'password'}
                nameLabel="Пароль"
                placeholder="Придумайте надёжный пароль"
                icon={PasswordIcon}
                iconPosition="right"
                error={!!errors.password}
                errorText={errors.password?.message}
                {...register('password')}
              />
              {!errors.password && (
                <Styled.PasswordHint>Пароль должен содержать не менее 8 знаков</Styled.PasswordHint>
              )}
            </Styled.PasswordWrapper>

            <Styled.SubmitButton type="submit" variant="green">
              Далее
            </Styled.SubmitButton>
          </form>
        </Styled.FormBlock>

        <Styled.DecorativeBlock>
          <Styled.DecorativeImage src={lightBulb} alt="Лампочка" />
          <Styled.DecorativeContent>
            <Styled.DecorativeTitle>Добро пожаловать в SkillSwap!</Styled.DecorativeTitle>
            <Styled.DecorativeText>
              Присоединяйтесь к SkillSwap и обменивайтесь знаниями и навыками с другими людьми
            </Styled.DecorativeText>
          </Styled.DecorativeContent>
        </Styled.DecorativeBlock>
      </Styled.FormWrapper>
    </Styled.FormContainer>
  );
};
