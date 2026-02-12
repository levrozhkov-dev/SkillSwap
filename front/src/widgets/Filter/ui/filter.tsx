import { useSelector } from 'react-redux';
import { FilterBlock } from '../../../entities/filter';
import type { RootState } from '../../../providers/store/store';
import { CategoryCheckbox } from '../../../entities/filter/ui/checkboxList/checkboxList';
import { CityCheckboxList } from '../../../entities/filter/ui/checkboxList/cityList';
import * as Styled from './styled';
import { FilterHeader } from './FilterHeader';
import { mockFilterGender, mockFilterLearn } from '../../../shared/mock/filters';
import { selectDataFilter } from '../../../features/slice/usedFiltersSlice';

export function Filter() {
  const categories = useSelector((state: RootState) => state.category.items);
  const citiesFromApi = useSelector((state: RootState) => state.cities);
  const dataFilter = useSelector(selectDataFilter);

  console.log(categories);
  return (
    <Styled.ContainerBlock>
      <FilterHeader />
      <FilterBlock
        {...mockFilterLearn}
        state={dataFilter.learn}
      />
      <Styled.FilterContainer>
        <Styled.FilterTitle>Навыки</Styled.FilterTitle>
        <Styled.FilterOptions>
          {categories.map((category) => (
          <CategoryCheckbox
            categoryData={category}
            selectedCategories={dataFilter.categories}
          />
        ))}
        </Styled.FilterOptions>
      </Styled.FilterContainer>

      <FilterBlock
        {...mockFilterGender}
        state={dataFilter.gender}
      />
      <Styled.FilterContainer>
        <Styled.FilterTitle>Города</Styled.FilterTitle>
        <CityCheckboxList
          cities={citiesFromApi}
          selectedCities={dataFilter.cities}
        />
      </Styled.FilterContainer>
    </Styled.ContainerBlock>
  );
}
