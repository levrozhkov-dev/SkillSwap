import React from 'react';
import { StyledName } from './Card.styled';

interface CardNameProps {
  name: string;
}

export const CardName: React.FC<CardNameProps> = ({ name }) => {
  return <StyledName>{name}</StyledName>;
};
