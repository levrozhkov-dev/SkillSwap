import styled from 'styled-components';

export const StyledFilterContainer = styled.div`
  width: 284px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledFilterTitle = styled.h3`
  font-size: var(--font-size-lg, 20px);
  font-weight: 500;
  color: var(--color-text-main);
`;

export const StyledFilterOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-smd, 12px);
  align-items: start;
`;
