/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import categoryReducer from '../slice/categoriesSlice';
import likesReducer from '../slice/likesSlice';
import { useCardLike } from './handleCardLike';
import type { ICategory } from '../slice/categoriesSlice';
import type { LikeItem } from '../slice/likesSlice';
import React from 'react';

// Тип для предзагруженного состояния
type PartialRootState = {
  category?: ICategory[];
  likes?: { items: LikeItem[] };
};

const createTestStore = (preloadedState: PartialRootState = {}) => {
  return configureStore({
    reducer: {
      category: categoryReducer,
      likes: likesReducer,
    },
    preloadedState: {
      category: [],
      likes: { items: [] },
      ...preloadedState,
    },
  });
};

const wrapper = ({
  children,
  store,
}: {
  children: React.ReactNode;
  store: any;
}) => <Provider store={store}>{children}</Provider>;

describe('Мемоизация useCardLike', () => {
  const mockLikes = {
    items: [
      { id: 1, like: 10, isLiked: true },
      { id: 2, like: 5, isLiked: false },
    ],
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  // === ТЕСТ 1: Стабильность ссылок ===
  describe('Стабильность ссылок на функции', () => {
    it('handleToggleLike имеет стабильную ссылку при одинаковых пропсах', () => {
      const store = createTestStore({ likes: mockLikes });

      const { result, rerender } = renderHook(() => useCardLike(1, 0), {
        wrapper: (props) => wrapper({ ...props, store }),
      });

      const firstReference = result.current.handleToggleLike;

      // Ререндерим 5 раз с теми же пропсами
      for (let i = 0; i < 5; i++) {
        rerender();
      }

      const secondReference = result.current.handleToggleLike;

      expect(firstReference).toBe(secondReference);
    });

    it('handleToggleLike меняет ссылку при изменении id', () => {
      const store = createTestStore({ likes: mockLikes });

      const { result, rerender } = renderHook(({ id }) => useCardLike(id, 0), {
        wrapper: (props) => wrapper({ ...props, store }),
        initialProps: { id: 1 },
      });

      const firstReference = result.current.handleToggleLike;

      // Меняем пропс id
      rerender({ id: 2 });

      const secondReference = result.current.handleToggleLike;

      expect(firstReference).not.toBe(secondReference);
    });
  });

  // === ТЕСТ 2: Проверка оптимизации ===
  describe('Проверка оптимизации useCardLike', () => {
    it('возвращает стабильные ссылки благодаря useMemo и useCallback', () => {
      const store = createTestStore({ likes: mockLikes });

      const { result, rerender } = renderHook(() => useCardLike(1, 0), {
        wrapper: (props) => wrapper({ ...props, store }),
      });

      const firstResult = result.current;

      rerender();
      rerender();

      const secondResult = result.current;

      expect(firstResult).toBe(secondResult);
      expect(firstResult.handleToggleLike).toBe(secondResult.handleToggleLike);
    });
  });

  // === ТЕСТ 3: Производительность ===
  describe('Производительность при частых ререндерах', () => {
    it('работает быстро при 1000+ последовательных вызовах', () => {
      const store = createTestStore({ likes: mockLikes });

      const startTime = performance.now();

      const { rerender } = renderHook(() => useCardLike(1, 0), {
        wrapper: (props) => wrapper({ ...props, store }),
      });

      for (let i = 0; i < 1000; i++) {
        rerender();
      }

      const endTime = performance.now();
      const totalTime = endTime - startTime;

      console.log(`Общее время 1000 ререндеров: ${totalTime.toFixed(2)}ms`);
      expect(totalTime).toBeLessThan(1000);
    });
  });

  // === ТЕСТ 4: Функциональность ===
  describe('Функциональность хука', () => {
    it('возвращает правильные данные для существующего элемента', () => {
      const store = createTestStore({ likes: mockLikes });

      const { result } = renderHook(() => useCardLike(1, 0), {
        wrapper: (props) => wrapper({ ...props, store }),
      });

      expect(result.current.liked).toBe(10);
      expect(result.current.isLiked).toBe(true);
      expect(typeof result.current.handleToggleLike).toBe('function');
    });
  });
});
