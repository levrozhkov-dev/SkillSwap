import styled from 'styled-components';

export const SuccessIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid var(--color-text-main);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-md);

  img {
    width: 40px;
    height: 40px;
  }
`;

export const SuccessTitle = styled.h2`
  font-family: var(--font-main);
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--color-text-main);
  margin: 0 0 var(--space-sm) 0;
  text-align: center;
`;

export const SuccessDescription = styled.p`
  font-family: var(--font-main);
  font-size: var(--font-size-md);
  color: var(--color-text-main);
  margin: 0 0 var(--space-md) 0;
  text-align: center;
`;

export const SuccessButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
