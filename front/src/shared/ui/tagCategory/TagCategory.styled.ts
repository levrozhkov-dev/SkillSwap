import styled from "styled-components";

interface TagCategoryProps {
  color?: string;
}

export const StyledTagCategory = styled.div<TagCategoryProps>`
  display: inline-flex;
  align-items: center;
  padding:  var(--space-sm) var(--space-smd);
  border-radius: var(--radius-md);
  background-color: ${({ color }) => color || 'var(--color-bg-tag)'}; /* Цвет фона по пропсу или дефолтный цвет (когда количество категорий >2) */
  color: var(--color-text-main);
  font-size: var(--font-zize-xs);
  font-weight: 400;
  white-space: nowrap;
`;
