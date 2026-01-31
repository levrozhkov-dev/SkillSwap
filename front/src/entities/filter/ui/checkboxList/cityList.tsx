import React, { useState } from 'react';
import { Checkbox } from '../../../../shared/ui/checkbox/checkbox';
import * as Styled from './styled';
import { useAppDispatch } from '../../../../providers/store/store';
import { toggleFilter } from '../../../../features/slice/usedFiltersSlice';
export interface City {
  id: number;
  name: string;
}

export interface CityCheckboxListProps {
  cities: City[];
  selectedCities: number[];
}

export const CityCheckboxList: React.FC<CityCheckboxListProps> = ({
  cities,
  selectedCities,
}) => {
  const dispatch = useAppDispatch();
  const [showAll, setShowAll] = useState(false);
  const visibleCities = showAll ? cities : cities.slice(0, 5);

  const toggleCity = (cityId: number, cityName: string) => {
    dispatch(toggleFilter({filter: 'city', filterValue: cityName, catId: cityId}))
  };

  return (
    <Styled.FilterOptions>
      {visibleCities.map((city) => (
        <Checkbox
          key={city.id}
          label={city.name}
          checked={selectedCities.includes(city.id)}
          isCategoryActive={false}
          onChange={() => toggleCity(city.id, city.name)}
        />
      ))}
      {cities.length > 5 && (
        <Styled.ButtonAll
          type="button"
          onClick={() => setShowAll((prev) => !prev)}
          className={showAll ? 'open' : ''}
        >
          {showAll ? 'Скрыть' : 'Все города'}
        </Styled.ButtonAll>
      )}
    </Styled.FilterOptions>
  );
};
