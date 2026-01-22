// Тип состояния фильтра
export type FilterData = {
  gender: string | null;
  learn: string | null;
  categories: Record<number, number[]>;
};

// Тип функции для обновления состояния фильтра
export type UpdateFilter = (newFilter: FilterData) => void;

// Пропсы отдельного блока фильтра (радио или чекбокс)
export interface FilterBlockProps {
  title: string | null;
  type: 'radio' | 'checkbox';
  name: string;
  options: string[];
  state: string | null;
  setState: (val: string) => void;
}

// Пропсы компонента Filter
export interface FilterComponentProps {
  mockFilterLearn: FilterBlockProps;
  mockFilterGender: FilterBlockProps;
  dataFilter: FilterData;
  setDataFilter: UpdateFilter;
}
