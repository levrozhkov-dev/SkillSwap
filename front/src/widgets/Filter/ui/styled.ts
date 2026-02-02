import styled from 'styled-components';
import { theme } from '../../../shared/styles/theme';

export {
  FilterContainer,
  FilterOptions,
  FilterTitle,
} from '../../../entities/filter/ui/FilterBlock.styled';

export const ContainerBlock = styled.div`
  background-color: ${theme.colors.bgCard};
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: fit-content;
`;

export const FilterHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
  align-items: center;
`;

export const FilterHeaderTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: ${theme.colors.textMain};
`;

export const ResetButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  font-size: ${theme.font.size.md || '16px'};
  font-weight: 400;
  color: ${theme.colors.buttonPressed};
  font-family: var(--font-secondary);
  border: none;
  background: transparent;
  cursor: pointer;
  letter-spacing: 0.02em;
  padding-left: 8px;

  &:focus-visible {
    outline: 1px solid ${theme.colors.buttonPressed};
    outline-offset: 1px;
    border-radius: ${theme.radius.sm};
  }
`;

export const ButtonText = styled.span`
  line-height: 24px;
  font-size: 16px;
`;

export const CrossContainer = styled.button`
  width: 24px;
  height: 24px;
  line-height: 24px;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.buttonPressed};
  border: none;
  background: transparent;
  cursor: pointer;

  &:focus-visible {
    outline: 1px solid ${theme.colors.buttonPressed};
    outline-offset: 1px;
    border-radius: ${theme.radius.sm};
  }
`;

export const CrossImg = styled.img`
  width: 10.61px;
  height: 10.61px;
  vertical-align: middle;
`;
