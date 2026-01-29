import styled from 'styled-components';

export const StepProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-smd);
`;

export const StepText = styled.h2`
  font-size: var(--font-size-xl);
  color: var(--color-text-main);
  font-weight: 500;
`;

export const StepSegments = styled.div`
  display: flex;
  gap: var(--space-md);
`;

export const StepSegment = styled.div<{ $active: boolean }>`
  width: 60px;
  height: 4px;
  border-radius: 2px;
  background-color: ${({ $active }) => 
    $active ? 'var(--color-accent)' : 'var(--color-text-secondary)'};
  opacity: ${({ $active }) => ($active ? 1 : 0.3)};
`;
