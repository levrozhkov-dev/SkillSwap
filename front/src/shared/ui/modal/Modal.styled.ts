import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--space-md);
  overflow-y: auto;
`;

export const ModalContent = styled.div<{ $maxWidth: string }>`
  background-color: var(--color-bg-card);
  border-radius: var(--radius-md);
  width: 100%;
  max-width: ${(props) => props.$maxWidth};
  max-height: calc(100vh - var(--space-md) * 2);
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  position: relative;
  margin: auto;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-md) var(--space-md) var(--space-sm) var(--space-md);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  :root[data-theme='dark'] & {
    border-bottom-color: rgba(255, 255, 255, 0.1);
  }
`;

export const ModalTitle = styled.h2`
  font-family: var(--font-main);
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--color-text-main);
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-xs);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
  transition: color 0.2s ease-in-out;
  border-radius: var(--radius-sm);

  &:hover {
    color: var(--color-text-main);
    background-color: var(--color-button-hover);
  }

  &:active {
    background-color: var(--color-button-pressed);
  }

  img {
    width: 20px;
    height: 20px;
    display: block;
  }
`;

export const ModalBody = styled.div<{ $centered?: boolean }>`
  padding: var(--space-md);
  overflow-y: auto;
  flex: 1;
  ${(props) =>
    props.$centered &&
    `
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  `}
`;

export const ModalIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid var(--color-text-main);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-md);

  img,
  svg {
    width: 40px;
    height: 40px;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  gap: var(--space-sm);
  padding: var(--space-md);
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  :root[data-theme='dark'] & {
    border-top-color: rgba(255, 255, 255, 0.1);
  }
`;

