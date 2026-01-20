import React from 'react';
import { Button } from '../../../shared/ui/button';
import { StyledCardButtonWrapper } from './Card.styled';

interface CardButtonProps {
  onClick?: () => void;
}

export const CardButton: React.FC<CardButtonProps> = ({ onClick }) => {
  return (
    <StyledCardButtonWrapper>
      <Button variant="green" onClick={onClick}>
        Подробнее
      </Button>
    </StyledCardButtonWrapper>
  );
};
