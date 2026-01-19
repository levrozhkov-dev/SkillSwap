import styled from 'styled-components';

/* =========================
   BASE (добавлено)
========================= */
export const ButtonBase = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

/* =========================
   GREEN BUTTON (твой код)
========================= */
export const ButtonGreen = styled(ButtonBase)`
  font-family: var(--font-main);
  font-size: var(--font-size-md);
  padding: var(--space-sm) var(--space-md);
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-weight: 500;
  background-color: var(--color-accent);
  color: var(--color-text-main);

  &:hover {
    background-color: var(--color-button-hover);
  }

  &:active,
  &:focus {
    background-color: var(--color-button-pressed);
    color: #ffffff;
    outline: none;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background-color: var(--color-accent);

    &:hover {
      background-color: var(--color-accent);
    }

    &:active,
    &:focus {
      background-color: var(--color-accent);
      color: var(--color-text-main);
    }
  }
`;

/* =========================
   WHITE BUTTON (твой код)
========================= */
export const ButtonWhite = styled(ButtonBase)`
  font-family: var(--font-main);
  font-size: var(--font-size-md);
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-weight: 500;
  background-color: #ffffff;
  border: 1px solid var(--color-accent);
  color: var(--color-text-main);

  &:hover {
    background-color: var(--color-button-hover);
    border-color: var(--color-accent);
    color: var(--color-text-main);
  }

  &:active,
  &:focus {
    background-color: var(--color-button-pressed);
    border-color: var(--color-button-pressed);
    color: var(--color-text-main);
    outline: none;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background-color: #ffffff;
    border-color: var(--color-accent);
    color: var(--color-text-main);

    &:hover {
      background-color: #ffffff;
      border-color: var(--color-accent);
      color: var(--color-text-main);
    }

    &:active,
    &:focus {
      background-color: #ffffff;
      border-color: var(--color-accent);
      color: var(--color-text-main);
    }
  }
`;

/* =========================
   ICON WRAPPER (добавлено)
========================= */
export const IconWrapper = styled.span`
  display: flex;
  align-items: center;

  svg,
  img {
    width: 16px;
    height: 16px;
    display: block;
  }
`;
