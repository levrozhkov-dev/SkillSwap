import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../../features/slice/categoriesSlice';
import likesReducer from '../../features/slice/likesSlice';
import citiesReducer from './../../features/slice/citiesSlice';
import loginReducer from './../../features/slice/loginSlice';
import usedFiltersReducer from './../../features/slice/usedFiltersSlice';
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    likes: likesReducer,
    cities: citiesReducer,
    login: loginReducer,
    usedFilters: usedFiltersReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Типизация хуков
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
