import styled from 'styled-components';

export const Label = styled.label`
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

// Нужно для длинных названий (например, Подготовка к экзаменам (IELTS, TOEFL) в категории Иностранные языки)
export const LabelText = styled.span`
  max-width: 230px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
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