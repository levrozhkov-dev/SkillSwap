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

    /* Основной акцентный цвет (кнопки, активные элементы) */
    --color-primary: #b6d88a;

    /* Цвет рамок и разделителей */
    --color-border: #ABD27A;

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
