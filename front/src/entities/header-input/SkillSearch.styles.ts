import styled from 'styled-components';

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
`;

export const ResultsDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--color-bg-card);
  border: 1px solid var(--color-bg-line);
  border-radius: var(--radius-md);
  margin-top: 4px;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-height: 300px;
  overflow-y: auto;
`;

export const ResultItem = styled.div<{ $isFocused: boolean }>`
  padding: 12px 16px;
  cursor: pointer;
  border-bottom: 1px solid var(--color-bg-line);
  transition: background 0.2s, outline 0.2s;
  background-color: ${props => 
    props.$isFocused 
      ? 'var(--color-button-hover)' 
      : 'transparent'};
  outline: ${props => 
    props.$isFocused 
      ? '2px solid var(--color-accent)' 
      : 'none'};
  outline-offset: -2px;
  
  &:hover {
    background-color: var(--color-button-hover);
  }
  
  &:last-child {
    border-bottom: none;
  }
  
  &:focus {
    outline: 2px solid var(--color-accent);
    outline-offset: -2px;
  }
`;

export const ResultName = styled.div`
  font-weight: 500;
  color: var(--color-text-main);
  margin-bottom: 4px;
`;

export const ResultMeta = styled.div`
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const NoResultsMessage = styled.div`
  padding: 20px;
  text-align: center;
  color: var(--color-text-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const SearchIcon = styled.span`
  font-size: 24px;
  margin-bottom: 8px;
`;

export const NoResultsText = styled.div`
  font-weight: 500;
`;

export const NoResultsHint = styled.div`
  font-size: var(--font-size-sm);
`;

export const LoadingSpinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid var(--color-bg-line);
  border-top: 2px solid var(--color-accent);
  border-radius: 50%;
  animation: spin 1s linear infinite;
`;

export const LoadingContainer = styled.div`
  padding: 20px;
  text-align: center;
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;