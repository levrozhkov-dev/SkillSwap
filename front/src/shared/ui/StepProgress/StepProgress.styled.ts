import styled from 'styled-components';

export const StepProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const StepText = styled.span`
  font-size: var(--font-size-md);
  color: var(--color-text-main);
  font-weight: 500;
`;

export const StepSegments = styled.div`
  display: flex;
  gap: 8px;
`;

export const StepSegment = styled.div<{ $active: boolean }>`
  width: 80px;
  height: 4px;
  border-radius: 2px;
  background-color: ${({ $active }) => 
    $active ? 'var(--color-accent)' : 'var(--color-text-secondary)'};
  opacity: ${({ $active }) => ($active ? 1 : 0.3)};
`;
