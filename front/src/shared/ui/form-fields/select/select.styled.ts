import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import { formFieldBaseCss, formFieldInteractiveCss } from '../shared.styled';

export const SelectContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const SelectTrigger = styled.button<{
  error?: boolean;
  $isOpen: boolean;
  disabled?: boolean;
  $multiple?: boolean;
}>`
  ${formFieldBaseCss}
  ${formFieldInteractiveCss}

  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  position: relative;

  border-bottom-left-radius: ${(p) => (p.$isOpen ? '0' : theme.radius.smd)};
  border-bottom-right-radius: ${(p) => (p.$isOpen ? '0' : theme.radius.smd)};
  border-bottom-color: ${(p) =>
    p.$isOpen ? 'transparent' : theme.colors.textSecondary};

  &:disabled {
    cursor: not-allowed;
  }

  &::after {
    display: ${(p) => (p.$isOpen ? 'static' : 'none')};
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    border-bottom: 1px solid
      color-mix(in srgb, ${theme.colors.textMain} 30%, transparent);
    border-radius: ${theme.radius.smd};
  }
`;

export const SelectValue = styled.span<{
  $hasValue: boolean;
  $isPlaceholder: boolean;
}>`
  flex: 1;
  text-align: left;
  letter-spacing: 0.02em;
  color: ${(props) =>
    props.$isPlaceholder ? theme.colors.textSecondary : theme.colors.textMain};
`;

export const SelectIcon = styled.span<{ $isOpen: boolean }>`
  transition: transform 0.2s ease;
  transform: ${(props) => (props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const SelectDropdown = styled.ul<{ $isOpen?: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1;

  background-color: ${theme.colors.bgCard};
  border: 1px solid ${theme.colors.textSecondary};
  border-top: none;

  border-radius: 0 0 ${theme.radius.smd} ${theme.radius.smd};
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.1);
  max-height: 300px;
  overflow-y: auto;
`;

export const SelectOption = styled.li<{
  $isSelected: boolean;
  $multiple?: boolean;
}>`
  display: flex;
  align-items: center;
  padding: ${(p) => (p.$multiple ? '0.4rem 0.6rem' : '0.4rem 1.25rem')};
  cursor: pointer;

  &:last-child {
    padding: ${(p) => (p.$multiple ? '0.4rem 0.6rem 0.6rem' : '0.4rem 1.25rem')};
  }

  &:hover:not([aria-selected='true']) {
    background-color: ${theme.colors.buttonHover};
  }

  &[aria-selected='true'] {
    background-color: ${theme.colors.bgCard};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.accent};
    background-color: ${theme.colors.buttonHover};
  }
`;

export const SelectCheckboxWrapper = styled.div`
  margin-right: ${theme.spacing.xs};
  display: flex;
  align-items: center;
`;

export const SelectOptionText = styled.span<{ $isSelected: boolean }>`
  flex: 1;
  color: ${(props) =>
    props.$isSelected ? theme.colors.buttonPressed : theme.colors.textMain};
`;
