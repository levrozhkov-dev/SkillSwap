import { Button } from '../../../shared/ui/button';
import * as Styled from './Card.styled';

interface CardButtonProps {
  onClick?: () => void;
}

export const CardButton = (props: CardButtonProps) => {
  const { onClick } = props;

  return (
    <Styled.CardButtonWrapper>
      <Button variant="green" onClick={onClick}>
        Подробнее
      </Button>
    </Styled.CardButtonWrapper>
  );
};
