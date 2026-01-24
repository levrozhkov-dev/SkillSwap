import React, { useEffect } from 'react';
import * as S from './Modal.styled';
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

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  maxWidth = '556px',
  centered = false,
  footer,
}) => {
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
    <S.ModalOverlay onClick={handleOverlayClick}>
      <S.ModalContent $maxWidth={maxWidth}>
        {(title || showCloseButton) && (
          <S.ModalHeader>
            {title && <S.ModalTitle>{title}</S.ModalTitle>}
            {showCloseButton && (
              <S.CloseButton
                type="button"
                onClick={onClose}
                aria-label="Закрыть модальное окно"
              >
                <img src={crossIcon} alt="" aria-hidden="true" />
              </S.CloseButton>
            )}
          </S.ModalHeader>
        )}
        <S.ModalBody $centered={centered}>{children}</S.ModalBody>
        {footer && <S.ModalFooter>{footer}</S.ModalFooter>}
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

