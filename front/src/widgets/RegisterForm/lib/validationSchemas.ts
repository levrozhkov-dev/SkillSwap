import * as yup from 'yup';

export const registerStepOneSchema = yup.object({
  email: yup
    .string()
    .required('Email обязателен')
    .email('Введите корректный email'),
  password: yup
    .string()
    .required('Пароль обязателен')
    .min(8, 'Пароль должен содержать не менее 8 знаков'),
});

const learnCategoryItemSchema = yup.object({
  categoryId: yup.string().required(),
  subCategoryIds: yup
    .array()
    .of(yup.string().required())
    .required(),
});

export const registerStepTwoSchema = yup.object({
  name: yup
    .string()
    .required('Имя обязательно')
    .min(2, 'Имя должно быть не менее 2 символов')
    .max(50, 'Имя слишком длинное'),
  avatar: yup
    .mixed<FileList>()
    .required('Обязательно выберите фото')
    .test('fileType', 'Разрешены только изображения', (value) => {
      if (!value?.length) return true;
      return ['image/jpeg', 'image/png', 'image/webp'].includes(value[0].type);
    })
    .test('fileSize', 'Файл слишком большой (макс. 5 МБ)', (value) => {
      if (!value?.length) return true;
      return value[0].size <= 5 * 1024 * 1024;
    }),
  birthDate: yup
    .date()
    .required('Дата рождения обязательна')
    .nullable()
    .typeError('Введите корректную дату')
    .max(new Date(), 'Дата рождения не может быть в будущем'),
  gender: yup
    .string()
    .required('Пол обязателен')
    .oneOf(['male', 'female'], 'Выберите корректный пол'),
  city: yup.string().required('Город обязателен'),
  learnCategories: yup
    .array()
    .of(learnCategoryItemSchema)
    .min(1, 'Выберите хотя бы одну категорию')
    .required('Категория обязательна')
    .test('atLeastOneSubCategory', 'Выберите хотя бы одну подкатегорию', (value) => {
      if (!value?.length) return false;
      const total = value.reduce((acc, item) => acc + (item.subCategoryIds?.length ?? 0), 0);
      return total >= 1;
    }),
});

export const registerStepThreeSchema = yup.object({
  skillTitle: yup
    .string()
    .required('Название навыка обязательно')
    .min(2, 'Название должно быть не менее 2 символов')
    .max(100, 'Название слишком длинное'),
  skillCategory: yup.string().required('Категория навыка обязательна'),
  skillSubCategory: yup
    .string()
    .required('Подкатегория обязательна'),
  skillDescription: yup
    .string()
    .required('Описание обязательно')
    .min(10, 'Описание должно быть не короче 10 символов')
    .max(1000, 'Описание слишком длинное'),
  skillImages: yup
    .mixed<FileList>()
    .nullable()
    .defined()
    .test('minFiles', 'Загрузите минимум 4 изображения', (value) => {
      if (!value) return false;
      return value.length >= 4;
    })
    .test('maxFiles', 'Можно загрузить не более 20 изображений', (value) => {
      if (!value?.length) return true;
      return value.length <= 20;
    })
    .test('fileType', 'Разрешены только изображения', (value) => {
      if (!value?.length) return true;
      return Array.from(value).every((file) =>
        ['image/jpeg', 'image/png', 'image/webp'].includes(file.type),
      );
    })
    .test('fileSize', 'Каждый файл должен быть не больше 5 МБ', (value) => {
      if (!value?.length) return true;
      return Array.from(value).every((file) => file.size <= 5 * 1024 * 1024);
    })
    ,
});

// Типы
export type RegisterStepOneFormData = yup.InferType<typeof registerStepOneSchema>;
export type RegisterStepTwoFormData = yup.InferType<typeof registerStepTwoSchema>;
export type RegisterStepThreeFormData = yup.InferType<typeof registerStepThreeSchema>;