import { useState, type FC } from 'react';
import { Header } from '../../widgets/Header';
import { Footer } from '../../widgets/Footer';
import { StepProgress } from '../../shared/ui/StepProgress';
import { RegisterFormStepOne } from '../../widgets/RegisterForm/ui/stepOne';
import * as Styled from './register-page.styled';
import { RegisterFormStepTwo } from '../../widgets/RegisterForm/ui/stepTwo';
import { RegisterFormStepThree } from '../../widgets/RegisterForm/ui/stepThree/RegisterFormStepThree';
import type {
  RegisterStepOneFormData,
  RegisterStepTwoFormData,
  RegisterStepThreeFormData,
} from '../../widgets/RegisterForm/lib';

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
  subCategory: string[];
  skillTitle: string;
  skillCategory: string;
  skillSubCategory: string;
  skillDescription: string;
  skillImages: FileList | null;
};

export const RegisterPage: FC = () => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    name: '',
    avatar: null,
    birthDate: null,
    gender: '',
    city: '',
    category: '',
    subCategory: [],
    skillTitle: '',
    skillCategory: '',
    skillSubCategory: '',
    skillDescription: '',
    skillImages: null,
  });

  const handleStepOneSubmit = (data: RegisterStepOneFormData) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setCurrentStep(2);
  };

  const handleStepTwoSubmit = (data: RegisterStepTwoFormData) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));
    setCurrentStep(3);
  };

  const handleStepThreeSubmit = (data: RegisterStepThreeFormData) => {
    setFormData(prev => {
      const merged = { ...prev, ...data };
      console.log('formData -', merged);
      return merged;
    });
  };

  return (
    <Styled.PageWrapper>
      <Header />
      <Styled.MainContent>
        <Styled.StepProgressWrapper>
          <StepProgress currentStep={currentStep} totalSteps={3} />
        </Styled.StepProgressWrapper>
        {currentStep === 1 && (
          <RegisterFormStepOne
            onSubmit={handleStepOneSubmit}
            defaultValues={{
              email: formData.email,
              password: formData.password,
            }}
          />
        )}
        {currentStep === 2 && (
          <RegisterFormStepTwo
            onSubmit={handleStepTwoSubmit}
            onBack={(data) => {
              setFormData((prev) => ({ ...prev, ...data }));
              setCurrentStep(1);
            }}
            defaultValues={{
              name: formData.name,
              birthDate: formData.birthDate,
              gender: formData.gender || undefined,
              city: formData.city,
              category: formData.category,
              subCategory: formData.subCategory,
              avatar: formData.avatar ?? undefined,
            }}
          />
        )}
        {currentStep === 3 && (
          <RegisterFormStepThree
            onSubmit={handleStepThreeSubmit}
            onBack={(data) => {
              setFormData((prev) => ({ ...prev, ...data }));
              setCurrentStep(2);
            }}
            defaultValues={{
              skillTitle: formData.skillTitle,
              skillCategory: formData.skillCategory,
              skillSubCategory: formData.skillSubCategory,
              skillDescription: formData.skillDescription,
              skillImages: formData.skillImages ?? null,
            }}
          />
        )}
      </Styled.MainContent>
      <Footer />
    </Styled.PageWrapper>
  );
};
