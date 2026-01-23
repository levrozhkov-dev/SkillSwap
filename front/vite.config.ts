import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  test: {
    globals: true, // Глобальные describe, test, expect (как в Jest)
    environment: 'happy-dom', // Или 'jsdom'
    setupFiles: './src/test/setup.ts', // Файл с настройками
    css: true, // Поддержка CSS в тестах
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'],
  },
});
