import { type FC, type ReactNode } from 'react';
import * as S from './scrollableBox.styled';

interface ScrollableBoxProps {
  width: string;
  height: string;
  children: ReactNode;
}

export const ScrollableBox: FC<ScrollableBoxProps> = ({ width, height, children }) => {
  return (
    <S.Container width={width} height={height}>
      {children}
    </S.Container>
  );
};