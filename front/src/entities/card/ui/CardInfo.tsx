import React from 'react';
import { StyledInfo } from './Card.styled';
import { CardAge } from './CardAge';

interface CardInfoProps {
  city: string;
  age: number;
}

export const CardInfo: React.FC<CardInfoProps> = ({ city, age }) => {
  return (
    <StyledInfo>
      {city}, <CardAge age={age} />
    </StyledInfo>
  );
};
