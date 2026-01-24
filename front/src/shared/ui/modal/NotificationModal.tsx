import React from 'react';
import { Modal, type ModalProps } from './Modal';
import { Button } from '../button';
import * as S from './NotificationModal.styled';

// Создаем простую SVG иконку колокольчика, так как её нет в проекте
const BellIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.73 21a2 2 0 0 1-3.46 0"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export interface NotificationModalProps extends Omit<ModalProps, 'children' | 'title' | 'centered' | 'showCloseButton'> {
  title: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export const NotificationModal: React.FC<NotificationModalProps> = ({
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
      <S.NotificationIcon>
        <BellIcon />
      </S.NotificationIcon>
      <S.NotificationTitle>{title}</S.NotificationTitle>
      {description && <S.NotificationDescription>{description}</S.NotificationDescription>}
      <S.NotificationButtonWrapper>
        <Button variant="green" onClick={handleButtonClick}>
          {buttonText}
        </Button>
      </S.NotificationButtonWrapper>
    </Modal>
  );
};

