import { useEffect, type FC } from 'react';
import * as Styled from './RegisterFormStepTwo.styled';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import imageUserInfo from '../../../../shared/img/illustration/user-info.svg';
import iconPhoto from '../../../../shared/img/icon/user-circle.svg';
import iconAddPhoto from '../../../../shared/img/icon/add.svg';
import { Input } from '../../../../shared/ui/input';

const schema = yup.object({
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
});

type FormData = yup.InferType<typeof schema>;

interface RegisterFormStepTwoProps {
  onSubmit: (data: FormData) => void;
  onBack: () => void;
}

export const RegisterFormStepTwo: FC<RegisterFormStepTwoProps> = ({
  onSubmit,
  onBack,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const avatarFiles = watch('avatar');
  const avatarPreview =
    avatarFiles && avatarFiles.length > 0
      ? URL.createObjectURL(avatarFiles[0])
      : iconPhoto;

  // Очистка Object URL при размонтировании или изменении файла
  useEffect(() => {
    return () => {
      if (avatarPreview && avatarPreview !== iconPhoto) {
        URL.revokeObjectURL(avatarPreview);
      }
    };
  }, [avatarPreview]);

  const handlePhotoClick = () => {
    document.getElementById('avatar-upload')?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setValue('avatar', files, { shouldValidate: true });
    }
  };

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
              <Styled.FileErrorText>
                {errors.avatar.message}
              </Styled.FileErrorText>
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
            <Input nameLabel="Дата рождения" placeholder="дд.мм.гггг" />
            <Input nameLabel="Пол" placeholder="Не указан" />
          </Styled.BirthdateAndGenderBlock>
          <Input nameLabel="Город" placeholder="Не указан" />
          <Input
            nameLabel="Категория навыка, которому хотите научиться"
            placeholder="Выберите категорию"
          />
          <Input
            nameLabel="Подкатегория навыка, которому хотите научиться"
            placeholder="Выберите подкатегорию"
          />
          <Styled.ButtonsBlock>
            <Styled.FormButton type="button" variant="white" onClick={onBack}>
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
