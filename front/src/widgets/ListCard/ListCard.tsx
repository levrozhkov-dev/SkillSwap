import { showAllPopular } from '../../features/showAllPopular/showAllPopular';
import type { User } from './types/user';
import { Button } from '../../shared/ui/button';
import { Card } from '../../entities/card';
import * as Styled from './ListCard.styles';
import iconbutton from '../../shared/img/icon/button-right.svg';

interface Props {
  users:
    | {
        popular: User[];
        new: User[];
        recommended: User[];
      }
    | User[];
}

export const ListCard = ({ users }: Props) => {
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
      <Styled.Wrapper>
        <Styled.Section>
          <Styled.SectionHeader>
            <Styled.Title>Популярное</Styled.Title>
            <Button
              variant="white"
              onClick={showAllPopular}
              children="Смотреть все"
              icon={<img src={iconbutton} />}
              iconPosition="right"
            />
          </Styled.SectionHeader>
          <Styled.CardsContainer>
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
          </Styled.CardsContainer>
        </Styled.Section>

        <Styled.Section>
          <Styled.SectionHeader>
            <Styled.Title>Новое</Styled.Title>
          </Styled.SectionHeader>
          <Styled.CardsContainer>
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
          </Styled.CardsContainer>
        </Styled.Section>

        <Styled.Section>
          <Styled.SectionHeader>
            <Styled.Title>Рекомендуем</Styled.Title>
          </Styled.SectionHeader>
          <Styled.CardsContainer>
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
          </Styled.CardsContainer>
        </Styled.Section>
      </Styled.Wrapper>
    );
  }

  // если пришел плоский массив (фильтр)
  return (
    <Styled.Wrapper>
      <Styled.Section>
        <Styled.CardsContainer>
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
        </Styled.CardsContainer>
      </Styled.Section>
    </Styled.Wrapper>
  );
};
