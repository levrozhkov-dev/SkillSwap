import { type ReactNode } from 'react';
import * as Styled from './scrollableBox.styled';

interface ScrollableBoxProps {
  width: string;
  height: string;
  children: ReactNode;
}

export const ScrollableBox = (props: ScrollableBoxProps) => {
  const { width, height, children } = props;
  
  return (
    <Styled.Container width={width} height={height}>
      {children}
    </Styled.Container>
  );
};