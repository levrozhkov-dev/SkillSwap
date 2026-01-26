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

export const CheckboxIndicator = styled.div<{ checked: boolean }>`
`;

export const IconImage = styled.img`
  display: block;
  width: 20px;
  height: 20px;
`;