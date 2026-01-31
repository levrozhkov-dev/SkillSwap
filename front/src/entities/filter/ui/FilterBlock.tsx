import * as Styled from './FilterBlock.styled';
import { RadioButton } from '../../../shared/ui/radioButton/RadioButton';
import type { FilterBlockProps } from '../../../widgets/Filter/ui/types';
import { useAppDispatch } from '../../../providers/store/store';
import { addRadioFilter, deleteRadioFilter } from '../../../features/slice/usedFiltersSlice';

export const FilterBlock: React.FC<FilterBlockProps> = ({
  title,
  name,
  options,
  state
}) => {
  const dispatch = useAppDispatch();
  const onChange = (value: string) => {
    options.map((option, index) => {
      if(option === value) {
        if(index !== 0) dispatch(addRadioFilter({filter: name, filterValue: option }));
      } else dispatch(deleteRadioFilter(option));
    });
  };

  const optionsProps = options.map((option, index) => ({
    text: option,
    name,
    value: option,
    checked: (index === 0 && state === null) ? true : state === option,
    onChange,
  }));

  return (
    <Styled.FilterContainer>
      {title !== null && <Styled.FilterTitle>{title}</Styled.FilterTitle>}
      <Styled.FilterOptions>
        {optionsProps.map((optionProps) => (
          <RadioButton key={optionProps.value} {...optionProps} />
        ))}
      </Styled.FilterOptions>
    </Styled.FilterContainer>
  );
};
