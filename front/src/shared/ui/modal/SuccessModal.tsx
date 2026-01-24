import React from 'react';
import { Modal, type ModalProps } from './Modal';
import { Button } from '../button';
import * as S from './SuccessModal.styled';
import DoneIcon from '../../img/icon/Done.svg';

export interface SuccessModalProps extends Omit<
  ModalProps,
  'children' | 'title' | 'centered' | 'showCloseButton'
> {
  title: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  buttonText = 'Готово',
  onButtonClick,
  ...modalProps
}) => {
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      centered
      showCloseButton={false}
      {...modalProps}
    >
      <S.SuccessIcon>
        <img src={DoneIcon} alt="" aria-hidden="true" />
      </S.SuccessIcon>
      <S.SuccessTitle>{title}</S.SuccessTitle>
      {description && (
        <S.SuccessDescription>{description}</S.SuccessDescription>
      )}
      <S.SuccessButtonWrapper>
        <Button variant="green" onClick={handleButtonClick}>
          {buttonText}
        </Button>
      </S.SuccessButtonWrapper>
    </Modal>
  );
};
