import { useCallback, useEffect, useMemo, useState, type FC } from 'react';
import * as Styled from './RegisterFormStepTwo.styled';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import imageUserInfo from '../../../../shared/img/illustration/user-info.svg';
import iconPhoto from '../../../../shared/img/icon/user-circle.svg';
import iconAddPhoto from '../../../../shared/img/icon/add.svg';
import { ControlledDatePicker } from '../../../../shared/ui/date-picker/controlled-date-picker';
import IconCalendar from '../../../../shared/img/icon/calendar.svg?react';
import { Input, Select } from '../../../../shared/ui/form-fields';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../../providers/store/store';
import type {
  ICategory,
  ISubCategory,
} from '../../../../features/slice/categoriesSlice';
import { registerStepTwoSchema, type RegisterStepTwoFormData } from '../../lib';

interface RegisterFormStepTwoProps {
  onSubmit: (data: RegisterStepTwoFormData) => void;
  onBack: (data: RegisterStepTwoFormData) => void;
  defaultValues?: Partial<RegisterStepTwoFormData>;
}

export const RegisterFormStepTwo: FC<RegisterFormStepTwoProps> = ({
  onSubmit,
  onBack,
  defaultValues,
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
    getValues,
  } = useForm<RegisterStepTwoFormData>({
    resolver: yupResolver(registerStepTwoSchema),
    defaultValues,
  });

  const cities = useSelector((state: RootState) => state.cities);
  const categories = useSelector((state: RootState) => state.category.items);

  const cityOptions = useMemo(
    () => cities.map((city) => ({ value: city.name, label: city.name })),
    [cities],
  );

  const categoriesOptions = useMemo(
    () =>
      categories.map((cat: ICategory) => ({
        value: cat.id.toString(),
        label: cat.title,
      })),
    [categories],
  );

  const selectedCategoryId = watch('category');
  const [subCategoriesOptions, setSubCategoriesOptions] = useState<ISubCategory[]>([]);

  useEffect(() => {
    if (selectedCategoryId) {
      const category = categories.find(
        (cat) => cat.id.toString() === selectedCategoryId,
      );
      setSubCategoriesOptions(category?.subCategories || []);
    } else {
      setSubCategoriesOptions([]);
    }
  }, [selectedCategoryId, categories]);

  const avatarFiles = watch('avatar');
  const [avatarPreview, setAvatarPreview] = useState<string>(iconPhoto);

  useEffect(() => {
    if (avatarFiles && avatarFiles.length > 0) {
      const url = URL.createObjectURL(avatarFiles[0]);
      setAvatarPreview(url);
      return () => URL.revokeObjectURL(url); // Очистка при следующем изменении
    } else {
      setAvatarPreview(iconPhoto);
    }
  }, [avatarFiles]);

  const handlePhotoClick = () => {
    document.getElementById('avatar-upload')?.click();
  };

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files?.length) {
        setValue('avatar', files, { shouldValidate: true });
      }
    },
    [setValue],
  );

  return (
    <Styled.FormContainer>
      <Styled.FormBlock>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Styled.PhotoContainer>
            <Styled.Photo onClick={handlePhotoClick}>
              <Styled.IconPhoto
                src={avatarPreview}
                alt="Фото профиля"
                // Для принудительного обновления изображения
                key={avatarPreview}
              />
              <Styled.AddPhoto>
                <Styled.IconAddPhoto
                  src={iconAddPhoto}
                  alt="Добавить фото профиля"
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
            {errors.avatar && (
              <Styled.ErrorText>{errors.avatar.message}</Styled.ErrorText>
            )}
          </Styled.PhotoContainer>
          <Input
            nameLabel="Имя"
            placeholder="Введите ваше имя"
            error={!!errors.name}
            errorText={errors.name?.message}
            {...register('name')}
          />
          <Styled.BirthdateAndGenderBlock>
            <Controller
              name="birthDate"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <ControlledDatePicker
                  selected={value}
                  onChange={onChange}
                  nameLabel="Дата рождения"
                  error={!!error}
                  errorText={error?.message}
                  icon={<IconCalendar />}
                />
              )}
            />
            <Controller
              name="gender"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <Select
                  nameLabel="Пол"
                  placeholder="Не указан"
                  error={!!error}
                  errorText={error?.message}
                  options={[
                    { value: 'male', label: 'Мужской' },
                    { value: 'female', label: 'Женский' },
                  ]}
                  value={value ?? undefined}
                  onChange={onChange}
                />
              )}
            />
          </Styled.BirthdateAndGenderBlock>
          <Controller
            name="city"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Select
                nameLabel="Город"
                placeholder="Выберите город"
                error={!!error}
                errorText={error?.message}
                options={cityOptions}
                value={value ?? undefined}
                onChange={onChange}
              />
            )}
          />
          <Controller
            name="category"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Select
                nameLabel="Категория навыка, которому хотите научиться"
                placeholder="Выберите категорию"
                error={!!error}
                errorText={error?.message}
                options={categoriesOptions}
                value={value ?? undefined}
                onChange={(val) => {
                  setValue('subCategory', []);
                  onChange(val);
                }}
              />
            )}
          />
          <Controller
            name="subCategory"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Select
                nameLabel="Подкатегория навыка, которому хотите научиться"
                placeholder="Выберите подкатегории"
                error={!!error}
                errorText={error?.message}
                options={subCategoriesOptions.map((sub) => ({
                  value: sub.id.toString(),
                  label: sub.name,
                }))}
                multiple
                value={(value as string[] | undefined) ?? []}
                onChange={(val) => {
                  if (Array.isArray(val)) {
                    onChange(val);
                  } else if (typeof val === 'string') {
                    onChange([val]);
                  } else {
                    onChange([]);
                  }
                }}
                disabled={!selectedCategoryId}
              />
            )}
          />
          <Styled.ButtonsBlock>
            <Styled.FormButton
              type="button"
              variant="white"
              onClick={() => onBack(getValues())}
            >
              Назад
            </Styled.FormButton>
            <Styled.FormButton type="submit" variant="green">
              Продолжить
            </Styled.FormButton>
          </Styled.ButtonsBlock>
        </form>
      </Styled.FormBlock>
      <Styled.CustomDecorativeBlock image={imageUserInfo}>
        <Styled.DecorativeTitle>
          Расскажите немного о себе
        </Styled.DecorativeTitle>
        <Styled.DecorativeText>
          Это поможет другим людям лучше вас узнать, чтобы выбрать для обмена
        </Styled.DecorativeText>
      </Styled.CustomDecorativeBlock>
    </Styled.FormContainer>
  );
};
