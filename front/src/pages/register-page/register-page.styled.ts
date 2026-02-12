import styled from 'styled-components';

export const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: var(--color-bg-main);
`;

export const StepProgressWrapper = styled.div`
  padding-bottom: 32px;
`;
