import * as Styled from './styled';
import cross from '../../../shared/img/icon/cross.svg';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../../providers/store/store';
import { clearFilters } from '../../../features/slice/usedFiltersSlice';
import type { FilterHeaderProps } from './types';



export const FilterHeader: React.FC<FilterHeaderProps> = ({
    clearState
}) => {
    const filterNumber = useSelector((state: RootState) => state.usedFilters.filters.length);
    const dispatch = useDispatch<AppDispatch>();
    const resetFilters = () => {
        dispatch(clearFilters());
        clearState();
    }

    return (
        <Styled.FilterHeader>
            {(filterNumber === 0) && <Styled.FilterHeaderTitle>Фильтры</Styled.FilterHeaderTitle>}
            {(filterNumber !== 0) && <Styled.FilterHeaderTitle>Фильтры ({filterNumber}) </Styled.FilterHeaderTitle>}
            <Styled.ResetButton onClick={resetFilters}>
                <span>Сбросить</span>
                <Styled.CrossContainer>
                    <Styled.CrossImg src={cross} alt="" aria-hidden="true" />
                </Styled.CrossContainer>
            </Styled.ResetButton>
        </Styled.FilterHeader>
    )
}