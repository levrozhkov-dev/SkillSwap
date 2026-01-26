import * as Styled from "./styled";
import cross from '../../shared/img/icon/cross.svg';
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../providers/store/store";
import { deleteFilter } from "../../features/slice/usedFiltersSlice";
import type { FilterData, UpdateFilter } from "../Filter/ui/types";
import { mockFilterGender, mockFilterLearn } from "../../shared/mock/filters";

interface UsedFilterProps {
    setDataFilter: UpdateFilter;
    dataFilter: FilterData;
}

export const UsedFilters: React.FC<UsedFilterProps> = ({
    setDataFilter,
    dataFilter
}) => {
    const filtersList = useSelector((state: RootState) => state.usedFilters.filters);
    const categories = useSelector((state: RootState) => state.category.items);
    const citiesFromApi = useSelector((state: RootState) => state.cities);
    const dispatch = useDispatch<AppDispatch>();

    const onDelete = (value: string) => {
        dispatch(deleteFilter(value));
        if(mockFilterGender.options.includes(value)) {
            setDataFilter({...dataFilter, gender: null});
        }
        if(mockFilterLearn.options.includes(value)) {
            setDataFilter({...dataFilter, learn: null});
        }
        citiesFromApi.map((city) => {
            if(city.name === value) {
                const newCities = dataFilter.cities.filter(id => id !== city.id);
                setDataFilter({...dataFilter, cities: newCities});
            }
        });
        categories.map((category) => {
            category.subCategories.map((subCategory) => {
                if(subCategory.name === value) {
                    const newSubCategories = dataFilter.categories[category.id].filter(id => id !== subCategory.id);
                    setDataFilter({...dataFilter, cities: newSubCategories});
                }
            });
        });
    };

    return (
        <>
        {(filtersList.length !== 0) && 
            <Styled.UsedFiltersWrapper>
                {filtersList.map((value) => (
                    <Styled.UsedFilter>
                        <span>{value}</span>
                        <Styled.CrossContainer onClick={() => onDelete(value)}>
                            <img src={cross} alt="" aria-hidden="true" />
                        </Styled.CrossContainer>
                    </Styled.UsedFilter>
                ))}
            </Styled.UsedFiltersWrapper>
        }
        </>
        
    )
}
