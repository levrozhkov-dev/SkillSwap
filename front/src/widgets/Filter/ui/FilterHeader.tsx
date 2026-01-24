import * as Styled from './styled';
import cross from '../../../shared/img/icon/cross.svg';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../../providers/store/store';
import { clearFilters } from '../../../features/slice/usedFiltersSlice';
import type { FilterHeaderProps } from './types';



export const FilterHeader: React.FC<FilterHeaderProps> = ({
    clearState
}) => {
    const currentFilters = useSelector((state: RootState) => state.usedFilters.filters);
    const filterNumber = useSelector((state: RootState) => state.usedFilters.filters.length);
    console.log('currentFilters:', currentFilters);
    const dispatch = useDispatch<AppDispatch>();
    const resetFilters = () => {
        dispatch(clearFilters());
        clearState();
    }

    return (
        <Styled.FilterHeader>
            <Styled.FilterHeaderTitle>Фильтры ({filterNumber}) </Styled.FilterHeaderTitle>
            <Styled.ResetButton onClick={resetFilters}>
                <span>Сбросить</span>
                <Styled.CrossContainer>
                    <img src={cross} alt="" aria-hidden="true" />
                </Styled.CrossContainer>
            </Styled.ResetButton>
        </Styled.FilterHeader>
    )
}