import type { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../../../../shared/ui/form-fields/input';
import * as Styled from './RegisterFormStepOne.styled';
import googleIcon from '../../../../shared/img/icon/Google.svg';
import appleIcon from '../../../../shared/img/icon/Apple.svg';
import lightBulb from '../../../../shared/img/illustration/light-bulb.svg';
import { registerStepOneSchema, type RegisterStepOneFormData } from '../../lib';

interface RegisterFormStepOneProps {
  onSubmit: (data: RegisterStepOneFormData) => void;
}

export const RegisterFormStepOne: FC<RegisterFormStepOneProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterStepOneFormData>({
    resolver: yupResolver(registerStepOneSchema),
  });

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
              {...register('email')}
            />

            <Styled.PasswordWrapper>
              <Input
                type="password"
                nameLabel="Пароль"
                placeholder="Придумайте надёжный пароль"
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
