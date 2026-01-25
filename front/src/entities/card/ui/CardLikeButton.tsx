import React from 'react';
import { ButtonIcon } from '../../../shared/ui/buttonIcon/ButtonIcon';
import like from '../../../shared/img/icon/like.svg';
import likeActive from '../../../shared/img/icon/like-active.svg';
import * as Styled from './Card.styled';

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
    <Styled.LikeContainer>
      <Styled.LikeCount>{liked}</Styled.LikeCount>
      <Styled.LikeIconWrapper>
        <ButtonIcon iconSrc={iconSrc} onClick={onClick} />
      </Styled.LikeIconWrapper>
    </Styled.LikeContainer>
  );
};
