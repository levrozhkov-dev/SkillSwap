import { createSelector, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { FilterData, FilterType } from '../../widgets/Filter/ui/types';
import type { RootState } from '../../providers/store/store';

interface IUsedFilters {
  dataFilter: FilterData;
  filters: Record<string, [FilterType, number?, number?]>;
  isFilterActive: boolean;
}

const initialState: IUsedFilters = {
  dataFilter: {
    gender: null,
    learn: null,
    categories: {},
    cities: [],
  },
  filters: {},
  isFilterActive: false
};

interface IFilterPayload {
  filter: FilterType;
  filterValue: string;
  catId?:  number;
  subcatId?:  number;
  subcatList?: string[];
}

const usedFiltersSlice = createSlice({
  name: 'usedFilters',
  initialState,
  reducers: {
    addRadioFilter: (state, action: PayloadAction<IFilterPayload>) => {
      if (!Object.keys(state.filters).includes(action.payload.filterValue)) {
          state.filters[action.payload.filterValue] = [action.payload.filter];
        };
        state.dataFilter = {
          ...state.dataFilter,
          [action.payload.filter]: action.payload.filterValue
        };
      state.isFilterActive = true;
    },
    deleteRadioFilter: (state, action: PayloadAction<string>) => {
      const filterValue = action.payload;
      delete state.filters[filterValue];
      // по-разному обрабатываем удаление из dataFilter в зависимости от того какой фильтр
      if(filterValue === state.dataFilter.gender) {
        state.dataFilter.gender = null;
      } else if(filterValue === state.dataFilter.learn) {
        state.dataFilter.learn = null;
      } 
      state.isFilterActive = (Object.keys(state.filters).length > 0);
    },
    deleteCategory: (state, action: PayloadAction<string>) => {
      delete state.filters[action.payload];
    },
    toggleFilter: (state, action: PayloadAction<IFilterPayload>) => {
      const { filter, filterValue, catId, subcatId, subcatList } = action.payload;
      switch(filter) {
        case 'category': 
          if(catId) {
            if(state.dataFilter.categories[catId]) { //клик по категории которая активна (либо сама либо подкатегории)
              delete state.filters[filterValue];
              delete state.dataFilter.categories[catId];
              if(subcatList) {
                subcatList.map((subcat) => {
                  delete state.filters[subcat]; //если кликаем по активной категории, очищаем все подкатегории
                })
              }
            } else { //клик по неактивной категории
              state.dataFilter.categories[catId] = [];
              state.filters[filterValue] = ['category', catId];
            }
          }
          break;

          case 'subcategory':
            if(catId && subcatId) {
              if(!state.dataFilter.categories[catId] || !state.dataFilter.categories[catId].includes(subcatId)) { //если субкатегории нет то добавляем
                state.dataFilter.categories[catId].push(subcatId);
                state.filters[filterValue] = ['subcategory', catId, subcatId];
              } else { //иначе удаляем
                state.dataFilter.categories[catId] = state.dataFilter.categories[catId].filter(value => value !== subcatId);
                delete state.filters[filterValue];
              }
            }
            break;

          case 'city': 
            if(catId) {
              if(state.dataFilter.cities.includes(catId)) { //если город есть то удаляем
                state.dataFilter.cities = state.dataFilter.cities.filter(value => value !== catId);
                delete state.filters[filterValue];
              } else { //иначе добавляем
                state.dataFilter.cities.push(catId);
                state.filters[filterValue] = ['city', catId];
              }
            }
        }

      state.isFilterActive = (Object.keys(state.filters).length > 0);
    },
    clearFilters: (state) => {
      state.dataFilter = initialState.dataFilter;
      state.filters = initialState.filters;
      state.isFilterActive = false;
    }
  },
});

export const { addRadioFilter, deleteRadioFilter, deleteCategory, toggleFilter, clearFilters } = usedFiltersSlice.actions;

export default usedFiltersSlice.reducer;

export const selectUsedFilters = (state: RootState) => state.usedFilters.filters;
export const selectDataFilter = (state: RootState) => state.usedFilters.dataFilter;
export const selectIsFilterActive = (state: RootState) => state.usedFilters.isFilterActive;
export const selectFilterNumber = createSelector(
  [selectUsedFilters],
  (filters) => Object.keys(filters).length
)
