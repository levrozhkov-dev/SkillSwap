import * as Styled from './styled';
import cross from '../../../shared/img/icon/cross-secondary.svg';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '../../../providers/store/store';
import { clearFilters, selectFilterNumber } from '../../../features/slice/usedFiltersSlice';

export const FilterHeader: React.FC = () => {
  const filterNumber = useSelector(selectFilterNumber);
  const dispatch = useDispatch<AppDispatch>();
  const resetFilters = () => {
    dispatch(clearFilters());
  };

  return (
    <Styled.FilterHeader>
      {filterNumber === 0 && (
        <Styled.FilterHeaderTitle>Фильтры</Styled.FilterHeaderTitle>
      )}
      {filterNumber !== 0 && (
        <Styled.FilterHeaderTitle>
          Фильтры ({filterNumber}){' '}
        </Styled.FilterHeaderTitle>
      )}
      <Styled.ResetButton onClick={resetFilters}>
        <Styled.ButtonText>Сбросить</Styled.ButtonText>
        <Styled.CrossContainer>
          <Styled.CrossImg src={cross} alt="" aria-hidden="true" />
        </Styled.CrossContainer>
      </Styled.ResetButton>
    </Styled.FilterHeader>
  );
};
