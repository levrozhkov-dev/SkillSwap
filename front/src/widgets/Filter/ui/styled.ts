import styled from 'styled-components';

export { FilterContainer, FilterOptions, FilterTitle } from '../../../entities/filter/ui/FilterBlock.styled';

export const ContainerBlock = styled.div`
  background-color: var(--color-bg-card);
  border-radius: 12px;
  margin: 32px 0 50px 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const FilterHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const FilterHeaderTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: var(--color-text-main);
`;

export const ResetButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  font-size: var(--font-size-md, 16px);
  font-weight: 400;
  color: var(--color-button-pressed);
  font-family: var(--font-secondary);
  border: none;
  align-items: center;
  background: transparent;
  cursor: pointer;
`;

export const CrossContainer = styled.button`
  width: 24px;
  height: 24px;
  line-height: 24px;
  justify-content: center;
  align-items: center;
  color: var(--color-button-pressed);
  border: none;
  background: transparent;
  cursor: pointer;
`

export const CrossImg = styled.img`
  vertical-align: middle;

`
