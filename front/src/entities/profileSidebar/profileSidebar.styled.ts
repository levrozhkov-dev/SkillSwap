import styled from 'styled-components';
import { theme } from '../../shared/styles/theme';

export const Container = styled.div`
  width: 100%;
  max-width: 324px;
  padding: 40px;
  background: ${theme.colors.bgCard};
  border-radius: ${theme.radius.smd};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
  width: 100%;
`;

export const SidebarItem = styled.button<{
  $isActive: boolean;
  $underConstruction: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 12px 20px;

  font-family: var(--font-secondary);
  font-size: ${theme.font.size.md};
  font-weight: 400;
  line-height: 24px;
  color: ${theme.colors.textMain};

  background: ${(props) =>
    props.$isActive ? theme.colors.buttonHover : 'transparent'};
  border: none;
  border-radius: ${theme.radius.smd};
  cursor: ${(props) => (props.$underConstruction ? 'not-allowed' : 'pointer')};

  &:hover {
    background: ${theme.colors.buttonHover};
    color: ${theme.colors.textMain};
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
