import React from 'react';
import { Modal, type ModalProps } from './Modal';
import * as S from './SkillModal.styled';

export interface SkillModalProps extends Omit<ModalProps, 'children'> {
  skillName?: string;
  skillDescription?: string;
  children?: React.ReactNode;
}

export const SkillModal: React.FC<SkillModalProps> = ({
  isOpen,
  onClose,
  skillName,
  skillDescription,
  children,
  title,
  ...modalProps
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title || skillName || 'Навык'}
      {...modalProps}
    >
      {children || (
        <S.SkillContent>
          {skillDescription && (
            <S.SkillDescription>{skillDescription}</S.SkillDescription>
          )}
          {!skillDescription && (
            <S.SkillDescription>
              Здесь будет отображаться информация о навыке после регистрации.
            </S.SkillDescription>
          )}
        </S.SkillContent>
      )}
    </Modal>
  );
};
