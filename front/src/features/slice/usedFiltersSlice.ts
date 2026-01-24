import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IUsedFilters {
  filters: string[];
}

const initialState: IUsedFilters = {
    filters: []
};

const usedFiltersSlice = createSlice({
  name: 'usedFilters',
  initialState,
  reducers: {
    addFilter: (state, action: PayloadAction<string>) => {
      if (!state.filters.includes(action.payload)) {
        state.filters.push(action.payload);
      }
    },
    deleteFilter: (state, action: PayloadAction<string>) => {
      state.filters = state.filters.filter(value => value !== action.payload);
    },
    clearFilters: (state) => {
      state.filters = [];
    }
  },
});

export const { addFilter, deleteFilter, clearFilters } = usedFiltersSlice.actions;

export default usedFiltersSlice.reducer;
