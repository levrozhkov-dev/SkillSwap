import * as yup from 'yup';

export const editUserFormSchema = yup.object({
  email: yup.string().required('Почта обязательна').email('Некорректный email'),
  name: yup.string().required('Имя обязательно').min(2, 'Минимум 2 символа'),
  city: yup.string().required('Город обязателен'),
  date: yup
    .string()
    .nullable()
    .transform((val, originalValue) => (originalValue === '' ? null : val))
    .test('is-date', 'Введите корректную дату', (value) => {
      if (!value) return true;
      const d = new Date(value);
      return !isNaN(d.getTime()) && d <= new Date();
    }),
  password: yup
    .string()
    .required('Пароль обязателен')
    .transform((val) => val?.trim())
    .min(6, 'Пароль должен быть не менее 6 символов'),
  description: yup
    .string()
    .required('Описание обязательно')
    .min(1, 'Описание не может быть пустым')
    .trim(),
});

export type EditUserFormData = yup.InferType<typeof editUserFormSchema>;
