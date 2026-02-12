interface CardAgeProps {
  age: number;
}

export const CardAge = (props: CardAgeProps) => {
  const { age } = props;
  const getAgeWord = (age: number) => {
    if (age % 100 >= 11 && age % 100 <= 14) {
      return 'лет';
    }

    switch (age % 10) {
      case 1:
        return 'год';
      case 2:
      case 3:
      case 4:
        return 'года';
      default:
        return 'лет';
    }
  };

  return (
    <>
      {age} {getAgeWord(age)}
    </>
  );
};
