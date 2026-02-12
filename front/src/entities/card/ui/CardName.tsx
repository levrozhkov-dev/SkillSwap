import * as Styled from './Card.styled';

interface CardNameProps {
  name: string;
}

export const CardName = (props: CardNameProps) => {
  const { name } = props;

  return <Styled.Name>{name}</Styled.Name>;
};
