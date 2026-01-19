import styled from 'styled-components';
import { theme } from '../../styles/theme';
import type { InputProps } from './input';

// Основной контейнер поля ввода
export const InputWrapper = styled.div<Pick<InputProps, 'error'>>`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
  width: 100%;

  /* Стили для состояния ошибки */

  ${(props) =>
    props.error &&
    `
    & ${InputLabel} {
      color: #BF3920;
    }
  `}
`;

// Метка над полем
export const InputLabel = styled.label`
  font-size: ${theme.font.size.md};
  line-height: 1.5rem;
  font-weight: 400;
  color: ${theme.colors.textMain};
`;

// Само поле ввода
export const InputField = styled.input<
  Pick<InputProps, 'error' | 'iconPosition'> & { hasIcon?: boolean }
>`
  padding: 0.75rem 1.25rem;
  color: ${theme.colors.textMain};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radius.md};
  font-size: ${theme.font.size.md};
  line-height: 1.4rem;
  width: 100%;
  outline: none;

  &::placeholder {
    color: ${theme.colors.textSecondary};
  }

  /* Состояние ошибки */
  ${(props) =>
    props.error &&
    `
    border-color: #BF3920;
  `}

  /* Увеличить отступ слева, только если:
     - iconPosition="left"
     - есть иконка (hasIcon=true)
  */
  ${(props) =>
    props.hasIcon &&
    props.iconPosition === 'left' &&
    `
    padding-left: calc(${theme.spacing.lg} + 1.5rem);
  `}

  /* Увеличить отступ справа, только если:
     - iconPosition="right"
     - есть иконка (hasIcon=true)
  */
  ${(props) =>
    props.hasIcon &&
    props.iconPosition === 'right' &&
    `
    padding-right: calc(${theme.spacing.lg} + 1.5rem);
  `}
`;

// Контейнер для поля + иконки
export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

// Иконка (левая или правая)
export const InputIcon = styled.span<Pick<InputProps, 'iconPosition'>>`
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;

  ${(props) =>
    props.iconPosition === 'left' &&
    `
    left: ${theme.spacing.lg};
  `}

  ${(props) =>
    props.iconPosition === 'right' &&
    `
    right: ${theme.spacing.lg};
  `}
`;

// Текст ошибки под полем
export const InputErrorText = styled.div`
  font-size: 0.75rem;
  line-height: 1rem;
  margin-top: -0.2rem;
  color: #bf3920;
`;
