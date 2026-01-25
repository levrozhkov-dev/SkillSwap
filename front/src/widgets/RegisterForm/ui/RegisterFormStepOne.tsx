import type { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Input } from '../../../shared/ui/input';
import * as S from './RegisterFormStepOne.styled';
import googleIcon from '../../../shared/img/icon/Google.svg';
import appleIcon from '../../../shared/img/icon/Apple.svg';
import lightBulb from '../../../shared/img/illustration/light-bulb.svg';

const schema = yup.object({
  email: yup
    .string()
    .required('Email обязателен')
    .email('Введите корректный email'),
  password: yup
    .string()
    .required('Пароль обязателен')
    .min(8, 'Пароль должен содержать не менее 8 знаков'),
});

type FormData = yup.InferType<typeof schema>;

interface RegisterFormStepOneProps {
  onSubmit: (data: FormData) => void;
}

export const RegisterFormStepOne: FC<RegisterFormStepOneProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleGoogleClick = () => {
    console.log('Продолжить с Google');
  };

  const handleAppleClick = () => {
    console.log('Продолжить с Apple');
  };

  return (
    <S.FormContainer>
      <S.FormWrapper>
        <S.FormBlock>
          <form onSubmit={handleSubmit(onSubmit)}>
            <S.SocialButton type="button" variant="white" onClick={handleGoogleClick}>
              <img src={googleIcon} alt="Google" width={24} height={24} />
              Продолжить с Google
            </S.SocialButton>

            <S.SocialButton type="button" variant="white" onClick={handleAppleClick}>
              <img src={appleIcon} alt="Apple" width={24} height={24} />
              Продолжить с Apple
            </S.SocialButton>

            <S.Divider>
              <span>или</span>
            </S.Divider>

            <Input
              type="email"
              nameLabel="Email"
              placeholder="Введите email"
              error={!!errors.email}
              errorText={errors.email?.message}
              {...register('email')}
            />

            <S.PasswordWrapper>
              <Input
                type="password"
                nameLabel="Пароль"
                placeholder="Придумайте надёжный пароль"
                error={!!errors.password}
                errorText={errors.password?.message}
                {...register('password')}
              />
              {!errors.password && (
                <S.PasswordHint>Пароль должен содержать не менее 8 знаков</S.PasswordHint>
              )}
            </S.PasswordWrapper>

            <S.SubmitButton type="submit" variant="green">
              Далее
            </S.SubmitButton>
          </form>
        </S.FormBlock>

        <S.DecorativeBlock>
          <S.DecorativeImage src={lightBulb} alt="Лампочка" />
          <S.DecorativeContent>
            <S.DecorativeTitle>Добро пожаловать в SkillSwap!</S.DecorativeTitle>
            <S.DecorativeText>
              Присоединяйтесь к SkillSwap и обменивайтесь знаниями и навыками с другими людьми
            </S.DecorativeText>
          </S.DecorativeContent>
        </S.DecorativeBlock>
      </S.FormWrapper>
    </S.FormContainer>
  );
};
