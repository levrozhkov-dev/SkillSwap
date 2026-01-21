import React from 'react';
import {
  StyledCard,
  StyledCardUserDescription,
  StyledCardContent,
} from './Card.styled';
import { CardAvatar } from './CardAvatar';
import { CardName } from './CardName';
import { CardInfo } from './CardInfo';
import { CardLikeButton } from './CardLikeButton';
import { CardButton } from './CardButton';
import { CardCategories } from './CardCategories';
import { useCardLike } from '../../../features/card-like';
import { useCardOpen } from '../../../features/card-open';
import type {
  UserSkills,
  CategorySelection,
} from '../../../widgets/ListCard/types/user';

export interface CardProps {
  id: number;
  name: string;
  avatar: string;
  city: string;
  age: number;
  liked: number;
  skills: UserSkills[];
  categories: CategorySelection[];
}

export const Card: React.FC<CardProps> = ({
  id,
  name,
  avatar,
  city,
  age,
  liked,
  skills,
  categories,
}) => {
  const {
    liked: currentLiked,
    isLiked,
    handleToggleLike,
  } = useCardLike(id, liked);
  const { handleOpen } = useCardOpen(id);

  return (
    <StyledCard>
      <StyledCardUserDescription>
        <CardAvatar src={avatar} alt={`${name} avatar`} />
        <StyledCardContent>
          <CardLikeButton
            liked={currentLiked}
            isLiked={isLiked}
            onClick={handleToggleLike}
          />
          <CardName name={name} />
          <CardInfo city={city} age={age} />
        </StyledCardContent>
      </StyledCardUserDescription>
      <CardCategories skills={skills} categories={categories} />
      <CardButton onClick={handleOpen} />
    </StyledCard>
  );
};
