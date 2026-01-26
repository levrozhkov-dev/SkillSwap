import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bgMain: string;
      bgCard: string;
      bgNote: string;
      bgLine: string;

      textMain: string;
      textSecondary: string;

      accent: string;
      buttonHover: string;
      buttonPressed: string;
    };

    font: {
      family: string;
      size: {
        sm: string;
        md: string;
        lg: string;
      };
    };

    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };

    radius: {
      sm: string;
      smd: string;
      md: string;
      lg: string;
    };
  }
}
