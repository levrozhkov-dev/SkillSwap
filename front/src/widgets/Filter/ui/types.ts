// Тип состояния фильтра
export type FilterData = {
  gender: string | null;
  learn: string | null;
  categories: Record<number, number[]>;
  cities: number[];
};

// Тип функции для обновления состояния фильтра
export type UpdateFilter = (
  updater: FilterData | ((prev: FilterData) => FilterData),
) => void;

export interface FilterProps {
  title: string | null;
  type: 'radio' | 'checkbox';
  name: string;
  options: string[];
}

// Пропсы отдельного блока фильтра (радио или чекбокс)
export interface FilterBlockProps extends FilterProps {
  state: string | null;
  setState: (val: string) => void;
}

// Пропсы компонента Filter
export interface FilterComponentProps {
  mockFilterLearn: FilterProps;
  mockFilterGender: FilterProps;
  dataFilter: FilterData;
  setDataFilter: UpdateFilter;
  clearDataFilter: () => void;
}

export interface FilterHeaderProps {
  clearState: () => void;
}


