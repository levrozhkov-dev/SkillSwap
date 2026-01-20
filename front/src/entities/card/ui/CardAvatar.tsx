import React from 'react';
import { StyledAvatar } from './Card.styled';

interface CardAvatarProps {
  src: string;
  alt?: string;
}

export const CardAvatar: React.FC<CardAvatarProps> = ({
  src,
  alt = 'User avatar',
}) => {
  return <StyledAvatar src={src} alt={alt} />;
};
