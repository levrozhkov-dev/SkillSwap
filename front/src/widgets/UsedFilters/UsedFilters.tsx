import * as Styled from "./styled";
import cross from '../../shared/img/icon/cross.svg';
import { useSelector } from "react-redux";
import { deleteRadioFilter, selectUsedFilters, toggleFilter } from "../../features/slice/usedFiltersSlice";
import { useAppDispatch } from "../../providers/store/store";

export const UsedFilters: React.FC = () => {
    const dispatch = useAppDispatch();
    const filtersList = useSelector(selectUsedFilters);
    const deleteFilter = (filterItem: string): void => {
        switch(filtersList[filterItem].length) {
            case 1:
                dispatch(deleteRadioFilter(filterItem));
                break;

            case 2:
                dispatch(toggleFilter({
                    filter: filtersList[filterItem][0], 
                    filterValue: filterItem, 
                    catId: filtersList[filterItem][1]
                }));
                break;
            case 3:
                dispatch(toggleFilter({
                    filter: filtersList[filterItem][0], 
                    filterValue: filterItem, 
                    catId: filtersList[filterItem][1],
                    subcatId: filtersList[filterItem][2]
                }));
                break;  
        }
    }

    return (
        <>
        {(Object.keys(filtersList).length !== 0) && 
            <Styled.UsedFiltersWrapper>
                {Object.keys(filtersList).map((value) => (
                    <Styled.UsedFilter>
                        <span>{value}</span>
                        <Styled.CrossContainer onClick={() => deleteFilter(value)}>
                            <img src={cross} alt="" aria-hidden="true" />
                        </Styled.CrossContainer>
                    </Styled.UsedFilter>
                ))}
            </Styled.UsedFiltersWrapper>
        }
        </>
        
    )
}
