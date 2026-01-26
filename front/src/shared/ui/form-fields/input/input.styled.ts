import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import type { InputProps } from './input';
import { formFieldBaseCss } from '../../form-fields/shared.styled';

// Поле ввода
export const InputField = styled.input<
  Pick<InputProps, 'error' | 'iconPosition'> & { hasIcon?: boolean }
>`
  ${formFieldBaseCss}

  background-color: transparent;

  &::placeholder {
    letter-spacing: 0.02em;
    color: ${theme.colors.textSecondary};
  }
`;
