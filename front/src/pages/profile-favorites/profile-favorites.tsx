import { useEffect, useState } from 'react';
import { useAppSelector } from '../../providers/store/store';
import { Card, type CardProps } from '../../entities/card';
import { postFeature } from '../../shared/api/req/getFeature/postFeature';
import * as Styled from './ProfileFavoritesPage.styled';

export const ProfileFavoritesPage = () => {
  const favouriteIds = useAppSelector(
    (state) => state.login.user?.favourites ?? [],
  );

  const [cards, setCards] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!favouriteIds.length) {
      setCards([]);
      return;
    }

    setLoading(true);

    postFeature('/users/favourites', favouriteIds)
      .then((res) => {
        const normalized: CardProps[] = res.data.map((item: any) => ({
          id: item.id,
          name: item.name,
          avatar: item.avatar,
          city: item.city,
          age: item.age,
          liked: item.liked ?? 0,
          skills: Array.isArray(item.skills) ? item.skills : [],
          categories: Array.isArray(item.categories) ? item.categories : [],
        }));

        setCards(normalized);
      })
      .finally(() => setLoading(false));
  }, [favouriteIds]);

  if (!favouriteIds.length) {
    return <div>У вас пока нет избранных</div>;
  }

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <Styled.CardsWrapper>
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </Styled.CardsWrapper>
  );
};
