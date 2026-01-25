import React from 'react';
import * as Styled from './Card.styled';

interface CardAvatarProps {
  src: string;
  alt?: string;
}

export const CardAvatar: React.FC<CardAvatarProps> = ({
  src,
  alt = 'User avatar',
}) => {
  return <Styled.Avatar src={src} alt={alt} />;
};
