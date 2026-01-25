import type { FC } from 'react';
import { Header } from '../../widgets/Header';
import { Footer } from '../../widgets/Footer';
import { StepProgress } from '../../shared/ui/StepProgress';
import { RegisterFormStepOne } from '../../widgets/RegisterForm/ui';
import * as Styled from './register-page.styled';

export const RegisterPage: FC = () => {
  const handleStepOneSubmit = (data: { email: string; password: string }) => {
    console.log('Шаг 1 завершён:', data);
    // TODO: сохранить данные и перейти на шаг 2
  };

  return (
    <Styled.PageWrapper>
      <Header />
      <Styled.MainContent>
        <Styled.StepProgressWrapper>
          <StepProgress currentStep={1} totalSteps={3} />
        </Styled.StepProgressWrapper>
        <RegisterFormStepOne onSubmit={handleStepOneSubmit} />
      </Styled.MainContent>
      <Footer />
    </Styled.PageWrapper>
  );
};
