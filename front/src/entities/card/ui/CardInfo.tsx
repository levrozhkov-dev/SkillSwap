import React from 'react';
import * as Styled  from './Card.styled';
import { CardAge } from './CardAge';

interface CardInfoProps {
  city: string;
  age: number;
}

export const CardInfo: React.FC<CardInfoProps> = ({ city, age }) => {
  return (
    <Styled.Info>
      {city}, <CardAge age={age} />
    </Styled.Info>
  );
};
