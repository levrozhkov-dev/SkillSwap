import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ISubCategory {
    id: number;
    name: string;
};

interface ICategory {
    id: number;
    title: string;
    icon: string;
    color: string;
    subCategories: ISubCategory[];
};

const initialState: ICategory[] = [];

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategories: (state, action: PayloadAction<ICategory[]>) => {
            return action.payload;
        }
    }
});

export const { setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;