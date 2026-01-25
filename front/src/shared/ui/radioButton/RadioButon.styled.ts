import styled from 'styled-components';

export const Label = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;

  padding: 2px;

  gap: var(--space-sm);

  cursor: pointer;

  line-height: 150%;
  letter-spacing: 0.02em;
  font-weight: 400;
`;

export const Input = styled.input`
  position: absolute;
  visibility: hidden;
`;

export const RadioIndicator = styled.div<{ checked: boolean }>`
  width: 20px;
  height: 20px;

  background-color: transparent;

  border: 2px solid
    ${({ checked }) =>
      checked ? 'var(--color-button-pressed)' : 'var(--color-text-main)'};
  border-radius: 50%;

  position: relative;

  &::after {
    content: '';

    position: absolute;

    top: 50%;
    left: 50%;

    width: 10px;
    height: 10px;

    background-color: var(--color-button-pressed);

    border-radius: 50%;

    transform: translate(-50%, -50%);
    opacity: ${({ checked }) => (checked ? 1 : 0)};
  }
`;
