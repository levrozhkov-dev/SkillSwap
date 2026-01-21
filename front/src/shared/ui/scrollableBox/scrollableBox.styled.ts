import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 5px;
  scrollbar-width: thin;
  scrollbar-color: ${theme.colors.accent} ${theme.colors.bgCard};

  /* Стили для WebKit (Chrome, Safari) */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${theme.colors.bgCard};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.accent};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.buttonHover};
  }
`;
