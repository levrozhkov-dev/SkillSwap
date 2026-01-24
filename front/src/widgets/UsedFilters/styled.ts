import styled from "styled-components";

export const UsedFiltersWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 44px;
  margin-bottom: 40px;
`;

export const UsedFilter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 12px 24px;
  justify-content: space-between;
  font-family: 'Roboto', 'sans-serif';
  font-size: var(--font-size-md, 16px);
  font-weight: 400;
  border-radius: 12px;
  background-color: var(--color-bg-card, #ffffff)
`

export const CrossContainer = styled.button`
  width: 24px;
  height: 24px;
  justify-content: center;
  align-content: center;
  color: var(--color-button-pressed);
  border: none;
  background: transparent;
  cursor: pointer;
`