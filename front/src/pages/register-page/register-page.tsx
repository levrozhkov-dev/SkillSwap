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
import { postReg } from '../../shared/api/req/postReg';

export type LearnCategoryItem = {
  categoryId: string;
  subCategoryIds: string[];
};

//TODO: Временно, до создания слайса с данными формы
type FormData = {
  email: string;
  password: string;
  name: string;
  avatar: FileList | null;
  birthDate: Date | null;
  gender: string;
  city: string;
  learnCategories: LearnCategoryItem[];
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
    learnCategories: [],
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

  const fileListToBase64 = (files: FileList | null): Promise<string[]> => {
    if (!files) return Promise.resolve([]);
    const fileArray = Array.from(files);
    return Promise.all(
      fileArray.map(
        (file) =>
          new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (err) => reject(err);
          }),
      ),
    );
  };

  const handleStepTwoSubmit = async (data: RegisterStepTwoFormData) => {
    let avatarBase64: string[] = [];
    if (data.avatar) {
      avatarBase64 = await fileListToBase64(data.avatar);
    }

    setFormData((prev) => ({
      ...prev,
      ...data,
      avatar: avatarBase64.length > 0 ? avatarBase64[0] : null,
    }));
    setCurrentStep(3);
  };

  // Изменяем handleStepThreeSubmit для skillImages
  const handleStepThreeSubmit = async (data: RegisterStepThreeFormData) => {
    let skillImagesBase64: string[] = [];
    if (data.skillImages) {
      skillImagesBase64 = await fileListToBase64(data.skillImages);
    }

    setFormData((prev) => {
      const merged = {
        ...prev,
        ...data,
        skillImages: skillImagesBase64,
      };
      postReg('users/create', merged);
      console.log('formData with base64 -', merged);
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
              learnCategories: formData.learnCategories,
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
