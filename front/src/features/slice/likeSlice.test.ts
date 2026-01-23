import { describe, expect, it } from 'vitest';
import likesReducer, { setLike, toggleLike } from './likesSlice';

describe('likesSlice', () => {
  it('Проверяем setLike', () => {
    const state = { items: [] };
    const action = setLike({ id: 1, like: 10, isLiked: false });
    
    const result = likesReducer(state, action);
    
    expect(result.items).toHaveLength(1);
    expect(result.items[0]).toEqual({
      id: 1,
      like: 10,
      isLiked: false,
    });
  });

  it('Ставим лайк', () => {
    const state = {
      items: [{ id: 1, like: 10, isLiked: false }]
    };
    
    const action = toggleLike({ id: 1 });
    const result = likesReducer(state, action);
    
    expect(result.items[0].isLiked).toBe(true);
    expect(result.items[0].like).toBe(11); // Увеличилось
  });
});