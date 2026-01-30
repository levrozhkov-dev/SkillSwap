import type { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    bgMain: 'var(--color-bg-main)',
    bgCard: 'var(--color-bg-card)',
    bgNote: 'var(--color-bg-note)',
    bgLine: 'var( --color-bg-line)',

    textMain: 'var(--color-text-main)',
    textSecondary: 'var(--color-text-secondary)',

    accent: 'var(--color-accent)',
    buttonHover: 'var(--color-button-hover)',
    buttonPressed: 'var(--color-button-pressed)',
  },

  font: {
    family: 'var(--font-main)',
    size: {
      xs: 'var(--font-size-xs)',
      sm: 'var(--font-size-sm)',
      md: 'var(--font-size-md)',
      lg: 'var(--font-size-lg)',
      xl: 'var(--font-size-xl)',
    },
  },

  spacing: {
    xs: 'var(--space-xs)',
    sm: 'var(--space-sm)',
    smd: 'var(--space-smd)',
    smmd: 'var(--space-smmd)',
    md: 'var(--space-md)',
    lg: 'var(--space-lg)',
    xl: 'var(--space-xl)',
    xxl: 'var(--space-xxl)',
  },

  radius: {
    sm: 'var(--radius-sm)',
    smd: 'var(--radius-smd)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
  },
};
