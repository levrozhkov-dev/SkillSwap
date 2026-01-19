import type { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    bgMain: 'var(--color-bg-main)',
    bgCard: 'var(--color-bg-card)',
    bgNote: 'var(--color-bg-note)',

    textMain: 'var(--color-text-main)',
    textSecondary: 'var(--color-text-secondary)',

    accent: 'var(--color-accent)',
    buttonHover: 'var(--color-button-hover)',
    buttonPressed: 'var(--color-button-pressed)',
  },

  font: {
    family: 'var(--font-main)',
    size: {
      sm: 'var(--font-size-sm)',
      md: 'var(--font-size-md)',
      lg: 'var(--font-size-lg)',
    },
  },

  spacing: {
    xs: 'var(--space-xs)',
    sm: 'var(--space-sm)',
    md: 'var(--space-md)',
    lg: 'var(--space-lg)',
  },

  radius: {
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
  },
};
