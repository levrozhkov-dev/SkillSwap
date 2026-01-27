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
  category: yup.string().required('Категория обязательна'),
  subCategory: yup.string().required('Подкатегория обязательна'),
});

// Типы
export type RegisterStepOneFormData = yup.InferType<typeof registerStepOneSchema>;
export type RegisterStepTwoFormData = yup.InferType<typeof registerStepTwoSchema>;