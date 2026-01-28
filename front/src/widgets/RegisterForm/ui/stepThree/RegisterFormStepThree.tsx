import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type DragEvent,
  type FC,
} from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux';
import * as Styled from './RegisterFormStepThree.styled';
import schoolBoardImage from '../../../../shared/img/illustration/school-board.svg';
import galleryAddIcon from '../../../../shared/img/icon/gallery-add.svg';
import { Input, Select, Textarea } from '../../../../shared/ui/form-fields';
import type { RootState } from '../../../../providers/store/store';
import type {
  ICategory,
  ISubCategory,
} from '../../../../features/slice/categoriesSlice';
import {
  registerStepThreeSchema,
  type RegisterStepThreeFormData,
} from '../../lib';

interface RegisterFormStepThreeProps {
  onSubmit: (data: RegisterStepThreeFormData) => void;
  onBack: (data: RegisterStepThreeFormData) => void;
  defaultValues?: Partial<RegisterStepThreeFormData>;
}

export const RegisterFormStepThree: FC<RegisterFormStepThreeProps> = ({
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
  } = useForm<RegisterStepThreeFormData>({
    resolver: yupResolver(registerStepThreeSchema),
    defaultValues,
  });

  const categories = useSelector((state: RootState) => state.category.items);

  const categoriesOptions = useMemo(
    () =>
      categories.map((cat: ICategory) => ({
        value: cat.id.toString(),
        label: cat.title,
      })),
    [categories],
  );

  const selectedCategoryId = watch('skillCategory');
  const [subCategoriesOptions, setSubCategoriesOptions] = useState<ISubCategory[]>(
    [],
  );
  const previousCategoryIdRef = useRef<string | null>(null);

  useEffect(() => {
    // Обновляем список подкатегорий
    if (selectedCategoryId) {
      const category = categories.find(
        (cat) => cat.id.toString() === selectedCategoryId,
      );
      setSubCategoriesOptions(category?.subCategories || []);
    } else {
      setSubCategoriesOptions([]);
    }

    // Сбрасываем выбранную подкатегорию только если категория изменилась
    if (
      previousCategoryIdRef.current !== null &&
      previousCategoryIdRef.current !== selectedCategoryId
    ) {
      setValue('skillSubCategory', '');
    }

    previousCategoryIdRef.current = selectedCategoryId ?? null;

  }, [selectedCategoryId, categories, setValue]);

  const files = watch('skillImages') as FileList | null;
  const [previews, setPreviews] = useState<string[]>([]);

  // Отображение превью изображений
  useEffect(() => {
    if (files && files.length > 0) {
      const urls = Array.from(files).map((file) => URL.createObjectURL(file));
      setPreviews(urls);

      return () => {
        urls.forEach((url) => URL.revokeObjectURL(url));
      };
    }

    setPreviews([]);
    return undefined;
  }, [files]);

  // Обработка добавления файлов
  const handleFiles = useCallback(
    (fileList: FileList | null) => {
      if (!fileList || fileList.length === 0) return;

      const current = (watch('skillImages') as FileList | null) ?? null;
      const incoming = Array.from(fileList);

      let mergedFiles: File[] = incoming;

      if (current && current.length > 0) {
        mergedFiles = [...Array.from(current), ...incoming];
      }

      // Создаём новый FileList через DataTransfer для совместимости с типом
      const dataTransfer = new DataTransfer();
      mergedFiles.forEach((file) => dataTransfer.items.add(file));

      setValue('skillImages', dataTransfer.files, { shouldValidate: true });
    },
    [setValue, watch],
  );

  // Удаление изображения
  const handleRemoveImage = useCallback(
    (index: number) => {
      const current = (watch('skillImages') as FileList | null) ?? null;
      if (!current || current.length === 0) return;

      const remaining = Array.from(current).filter((_, i) => i !== index);
      const dataTransfer = new DataTransfer();
      remaining.forEach((file) => dataTransfer.items.add(file));

      setValue('skillImages', dataTransfer.files, { shouldValidate: true });
    },
    [setValue, watch],
  );

  // Файлы через диалог
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      handleFiles(e.target.files);
    },
    [handleFiles],
  );

  // Drag and drop
  const [isDragActive, setIsDragActive] = useState(false);
  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragActive(false);
    handleFiles(event.dataTransfer.files);
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (!isDragActive) {
      setIsDragActive(true);
    }
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragActive(false);
  };

  const handleDropzoneClick = () => {
    document.getElementById('skill-images-upload')?.click();
  };

  return (
    <Styled.FormContainer>
      <Styled.FormWrapper>
        <Styled.FormBlock>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Input
              nameLabel="Название навыка"
              placeholder="Введите название навыка"
              error={!!errors.skillTitle}
              errorText={errors.skillTitle?.message}
              {...register('skillTitle')}
            />

            <Controller
              name="skillCategory"
              control={control}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <Select
                  nameLabel="Категория навыка"
                  placeholder="Выберите категорию"
                  error={!!error}
                  errorText={error?.message}
                  options={categoriesOptions}
                  value={value ?? undefined}
                  onChange={(val) => {
                    onChange(val);
                  }}
                />
              )}
            />

            <Controller
              name="skillSubCategory"
              control={control}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <Select
                  nameLabel="Подкатегория навыка"
                  placeholder="Выберите подкатегорию"
                  error={!!error}
                  errorText={error?.message}
                  options={subCategoriesOptions.map((sub) => ({
                    value: sub.id.toString(),
                    label: sub.name,
                  }))}
                  value={value ?? undefined}
                  onChange={(val) => {
                    if (typeof val === 'string') {
                      onChange(val);
                    } else if (Array.isArray(val) && val.length > 0) {
                      onChange(val[0]);
                    } else {
                      onChange('');
                    }
                  }}
                  disabled={!selectedCategoryId}
                />
              )}
            />

            <Textarea
              nameLabel="Описание"
              placeholder="Коротко опишите, чему можете научить"
              error={!!errors.skillDescription}
              errorText={errors.skillDescription?.message}
              rows={4}
              {...register('skillDescription')}
            />

            <div>
              <Styled.Dropzone
                $isDragActive={isDragActive}
                onClick={handleDropzoneClick}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
              >
                <Styled.DropzoneTitle>
                  Перетащите или выберите изображения навыка
                </Styled.DropzoneTitle>
                  <Styled.DropzoneAction>
                    <Styled.DropzoneActionIcon src={galleryAddIcon} alt="Выбрать изображения" />
                    <Styled.DropzoneActionText>Выбрать изображения</Styled.DropzoneActionText>
                </Styled.DropzoneAction>
              </Styled.Dropzone>

              <input
                id="skill-images-upload"
                type="file"
                accept="image/jpeg,image/png,image/webp"
                multiple
                onChange={handleInputChange}
                style={{ display: 'none' }}
              />

              {errors.skillImages && (
                <Styled.ErrorText>{errors.skillImages.message}</Styled.ErrorText>
              )}

              {files && files.length > 0 && previews.length === files.length && (
                <Styled.ImagesPreview>
                  {previews.map((src, index) => (
                    <Styled.PreviewImageWrapper key={`${src}-${index}`}>
                      <Styled.PreviewImage src={src} alt="Превью навыка" />
                      <Styled.RemoveImageButton
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          handleRemoveImage(index);
                        }}
                        aria-label="Удалить изображение"
                      >
                        ×
                      </Styled.RemoveImageButton>
                    </Styled.PreviewImageWrapper>
                  ))}
                </Styled.ImagesPreview>
              )}
            </div>

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
          <Styled.DecorativeImage src={schoolBoardImage} alt="Доска навыка" />
          <Styled.DecorativeTitle>Укажите, чем вы готовы поделиться</Styled.DecorativeTitle>
          <Styled.DecorativeText>
            Так другие люди смогут увидеть ваши предложения и предложить вам обмен!
          </Styled.DecorativeText>
        </Styled.DecorativeBlock>
      </Styled.FormWrapper>
    </Styled.FormContainer>
  );
};
