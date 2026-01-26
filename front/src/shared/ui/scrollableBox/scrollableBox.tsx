import { type FC, type ReactNode } from 'react';
import * as Styled from './scrollableBox.styled';

interface ScrollableBoxProps {
  width: string;
  height: string;
  children: ReactNode;
}

export const ScrollableBox: FC<ScrollableBoxProps> = ({ width, height, children }) => {
  return (
    <Styled.Container width={width} height={height}>
      {children}
    </Styled.Container>
  );
};