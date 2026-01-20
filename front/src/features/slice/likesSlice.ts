import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface LikeItem {
  id: number;
  like: number;
  isLiked: boolean; // лайкнул ли текущий пользователь
}

interface LikesState {
  items: LikeItem[];
}

const initialState: LikesState = {
  items: [],
};

type SetLikePayload = {
  id: number;
  like: number;
  isLiked?: boolean;
};

type ToggleLikePayload = {
  id: number;
};

const likesSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    // Инициализация значения лайков
    setLike: (state, action: PayloadAction<SetLikePayload>) => {
      const { id, like, isLiked = false } = action.payload;

      const existing = state.items.find((x) => x.id === id);
      if (existing) {
        existing.like = like;
        existing.isLiked = isLiked;
      } else {
        state.items.push({ id, like, isLiked });
      }
    },

    // Переключение лайка
    toggleLike: (state, action: PayloadAction<ToggleLikePayload>) => {
      const item = state.items.find((x) => x.id === action.payload.id);

      if (!item) return;

      item.isLiked = !item.isLiked;
      item.like = Math.max(0, item.like + (item.isLiked ? 1 : -1));
    },
  },
});

export const { setLike, toggleLike } = likesSlice.actions;
export default likesSlice.reducer;
