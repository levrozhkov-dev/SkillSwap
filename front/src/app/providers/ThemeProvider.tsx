import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from '../../shared/styles/theme';

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
