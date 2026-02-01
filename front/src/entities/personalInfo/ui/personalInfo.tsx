import {
  useCallback,
  useState,
  type SyntheticEvent,
} from 'react';
import * as Styled from './personalInfo.styled';
import iconPhoto from '../../../shared/img/icon/user-circle.svg';
import iconEditPhoto from '../../../shared/img/icon/gallery-edit.svg';
import IconEdit from '../../../shared/img/icon/edit.svg?react';
import IconDate from '../../../shared/img/icon/calendar.svg?react';
import EyeVisible from '../../../shared/img/icon/eyeVisible.svg?react';
import EyeInvisible from '../../../shared/img/icon/eyeInvisible.svg?react';
import { ControlledDatePicker } from '../../../shared/ui/date-picker/controlled-date-picker';
import { Input, Select, Textarea } from '../../../shared/ui/form-fields';
import { editUserFormSchema } from '../lib/validationSchemas';

export interface UserFormData {
  email: string;
  name: string;
  avatar: string;
  date: string;
  gender: string;
  city: string;
  description: string;
  password: string;
}

export interface PersonalInfoProps {
  formValue: UserFormData;
  cities: { value: string; label: string }[];
  isFormChanged: boolean;
  handleSubmit: (e: SyntheticEvent) => void;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  handleDateChange: (date: Date | null) => void;
}

export const PersonalInfo = (props: PersonalInfoProps) => {
  const { formValue, cities, isFormChanged, handleSubmit, handleInputChange, handleDateChange } = props;

  const [showPassword, setShowPassword] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const avatarPreview = formValue.avatar || iconPhoto;
  const [errors, setErrors] = useState<Record<string, string>>({});

  const PasswordIcon = (
    <Styled.EyeButton
      type="button"
      onClick={() => setPasswordVisible(!passwordVisible)}
      aria-label={passwordVisible ? 'Скрыть пароль' : 'Показать пароль'}
    >
      {passwordVisible ? <EyeInvisible /> : <EyeVisible />}
    </Styled.EyeButton>
  );

  const handlePhotoClick = () => {
    document.getElementById('avatar-upload')?.click();
  };

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const result = reader.result as string;

          handleInputChange({
            target: { name: 'avatar', value: result },
          } as React.ChangeEvent<HTMLInputElement>);
        };
        reader.readAsDataURL(file);
      }
    },
    [handleInputChange],
  );

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const isValid = await validate();
    if (isValid) {
      handleSubmit(e);
    }
  };

  // Валидация при отправке
  const validate = async (): Promise<boolean> => {
    try {
      await editUserFormSchema.validate(formValue, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err: any) {
      const validationErrors: Record<string, string> = {};
      err.inner.forEach((error: any) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
      return false;
    }
  };

  return (
    <Styled.Container>
      <form onSubmit={onSubmit}>
        <Styled.FormContainer>
          <Input
            nameLabel="Почта"
            placeholder="Введите email"
            name="email"
            icon={<IconEdit />}
            value={formValue.email}
            onChange={handleInputChange}
            error={!!errors.email}
            errorText={errors.email}
          />
          <Styled.PasswordChangeButton
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'Скрыть поле пароля' : 'Изменить пароль'}
          </Styled.PasswordChangeButton>
          {showPassword && (
            <Input
              key="password-input"
              type={passwordVisible ? 'text' : 'password'}
              nameLabel="Новый пароль"
              placeholder="Введите новый пароль"
              name="password"
              value={formValue.password || ''}
              onChange={handleInputChange}
              icon={PasswordIcon}
              error={!!errors.password}
              errorText={errors.password}
            />
          )}
          <Input
            nameLabel="Имя"
            placeholder="Введите имя"
            name="name"
            icon={<IconEdit />}
            value={formValue.name}
            onChange={handleInputChange}
            error={!!errors.name}
            errorText={errors.name}
          />
          <Styled.BirthdateAndGenderBlock>
            <ControlledDatePicker
              selected={formValue.date ? new Date(formValue.date) : null}
              onChange={handleDateChange}
              nameLabel="Дата рождения"
              icon={<IconDate />}
              error={!!errors.date}
              errorText={errors.date}
            />
            <Select
              nameLabel="Пол"
              placeholder="Не указан"
              options={[
                { value: 'Мужской', label: 'Мужской' },
                { value: 'Женский', label: 'Женский' },
              ]}
              value={formValue.gender}
              onChange={(value) =>
                handleInputChange({
                  target: { name: 'gender', value },
                } as React.ChangeEvent<HTMLInputElement>)
              }
            />
          </Styled.BirthdateAndGenderBlock>
          <Select
            nameLabel="Город"
            placeholder="Выберите город"
            options={cities}
            value={formValue.city || ''}
            onChange={(value) =>
              handleInputChange({
                target: { name: 'city', value },
              } as React.ChangeEvent<HTMLInputElement>)
            }
            error={!!errors.city}
            errorText={errors.city}
          />
          <Textarea
            nameLabel="О себе"
            name="description"
            placeholder="Коротко опишите, чему можете научить"
            value={formValue.description || ''}
            onChange={handleInputChange}
            rows={4}
            icon={<IconEdit />}
            error={!!errors.description}
            errorText={errors.description}
          />
          <Styled.FormButton
            type="submit"
            variant="green"
            disabled={!isFormChanged}
          >
            Сохранить
          </Styled.FormButton>
        </Styled.FormContainer>
        <Styled.PhotoContainer>
          <Styled.Photo onClick={handlePhotoClick}>
            <Styled.IconPhoto
              src={avatarPreview}
              alt={formValue.name || 'Аватар пользователя'}
              key={avatarPreview}
            />
            <Styled.AddPhoto>
              <Styled.IconAddPhoto
                src={iconEditPhoto}
                alt="Изменить фото профиля"
              />
            </Styled.AddPhoto>
          </Styled.Photo>
          <Input
            id="avatar-upload"
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </Styled.PhotoContainer>
      </form>
    </Styled.Container>
  );
};
