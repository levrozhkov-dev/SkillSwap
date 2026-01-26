import React, { useState } from 'react';
import { Checkbox } from '../../../../shared/ui/checkbox/checkbox';
import * as Styled from './styled';
import { useAppDispatch } from '../../../../providers/store/store';
import { addFilter, deleteFilter } from '../../../../features/slice/usedFiltersSlice';
export interface City {
  id: number;
  name: string;
}

export interface CityCheckboxListProps {
  cities: City[];
  selectedCities: number[];
  onChange: (cities: number[]) => void;
}

export const CityCheckboxList: React.FC<CityCheckboxListProps> = ({
  cities,
  selectedCities,
  onChange,
}) => {
  const dispatch = useAppDispatch();
  const [showAll, setShowAll] = useState(false);
  const visibleCities = showAll ? cities : cities.slice(0, 5);

  const toggleCity = (cityId: number, checked: boolean, cityName: string) => {
    const next = checked
      ? [...selectedCities, cityId]
      : selectedCities.filter((id) => id !== cityId);
    checked
      ? dispatch(addFilter(cityName))
      : dispatch(deleteFilter(cityName));
    onChange(next);
  };

  return (
    <Styled.FilterOptions>
      {visibleCities.map((city) => (
        <Checkbox
          key={city.id}
          label={city.name}
          checked={selectedCities.includes(city.id)}
          onChange={(checked) => toggleCity(city.id, checked, city.name)}
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
