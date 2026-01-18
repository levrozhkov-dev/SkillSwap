import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    /* Цвета */

    /* Основной фон приложения */
    --color-bg-main: #F9FAF7;

    /* Фон карточек, модалок, выпадающих блоков */
    --color-bg-card: #ffffff;

    /* Основной цвет текста */
    --color-text-main: #253017;

    /* Вторичный / вспомогательный текст */
    --color-text-secondary: #69735D;

    /* Акцентный цвет (Accent) */
    --color-accent: #ABD27A;

    /* Цвет кнопки при наведении (Button hover) */
    --color-button-hover: #DEEBC5;

    /* Цвет кнопки при нажатии (Text link, Button pressed) */
    --color-button-pressed: #508826;

    /* Фон заметок / подсветки */
    --color-bg-note: #EBE5C5;


    /* Основной шрифт приложения */
    --font-main: 'Jost', system-ui, sans-serif;

    /* Размеры шрифта */
    --font-size-sm: 14px;
    --font-size-md: 16px;
    --font-size-lg: 20px;

    /*  Отступы */

    --space-xs: 4px;
    --space-sm: 8px;
    --space-md: 16px;
    --space-lg: 24px;

    /* Скругления */
    
    --radius-sm: 8px;
    --radius-md: 16px;
    --radius-lg: 24px;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: var(--font-main);
    background-color: var(--color-bg-main);
    color: var(--color-text-main);
  }
`;
