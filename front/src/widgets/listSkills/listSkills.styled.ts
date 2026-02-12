import styled from 'styled-components';
import { theme } from '../../shared/styles/theme';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  padding: 60px;
  overflow: auto;
  background: ${theme.colors.bgCard};
  border: 1px solid ${theme.colors.textSecondary};
  border-radius: 12px;
`;

export const SkillsEmpty = styled.div`
  padding: 10px 12px;
  color: ${theme.colors.textSecondary};
`;

export const SkillsCategoryContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  min-width: 488px;
`;

export const SkillsCategoryIcon = styled.span<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(p) => p.color};
  color: ${theme.colors.textMain};
`;

export const SkillsCategoryGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 12px;
  min-width: 0;
`;

export const SkillsCategory = styled.button`
  width: 100%;
  font: inherit;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-align: left;
  color: ${theme.colors.textMain};
  padding-left: ${theme.spacing.xs};
  border: none;
  background: transparent;
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

export const SkillsSubCategories = styled.button`
  width: 100%;
  font: inherit;
  font-weight: 400;
  font-size: ${theme.font.size.md};
  line-height: 24px;
  text-align: left;
  color: ${theme.colors.textMain};
  padding-left: ${theme.spacing.xs};
  border: none;
  background: transparent;
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
