import React from 'react';
import { Modal, type ModalProps } from './Modal';
import { Button } from '../button';
import * as Styled from './NotificationModal.styled';

import BellIcon from '../../img/icon/notification.svg';

export interface NotificationModalProps extends Omit<
  ModalProps,
  'children' | 'title' | 'centered' | 'showCloseButton'
> {
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
      <Styled.NotificationIcon>
        <BellIcon />
      </Styled.NotificationIcon>
      <Styled.NotificationTitle>{title}</Styled.NotificationTitle>
      {description && (
        <Styled.NotificationDescription>
          {description}
        </Styled.NotificationDescription>
      )}
      <Styled.NotificationButtonWrapper>
        <Button variant="green" onClick={handleButtonClick}>
          {buttonText}
        </Button>
      </Styled.NotificationButtonWrapper>
    </Modal>
  );
};
