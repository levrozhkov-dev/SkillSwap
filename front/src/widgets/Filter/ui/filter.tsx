import { useSelector } from 'react-redux';
import { FilterBlock } from '../../../entities/filter';
import type { FilterComponentProps } from './types';
import type { RootState } from '../../../providers/store/store';
import { CategoryCheckbox } from '../../../entities/filter/ui/checkboxList/checkboxList';
export function Filter({
  mockFilterLearn,
  mockFilterGender,
  dataFilter,
  setDataFilter,
}: FilterComponentProps) {
  const categories = useSelector((state: RootState) => state.category);
  console.log(categories);
  return (
    <div>
      <FilterBlock
        {...mockFilterLearn}
        state={dataFilter.learn}
        setState={(val) => setDataFilter({ ...dataFilter, learn: val })}
      />
      <FilterBlock
        {...mockFilterGender}
        state={dataFilter.gender}
        setState={(val) => setDataFilter({ ...dataFilter, gender: val })}
      />
      {categories.map((category) => (
        <CategoryCheckbox
          categoryData={category}
          selectedCategories={dataFilter.categories}
          setSelectedCategories={(newSelected) =>
            setDataFilter({ ...dataFilter, categories: newSelected })
          }
        />
      ))}
    </div>
  );
}
