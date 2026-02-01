import { useCallback, useEffect, useMemo, useState } from 'react';
import * as Styled from './RegisterFormStepTwo.styled';
import { Controller, useForm, useWatch } from 'react-hook-form';
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

//Разделитель для составного ключа (categoryId + subId), чтобы подкатегории из разных категорий не сливались
const SUB_KEY_SEP = '|';

const makeSubKey = (categoryId: string, subId: string | number) =>
  `${categoryId}${SUB_KEY_SEP}${subId}`;

const parseSubKey = (
  key: string,
): { categoryId: string; subId: string } | null => {
  const i = key.indexOf(SUB_KEY_SEP);
  if (i < 0) return null;
  return { categoryId: key.slice(0, i), subId: key.slice(i + 1) };
};

interface RegisterFormStepTwoProps {
  onSubmit: (data: RegisterStepTwoFormData) => void;
  onBack: (data: RegisterStepTwoFormData) => void;
  defaultValues?: Partial<RegisterStepTwoFormData>;
}

export const RegisterFormStepTwo = (props: RegisterFormStepTwoProps) => {
  const { onSubmit, onBack, defaultValues } = props;
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
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

  // Быстрый доступ к категории по id
  const categoriesById = useMemo(() => {
    const map = new Map<string, ICategory>();
    for (const c of categories) map.set(c.id.toString(), c);
    return map;
  }, [categories]);

  const watchedLearnCategories =
    (useWatch({
      control,
      name: 'learnCategories',
    }) as RegisterStepTwoFormData['learnCategories']) ?? [];

  const selectedCategoryIdsList = useMemo(
    () => watchedLearnCategories.map((x) => x.categoryId),
    [watchedLearnCategories],
  );

  // Подкатегории из выбранных категорий (склеенный список) с привязкой к categoryId
  const mergedSubCategoriesWithCategory = useMemo(() => {
    if (!selectedCategoryIdsList.length) return [];
    const result: (ISubCategory & { categoryId: string })[] = [];

    for (const catId of selectedCategoryIdsList) {
      const category = categoriesById.get(catId);
      category?.subCategories?.forEach((sub) => {
        result.push({ ...sub, categoryId: catId });
      });
    }

    return result;
  }, [selectedCategoryIdsList, categoriesById]);

  const subCategoriesOptions = useMemo(
    () =>
      mergedSubCategoriesWithCategory.map((sub) => ({
        value: makeSubKey(sub.categoryId, sub.id),
        label: sub.name,
      })),
    [mergedSubCategoriesWithCategory],
  );

  const avatarFiles = useWatch({ control, name: 'avatar' });
  const [avatarPreview, setAvatarPreview] = useState<string>(iconPhoto);

  useEffect(() => {
    if (avatarFiles && avatarFiles.length > 0) {
      const url = URL.createObjectURL(avatarFiles[0]);
      setAvatarPreview(url);
      return () => URL.revokeObjectURL(url);
    }
    setAvatarPreview(iconPhoto);
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
      <Styled.FormWrapper>
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
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
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
              name="learnCategories"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => {
                const list =
                  ((value ??
                    []) as RegisterStepTwoFormData['learnCategories']) ?? [];

                const selectedCategoryIds = list.map((item) => item.categoryId);

                const selectedCompositeKeys = list.flatMap((item) =>
                  (item.subCategoryIds ?? []).map((subId) =>
                    makeSubKey(item.categoryId, subId),
                  ),
                );

                const handleCategoriesChange = (val: unknown) => {
                  const newIds = Array.isArray(val)
                    ? (val as string[])
                    : val
                      ? [val as string]
                      : [];

                  // subCategoryIds для тех категорий, которые остались выбранными
                  const next = newIds.map((id) => {
                    const existed = list.find((x) => x.categoryId === id);
                    return existed ?? { categoryId: id, subCategoryIds: [] };
                  });

                  onChange(next);
                };

                const handleSubCategoriesChange = (val: unknown) => {
                  const keys = Array.isArray(val)
                    ? (val as string[])
                    : val
                      ? [val as string]
                      : [];

                  // группировка выбранных подкатегорий по categoryId
                  const byCategory = new Map<string, string[]>();

                  for (const key of keys) {
                    const parsed = parseSubKey(key);
                    if (!parsed) continue;

                    const arr = byCategory.get(parsed.categoryId) ?? [];
                    arr.push(parsed.subId);
                    byCategory.set(parsed.categoryId, arr);
                  }

                  const next = list.map((item) => ({
                    categoryId: item.categoryId,
                    subCategoryIds: byCategory.get(item.categoryId) ?? [],
                  }));

                  onChange(next);
                };

                // На каком поле ошибка
                const isCategoryError =
                  !!error && selectedCategoryIds.length === 0;
                const isSubCategoryError =
                  !!error && selectedCategoryIds.length > 0;

                return (
                  <>
                    <Select
                      nameLabel="Категория навыка, которому хотите научиться"
                      placeholder="Выберите категории"
                      error={isCategoryError}
                      errorText={
                        isCategoryError ? error?.message : undefined
                      }
                      options={categoriesOptions}
                      multiple
                      value={selectedCategoryIds}
                      onChange={handleCategoriesChange}
                    />

                    <Select
                      nameLabel="Подкатегория навыка, которому хотите научиться"
                      placeholder="Выберите подкатегории"
                      error={isSubCategoryError}
                      errorText={
                        isSubCategoryError ? error?.message : undefined
                      }
                      options={subCategoriesOptions}
                      multiple
                      value={selectedCompositeKeys}
                      onChange={handleSubCategoriesChange}
                      disabled={selectedCategoryIds.length === 0}
                    />
                  </>
                );
              }}
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

        <Styled.DecorativeBlock>
          <Styled.DecorativeImage
            src={imageUserInfo}
            alt="Декоративное изображение"
          />
          <Styled.DecorativeTitle>
            Расскажите немного о себе
          </Styled.DecorativeTitle>
          <Styled.DecorativeText>
            Это поможет другим людям лучше вас узнать, чтобы выбрать для обмена
          </Styled.DecorativeText>
        </Styled.DecorativeBlock>
      </Styled.FormWrapper>
    </Styled.FormContainer>
  );
};
