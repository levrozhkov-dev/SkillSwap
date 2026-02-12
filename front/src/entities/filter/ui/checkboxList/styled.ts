import styled from 'styled-components';

export { FilterOptions } from '../FilterBlock.styled';

export const CheckboxContainer = styled.div`
  width: 285px;
  position: relative;
  &::after {
    content: url('iconCheckbox.svg');
    position: absolute;
    right: 4px;
    top: 50%;
    transform: translateY(-50%) rotate(0deg);
    transition:
      transform 0.2s ease,
      opacity 0.2s ease;
    opacity: 0; /* по умолчанию скрыта */
    cursor: pointer;
  }

  &:hover::after {
    opacity: 1; /* показываем при hover */
  }

  &.open::after {
    transform: translateY(-50%) rotate(180deg); /* переворачиваем при открытом состоянии */
  }
`;

export const ButtonAll = styled.button`
  background: none;
  color: #508826;
  position: relative;
  border: 0px;
  cursor: pointer;
  padding-right: 15px;
  &::after {
    content: url('iconCheckbox.svg');
    position: absolute;
    right: -15px;
    top: 50%;
    transform: translateY(-50%) rotate(0deg);
    transition:
      transform 0.2s ease,
      opacity 0.2s ease;
    opacity: 0;
    cursor: pointer;
  }
  &:hover::after {
    opacity: 1;
  }

  &.open::after {
    transform: translateY(-50%) rotate(180deg); /* переворачиваем при открытом состоянии */
  }
`;

export const CheckboxListContainer = styled.div<{ isClosing?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: var(--space-smd, 12px);
  margin-left: 14px;
  margin-top: -8px;
  max-height: 1000px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${(props) =>
    props.isClosing &&
    `
    max-height: 0;
    opacity: 0;
  `}
`;