import { useSelector } from 'react-redux';
import { FilterBlock } from '../../../entities/filter';
import type { FilterComponentProps } from './types';
import type { RootState } from '../../../providers/store/store';
import { CategoryCheckbox } from '../../../entities/filter/ui/checkboxList/checkboxList';
import { CityCheckboxList } from '../../../entities/filter/ui/checkboxList/cityList';
import * as Styled from './styled';
import { FilterHeader } from './FilterHeader';

export function Filter({
  mockFilterLearn,
  mockFilterGender,
  dataFilter,
  setDataFilter,
  clearDataFilter,
}: FilterComponentProps) {
  const categories = useSelector((state: RootState) => state.category.items);
  const citiesFromApi = useSelector((state: RootState) => state.cities);

  console.log(categories);
  return (
    <Styled.ContainerBlock>
      <FilterHeader clearState={clearDataFilter}/>
      <FilterBlock
        {...mockFilterLearn}
        state={dataFilter.learn}
        setState={(val) => setDataFilter({ ...dataFilter, learn: val })}
      />
      <Styled.FilterContainer>
        <Styled.FilterTitle>Навыки</Styled.FilterTitle>
        <Styled.FilterOptions>
          {categories.map((category) => (
          <CategoryCheckbox
            categoryData={category}
            selectedCategories={dataFilter.categories}
            setSelectedCategories={(newSelected) =>
              setDataFilter({ ...dataFilter, categories: newSelected })
            }
          />
        ))}
        </Styled.FilterOptions>
      </Styled.FilterContainer>

      <FilterBlock
        {...mockFilterGender}
        state={dataFilter.gender}
        setState={(val) => setDataFilter({ ...dataFilter, gender: val })}
      />
      <Styled.FilterContainer>
        <Styled.FilterTitle>Города</Styled.FilterTitle>
        <CityCheckboxList
          cities={citiesFromApi}
          selectedCities={dataFilter.cities}
          onChange={(cities) =>
            setDataFilter((prev) => ({
              ...prev,
              cities,
            }))
          }
        />
      </Styled.FilterContainer>
    </Styled.ContainerBlock>
  );
}
