import React from 'react';
import { Button } from '../../../shared/ui/button';
import * as Styled from './Card.styled';

interface CardButtonProps {
  onClick?: () => void;
}

export const CardButton: React.FC<CardButtonProps> = ({ onClick }) => {
  return (
    <Styled.CardButtonWrapper>
      <Button variant="green" onClick={onClick}>
        Подробнее
      </Button>
    </Styled.CardButtonWrapper>
  );
};
