import React from 'react';
import { Modal, type ModalProps } from './Modal';
import { Button } from '../button';
import * as S from './SkillOfferModal.styled';
import editIcon from '../../img/icon/edit.svg';

export interface SkillImage {
  id: string;
  url: string;
  alt?: string;
}

export interface SkillOfferModalProps extends Omit<
  ModalProps,
  'children' | 'title'
> {
  skillName: string;
  category?: string;
  description: string;
  images?: SkillImage[];
  onEdit?: () => void;
  onDone?: () => void;
  editButtonText?: string;
  doneButtonText?: string;
}

export const SkillOfferModal: React.FC<SkillOfferModalProps> = ({
  isOpen,
  onClose,
  skillName,
  category,
  description,
  images = [],
  onEdit,
  onDone,
  editButtonText = 'Редактировать',
  doneButtonText = 'Готово',
  ...modalProps
}) => {
  const handleDone = () => {
    if (onDone) {
      onDone();
    } else {
      onClose();
    }
  };

  const mainImage = images[0];
  const additionalImages = images.slice(1, 4);
  const remainingCount = images.length - 4;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Ваше предложение"
      maxWidth="800px"
      footer={
        <S.ModalFooterContent>
          {onEdit && (
            <Button
              variant="white"
              onClick={onEdit}
              icon={<img src={editIcon} alt="" />}
              iconPosition="right"
            >
              {editButtonText}
            </Button>
          )}
          <Button variant="green" onClick={handleDone}>
            {doneButtonText}
          </Button>
        </S.ModalFooterContent>
      }
      {...modalProps}
    >
      <S.SkillOfferContent>
        <S.SkillOfferHeader>
          <S.SkillOfferSubtitle>
            Пожалуйста, проверьте и подтвердите правильность данных
          </S.SkillOfferSubtitle>
        </S.SkillOfferHeader>

        <S.SkillOfferMain>
          <S.SkillOfferText>
            <S.SkillOfferTitle>{skillName}</S.SkillOfferTitle>
            {category && (
              <S.SkillOfferCategory>{category}</S.SkillOfferCategory>
            )}
            <S.SkillOfferDescription>{description}</S.SkillOfferDescription>
          </S.SkillOfferText>

          {images.length > 0 && (
            <S.SkillOfferImages>
              {mainImage && (
                <S.MainImage>
                  <img src={mainImage.url} alt={mainImage.alt || skillName} />
                </S.MainImage>
              )}
              {additionalImages.length > 0 && (
                <S.AdditionalImages>
                  {additionalImages.map((image) => (
                    <S.AdditionalImage key={image.id}>
                      <img src={image.url} alt={image.alt || skillName} />
                    </S.AdditionalImage>
                  ))}
                  {remainingCount > 0 && (
                    <S.AdditionalImage $overlay>
                      <S.OverlayText>+{remainingCount}</S.OverlayText>
                    </S.AdditionalImage>
                  )}
                </S.AdditionalImages>
              )}
            </S.SkillOfferImages>
          )}
        </S.SkillOfferMain>
      </S.SkillOfferContent>
    </Modal>
  );
};
