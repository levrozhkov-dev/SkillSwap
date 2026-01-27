import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { GetCategories } from '../../shared/api/req/getCategories';
import axios from 'axios';

export interface ISubCategory {
  id: number;
  name: string;
}

export interface ICategory {
  id: number;
  title: string;
  icon: string;
  color: string;
  subCategories: ISubCategory[];
}

interface CategoriesState {
  items: ICategory[];
  loading: boolean;
  error: {
    message: string;
    status?: number;
  } | null;
}

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await GetCategories('categories');
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.message 
                      || error.message 
                      || 'Не удалось загрузить категории';
        
        return rejectWithValue({
          message,
          status: error.response?.status,
          timestamp: new Date().toISOString(),
        });
      }
      
      const message = 'Неизвестная ошибка';
      
      return rejectWithValue({
        message
      });
    }
  }
);


const initialState: CategoriesState = {
  items: [],
  loading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<ICategory[]>) => {
      state.items = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearCategories: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // Загрузка началась
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null; // Сбрасываем ошибку при новом запросе
      })
      // Загрузка успешна
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.error = null;
      })
      // Ошибка загрузки
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload as {
            message: string;
            status?: number;
          };
        } else {
          state.error = {
            message: action.error.message || 'Неизвестная ошибка',
          };
        }
      });
  },
});

export const { setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
