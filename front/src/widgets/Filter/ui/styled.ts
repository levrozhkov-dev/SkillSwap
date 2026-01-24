import styled from 'styled-components';

export const ContainerBlock = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  margin: 32px 24px 50px 36px;
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
`

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
  font-family: 'Roboto', 'sans-serif';
  border: none;
  align-items: center;
  background: transparent;
  cursor: pointer;
`;

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
