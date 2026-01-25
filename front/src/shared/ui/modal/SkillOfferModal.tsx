import React from 'react';
import { Modal, type ModalProps } from './Modal';
import { Button } from '../button';
import * as Styled from './SkillOfferModal.styled';
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
        <Styled.ModalFooterContent>
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
        </Styled.ModalFooterContent>
      }
      {...modalProps}
    >
      <Styled.SkillOfferContent>
        <Styled.SkillOfferHeader>
          <Styled.SkillOfferSubtitle>
            Пожалуйста, проверьте и подтвердите правильность данных
          </Styled.SkillOfferSubtitle>
        </Styled.SkillOfferHeader>

        <Styled.SkillOfferMain>
          <Styled.SkillOfferText>
            <Styled.SkillOfferTitle>{skillName}</Styled.SkillOfferTitle>
            {category && (
              <Styled.SkillOfferCategory>{category}</Styled.SkillOfferCategory>
            )}
            <Styled.SkillOfferDescription>
              {description}
            </Styled.SkillOfferDescription>
          </Styled.SkillOfferText>

          {images.length > 0 && (
            <Styled.SkillOfferImages>
              {mainImage && (
                <Styled.MainImage>
                  <img src={mainImage.url} alt={mainImage.alt || skillName} />
                </Styled.MainImage>
              )}
              {additionalImages.length > 0 && (
                <Styled.AdditionalImages>
                  {additionalImages.map((image) => (
                    <Styled.AdditionalImage key={image.id}>
                      <img src={image.url} alt={image.alt || skillName} />
                    </Styled.AdditionalImage>
                  ))}
                  {remainingCount > 0 && (
                    <Styled.AdditionalImage $overlay>
                      <Styled.OverlayText>+{remainingCount}</Styled.OverlayText>
                    </Styled.AdditionalImage>
                  )}
                </Styled.AdditionalImages>
              )}
            </Styled.SkillOfferImages>
          )}
        </Styled.SkillOfferMain>
      </Styled.SkillOfferContent>
    </Modal>
  );
};
