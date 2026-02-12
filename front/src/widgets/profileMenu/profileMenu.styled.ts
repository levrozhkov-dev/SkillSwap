import styled from 'styled-components';
import { theme } from '../../shared/styles/theme';

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto;
  width: 100%;
  max-width: 260px;
  gap: 24px;
  padding: 40px 35px;
  overflow: auto;

  background: ${theme.colors.bgCard};
  border: 1px solid ${theme.colors.textSecondary};
  border-radius: ${theme.radius.md};
`;

export const MenuItem = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  width: 100%;

  padding-inline: 5px;
  margin: 0;

  font-family: var(--font-secondary);
  font-size: ${theme.font.size.md};
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: ${theme.colors.textMain};

  background: transparent;
  border: none;
  border-radius: ${theme.radius.sm};
  cursor: pointer;

  &:hover {
    background: ${theme.colors.buttonHover};
  }

  &:active {
    background: ${theme.colors.buttonPressed};
    color: ${theme.colors.bgCard};
  }

  &:focus {
    outline: 2px solid ${theme.colors.buttonHover};
    outline-offset: 2px;
  }
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;
