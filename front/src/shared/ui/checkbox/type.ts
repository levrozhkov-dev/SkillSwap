export interface SubCategory {
  id: number;
  name: string;
}

export interface CategoryData {
  id: number;
  title: string;
  color: string;
  icon: string;
  subCategories: SubCategory[];
}

export interface CategoryCheckboxProps {
  categoryData: CategoryData;
  selectedCategories: Record<number, number[]>;
}
