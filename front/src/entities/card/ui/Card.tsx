import * as Styled from './Card.styled';
import { CardAvatar } from './CardAvatar';
import { CardName } from './CardName';
import { CardInfo } from './CardInfo';
import { CardLikeButton } from './CardLikeButton';
import { CardButton } from './CardButton';
import { CardCategories } from './CardCategories';
import { useCardOpen } from '../../../features/card-open';
import { useAppDispatch, useAppSelector } from '../../../providers/store/store';
import { useMemo } from 'react';
import type {
  UserSkills,
  CategorySelection,
} from '../../../widgets/ListCard/types/user';
import { toggleFavourite } from '../../../features/slice/loginSlice';

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

export const Card = (props: CardProps) => {
  const { id, name, avatar, city, age, liked, skills, categories } = props;

  const dispatch = useAppDispatch();
  const favourites = useAppSelector(
    (state) => state.login.user?.favourites ?? [],
  );

  // проверяем, есть ли эта карточка в избранном
  const isLiked = useMemo(() => favourites.includes(id), [favourites, id]);

  // локальный счётчик для мгновенного UI
  const currentLiked = isLiked ? liked + 1 : liked;

  const handleToggleLike = () => {
    // если есть в favourites — убираем, иначе добавляем
    dispatch(toggleFavourite(id));
  };

  const { handleOpen } = useCardOpen(id);

  return (
    <Styled.Card>
      <Styled.CardUserDescription>
        <CardAvatar src={avatar} alt={`${name} avatar`} />
        <Styled.CardContent>
          <CardLikeButton
            liked={currentLiked}
            isLiked={isLiked}
            onClick={handleToggleLike}
          />
          <CardName name={name} />
          <CardInfo city={city} age={age} />
        </Styled.CardContent>
      </Styled.CardUserDescription>
      <CardCategories skills={skills} categories={categories} />
      <CardButton onClick={handleOpen} />
    </Styled.Card>
  );
};
