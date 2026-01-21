import { showAllPopular } from '../../features/showAllPopular/showAllPopular';
import type { User } from './types/user';
import { Button } from '../../shared/ui/button';
import { Card } from '../../entities/card';
import * as S from './ListCard.styles';
import iconbutton from '../../shared/img/icon/button-right.svg';

interface Props {
  users:
    | {
        popular: User[];
        new: User[];
        recommended: User[];
      }
    | User[]; // для фильтра
}

export const ListCard = ({ users }: Props) => {
  // Определяем, пришел ли объект с блоками или плоский массив
  const isBlocks = (
    users: Props['users'],
  ): users is {
    popular: User[];
    new: User[];
    recommended: User[];
  } => {
    return !Array.isArray(users);
  };

  if (isBlocks(users)) {
    return (
      <S.Wrapper>
        <S.Section>
          <S.SectionHeader>
            <S.Title>Популярное</S.Title>
            <Button
              variant="white"
              onClick={showAllPopular}
              children="Смотреть все"
              icon={<img src={iconbutton} />}
              iconPosition="right"
            />
          </S.SectionHeader>
          <S.CardsContainer>
            {users.popular.map((user) => (
              <Card
                key={user.id}
                id={user.id}
                name={user.name}
                avatar={user.avatar}
                city={user.city}
                age={user.age}
                liked={user.liked}
                skills={[user.skills]}
                categories={user.categories}
              />
            ))}
          </S.CardsContainer>
        </S.Section>

        <S.Section>
          <S.SectionHeader>
            <S.Title>Новое</S.Title>
          </S.SectionHeader>
          <S.CardsContainer>
            {users.new.map((user) => (
              <Card
                key={user.id}
                id={user.id}
                name={user.name}
                avatar={user.avatar}
                city={user.city}
                age={user.age}
                liked={user.liked}
                skills={[user.skills]}
                categories={user.categories}
              />
            ))}
          </S.CardsContainer>
        </S.Section>

        <S.Section>
          <S.SectionHeader>
            <S.Title>Рекомендуем</S.Title>
          </S.SectionHeader>
          <S.CardsContainer>
            {users.recommended.map((user) => (
              <Card
                key={user.id}
                id={user.id}
                name={user.name}
                avatar={user.avatar}
                city={user.city}
                age={user.age}
                liked={user.liked}
                skills={[user.skills]}
                categories={user.categories}
              />
            ))}
          </S.CardsContainer>
        </S.Section>
      </S.Wrapper>
    );
  }

  // если пришел плоский массив (фильтр)
  return (
    <S.Wrapper>
      <S.Section>
        <S.CardsContainer>
          {users.map((user) => (
            <Card
              key={user.id}
              id={user.id}
              name={user.name}
              avatar={user.avatar}
              city={user.city}
              age={user.age}
              liked={user.liked}
              skills={[user.skills]}
              categories={user.categories}
            />
          ))}
        </S.CardsContainer>
      </S.Section>
    </S.Wrapper>
  );
};
