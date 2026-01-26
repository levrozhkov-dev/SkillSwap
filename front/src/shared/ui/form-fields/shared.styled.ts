import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

// Общие интерфейсы для пропсов
export interface FormFieldErrorProps {
  error?: boolean;
}

export interface FormFieldIconPositionProps {
  iconPosition?: 'left' | 'right';
  hasIcon?: boolean;
}

/*
 Общая база для всех форм-полей:
 - типографика
 - паддинги
 - цвет текста
 - border/radius
 - placeholder
 - error
 - отступы под иконку left/right
*/
export const formFieldBaseCss = css<FormFieldErrorProps & FormFieldIconPositionProps>`
  padding: 0.75rem 1.25rem;
  color: ${theme.colors.textMain};
  border: 1px solid ${theme.colors.textSecondary};
  border-radius: ${theme.radius.smd};
  font-size: ${theme.font.size.md};
  line-height: 1.4rem;
  width: 100%;
  outline: none;
  font-family: ${theme.font.family};
  background-color: ${theme.colors.bgCard};

  /* Состояние ошибки */
  ${(props) =>
    props.error &&
    css`
      border-color: #bf3920;
    `}

  /* Увеличить отступ слева, если есть иконка слева */
  ${(props) =>
    props.hasIcon &&
    props.iconPosition === 'left' &&
    css`
      padding-left: calc(${theme.spacing.lg} + 1.85rem);
    `}

  /* Увеличить отступ справа, если есть иконка справа */
  ${(props) =>
    props.hasIcon &&
    props.iconPosition === 'right' &&
    css`
      padding-right: calc(${theme.spacing.lg} + 1.5rem);
    `}
`;

// Общие стили интерактивности (focus)
export const formFieldInteractiveCss = css`
  &:focus-visible {
    border-color: ${theme.colors.accent};
  }
`;

// Основной контейнер поля ввода
export const FormFieldWrapper = styled.div<FormFieldErrorProps>`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
  width: 100%;

  /* Стили для состояния ошибки (подсветка label) */
  ${(props) =>
    props.error &&
    css`
      & ${FormFieldLabel} {
        color: #bf3920;
      }
    `}
`;

// Метка над полем
export const FormFieldLabel = styled.label`
  font-size: ${theme.font.size.md};
  line-height: 1.5rem;
  font-weight: 400;
  color: ${theme.colors.textMain};
`;

// Контейнер для поля и иконки
export const FormFieldContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

// Иконка (левая или правая)
export const FormFieldIcon = styled.span<FormFieldIconPositionProps>`
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;

  ${(props) =>
    props.iconPosition === 'left' &&
    css`
      left: ${theme.spacing.lg};
    `}

  ${(props) =>
    props.iconPosition === 'right' &&
    css`
      right: ${theme.spacing.lg};
    `}
`;

// Текст ошибки под полем
export const FormFieldErrorText = styled.div`
  font-size: 0.75rem;
  line-height: 1rem;
  margin-top: -0.2rem;
  color: #bf3920;
`;
