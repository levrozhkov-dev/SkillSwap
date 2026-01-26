import React from 'react';
import * as Styled from './Card.styled';

interface CardNameProps {
  name: string;
}

export const CardName: React.FC<CardNameProps> = ({ name }) => {
  return <Styled.Name>{name}</Styled.Name>;
};
