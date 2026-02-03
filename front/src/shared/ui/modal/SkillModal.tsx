import { Modal, type ModalProps } from './Modal';
import * as Styled from './SkillModal.styled';
import { OfferCarousel } from '../../../entities/offer/ui/OfferCarousel';
import editIcon from '../../img/icon/edit.svg';

export interface SkillModalProps extends Omit<ModalProps, 'children'> {
  skillName?: string;
  skillDescription?: string;
  subtitle?: string;
  categoryName?: string;
  subCategoryName?: string;
  images?: string[];
  onEdit?: () => void;
  onConfirm?: () => void;
  children?: React.ReactNode;
}

export const SkillModal = (props: SkillModalProps) => {
  const {
    isOpen,
    onClose,
    skillName,
    skillDescription,
    subtitle,
    categoryName,
    subCategoryName,
    images,
    onEdit,
    onConfirm,
    children,
    title,
    ...modalProps
  } = props;

  // Если переданы children — рендерим их (старое поведение)
  if (children) {
    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title={title || skillName || 'Навык'}
        {...modalProps}
      >
        {children}
      </Modal>
    );
  }

  // Новая структура для подтверждения регистрации
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      showCloseButton={false}
      maxWidth="1024px"
      {...modalProps}
    >
      <Styled.SkillContent>
        <Styled.HeaderSection>
          <Styled.Title>Ваше предложение</Styled.Title>
          {subtitle && <Styled.Subtitle>{subtitle}</Styled.Subtitle>}
        </Styled.HeaderSection>

        <Styled.ContentWrapper>
          <Styled.InfoSection>
            {skillName && <Styled.SkillName>{skillName}</Styled.SkillName>}
            
            {(categoryName || subCategoryName) && (
              <Styled.CategoryText>
                {categoryName}{categoryName && subCategoryName && ' / '}{subCategoryName}
              </Styled.CategoryText>
            )}

            {skillDescription && (
              <Styled.SkillDescription>{skillDescription}</Styled.SkillDescription>
            )}

            <Styled.ButtonsWrapper>
              {onEdit && (
                <Styled.ModalButton variant="white" onClick={onEdit}>
                  Редактировать
                  <Styled.ButtonIcon src={editIcon} alt="" />
                </Styled.ModalButton>
              )}
              {onConfirm && (
                <Styled.ModalButton variant="green" onClick={onConfirm}>
                  Готово
                </Styled.ModalButton>
              )}
            </Styled.ButtonsWrapper>
          </Styled.InfoSection>

          {images && images.length > 0 && (
            <Styled.GallerySection>
              <Styled.CarouselWrapper>
                <OfferCarousel images={images} />
              </Styled.CarouselWrapper>
              <Styled.ThumbnailsColumn>
                {images.slice(1, 4).map((image, index) => (
                  <Styled.Thumbnail key={index} src={image} alt={`Миниатюра ${index + 1}`} />
                ))}
              </Styled.ThumbnailsColumn>
            </Styled.GallerySection>
          )}
        </Styled.ContentWrapper>
      </Styled.SkillContent>
    </Modal>
  );
};
