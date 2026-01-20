import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../../features/slice/categoriesSlice';
import likesReducer from '../../features/slice/likesSlice';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    likes: likesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
