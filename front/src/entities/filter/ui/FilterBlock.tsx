import {
  StyledFilterContainer,
  StyledFilterOptions,
  StyledFilterTitle,
} from './FilterBlock.styled';
import { RadioButton } from '../../../shared/ui/radioButton/RadioButton';
import type { FilterBlockProps } from '../../../widgets/Filter/ui/types';
import { useAppDispatch } from '../../../providers/store/store';
import { addFilter, deleteFilter } from '../../../features/slice/usedFiltersSlice';

export const FilterBlock: React.FC<FilterBlockProps> = ({
  title,
  name,
  options,
  state,
  setState,
}) => {
  const dispatch = useAppDispatch();
  const onChange = (value: string) => {
    options.map((option, index) => {
      if(option === value) {
        setState(value);
        if(index !== 0) dispatch(addFilter(value));
      } else dispatch(deleteFilter(option));
    })
  }

  const optionsProps = options.map((option, index) => ({
    text: option,
    name,
    value: option,
    checked: (index === 0 && state === null) ? true : state === option,
    onChange,
  }));

  return (
    <StyledFilterContainer>
      {title !== null && <StyledFilterTitle>{title}</StyledFilterTitle>}
      <StyledFilterOptions>
        {optionsProps.map((optionProps) => (
          <RadioButton key={optionProps.value} {...optionProps} />
        ))}
      </StyledFilterOptions>
    </StyledFilterContainer>
  );
};
