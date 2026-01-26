import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import type { TextareaProps } from './textarea';
import {
  formFieldBaseCss,
  formFieldInteractiveCss,
} from '../shared.styled';

export const TextareaField = styled.textarea<
  Pick<TextareaProps, 'error' | 'iconPosition'> & { hasIcon?: boolean }
>`
  ${formFieldBaseCss}
  ${formFieldInteractiveCss}

  &::placeholder {
    letter-spacing: 0.02em;
    color: ${theme.colors.textSecondary};
  }

  resize: vertical;
  min-height: 96px;
  background-color: ${theme.colors.bgCard};
`;
