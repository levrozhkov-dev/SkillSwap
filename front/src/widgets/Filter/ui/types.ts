// Тип состояния фильтра
export type FilterData = {
  gender: string | null;
  learn: string | null;
  categories: Record<number, number[]>;
  cities: number[];
};

export type FilterType = 'gender' | 'learn' | 'category' | 'subcategory' | 'city';

export interface FilterProps {
  title: string | null;
  type: 'radio' | 'checkbox';
  name: FilterType;
  options: string[];
}

export interface FilterBlockProps extends FilterProps {
  state: string | null;
}


