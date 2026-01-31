import type { FC, SyntheticEvent } from 'react';
import * as Styled from './profile.styled';
import { PersonalInfo } from '../../../entities/personalInfo/ui';
import { ProfileSidebar } from '../../../entities/profileSidebar';

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
  cities: { value: string; label: string }[];
  isFormChanged: boolean;
  handleSubmit: (e: SyntheticEvent) => void;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  handleDateChange: (date: Date | null) => void;
}

export const Profile: FC<ProfileProps> = ({
  formValue,
  handleSubmit,
  handleInputChange,
  handleDateChange,
  cities,
  isFormChanged,
}) => {
  return (
    <Styled.Container>
      <ProfileSidebar />
      <PersonalInfo
        cities={cities}
        formValue={formValue}
        isFormChanged={isFormChanged}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        handleDateChange={handleDateChange}
      />
    </Styled.Container>
  );
};
