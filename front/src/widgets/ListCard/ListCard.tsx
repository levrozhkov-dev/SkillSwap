import { showAllPopular } from '../../features/showAllPopular/showAllPopular';
import type { User } from './types/user';
import { Button } from '../../shared/ui/button';
import * as S from './ListCard.styles';
import iconbutton from '../../shared/img/icon/button-right.svg';

interface Props {
  users: {
    popular: User[];
    new: User[];
    recommended: User[];
  };
}

export const ListCard = ({ users }: Props) => {
  console.log(users);

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
      </S.Section>

      <S.Section>
        <S.SectionHeader>
          <S.Title>Новое</S.Title>
        </S.SectionHeader>
      </S.Section>

      <S.Section>
        <S.SectionHeader>
          <S.Title>Рекомендуем</S.Title>
        </S.SectionHeader>
      </S.Section>
    </S.Wrapper>
  );
};
