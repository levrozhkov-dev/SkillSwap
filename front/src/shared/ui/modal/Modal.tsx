import React, { useEffect } from 'react';
import * as Styled from './Modal.styled';
import crossIcon from '../../img/icon/cross.svg';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  maxWidth?: string;
  centered?: boolean;
  footer?: React.ReactNode;
}

export const Modal = (props: ModalProps) => {
  const { isOpen, onClose, children, title, showCloseButton = true , closeOnOverlayClick = true, closeOnEscape = true, maxWidth = '556px', centered = false, footer } = props;

  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, closeOnEscape, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Styled.ModalOverlay onClick={handleOverlayClick}>
      <Styled.ModalContent $maxWidth={maxWidth}>
        {(title || showCloseButton) && (
          <Styled.ModalHeader>
            {title && <Styled.ModalTitle>{title}</Styled.ModalTitle>}
            {showCloseButton && (
              <Styled.CloseButton
                type="button"
                onClick={onClose}
                aria-label="Закрыть модальное окно"
              >
                <img src={crossIcon} alt="" aria-hidden="true" />
              </Styled.CloseButton>
            )}
          </Styled.ModalHeader>
        )}
        <Styled.ModalBody $centered={centered}>{children}</Styled.ModalBody>
        {footer && <Styled.ModalFooter>{footer}</Styled.ModalFooter>}
      </Styled.ModalContent>
    </Styled.ModalOverlay>
  );
};
