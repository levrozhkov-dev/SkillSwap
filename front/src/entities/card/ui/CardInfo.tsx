import * as Styled  from './Card.styled';
import { CardAge } from './CardAge';

interface CardInfoProps {
  city: string;
  age: number;
}

export const CardInfo = (props: CardInfoProps) => {
  const { city, age } = props;
  
  return (
    <Styled.Info>
      {city}, <CardAge age={age} />
    </Styled.Info>
  );
};
