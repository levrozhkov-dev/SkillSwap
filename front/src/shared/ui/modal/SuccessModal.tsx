import { Modal, type ModalProps } from './Modal';
import { Button } from '../button';
import * as Styled from './SuccessModal.styled';
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

export const SuccessModal = (props: SuccessModalProps) => {
  const { isOpen, onClose, title, description, buttonText = 'Готово', onButtonClick, ...modalProps } = props;
  
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
      <Styled.SuccessIcon>
        <img src={DoneIcon} alt="" aria-hidden="true" />
      </Styled.SuccessIcon>
      <Styled.SuccessTitle>{title}</Styled.SuccessTitle>
      {description && (
        <Styled.SuccessDescription>{description}</Styled.SuccessDescription>
      )}
      <Styled.SuccessButtonWrapper>
        <Button variant="green" onClick={handleButtonClick}>
          {buttonText}
        </Button>
      </Styled.SuccessButtonWrapper>
    </Modal>
  );
};
