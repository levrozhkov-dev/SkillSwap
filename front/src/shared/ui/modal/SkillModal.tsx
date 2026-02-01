import React from 'react';
import { Modal, type ModalProps } from './Modal';
import * as Styled from './SkillModal.styled';

export interface SkillModalProps extends Omit<ModalProps, 'children'> {
  skillName?: string;
  skillDescription?: string;
  children?: React.ReactNode;
}

export const SkillModal = (props: SkillModalProps) => {
  const { isOpen, onClose, skillName, skillDescription, children, title, ...modalProps } = props;
  
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title || skillName || 'Навык'}
      {...modalProps}
    >
      {children || (
        <Styled.SkillContent>
          {skillDescription && (
            <Styled.SkillDescription>
              {skillDescription}
            </Styled.SkillDescription>
          )}
          {!skillDescription && (
            <Styled.SkillDescription>
              Здесь будет отображаться информация о навыке после регистрации.
            </Styled.SkillDescription>
          )}
        </Styled.SkillContent>
      )}
    </Modal>
  );
};
