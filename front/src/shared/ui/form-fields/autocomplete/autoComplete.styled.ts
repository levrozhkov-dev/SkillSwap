import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import { formFieldBaseCss, formFieldInteractiveCss } from '../shared.styled';

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Trigger = styled.button<{
  error?: boolean;
  $isOpen: boolean;
  disabled?: boolean;
}>`
  ${formFieldBaseCss}
  ${formFieldInteractiveCss}

  align-items: center;
  border-bottom-color: ${(p) =>
    p.$isOpen ? 'transparent' : theme.colors.textSecondary};
  border-bottom-left-radius: ${(p) => (p.$isOpen ? '0' : theme.radius.smd)};
  border-bottom-right-radius: ${(p) => (p.$isOpen ? '0' : theme.radius.smd)};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  position: relative;

  &:disabled {
    cursor: not-allowed;
  }

  &::after {
    border-bottom: 1px solid
      color-mix(in srgb, ${theme.colors.textMain} 30%, transparent);
    border-radius: ${theme.radius.smd};
    bottom: 0;
    content: '';
    display: ${(p) => (p.$isOpen ? 'static' : 'none')};
    left: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export const Value = styled.span<{
  $hasValue: boolean;
  $isPlaceholder: boolean;
}>`
  color: ${(props) =>
    props.$isPlaceholder ? theme.colors.textSecondary : theme.colors.textMain};
  flex: 1;
  letter-spacing: 0.02em;
  text-align: left;
`;

export const Icon = styled.span<{ $isOpen: boolean }>`
  transform: ${(props) => (props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.2s ease;
`;

export const Dropdown = styled.ul`
  background-color: ${theme.colors.bgCard};
  border: 1px solid ${theme.colors.textSecondary};
  border-radius: 0 0 ${theme.radius.smd} ${theme.radius.smd};
  border-top: none;
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.1);
  left: 0;
  max-height: 300px;
  overflow-y: auto;
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 1;
`;

export const Option = styled.li<{
  $isActive: boolean;
}>`
  align-items: center;
  background-color: ${(props) =>
    props.$isActive ? theme.colors.buttonHover : 'transparent'};
  display: flex;
  padding: 0.4rem 1.25rem;

  &:last-child {
    padding-bottom: 0.6rem;
  }

  &:hover:not([aria-selected='true']) {
    background-color: ${theme.colors.buttonHover};
  }

  &[aria-selected='true'] {
    background-color: ${theme.colors.bgCard};
  }

  &:focus-visible {
    background-color: ${theme.colors.buttonHover};
    outline: 2px solid ${theme.colors.accent};
  }
`;

export const OptionText = styled.span<{ $isSelected: boolean }>`
  color: ${(props) =>
    props.$isSelected ? theme.colors.buttonPressed : theme.colors.textMain};
  flex: 1;
`;

export const Input = styled.input`
  ${formFieldInteractiveCss}

  background: transparent;
  border: none;
  color: ${theme.colors.textMain};
  font-family: var(--font-main);
  font-size: 16px;
  letter-spacing: 0.02em;
  outline: none;
  width: 100%;

  &:focus {
    box-shadow: none;
  }
`;
