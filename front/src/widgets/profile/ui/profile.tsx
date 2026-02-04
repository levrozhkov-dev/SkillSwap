import type { SyntheticEvent } from 'react';
import * as Styled from './profile.styled';
import { PersonalInfo } from '../../../entities/personalInfo/ui';

interface FormData {
  email: string;
  name: string;
  avatar: string;
  date: string;
  gender: string;
  city: string;
  description: string;
  password: string;
}

export interface ProfileProps {
  formValue: FormData;
  cityOptions: {
    options: { value: string; label: string }[];
    loading: boolean;
    searchCities: (query: string) => void;
  };
  isFormChanged: boolean;
  handleSubmit: (e: SyntheticEvent) => void;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  handleDateChange: (date: Date | null) => void;
}

export const Profile = (props: ProfileProps) => {
  const {
    formValue,
    handleSubmit,
    handleInputChange,
    handleDateChange,
    cityOptions,
    isFormChanged,
  } = props;
  return (
    <Styled.Container>
      <PersonalInfo
        cityOptions={cityOptions}
        formValue={formValue}
        isFormChanged={isFormChanged}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        handleDateChange={handleDateChange}
      />
    </Styled.Container>
  );
};
