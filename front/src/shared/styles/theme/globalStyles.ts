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

    /* цвет фона тега категории, если категорий больше 2 */
    --color-bg-tag: #E8ECF7;


    /* Основной шрифт приложения */
    --font-main: 'Jost', system-ui, sans-serif;

    /* Размеры шрифта */
    --font-zize-xs: 12px;
    --font-size-sm: 14px;
    --font-size-md: 16px;
    --font-size-lg: 20px;

    /*  Отступы */

    --space-xs: 4px;
    --space-sm: 8px;
    --space-smd: 12px;
    --space-md: 16px;
    --space-lg: 16px;

    /* Скругления */
    
    --radius-sm: 8px;
    --radius-md: 16px;
    --radius-lg: 24px;
  }

  :root[data-theme='dark'] {
    --color-bg-main: #12150f;
    --color-bg-card: #1a2114;
    --color-text-main: #eef3e7;
    --color-text-secondary: #b7c3aa;
    --color-accent: #8fbe56;
    --color-button-hover: #2a361f;
    --color-button-pressed: #abd27a;
    --color-bg-note: #3a331a;
    --color-bg-tag: #2a2f3e;
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
