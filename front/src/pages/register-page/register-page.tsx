import { useState, type FC } from 'react';
import { Header } from '../../widgets/Header';
import { Footer } from '../../widgets/Footer';
import { StepProgress } from '../../shared/ui/StepProgress';
import { RegisterFormStepOne } from '../../widgets/RegisterForm/ui/stepOne';
import * as Styled from './register-page.styled';
import { RegisterFormStepTwo } from '../../widgets/RegisterForm/ui/stepTwo';

//TODO: Временно, до создания слайса с данными формы
type FormData = {
  email: string;
  password: string;
  name: string;
  avatar: FileList | null;
  birthDate: Date | null;
  gender: string;
  city: string;
  category: string;
  subCategory: string;
};

export const RegisterPage: FC = () => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    name: '',
    avatar: null,
    birthDate: null,
    gender: 'male',
    city: '',
    category: '',
    subCategory: '',
  });

  const handleStepOneSubmit = (data: { email: string; password: string }) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setCurrentStep(2);
  };

  const handleStepTwoSubmit = (data: Omit<FormData, 'email' | 'password'>) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setCurrentStep(3);
  };

  // TODO: handleStepThreeSubmit отправка данных на сервер, перенаправление со страницы регистрации
  console.log('formData -', formData);

  return (
    <Styled.PageWrapper>
      <Header />
      <Styled.MainContent>
        <Styled.StepProgressWrapper>
          <StepProgress currentStep={currentStep} totalSteps={3} />
        </Styled.StepProgressWrapper>
        {currentStep === 1 && (
          <RegisterFormStepOne onSubmit={handleStepOneSubmit} />
        )}
        {currentStep === 2 && (
          <RegisterFormStepTwo
            onSubmit={handleStepTwoSubmit}
            onBack={() => setCurrentStep(1)}
          />
        )}
        {currentStep === 3 && <div>Регистрация. Третий шаг.</div>}
      </Styled.MainContent>
      <Footer />
    </Styled.PageWrapper>
  );
};
