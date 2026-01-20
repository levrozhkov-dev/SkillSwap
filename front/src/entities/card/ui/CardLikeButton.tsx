import React from 'react';
import { ButtonIcon } from '../../../shared/ui/buttonIcon/ButtonIcon';
import like from '../../../shared/img/icon/like.svg';
import likeActive from '../../../shared/img/icon/like-active.svg';
import {
  StyledLikeContainer,
  StyledLikeCount,
  StyledLikeIconWrapper,
} from './Card.styled';

interface CardLikeButtonProps {
  liked: number;
  isLiked?: boolean;
  onClick?: () => void;
}

export const CardLikeButton: React.FC<CardLikeButtonProps> = ({
  liked,
  isLiked = false,
  onClick,
}) => {
  const iconSrc = isLiked ? likeActive : like;

  return (
    <StyledLikeContainer>
      <StyledLikeCount>{liked}</StyledLikeCount>
      <StyledLikeIconWrapper>
        <ButtonIcon iconSrc={iconSrc} onClick={onClick} />
      </StyledLikeIconWrapper>
    </StyledLikeContainer>
  );
};
